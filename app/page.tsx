"use client"

import "./home.css";
import Websiteinfo from '../components/websiteinfo/website-info';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";


export default function Home() {

  const products = [
    { id: 1,
      name: "twitter 2009 full access",
      img: "https://i.pinimg.com/736x/5e/58/31/5e5831368f4778eb68310ff6eef756a3.jpg",
      price: 20,      
      slodout: 200,
      stock: 2220,
      description: "🔥 Twitter Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 – Aged & Trusted📝 3 Posts ... "
    },
    {
      id: 2,
      name: "youtube premuime 1 year  full access",
      img: "https://i.pinimg.com/736x/5b/c5/76/5bc576df2d961a57554f4d6621da9127.jpg",
      price: 15,
      slodout: 43,
      stock: 120,
      description: "🔥 youtube premuime for Sale! 🔥✅ Verified with Email (Included in the set)..."
    },
    {
      id:3,
      name: "reddit accounts 2009 full access",
      img: "https://i.pinimg.com/736x/b5/6a/48/b56a488ed215d206d32a855300366ee1.jpg",
      price: 20,
      slodout: 200,
      stock: 2220,  
      description: "🔥 reddit Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 – Aged & Trusted📝 3 Posts – Clean & Ready for Use🚀 ..."
    },
    {
      id: 4,
      name: "spotify premuime 1 year  full access",
      img: "https://i.pinimg.com/736x/b6/8d/37/b68d37447bde9b019e9f0952ff30c4b7.jpg",
      price: 20,
      slodout: 200,
      stock: 2220,
      description: "🔥 spotify premuime for Sale! 🔥✅  1 year warranty ✅ , reselling, or personal use! DM for details. 💬"
    },
    {
      id: 5,
      name: "strong facebook accounts",
      img: "https://i.pinimg.com/736x/39/f3/c1/39f3c13f07d83b9dbd4cdd533ec7a2d5.jpg",
      price: 20,
      slodout: 200,
      stock: 2220,
      description: "🔥 facebook Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 ..."
    }
  ]
  

  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["🚀 1#   digital products market ", "Enjoy your visit! ❤️ "],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);


  return (
    <div className="home-page ">
{/* ========navbar just for test ====================== */}

      



        
       





      {/* hero section */}
      <div className="into-website">
        <h1 className=""> <span ref={typedRef}>   </span> </h1>
        <p>shop now +1000 trend products from one store   pay
             get product instant  
              Our store offers a wide range of digital products to cater to all your
               needs. From the latest software and applications to eBooks and 
               online courses, we have everything you need to stay ahead in 
               the digital world.</p>

        
        <div className="btns flex items-center gap-2">
        <button>Discover Products</button>
        <button className="partner">Become Partner</button>
        </div>
      </div>




<div className="swipers">
{/* <Swiper
      slidesPerView={2}
      spaceBetween={10}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      {["/images/logo.png", "/images/logo.png", "/images/logo.png", "/images/logo.png", "/images/logo.png"].map((item, i) => (
        <SwiperSlide key={i}>
          <div className="min-w-[200px] h-[150px] bg-green-500 rounded-lg flex items-center justify-center text-white text-lg">
            
            <img src={item} className="h-full w-full" alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper> */}
</div>
              {/* info about  website  */}
              <Websiteinfo/>
              {/* dislpay our products  */}
      <section className="display-produtcs">

        {/* ==============each product======================  */}

        {products.map((product,index) => (
          
             <article  key={index}  className="prodcut-card">
          <div className="card-img"><img src={product.img} alt="" /></div>
          <div className="card-body">
            <h2>{product.name}  </h2>
            <div className="pro-info">
              <span className='text-green-500'>price: {product.price}</span>
              <span>slodout: {product.slodout}pcs</span>
              <span>stock:{product.stock}pcs</span>
            </div>
            <p>{product.description}...</p>
            <Link href={`/productDetails/${product.id}`}><p>order now </p><ShoppingCart size={"20"}/></Link>
          </div>

        </article>
          )
         )
}
        
        

        
      </section>
    
    </div>
  )
}

