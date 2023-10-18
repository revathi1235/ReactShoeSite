import React from "react";
import Container from "react-bootstrap/Container";
function Hero() {
    return ( 
        <div className="Container">
            <div className="first">
        <h1 className="your" style={{fontWeight:"6em"}}>YOUR FEET </h1>
        <h1 className="deserve"> DESERVE THE BEST</h1>
        <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Tempora eligendi temporibus alias officia ex. Doloremque,<br /> in exercitationem autem atque placeat sit, dicta iusto <br />veniambr
         iste ut, excepturi facilis sint! Excepturi!</p></div>
         <div className="second">
     <img  className="image" src="https://i.ebayimg.com/images/g/76MAAOSwTHZkHIzm/s-l1600.jpg" alt="" />
        </div>
        <div className="footer">
            <button className="shop" style={{backgroundColor:"red",color:"white"}}>shop now</button>
            <button className="cat"> category </button></div>
            <div className="last">
    <p style={{fontSize:"small"}}>Also available on </p>
<img className="image1" src="https://yt3.googleusercontent.com/cT40lDWqE99Ch52R3ftuAExjmjF-yZiY5rUSv_0Q3NXhcqzmiax8ReXuS4Qe53Fizcaw4hEX=s900-c-k-c0x00ffffff-no-rj" alt="" />
<img className="image2" src="https://s3-symbol-logo.tradingview.com/amazon--big.svg" alt="" /></div>
        </div>
        

  )
}

export default Hero;