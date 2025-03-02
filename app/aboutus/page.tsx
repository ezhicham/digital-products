import React from 'react'
import './aboutus.css'
import Websiteinfo from '../../components/websiteinfo/website-info'
function page() {
  return (
    <div className='about-us-page'>
    
  <div className="about-us-intro">
    <div className="about-us-text">

    <h1>about us:</h1>
      <p>
        Welcome to <a className='text-blue-400 ' href="darkar.online ">darkar.online </a> , your go-to destination for premium digital products and online accounts. We specialize in providing high-quality Instagram and Facebook accounts, Canva templates, Notion templates, games, and a variety of other digital assets to help you grow your online presence and enhance your workflow.
       Our mission is to deliver reliable and affordable digital products that cater to creators, businesses, and individuals looking for efficiency and convenience. Whether you're looking for a ready-made social media account, customizable templates, or digital tools to streamline your projects, we’ve got you covered.
      At darkar.online, we prioritize security, quality, and customer satisfaction. Shop with confidence and take your digital experience to the next level!</p>
    </div>

    <div className="about-img">
      <img src="http://i.pinimg.com/736x/72/bd/87/72bd8762b51694e532a0a7dabcacfa42.jpg" alt="" />
    </div>
    </div>


          {/* website info  */}
          <Websiteinfo/>


{/* features of our website  */}
    <div className="about-us-features">
      
      <div className="about-us-features-container">
        {/*============ feature============ */}
        <div className="feature">
          <img src="/images/premium.png" alt="" />
          <h2 className='text-white'>premium quality</h2>
          <p className='text-gray-300'>Our digital products are carefully curated to meet the highest standards of quality and performance. </p>   
          </div>


          {/*============ feature============ */}
          <div className="feature">
          <img src="/images/atm-card.png" alt="" />
          <h2 className='text-white'>instant delivery</h2>
          <p className='text-gray-300'>Get your digital products instantly after purchase and start using them right away. </p> 
      
              </div>

              {/*============ feature============ */}
              <div className="feature">
          <img src="/images/fast-delivery.png" alt="" />
          <h2 className='text-white'>secure transactions</h2>
          <p className='text-gray-300'>Shop with confidence knowing that your transactions are secure and your data is protected. </p>  
          </div>

          </div>

         </div>
    </div>
  )
}

export default page
