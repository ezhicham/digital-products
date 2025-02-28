


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBagShopping, faCartShopping, faStore, faTruckFast,  } from '@fortawesome/free-solid-svg-icons';
import "./home.css";
import { id } from 'date-fns/locale';
import Link from 'next/link';
export default function Home() {

  const products = [
    { id: 1,
      name: "twitter 2009 full access",
      img: "https://i.pinimg.com/736x/5e/58/31/5e5831368f4778eb68310ff6eef756a3.jpg",
      price: 20,      
      slodout: 200,
      stock: 2220,
      description: "🔥 Twitter Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 – Aged & Trusted📝 3 Posts – Clean & Ready for Use🚀 Perfect for branding, reselling, or personal use! DM for details 💬"
    },
    {
      id: 2,
      name: "youtube premuime 1 year  full access",
      img: "https://i.pinimg.com/736x/5b/c5/76/5bc576df2d961a57554f4d6621da9127.jpg",
      price: 15,
      slodout: 43,
      stock: 120,
      description: "🔥 youtube premuime for Sale! 🔥✅ Verified with Email (Included in the set)🚀 Perfect for watching without ads , reselling, or personal use! DM for details.     💬."
    },
    {
      name: "reddit accounts 2009 full access",
      img: "https://i.pinimg.com/736x/b5/6a/48/b56a488ed215d206d32a855300366ee1.jpg",
      price: 20,
      slodout: 200,
      stock: 2220,  
      description: "🔥 reddit Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 – Aged & Trusted📝 3 Posts – Clean & Ready for Use🚀 Perfect for branding, reselling, or personal use! DM for detail. 💬"
    },
    {
      id: 3,
      name: "spotify premuime 1 year  full access",
      img: "https://i.pinimg.com/736x/b6/8d/37/b68d37447bde9b019e9f0952ff30c4b7.jpg",
      price: 20,
      slodout: 200,
      stock: 2220,
      description: "🔥 spotify premuime for Sale! 🔥✅  1 year warranty ✅ , reselling, or personal use! DM for details. 💬"
    },
    {
      id: 4,
      name: "strong facebook accounts",
      img: "https://i.pinimg.com/736x/39/f3/c1/39f3c13f07d83b9dbd4cdd533ec7a2d5.jpg",
      price: 20,
      slodout: 200,
      stock: 2220,
      description: "🔥 facebook Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 – Aged & Trusted📝 3 Posts – Clean & Ready for Use🚀 Perfect for branding, reselling, or personal use! DM for details. 💬"
    }
  ]
  

  return (
    <main className=" home-page ">
{/* ========navbar just for test ====================== */}

      

    {/* container of our content */}
        <div className="container">

        
       





      {/* hero section */}
      <div className="into-website">
        <h1 className=""> <span> 🚀  1#   digital products</span> market </h1>
        <p>shop now +1000 trend products from one store   pay
             get product instant  
              Our store offers a wide range of digital products to cater to all your
               needs. From the latest software and applications to eBooks and 
               online courses, we have everything you need to stay ahead in 
               the digital world.</p>

        
        <button>discover products</button>
      </div>



              {/* info about  website  */}
              <section className="webstite-info">
                <div className="info-card">
                 <FontAwesomeIcon width={"40"} icon={faStore} /> 
                  <p>huge stock of accounts</p>
                </div>
                <div className="info-card">
                  <FontAwesomeIcon width={"40"} icon={faBagShopping} />  
                  <p>  +22.033 successfully orders</p>
                </div>
                <div className="info-card">
                  <FontAwesomeIcon width={"40"}  icon={faTruckFast} />  
                  <p> get your order instatly </p>
                </div>  
              </section>
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
            <p>{product.description}</p>
            <Link href={`/productDetails/${product.id}`}><p>order now </p><FontAwesomeIcon icon={faCartShopping} width={"25"} className="text-brown-500" /></Link>
          </div>

        </article>
          )
         )
}
        
        

        
      </section>
      </div>
    </main>
  )
}

