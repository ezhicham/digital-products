import { Facebook, Headset, Instagram, Mail, MessageSquareDiff, MessageSquareMore, Phone, Twitter, UserPlus } from "lucide-react"
import "./contact.css"
import ContactForm from "@/components/contactform"

function page() {
  return (
    <div className="contact-us-page">
      <h1>costumer support </h1>


           {/*costumer support and social media links  */}
      <section className="contact-option-cards">
        {/* costumer support part */}
       <div className="option-card">
        <div className="card-header">
           <Headset size={"20"}/>
          <h3>  costumer support </h3>
        </div>

        {/* contact info */}
        <div className="contact-links flex flex-col gap-3">
        <div className="link flex items-center gap-3"> 
           <Phone size={"20"}/>
           <p>+212620438734</p>
        </div>
        <div className="link  flex items-center gap-3"> 
             <MessageSquareMore size={"20"}/>
           <p> t.g/@darkark</p>
        </div>

        <div className="link flex items-center gap-3">
          <Mail size={"20"}/>
          <p>zghariservices@gmail.com</p>
        </div>
        


        </div>

    
        
       </div>



          { /* social media links  */}
           <div className="option-card">
        <div className="card-header">
        <UserPlus size={"20"}/> 
          <h3 className="">  social media </h3>
        </div>

        {/* contact info */}
        <div className="contact-links">
        <div className="link flex flex-col gap-2"> 
          
           <div className="link flex  flex-col gap-3">
            <a href="" className="flex items-center gap-3"><Facebook size={"20"}/> <p>darkark.online</p> </a>
            <a href="" className="flex items-center gap-3"> <Instagram size={"20"}/> <p>@ofi_darark_oline</p> </a>
            <a href="" className="flex items-center gap-3"> <Twitter size={"20"}/> <p>@dararkoline</p> </a>
           </div>
        </div>

      
        


        </div>

    
        
       </div>


      </section>

      <section className="get-touch">
                  <h2 className="text-white">message us now!</h2>

             <ContactForm/>
      </section>
      
    </div>
  )
}

export default page
