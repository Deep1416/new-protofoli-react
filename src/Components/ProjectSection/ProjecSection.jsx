import { motion } from "framer-motion";
import { GitHub, AttachFile } from "@mui/icons-material";
import "./ProjectSection.css";
// tech icons
import html from "./../../assets/Img/Html.png";
import css from "../../assets/Img/Css.png";
import react from "../../assets/Img/reactBasic.png";
import tailwind from "../../assets/Img/Tailwind.png";
import js from "../../assets/Img/JavaScript.png";
import firebase from "./../../assets/Img/firebase1.png";
import shopper from "/img/e-commerece.png";
import codePen from "/img/codepen.png";
import meal from "/img/meal.png";
import currency from "/img/Currency.png";
import emojee from "/img/emojee.png";
import drum from "/img/drum.png";
import bharat from "/img/bharatPe.png";
import grocery from "/img/grocery.png";
const ProjectSection = () => {
  const projects = [
    {
      title: "Grocery",
      description:
        "The Grocery App is a sophisticated web application designed to transform online grocery shopping by offering users a seamless and intuitive shopping experience. It allows users to effortlessly browse, select, and purchase groceries with advanced functionalities and a user-friendly interface. The application leverages modern web technologies to deliver a fast, responsive, and feature-rich platform.",
      link: "https://github.com/Deep1416/Grocery-app",
      image: grocery,
      goLive: "https://grocery-app-sandy.vercel.app/",
      tech: [react, tailwind, firebase],
    },
    {
      title: "E-commerce",
      description:
        "Sleek e-commerce platform developed with React and Tailwind CSS. Seamlessly integrates intuitive navigation, product showcases, and secure checkout. Responsive design ensures optimal shopping experience across devices. Elevates online retail with modern aesthetics and streamlined functionality for both merchants and customers.",
      link: "https://github.com/Deep1416/E-commerce",
      image: shopper,
      goLive: "https://e-commerce-hazel-omega.vercel.app",
      tech: [react, tailwind, firebase],
    },
    {
      title: "CodePen",
      description:
        "My project on CodePen leverages React for dynamic user interfaces, Tailwind CSS for sleek styling, and Firebase for real-time data storage and authentication. It seamlessly integrates these technologies to build responsive web applications with interactive features and secure user authentication",
      link: "https://github.com/Deep1416/CodePen-React",
      image: codePen,
      goLive: "https://code-pen-react.vercel.app",
      tech: [react, tailwind, firebase],
    },
    {
      title: "Meal App",
      description:
        "Modern food website crafted with React and Tailwind CSS. Offers a seamless browsing experience with vibrant visuals and intuitive navigation. Features diverse recipes, dynamic filtering, and responsive design for optimal viewing on any device. Elevates culinary exploration with a user-friendly interface and delicious inspiration.",
      link: "https://github.com/Deep1416/meal-app_react",
      image: meal,
      goLive: "https://meal-app-react-peach.vercel.app",
      tech: [react, tailwind],
    },

    {
      title: "Currency Convert",
      description:
        "This project is a modern currency converter application developed using React. It allows users to seamlessly convert between different currencies with real-time exchange rates. The intuitive user interface provides input fields for entering the amount to convert, dropdown menus for selecting the source and target currencies.",
      link: "https://github.com/Deep1416/Currency_convert_with_react",
      image: currency,
      goLive: "https://currency-convert-with-react.vercel.app",
      tech: [react, tailwind],
    },
    {
      title: "Emoji Search",
      description:
        "The Emoji Search Website is an interactive web application designed to help users find and copy their favorite emojis quickly and efficiently. This project was built using HTML, CSS, and JavaScript, with a focus on providing a seamless user experience through intuitive design and functionality.",
      link: "https://github.com/Deep1416/Emoji-project",
      image: emojee,
      goLive: "https://emoji-project-sable.vercel.app",
      tech: [html, css, js],
    },
    {
      title: "Drum Kit",
      description:
        "This project is an interactive DrumKit clone built using HTML, CSS, and JavaScript. The application features a responsive layout with visually appealing drum pads that users can click or press corresponding keyboard keys to produce drum sounds. JavaScript is used to handle event listeners and audio playback, providing a fun and engaging user experience.",
      link: "https://github.com/Deep1416/Drum-kit",
      image: drum,
      goLive: "https://drum-kit-green-beta.vercel.app",
      tech: [html, css, js],
    },
    {
      title: "BharatPe Clone",
      description:
        "This project is a front-end clone of BharatPe, developed using HTML, CSS, and JavaScript. It replicates the user interface of BharatPe's payment platform, featuring intuitive navigation, a streamlined payment flow, and interactive elements. JavaScript is utilized to handle user interactions, such as input validation and dynamic updates.",
      link: "https://github.com/SanjayvVarma/Bharat-Pe/tree/main/Deependra",
      image: bharat,
      goLive: "https://sanjayvvarma.github.io/Bharat-Pe/",
      tech: [html, css],
    },
  ];

  return (
    <div
      id="project-section"
      className="py-24 px-5 text-center bg-slate-300 from-gray-200 to-gray-300"
    >
      <motion.h2
        className="text-5xl mb-14 font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative m-3 cursor-pointer flex flex-col text-gray-700 bg-black shadow-md bg-clip-border rounded-xl w-96 project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="relative h-56 mx-4 mt-5 overflow-hidden rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
              whileHover={{ opacity: 0.9 }}
            >
              <img
                src={project.image}
                alt="card-image"
                className="w-full h-full object-cover rounded-xl"
              />
              <motion.div
                className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
                <div className="flex gap-12 justify-center mx-2 my-2 space-x-2 z-10">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <GitHub style={{ fontSize: "45px", fill: "#FFD700" }} />
                  </motion.a>
                  <motion.a
                    href={project.goLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <AttachFile style={{ fontSize: "45px", fill: "#FBF9EF" }} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h5 className="block my-3 font-Josefin text-2xl font-semibold leading-snug text-white">
                  {project.title}
                </h5>
                <div className="flex gap-2 mb-3">
                  {project.tech.map((item, idx) => (
                    <img
                      src={item}
                      key={idx}
                      className="w-10 h-10"
                      alt="tech-icon"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-start">
                <p className="block font-sans text-base text-gray-300 leading-relaxed text-left">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
