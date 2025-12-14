import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <>
        <footer>
            <div className="para">
                <p>© 2025 All rights reserved | <a href="https://diemuodeke-victory.netlify.app/">Created by VicRuro</a> </p>
            </div>
            <div className="icon">
                <a href="https://x.com/Vicruro" target='blank'><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/diemuodeke-victory-a7a15523a/" target='blank'><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Victoryruro" target='blank'><i className="fab fa-github"></i></a>
                <a href="mailto:vicdiemuodeke@gmail.com" target='blank'><i className="fa-solid fa-envelope"></i> </a>
            </div>
            
        </footer>
    </>
  )
}

export default footer