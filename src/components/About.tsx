import Title from "./Title";
import img from "../assets/img3.jpg";
import { CalendarSync, Paintbrush, TextInitial } from "lucide-react";


const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <TextInitial className="text-warning scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-warning scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-warning scale-150" />,
    },
];
const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-10" id="About">
      <Title title="À propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block" data-aos="flip-left">
          <img src={img} alt="" className="w-96 object-cover rounded-xl " />
        </div>

        <div className="md:ml-4 space-y-4" data-aos="fade-up">

          {aboutSections.map((section) => (

            <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl shadow-xl md:w-96">

              <div className="mb-2 md:mb-0 ">

                {section.icon}

              </div>
               
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="font-bold text-xl mb-1">
                  {section.title}  
                </h2>
                <p className="text-sm">
                  {section.description}
                </p>
              </div>
            
          </div>
          )
          
        )}
        </div>
      </div>
    </div>
  );
};

export default About;
