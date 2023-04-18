import React, { useState } from "react";
import Work from "./Work";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const projectsData = [
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
    id: "2",
    name: "Entrepreneurs Summit",
    technologies: ["Next Js", "HTML", "CSS", "Javascript"],
    image: "./img/projects/summit.png",
    link: "https://serecode-entrepreneurs-summit-nextjs.vercel.app/",
    linkSource:
      "https://github.com/serengia/Entrepreneurs-Forum-Summit---Capstone-Project",
    description: `This project is done using HTML, SCSS and Javascript. The project is also set up with html-css and javascript linters.`,
  },
  {
    id: "3",
    name: "Buklist.com project",
    technologies: ["Node Js", "Express", "Mongo DB", "Next Js"],
    image: "./img/projects/books.png",
    link: "https://buklist-open-source-project.vercel.app/",
    linkSource: "https://github.com/serengia/buklist-open-source-project",
    description: `Open source project: This platform enables you to manage you reading list with ease and track your progress for free at buklist.com`,
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
        <h2 className="section-title">My resent works</h2>
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
