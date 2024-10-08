import React, { useState } from "react";
import Work from "./Work";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const projectsData = [
  {
    id: "2342",
    name: "Backyard Vendor",
    technologies: [
      "NodeJs",
      "Express",
      "MongoDB",
      "React",
      "Next Js",
      "SCSS",
      "SMP servers, etc",
    ],
    image: "./img/projects/bv-header.png",
    link: "https://www.backyardvendor.com",
    linkSource: "https://github.com/serengia",
    description: `Backyard vendor is a local online marketplace that connects 
    neighbors and allow them to buy and sell pre-love items within their neighborhood. 
    You can think of it as your local treasure-hunt`,
    private: true,
  },
  {
    id: "2233",
    name: "RADA365",
    technologies: ["NodeJs", "Express", "MongoDB", "Next Js", "SCSS"],
    image: "./img/projects/rada-header.png",
    link: "https://rada365.com",
    linkSource: "https://github.com/serengia",
    description: `RADA365 is a complete event organizing solution that hooks you with Adventures, Experiences and Events, around the clock, 
    around the year(365), in Kenya. (NOTE: RADA is a kenyan swahili slung for "Whats Up", 
    also translated to mean, "What's happening around us?" )`,
    private: true,
  },
  {
    id: "22",
    name: "Online Business Platform",
    technologies: ["NodeJs", "Express", "MongoDB", "Next Js", "SCSS"],
    image: "./img/projects/papwave.png",
    link: "https://papwave.com",
    linkSource: "https://github.com/serengia",
    description: `This is an online business platform that connects service seekers with different vendors. Think of it as Uber for businesses.`,
    private: true,
  },
  {
    id: "1",
    name: "Tints-Shades Generator",
    technologies: ["React", "HTML", "CSS", "Javascript"],
    image: "./img/projects/tints.png",
    link: "https://serecode-color-generator.netlify.app/",
    linkSource:
      "https://github.com/serengia/color-generator-app--tints-and-shades",
    description: `I developed this tool you can use to generate tints and shades for your chosen color. Fun fact: This tool has become quite useful and I personally use it almost every day.`,
  },

  {
    id: "21",
    name: "Organization Web Application",
    technologies: ["NodeJs", "Express", "MongoDB", "Next Js", "SCSS"],
    image: "./img/projects/wtc.png",
    link: "https://wtckenya.org",
    linkSource: "https://github.com/serengia",
    description: `Used by 3,000+ users per week. Key features for this web app include different user roles e.g. admins, managers, members and general users, events catalog with ability to register or add an event to calendar, ability for logged in users to add items to their favorite lists, among others.`,
    private: true,
  },

  {
    id: "2",
    name: "Entrepreneurs Summit",
    technologies: ["Next Js", "HTML", "CSS", "Javascript"],
    image: "./img/projects/summit.png",
    link: "https://serecode-entrepreneurs-summit-nextjs.vercel.app/",
    linkSource: "https://github.com/serengia/entrepreneurs-summit--nextjs",
    description: `This project is done using HTML, SCSS and Javascript. The project is also set up with html-css and javascript linters.`,
  },

  {
    id: "4",
    name: "Covid-19 data App",
    technologies: ["React", "Redux", "HTML", "SCSS", "Javascript"],
    image: "./img/projects/covid.png",
    link: "https://serecode-covid-19-data.vercel.app/",
    linkSource: "https://github.com/serengia/react-redux--capstone-project",
    description: `This Web App helps you find and filter Covid-10 data by continents and countries. It utilizes the Covid 19 data APA by Open Disease Data API`,
  },
  {
    id: "3",
    name: "Buklist.com project",
    technologies: ["Node Js", "Express", "Mongo DB", "Next Js"],
    image: "./img/projects/books.png",
    link: "https://buklist.com",
    linkSource: "https://github.com/serengia/buklist-open-source-project",
    description: `Open source project: This platform enables you to manage you reading list with ease and track your progress for free at buklist.com`,
  },
  {
    id: "5",
    name: "Math lovers App",
    technologies: ["React", "HTML", "CSS", "Javascript"],
    image: "./img/projects/math.png",
    link: "https://serengia-math-magician.netlify.app/",
    linkSource: "https://github.com/serengia/math-magician-project--react",
    description: `Math lovers App: This is a single page react application that uses key react features such as components, props, and routing.`,
  },

  {
    id: "6",
    name: "Food App",
    technologies: ["Webpack", "Javascript", "HTML", "SASS"],
    image: "./img/projects/food.png",
    link: "https://serengia.github.io/capstone-project--consuming-API/dist/",
    linkSource: "https://github.com/serengia/capstone-project--consuming-API",
    description: `We built this project using webpack and following industry standards Gitflow pattern. On this app, you can view meals, search a meal, leave a comment on a single meal, or even like.`,
  },
  {
    id: "7",
    name: "Simple todo App",
    technologies: ["React", "Javascript", "HTML", "SASS"],
    image: "./img/projects/todo.png",
    link: "https://serecode-react-todo.netlify.app/",
    linkSource: "https://github.com/serengia/react-todo",
    description: `React todo list application. You can add todo, delete and update. Your todo list will be persisted in your local storage.`,
  },
  {
    id: "8",
    name: "Personal profile website",
    technologies: ["Next Js", "React", "Javascript", "SASS"],
    image: "./img/projects/profile.png",
    link: "https://serecode-personal-profile-website.vercel.app/",
    linkSource: "https://github.com/serengia/personal-profile-website--nextjs",
    description: `Personal profile website.`,
  },
];

function WorksSection() {
  const [showLess, setShowLess] = useState(true);

  let filteredData = projectsData;
  if (showLess) {
    filteredData = filteredData.slice(0, 6);
  }
  return (
    <section className="section-works" id="portfolio">
      <div className="works-header row">
        <h2 className="section-title">My recent works</h2>
        <hr className="text-divider" />
      </div>

      <div className="works-container row">
        {filteredData.map((project) => (
          <Work key={project.id} data={project} />
        ))}
      </div>
      <div className="works-load-more row">
        <button onClick={() => setShowLess((prev) => !prev)} className="btn">
          {showLess ? (
            <AiOutlinePlus className="icon" />
          ) : (
            <AiOutlineMinus className="icon" />
          )}
          {showLess ? "Load more projects" : "Load less projects"}
        </button>
      </div>
    </section>
  );
}

export default WorksSection;
