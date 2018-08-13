import { Component } from '@angular/core';
// import { AngularWaitBarrier } from '../../node_modules/blocking-proxy/built/lib/angular_wait_barrier';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app'; 

  
  educationInfo =[
    {
      title: "High School Diploma",
      description: "Graduated from Early College High School as part of the top 10% of my class, consisting of almost 300 students. While in high school I was part of a program called GearUp. This program help me to grow as a person polishing many of my people skils and leadership habilities."
    },
    {
      title: "South Texas College Graduated",
      description: "During my high school, I had many dual credit classes that enabled me to progress further into my post-secondary education. Now I'm a graduate at the age of 18 years-old."
    },
    {
      title: "Computer Engineer at UTRGV",
      description: "My interest in computer and coding goes far beyond web developement. I want to create, build and implement my own ideas. Innovate the world in my own way. As a sophomore looking to finish and complete my arsenal for my dreams."
    }
  ];

  techSkills = ["Angular", "HTML5", "Express", "CSS3", "Bootstrap 4", "SQL", "Wordpress", "RESTful APIs", "C++", "Javascript", "Sass",
];

  projects = [
    {
      title: "Name Tag Id Generator App",
      description: "Created use pure HTML5, CSS3 and Javascript 5 in this web application the user can input into the id fields to fill out their id. DOM it would get the information by their id and populate the id with those values.",
      link: "https://jorgegro.github.io/idcardapp/",
      pic: "./assets/Id-generator.png"
    },
    {
      title: "To Do App",
      description: "Developed in Angular 6. In this ToDo App has basic CRUD (create, read, update, delete) functions. With the help of bootstrap utilizing the row and col grid system, googleFonts and fontawesome libraries, utilizing angular CLI and finally unsplash to add images and color to the web app.",
      link: "https://github.com/jorgegro/todoApp",
      pic: "./assets/Todo-app.png"
    },
    {
      title: "Zombie Quiz App",
      description: "Build with Angular 6, utilizing routing, services and JavaScript logic. In this app the user gets to answer a quiz related whether if they could survive a zombie apocalypse, as users select answer the JavaScript logic process their results.",
      link: "https://jorgegro.github.io/zombie-apocalypse-quiz/",
      pic: "./assets/zombie-quiz.png"
    },
    {
      title: "PokeDisplay",
      description: `Using Angular 5+, RESTful API and Bootstrap 4 the PokeDisplay is a web application where users may look for their favorite pokémons. Once they looked for their pokemon utilizing the PokeApi a get request seek for the pokemon's name, sprite, and nature.
      Users are able to add this pokémon into their "team" in which they can collect a limit of 6 pokémon similar to the games.`,
      link: "https://github.com/jorgegro/MyPokeTeam",
      pic: "./assets/PokeDisplay.png"
    }
  ]


}
