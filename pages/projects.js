import Layout from "../components/Layout";
import carInv from "../static/images/carInv.png";
import charges from "../static/images/charges.png";
import hangman from "../static/images/hangman.png";
import itunes from "../static/images/itunes.png";
import todo from "../static/images/todo.png";
import Image from "next/image";

//a list of some of the projects I did in the bootcamp
const projects = [
  {
    image: carInv,
    name: "Car Inventory",
    description:
      "I used ExpressJS, NodeJS, ReactJS, and MongoDB. This allowed a user to add, read, update, and delete information about a car. A car would have the attrinutes model, make, owner, address, and registration. Then a user could perform those operations on cars. Users could also view a list of cars older than 5 years.",
  },
  {
    image: hangman,
    name: "Hangman Game",
    description:
      "I used NodeJS and ReactJS. In this game, a user would guess a word given some blanks, for each wrong character they enter, that would lead to the player being hung.",
  },
  {
    image: charges,
    name: "Charges and Interest Calculator",
    description:
      "I used ReactJS and Redux. In this app, a user would input an amount and charges and interest would be calculated based on that given amount by the user.",
  },
  {
    image: todo,
    name: "To-Do App",
    description:
      "I used ReactJS. This allowed a user to add, read, update, and delete information about a to-do item.",
  },
  {
    image: itunes,
    name: "ITunes Search",
    description:
      "I used ExpressJS, NodeJS, and ReactJS. In this web app, a user searches for media from the ITunes store. Be it music, music videos, podcasts, movies, etc. The app would interface with the ITunes API to allow users to search for media.",
  },
];

// map through the projects array and display the name, image and description of each project
const list = projects.map((item) => (
  <div className="card">
    <h4>
      <b>{item.name}</b>
    </h4>
    <Image className="zoomIn" src={item.image} alt="Project screenshot" />
    <div className="container">
      <p>{item.description}</p>
    </div>
  </div>
));

export default () => (
  <Layout>
    <div className="project-page">
      <h3 className="projectsTitle">My HyperionDev Projects</h3>
      <div className="all-cards-container">
        <div className="cards">{list}</div>
      </div>
    </div>
  </Layout>
);
