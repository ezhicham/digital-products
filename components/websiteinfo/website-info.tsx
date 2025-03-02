import "./websiteinfo.css"

import { faBagShopping, faStore, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CheckCheck, Store, TruckIcon } from "lucide-react"
import React from 'react'

function websiteinfo() {
  return (
    <section className="webstite-info">
                    <div className="info-card">
                     
                     <Store size={"40"} /> 
                      <p>huge stock of accounts</p>
                    </div>
                    <div className="info-card">
                      <CheckCheck size={"40"} /> 
                      <p>  +22.033 successfully orders</p>
                    </div>
                    <div className="info-card">
                      <TruckIcon className="" size={"40"} /> 
                      <p> get your order instatly </p>
                    </div>  
                  </section>
  )
}

export default websiteinfo
