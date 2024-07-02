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
                        <td><p>If  you have an urgent business concern please contact us at 07*************0</p></td>
                    </tr>
                    <tr>
                        <td><img src="/img/Notification.png" alt="" srcset="" /></td>
                        <td>If  you have an urgent business concern please contact us at 07*************0</td>
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
                <input type="text" placeholder='email'/>
                <input type="text" placeholder='Message'/>
                <button>Submit</button>
            </form>
            </div>

        </section>
    </main>
    </>
  )
}
