import React from "react";
import Work from "./Work";

export const projectsData = [
  {
    id: "1",
    name: "Real estate project",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/real-estate.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
    saepe voluptatibus. Nihil exercitationem facilis, eligendi!`,
  },
  {
    id: "2",
    name: "Human Resource System",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/human-resource-system.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
    saepe voluptatibus. Nihil exercitationem facilis, eligendi!`,
  },
  {
    id: "3",
    name: "Design Firm Project",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/design-firm.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
    saepe voluptatibus. Nihil exercitationem facilis, eligendi!`,
  },
  {
    id: "4",
    name: "Logistics Web Application",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/logistics.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
    saepe voluptatibus. Nihil exercitationem facilis, eligendi!`,
  },
  {
    id: "5",
    name: "Saas Legacy Code Update",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/legacy-code-update.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
    saepe voluptatibus. Nihil exercitationem facilis, eligendi!`,
  },
  {
    id: "6",
    name: "School Software System",
    technologies: ["Ruby", "Javascript"],
    image: "./img/web-development.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
    saepe voluptatibus. Nihil exercitationem facilis, eligendi!`,
  },
];

function WorksSection() {
  return (
    <section className="section-works" id="portfolio">
      <div className="works-header row">
        <h2 className="section-title">My resent works</h2>
        <hr className="text-divider" />
      </div>

      <div className="works-container row">
        {projectsData.map((project) => (
          <Work key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
}

export default WorksSection;
