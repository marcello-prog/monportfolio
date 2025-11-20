import Title from "./Title";

import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";
import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    demoLink: "https://www.pinterest.com/brigebpp/fashion-style/",
    repoLink: "https://github.com/",
    image: img1,
  },
  {
    id: 2,
    title: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "https://www.shopify.com/fr/blog/meilleure-plateforme-ecommerce",
    repoLink: "https://github.com/",
    image: img2,
  },
  {
    id: 3,
    title: "Portfolio interactif",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    repoLink: "https://github.com/",
    image: img3,
  },
  {
    id: 4,
    title: "Application de Chat en temps réel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Socket.io", "Express.js"],
    demoLink: "#",
    repoLink: "https://github.com/",
    image: img4,
  },
  {
    id: 5,
    title: "Système de réservation de salles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "MongoDB", "Chakra UI"],
    demoLink: "#",
    repoLink: "https://github.com/",
    image: img5,
  },
  {
    id: 6,
    title: "Analyseur de sentiment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Python", "Flask", "NLTK"],
    demoLink: "#",
    repoLink: "https://github.com/",
    image: img6,
  },
];

const Projets = () => {
  return (
    <div className="mt-10" id="Projects">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4 ">
        {projects.map((projects) => (
          <div
            key={projects.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-md"
          >
            <img
              className="rounded-xl w-full h-56 object-cover"
              src={projects.image}
              alt={projects.title}
            />
            <div>
              <h1 className="p-4 font-bold">{projects.title}</h1>
              <p>{projects.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 my-2 ">
              {projects.technologies.map((tech, index) => (
                <span
                  className="badge badge-warning badge-sm text-black rounded-lg px-2 py-1 mt-4 gap-2"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <a  className="btn btn-warning text-black" href={projects.demoLink}>Demo <Video className="w-4"/>
              </a>
              <a className="btn btn-base-100 rounded-xl " href={projects.repoLink}>
                <Github className="w-4 h-4"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
