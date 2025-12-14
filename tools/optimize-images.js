const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const srcDir = path.join(__dirname, '..', 'src', 'assets', 'images')
const outDir = path.join(__dirname, '..', 'src', 'assets', 'optimized')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const sizes = [1200, 800, 400]

async function processFile(file) {
  const inputPath = path.join(srcDir, file)
  const ext = path.extname(file).toLowerCase()
  const name = path.basename(file, ext)

  // skip hidden files
  if (name.startsWith('.')) return

  try {
    const image = sharp(inputPath)
    const metadata = await image.metadata()

    for (const w of sizes) {
      if (metadata.width && metadata.width < w) {
        // if original is smaller than target size, still create a copy at original size once
      }
      const outJpg = path.join(outDir, `${name}-${w}.jpg`)
      const outWebp = path.join(outDir, `${name}-${w}.webp`)

      await image
        .resize({ width: w, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(outJpg)

      await image
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outWebp)

      console.log(`Written: ${outJpg}`)
      console.log(`Written: ${outWebp}`)
    }

    // also write a small thumbnail (200px)
    const thumbJpg = path.join(outDir, `${name}-200.jpg`)
    const thumbWebp = path.join(outDir, `${name}-200.webp`)

    await image
      .resize({ width: 200, withoutEnlargement: true })
      .jpeg({ quality: 70, mozjpeg: true })
      .toFile(thumbJpg)

    await image
      .resize({ width: 200, withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(thumbWebp)

    console.log(`Written: ${thumbJpg}`)
    console.log(`Written: ${thumbWebp}`)
  } catch (err) {
    console.error(`Failed to process ${file}:`, err.message)
  }
}

async function run() {
  const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f))
  if (files.length === 0) {
    console.log('No images found in', srcDir)
    return
  }
  for (const file of files) {
    // process sequentially to limit CPU spikes
    // eslint-disable-next-line no-await-in-loop
    await processFile(file)
  }
  console.log('Image optimization finished. Output folder:', outDir)
}

run()
