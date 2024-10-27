import Tool from "./tools";
import Bukom1 from "../assets/bukom1.png";
import Bukom2 from "../assets/bukom2.png";
import JBus1 from "../assets/jbus1.png";
import JBus2 from "../assets/jbus2.png";
import JBus3 from "../assets/jbus3.png";
import JBus4 from "../assets/jbus4.png";
import Bluetooth1 from "../assets/bluetooth1.png";
import Midtrans1 from "../assets/midtrans1.png";
import WebExercise1 from "../assets/exercise1.png";
import Otaly1 from "../assets/otakly1.png";

var projects = [
  {
    name: `Bukom`,
    tools: [
      {
        name: `Android Studio`,
      },
      {
        name: `React`,
      },
      {
        name: `Tailwind`,
      },
      {
        name: `Node`,
      },
      {
        name: `MongoDB`,
      },
      {
        name: `PostgreSQL`,
      },
    ],
    type: ["Frontend", "Backend"],
    description: `A platform for a kindergarten school to connect teachers and parents`,
    photos: [Bukom1, Bukom2],
    individual: true,
    features: [
      "Teachers and parents can chat with each other",
      "Teachers can send logs for all or selected students",
      "JWT authentication",
      "Admin can add, delete, and edit teachers, parents, and students",
      "Admin can monitor and delete all chats or logs",
    ],
    repo:["https://github.com/kamalMakarim/FE-Parents_Teachers_Link", "https://github.com/kamalMakarim/BE-Parents_Teachers_Link", "https://github.com/kamalMakarim/FE-Bhinekas","https://github.com/kamalMakarim/BE-Bhinekas"]
  },
  {
    name: `Bluetooth Positioning`,
    description: `A react native based project that uses bluetooth to track which floor a user is, then show the map of the floor`,
    tools: [
      {
        name: `React`,
      },
      {
        name: `Mapbox`,
      },
    ],
    type: ["Frontend"],
    photos: [Bluetooth1],
    individual: false,
    features: [
      "Bluetooth floor prediction algorithm and integration",
      "Mapbox integration",
      "Mapbox floor map creation",
      "Project initializer and manager",
    ],
    repo:[
      "https://github.com/EXERCISE-FTUI/Bluetooth-Positioning"
    ]
  },
  {
    name: `JBus`,
    tools: [
      {
        name: `Android Studio`,
      },
      {
        name: `Spring Boot`,
      },
    ],
    type: ["Frontend", "Backend"],
    description: `A Java based bus ticketing system application`,
    photos: [JBus1, JBus2, JBus3, JBus4],
    individual: true,
    features: [
      `User login and registration`,
      `User can see available busses`,
      `User can buy selected ticket bus`,
      `bus company account can add busses and their schedules`,
    ],
    repo:[
      "https://github.com/kamalMakarim/JBus", "https://github.com/kamalMakarim/JBus-android"
    ]
  },
  {
    name: `Coffee Payment`,
    tools: [
      {
        name: `Node`,
      },
      {
        name: `PostgreSQL`,
      },
      {
        name: `Midtrans`,
      },
    ],
    type: ["Backend"],
    description: `A payment system for an automatic coffee machine, using Midtrans as the payment gateway`,
    photos: [Midtrans1],
    individual: true,
    features: ["Midtrans integration", "Database integration"],
    repo:[
      "https://github.com/EXERCISE-FTUI/Kopi"
    ]
  },
  {
    name: `Otakly`,
    tools: [
      {
        name: `React`,
      },
      {
        name: `Tailwind`,
      },
      {
        name: `Node`,
      },
      {
        name: `PostgreSQL`,
      },
    ],
    type: ["Frontend", "Backend"],
    description: `A forum like website for students to ask and answer questions`,
    photos: [Otaly1],
    individual: false,
    features: [
      "Database schema",
      "Question details",
      "User login, register, and edits",
      "Image hosting intergration",
    ],
    repo:["https://github.com/SistemBasisData2024/Otakly"]
  },
  {
    name: `Web Exercise`,
    tools: [
      {
        name: `React`,
      },
      {
        name: `Tailwind`,
      },
    ],
    type: ["Frontend"],
    description: `A website for introducing EXERCISE FTUI 2023`,
    photos: [WebExercise1],
    features: [
      "Project initializer and manager",
      "Extile page creation",
    ],
    repo:["https://github.com/EXERCISE-FTUI/Website-Exercise-FE"]
  },
];

projects.forEach((project) => {
  project.tools = project.tools.map((tool) =>
    Tool.find((t) => t.name === tool.name)
  );
});

export default projects;
