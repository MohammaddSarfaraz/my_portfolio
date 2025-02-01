import { Component, OnInit } from '@angular/core';
// import { SearchCountryField, CountryISO, PhoneNumberFormat, NgxIntlTelInputComponent } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // separateDialCode = true;
  // SearchCountryField = SearchCountryField;
  // CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
  // preferredCountries: CountryISO[] = [CountryISO.India,];

  // changePreferredCountries() {
  //   this.preferredCountries = [CountryISO.India,];
  // }
  redirectTo(getID: string) {
    const getElementById = document.getElementById(getID);
    if (!!getElementById) {
      getElementById.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  

  home = [
    {
      mohd: 'Mohd',
      srfraz: 'Sarfaraz',
      web: 'Web Designer',
      hello: 'Hello! I am Web Developer from India. I have rich experience in web site design and building, I love to talk with you about our unique.',
    },
  ];
  about = [
    {
      header: 'About Me',
      story: 'My Story',
      frontend:
        'I am a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences.',
      aim: 'My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.',
    },
  ];
  styles = [
    {
      age: '01-02-2003',
      residence: 'INDIA',
      phone: '+917970622190',
      location: 'Hyderabad',
      email: 'md049563@gmail.com',
    },
  ];
  rows = [
    {
      image: '/assets/image/skills-img/code.png',
      span: 'Web Development',
      paragraph:
        'The web development process includes: web design, web content, client-side / server-side scripting and network security configuration.',
    },
    {
      image: '/assets/image/skills-img/ui-ux.png',
      span: 'Ui/Ux Design',
      paragraph:
        'UI/UX design is about making websites and apps visually appealing easy to use. Designers focus on layout, colors, and interactions to create a smooth and enjoyableexperience for users.',
    },
    {
      image: '/assets/image/skills-img/web.png',
      span: 'Web Designer',
      paragraph:
        'Web designers use their creativity and technical skills to make websites visually appealing and easy to navigate for users, focusing on layout, color, and typography to create engaging online experiences.',
    },
    {
      image: '/assets/image/skills-img/app-d.png',
      span: 'App Designer',
      paragraph:
        'An app designer blends creativity with technical expertise, sculpting user-centric interfaces that elevate digital experiences to new heights.',
    },
  ];
  first = [
    {
      coding: 'Coding Skills',
      develop: 'Developing On',
      process:
        'I process advanced proficiency in Java, HTML, CSS, JavaScript, and TypeScript, enabling me to develop dynamic web applications. With expertise in Angular and GSAP for animations, I create engaging user experiences. My strong analytical and collaborative skills ensure efficient problem-solving and effective teamwork.',
    },
  ];
  progressData = [
    {
      data: 'HTML- ',
      paragraph:
        ' HTML, the backbone of the web, structures content with tags defining experiences.',
      value: 75,
    },
    {
      data: 'CSS- ',
      paragraph:
        ' CSS, is a language used to style and format the layout of web pages, controlling aspects like colors.',
      value: 50,
    },
    {
      data: 'JAVASCRIPT- ',
      paragraph:
        ' JavaScript is a programming language that adds interactivity to web pages by allowing developers.',
      value: 25,
    },
    {
      data: 'TYPESCRIPT- ',
      paragraph:
        ' TypeScript is a programming language that builds on JavaScript by adding static types.',
      value: 30,
    },
    {
      data: 'ANGULAR- ',
      paragraph:
        ' Angular is a front-end framework developed by Google for building dynamic web applications. ',
      value: 40,
    },
    {
      data: 'JAVA- ',
      paragraph:
        ' Java is a versatile programming language known for its platform independence, allowing developers to write code once and run it on any device that supports Java.',
      value: 20,
    },
  ];
}
