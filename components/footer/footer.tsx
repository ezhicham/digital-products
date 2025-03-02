import { Facebook, Instagram, Twitter } from "lucide-react"
import "./footer.css"
import Link from "next/link"
function footer() {
  return (
    <footer>

      {/* FAQ & Rules */}
      <div className="footer-part faq-rules">
        <h3>LEGAL</h3>
        <p><Link href="/legal/terms">Terms of use</Link></p>
        <p><Link href="/legal/privacypolicy">privacy & policy</Link></p>
        <p><Link href="/legal/productissued">product not issued</Link> </p>    
      </div>


 {/* links of ny website */}

    <div className="footer-part links">
        <h3>links</h3>
        <p><a href="">subscription</a></p>

        <p><a href="">about us</a></p>
        <p><a href="">accounts</a></p>
        
       </div>
      {/* contac us part  */}
      <div className="footer-part contact-us">
        <h3>Contact Us</h3>
        <p>Phone: +212622037870</p>
        <p>Email:<a href="mailto:zghariservices@gmail.com"> zghariservices@gmail.com  </a></p>
        <p>Telegram support: <a href="t.me/digitalark"> t.me/digitalark</a></p>
        
      </div>
      {/* ===== social media links ====== */}
      <div className= " footer-part social-media">
        <h3>Social Media</h3>
            <div className="media-link flex items-center gap-3">
            <a href="https://web.facebook.com/profile.php?id=61573867945427" target="_blank" rel="noreferrer">
          <Facebook size={"20"}/>
        </a>
        <a href="https://www.instagram.com/zghariservices" target="_blank" rel="noreferrer">
          <Instagram  size={"20"}/>
        </a>
        <a href="https://www.twitter.com/zghariservices" target="_blank" rel="noreferrer">
          <Twitter  size={"20"}/>
        </a>
            </div>
      </div>
      {/* ======  */}
      <div className=" footer-part copy-right">
        <h3>copyright </h3>
        <p>© 2025 Zghari Services. All rights reserved.</p>
        </div>

       {/* payment method */}
       <div className="footer-part payment-method">
        <h3>Payment Method</h3>
        <div className="payment-icons flex items-center gap-3">
          <img src="/images/visa.png"  alt="visa" />
          <img src="/images/logo.png"  alt="mastercard" />
          <img src="/images/paypal.png"  alt="paypal" />
          <img src="/images/payeer.png"  alt="payeer" />
          
        </div>
       </div>

      
      

      



    </footer>
  )
}

export default footer
