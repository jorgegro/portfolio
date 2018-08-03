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


}
