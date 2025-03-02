"use client";

import PaymentForm from '@/components/payment-form'
import React from 'react' 
import './productdetails.css'

import { useState } from 'react';
function page({ params }: { params: { id: string } }) {


  console.log(params.id)

  const [totalPrice, settotalPrice] = useState(0)

  const products = [
    { id: 1,
      name: "twitter 2009 full access",
      img: "https://i.pinimg.com/736x/5e/58/31/5e5831368f4778eb68310ff6eef756a3.jpg",
      price: 1,      
      slodout: 200,
      stock: 2220,
      description: "🔥 Twitter Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 – Aged & Trusted📝 3 Posts – Clean & Ready for Use🚀 Perfect for branding, reselling, or personal use! DM for details 💬"
    },
    {
      id: 2,
      name: "youtube premuime 1 year  full access",
      img: "https://i.pinimg.com/736x/5b/c5/76/5bc576df2d961a57554f4d6621da9127.jpg",
      price: 5,
      slodout: 43,
      stock: 120,
      description: "🔥 youtube premuime for Sale! 🔥✅ Verified with Email (Included in the set)🚀 Perfect for watching without ads , reselling, or personal use! DM for details.     💬."
    },
    {
      name: "reddit accounts 2009 full access",
      img: "https://i.pinimg.com/736x/b5/6a/48/b56a488ed215d206d32a855300366ee1.jpg",
      price: 1,
      slodout: 200,
      stock: 2220,  
      description: "🔥 reddit Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 – Aged & Trusted📝 3 Posts – Clean & Ready for Use🚀 Perfect for branding, reselling, or personal use! DM for detail. 💬"
    },
    {
      id: 3,
      name: "spotify premuime 1 year  full access",
      img: "https://i.pinimg.com/736x/b6/8d/37/b68d37447bde9b019e9f0952ff30c4b7.jpg",
      price: 2,
      slodout: 200,
      stock: 2220,
      description: "🔥 spotify premuime for Sale! 🔥✅  1 year warranty ✅ , reselling, or personal use! DM for details. 💬"
    },
    {
      id: 4,
      name: "strong facebook accounts",
      img: "https://i.pinimg.com/736x/39/f3/c1/39f3c13f07d83b9dbd4cdd533ec7a2d5.jpg",
      price: 1,
      slodout: 200,
      stock: 2220,
      description: "🔥 facebook Accounts for Sale! 🔥✅ Verified with Email (Included in the set)📅 Created in 2009 – Aged & Trusted📝 3 Posts – Clean & Ready for Use🚀 Perfect for branding, reselling, or personal use! DM for details. 💬"
    }
  ]

const targetProduct = products.find(product => product.id === Number(params.id))
  return (
    <div className='product-details-page'>


        
        {targetProduct?(
              <div className="product-details">
              <img src={targetProduct?.img}  alt="" />
              <h1>{targetProduct?.name}</h1>
              <p>{targetProduct?.description}  </p>
                
      
                <div className="product-info flex items-center gap-5px">
                <h2 className='text-green-400'>price: {targetProduct?.price}$ </h2>
                <h2>slodout: {targetProduct?.slodout}pcs</h2>
                <h2>stock: {targetProduct?.stock}pcs</h2>
      
                </div>
              <div className="quantity">
                <h2>Enter Quantity:</h2>
                <input  onChange={(eo) => {
                  settotalPrice(Number(eo.target.value) * targetProduct.price)
                  
                }
                } placeholder='100pcs' type="number" name="quantity" id="quantity" />
              </div>
              <div className="totalPrice  bg-green-100 rounded-sm p-2  w-fit ">
                <strong className=' text-green-600'>Total Price: {totalPrice}$</strong>
                
              </div>
            </div>
        ):   <h1 className='text-red-400 bg-red-200 text-center'>Product not found</h1>

        }
      


         <PaymentForm   totalpriceCheckout={totalPrice.toString()} />
      
    </div>
  )
}

export default page
