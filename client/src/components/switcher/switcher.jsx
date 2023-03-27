import React from "react";
import "./swicher.css"
import { useState } from "react";
import { project } from "../../assets/data/data.js";

function openCategory(evt, categoryName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      if (tabcontent[i].id === categoryName ) {
        tabcontent[i].style.display = "grid";
      } else {
        tabcontent[i].style.display = "none";
      }
    }
  
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      if (tablinks[i].classList.contains("active")) {
        tablinks[i].classList.remove("active");
        break;
      }
    }
  
    evt.currentTarget.classList.add("active");
  }
  
  function setDefaultTab() {
    const defaultCategory = "category1";
    openCategory(null, defaultCategory);
  }
  
  window.onload = setDefaultTab;
  

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <section className="parent-container">
        <div className="tab">
          <button
            className={`tablinks ${activeTab === "category1" ? "active" : ""}`}
            onClick={(e) => {
              setActiveTab("category1");
              openCategory(e, "category1");
            }}
          >
            ALL
          </button>
          <button
            className={`tablinks ${activeTab === "categoryx" ? "active" : ""}`}
            onClick={(e) => {
              setActiveTab("categoryx");
              openCategory(e, "categoryx");
            }}
          >
            Websites
          </button>
          <button
            className={`tablinks ${activeTab === "category2" ? "active" : ""}`}
            onClick={(e) => {
              setActiveTab("category2");
              openCategory(e, "category2");
            }}
          >
            Apps
          </button>
          <button
            className={`tablinks ${activeTab === "category3" ? "active" : ""}`}
            onClick={(e) => {
              setActiveTab("category3");
              openCategory(e, "category3");
            }}
          >
            Ui/Ix
          </button>
        </div>

        <div id="category1" class="tabcontent">
        <div class="grid">
            {project[0].website.map((item) => (
               <div className="project-card" key={item.id} style={{backgroundImage: `url(${item.cover})`}}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.github} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="categoryx" class="tabcontent">
          <div class="grid">
            {project[0].website.map((item) => (
               <div className="project-card" key={item.id} style={{backgroundImage: `url(${item.cover})`}}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.github} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="category2" class="tabcontent">
          <div class="grid">
            {project[1].app.map((item) => (
              <div className="project-card" key={item.id} style={{backgroundImage: `url(${item.cover})`}}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.github} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="category3" class="tabcontent">
        <div class="grid">
            {project[2].design.map((item) => (
             <div className="project-card" key={item.id} style={{backgroundImage: `url(${item.cover})`}}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.github} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
