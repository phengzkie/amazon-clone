import React from 'react'
import "./Home.css"

import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon_banner" />
      
        <div className="home_row">
          <Product 
            id="1"
            title="The Lean StartUp"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product 
            id="2"
            title="ASUS VivoBook L203MA Laptop, 11.6”"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product 
            id="3"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
            />
          <Product 
            id="4"
            title="
TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
            price={63.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
            rating={5}
            />
          <Product 
            id="5"
            title="Samsung Galaxy Tab A 8.0' 32 GB Wifi Android 9.0 Pie Tablet Black (2019)"
            price={139.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41hFYkpvRFL._AC_SL1024_.jpg"
            rating={5}/>
        </div>

        <div className="home_row">
        <Product 
          id="6"
          title="
Canon PowerShot SX530 Digital Camera w/ 50X Optical Zoom - Wi-Fi & NFC Enabled (Black)"
            price={184.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61xeTmAQDNL._AC_SL1500_.jpg"
            rating={4}/>
        </div>
      </div>
    </div>
  )
}

export default Home
