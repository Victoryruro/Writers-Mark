import React from 'react'
import Slides from './footer/slides/Slides'
import Card from './card.jsx'
import Footer from './footer/footer.jsx'
import Cardtwo from './Cardtwo.jsx'
import blogcover from '../../assets/images/blogCover.jpg'
import qrCode from '../../assets/images/qrcode.png'




const bloghome = () => {
  const data =[
    {
        id:1,
        titleOne:"A New Chapter in Digital Expression",
        titleTwo:"A Fresh Start for Writers and Curious Minds",
        paraOne:"Welcome to the beginning of my storytelling journey.",
        paraTwo:"Embracing Creativity and Authenticity",
        name:"Daniel Michaels",
        subTitle:"Founder, The Write Space",
        qrCode:qrCode,
        cover:blogcover
    }
  ]  
  return (
    <div>
        <section className='home'>
            <div className="left-content">
                {
                    data.map((item) =>{
                        return(
                            <div className="content">
                                <div className="logo">
                                    <h1>WM</h1>
                                </div>
                                <div className="home-img">
                                    <img src={item.cover} alt="homeImg"  height={'100%'} loading='lazy' />
                                </div>
                                <div className="text">
                                    <h1>{item.titleOne}</h1>
                                    <p>{item.paraOne}</p>
                                    <span>{item.name}</span>
                                </div>
                                <div className="text text2">
                                    <h1>{item.titleTwo}</h1>
                                    <p>{item.paraTwo}</p>
                                    <span>{item.subTitle}</span>
                                </div>
                                <div className="qr-code">
                                    <img src={item.qrCode} alt="qrCode" height={'130px'} loading='lazy' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="right-content">
                <Slides/>
                <Card/>
                <Cardtwo/>
                <Footer/>
            </div>

        </section>
    </div>
  )
}

export default bloghome