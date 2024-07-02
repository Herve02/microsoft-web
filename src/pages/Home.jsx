import React from 'react'
import "./../css/home.css"
import "./../css/main.css"
import AppNav from '../ui/AppNav'

export default function Home() {
  return (
    <>
    <AppNav />
    <main>
        <section >
            <div className="wrapper hero">
        <div className="hero-content">
            <h2>MICROSOFT ONLINE SHOP </h2>
            <p>
                Explore a world of cutting-edge technology and innovation with Microsoft. 
                From powerful laptops to versatile software solutions, find everything you 
                need to elevate your productivity and stay connected.
            </p>
            <div className="btns">
                <a href="/products"><button>Shop Now</button></a>
                <a href=""><button className='btn1'>Contact Us</button></a>
            </div>
        </div>
        <div className="hero-img">
            <img src="/img/hero.png" alt="" />
        </div>
        </div>
        </section>
        <section className='about'>
            <div className="wrapper">
                <div className='img'>
                    <h2>ABOUT <span>MICROSOFT</span></h2>
                    <img src="/img/office.png" alt="" />
                </div>
                <div className='content'>
                    <p>Our mission is to empower people through the power of technology. Whether you're a student, professional, gamer, or tech enthusiast, we offer a wide range of products designed to meet your needs. From cutting-edge laptops and tablets to powerful software solutions and gaming consoles, our products are crafted to provide exceptional performance and seamless user experiences.</p>
                    <p>Quality and customer satisfaction are our top priorities. We deliver innovative, reliable, and user-friendly products. Our dedicated customer support team ensures you have an excellent experience with Microsoft.</p>
                </div>
            </div>
        </section>
        <section className='contacts'>
            <div className="wrapper">
            <div className="contents">
                <div className="headings">
                <h3>Get In Touch  With Us</h3>
                <p>We are here to Help</p>
                </div>

                <table>
                    <tr>
                        <td><img src="/img/Call.png" alt="" /></td>
                        <td><p>If  you have an urgent business concern please contact us at 1-800-642-7676</p></td>
                    </tr>
                    <tr>
                        <td><img src="/img/Notification.png" alt="" srcset="" /></td>
                        <td>If  you have an urgent business concern please contact us at 1-800-MICROSOFT</td>
                    </tr>
                </table>
                <div className="icons">
                    <img src="/img/Symbol.png" alt="" />
                    <img src="/img/twitter.png" alt="" />
                    <img src="/img/linkedIn.png" alt="" />
                    <img src="/img/IG.png" alt="" />
                   
                </div>
            </div>
            <form action="">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <textarea type="text" placeholder='Message'/>
                <button>Submit</button>
            </form>
            </div>

        </section>
        <footer>
            <div className="wrapper">
                <div className="main-content">
                    <div>
                        <img src="/img/logo.svg" alt="" srcset="" />
                        <p>
                            Discover the future with Microsoft. Innovative products and solutions designed to enhance your digital life. Join us and elevate your experience.
                        </p>
                    </div>
                </div>

                <div className='links'>
                    <div className="important_links">
                     <h3>Links</h3>
                    <ul >
                        <li><a href="">Home</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Check Out</a></li>
                    </ul>
                    </div>


                
                <div className="contact">
                    <h3>Contact Us</h3>
                    <div className="tel">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z" fill="#fff"/>
                    </svg>                        
                    <p>1-800-642-7676</p>
                    </div>
                    <div className="email">
                    <img src="/img/email.svg" alt="" />
                        <p>1-800-MICROSOFT</p>
                    </div>
                </div>

                </div>
   


            </div>
            <p className='right_reserved'>© 2024 Microsoft. All rights reserved    </p>
        </footer>
    </main>
    </>
  )
}
