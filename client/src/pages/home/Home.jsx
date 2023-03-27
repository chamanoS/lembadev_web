import React from "react";
import { Card } from "../../components/blog/Card";
import { Projects } from "../../components/switcher/switcher.jsx";
import { Humor } from "../../components/humor/humor.jsx";
import PIC from "../../assets/images/lox.jpg";
import "./style.css";

export const Home = () => {
  return (
    <>
      <section>
        <div class="main-container">
          <div className="greeting-wrapper">
            <h1 className="style">
              {" "}
              <strong>Hi, I'm Chamano</strong>
            </h1>
            <h6 class="intro">
              I'm a passionate Javascript and Web Developer from Johannesburg
            </h6>
          </div>
          <div class="s1">
            <div class="intro-wrapper">
              <div class="left-column">
                <img src={PIC} id="profile_pic" alt="" />
                <br />

                <p id="settings-note">
                  *Have an exciting project where you need some help?
                  <br />
                  Send me over a message, and let's chat.
                </p>
                <div class="btns">
                  <button class="hire-btn">
                    <a href="#contact">Hire Me</a>
                  </button>
                  <button class="down-cv">
                    <a href="#contact">Work With Me</a>
                  </button>
                </div>
              </div>
              <div class="right-column">
                <div id="preview-shadow">
                  <div id="preview">
                    <div id="corner-tl" class="corner"></div>
                    <div id="corner-tr" class="corner"></div>
                    <h3 className="title">Who's this guy?</h3>
                    <br />
                    <p className="hero">
                      I'm a versatile and experienced developer, I'm also a tech
                      enthusiast with a solution attitude and an entrepreneurial
                      mindset. I'm an avid reader and my passion for technology
                      and design drives me to constantly learn and evolve,
                      ensuring that I stay up to date with the latest trends and
                      developments
                      .
                    </p>
                    <p className="hero">
                      So take a look around my website and please don't hesitate to get in
                      touch. I look forward to hearing from you<i class="far fa-grin-alt"></i>!.
                    </p>
                    <div id="corner-br" class="corner"></div>
                    <div id="corner-bl" class="corner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <div class="portfolio-container">
        <h2 class="section-title"><span>My Portfolio</span></h2>
      </div>
      <div className="contents">
        <p>
          Welcome to my portfolio! As a Javascript enthusiast, I am passionate
          about creating dynamic and interactive web applications that engage
          users and solve real-everyday problems. My portfolio features a
          collection of projects that demonstrate my skills in using Javascript
          to build functional and visually appealing websites and web
          applications.
        </p>
        <p>
          From single-page applications to complex web projects, I have
          experience working with various Javascript frameworks and libraries
          such as React, Node.js, and jQuery, among others. I have also
          leveraged AI tools like ChatGPT to streamline my development process
          and create efficient and effective components. Take a look at my
          portfolio to explore my projects and discover how I can help bring
          your web development ideas to life.
        </p>
      </div>
      <Projects />
      <br /><br />
        <div class="portfolio-container">
        <h2 class="section-title"><span>Explore Articles</span></h2>
      </div>
      <div className="contents">
        <p>
          Welcome to our article section, where you'll find a wide range of
          articles on various topics related to our website's theme. From
          in-depth guides to insightful commentary, our articles are written by
          experts in their fields and are designed to inform, educate, and
          inspire. Whether you're a seasoned professional or just starting out,
          we hope you'll find something of value in our collection of articles.
          So sit back, grab a cup of coffee, and explore what our article
          section has to offer.
        </p>
     
      </div>
    
      <Card />
      
      <div class="freelance">
      <h2 className="title flance"><span>Humor and Joke Generator<i class="far fa-grin-alt"></i>.</span></h2>
      <br />
      <br />
      <Humor/>
      </div>
			
			
      <br />
      <br />

      <section id="contact">
        <div class="container">
          <div class="contact-card">
            <div class="infos">
              <h1 class="section-title mb-4 underline-yellow">Contacts</h1>

              <div class="item">
                <i class="ti-location-pin"></i>
                <div class="">
                  <h5>Location</h5>
                  <p> South Africa, Johannesburg</p>
                </div>
              </div>
              <div class="item">
                <i class="ti-world"></i>
                <div class="mb-0">
                  <h5>Address</h5>
                  <p>Soweto, Moroka, 2139</p>
                </div>
              </div>
              <div class="item">
                <i class="ti-mobile"></i>
                <div>
                  <h5>Phone Number</h5>
                  <p>065 621 2377</p>
                </div>
              </div>
              <div class="item">
                <i class="ti-email"></i>
                <div class="mb-0">
                  <h5>Email Address</h5>
                  <p>lembadev@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="form">
              <h1 class="section-title mb-4 ">Get In Touch</h1>
              <form
                id="contact-form"
                name="RegForm"
                method="POST"
                action="https://formspree.io/f/mjvpyorl"
                onsubmit="return validation()"
              >
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control form-control-lg"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="contact-message"
                    id=""
                    cols="30"
                    rows="7"
                    class="form-control form-control-lg"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="btn btn-style btn-primary btn-block btn-lg mt-3"
                  target="_blank"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="social-b">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/home"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/home">
          <i class="fab fa-twitter"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/chamanoS">
          <i class="fab fa-github"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://dev.to/chamanos">
          <i class="fab fa-dev"></i>
        </a>
      </div>
    </>
  );
};
