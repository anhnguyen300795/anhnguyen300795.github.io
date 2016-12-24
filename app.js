var app = angular.module("portfolio", []);

app.component('navigation', {
    templateUrl: 'components/navbar.html'
});

app.component('mainpage', {
    templateUrl: 'components/mainpage.html',
});

app.component('about', {
    templateUrl: 'components/about.html'
});

app.component('techno', {
    templateUrl: 'components/technology.html',
    controller: function() {
        this.technologies = [{
            image: "image/js.png",
            name: "JavaScript"
        }, {
            image: "image/react.png",
            name: "ReactJs"
        }, {
            image: "image/redux.png",
            name: "Redux"
        }, {
            image: "image/angular.png",
            name: "Angular"
        }, {
            image: "image/meteor.svg",
            name: "MeteorJS"
        }, {
            image: "image/mongodb.png",
            name: "MongoDB"
        }, {
            image: "image/nodejs.png",
            name: "NodeJS"
        }, {
            image: "image/jquery.png",
            name: "Jquery"
        }, {
            image: "image/sass.png",
            name: "Sass"
        }, {
            image: "image/bootstrap.svg",
            name: "Bootstrap"
        }, {
            image: "image/python.png",
            name: "Python"
        }, {
            image: "image/django.png",
            name: "Django"
        }]
    }
});

app.component('skills', {
    templateUrl: 'components/skills.html',
    controller: function() {
        this.skills = [{
            name: "HTML-CSS",
            level: "80"
        }, {
            name: "JavaScript",
            level: "70"
        }, {
            name: "React-Redux",
            level: "60"
        }, {
            name: "Angular 1.5x",
            level: "55"
        }, {
            name: "Jquery-Bootstrap",
            level: "70"
        }, {
            name: "Flask, Django",
            level: "50"
        }, {
            name: "NodeJS",
            level: "70"
        }, {
            name: "MongoDB, mySQL",
            level: "50"
        }, {
            name: "Java",
            level: "50"
        }, ]
    }
});

app.component('projects', {
    templateUrl: 'components/project.html',
    controller: function() {
        this.projects = [{
            name: "FASHION WEB SHOP",
            time: "Oct-Dec 2016",
            description: "The prototype of online commerce site to grasp the idea of component-based concept using modern Front-end tools and frameworks (React, Redux, ES6 JavaScript, SASS, Bootstrap, Flask, SQLAlchemy and Webpack).",
            demo: "http://atshop.pythonanywhere.com/",
            github: "https://github.com/anhnguyen300795/Webshop",
            image: "image/atshop.png"
        }, {
            name: "PIZZA ONLINE STORE",
            time: "May-June 2016",
            description: "My personal side-project to familiarize myself with Single-Page-Application concept. Technologies used: AngularJS, Jquery, Flask, Bootstrap.",
            demo: "http://zozosuper.pythonanywhere.com/",
            github: "https://github.com/anhnguyen300795/AngularJS-project",
            image: "image/pizza.png"
        }, {
            name: "FACIAL RECOGNITION",
            time: "Dec 2016",
            description: "Our prototype at Hackathon Hack The Office 2016. Our system authenticates users by recognising their faces from their portraits then we detect their emotions. Technologies used: Golang(Gocraft framework), Python(Flask framework), public machine learning APIs from Microsoft, Imgur APIs.",
            demo: "https://github.com/anhnguyen300795/Facial-recognition-web-app",
            github: "https://github.com/anhnguyen300795/Facial-recognition-web-app",
            image: "image/face.png"
        }, ]
    }
});

app.component('foot', {
    templateUrl: 'components/footer.html'
});
