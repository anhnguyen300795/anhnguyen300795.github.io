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
            image: "https://i.stack.imgur.com/Mmww2.png",
            name: "JavaScript"
        }, {
            image: "https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png",
            name: "ReactJs"
        }, {
            image: "http://blog.getstream.io/wp-content/uploads/2016/05/svgporn-redux-300x286.png",
            name: "Redux"
        }, {
            image: "http://cdn.dev.classmethod.jp/wp-content/uploads/2016/11/angular_high.png",
            name: "Angular"
        }, {
            image: "http://cubettech.com/wp-content/uploads/2015/10/meteor-icon2.svg",
            name: "MeteorJS"
        }, {
            image: "https://www.clouda.ca/wp-content/uploads/2013/03/mongodb-logo.png",
            name: "MongoDB"
        }, {
            image: "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-512.png",
            name: "NodeJS"
        }, {
            image: "http://ethiopiarabb.com/assets/images/icon-jquery.png",
            name: "Jquery"
        }, {
            image: "http://marinam.tngconsulting.ca/wp-content/uploads/2015/06/marinamilette_sass.png",
            name: "Sass"
        }, {
            image: "http://lanet.co/img/language/boostrap.svg",
            name: "Bootstrap"
        }, {
            image: "http://iconshow.me/media/images/System/plex-icons/png/Other/512/python.png",
            name: "Python"
        }, {
            image: "http://nedbatchelder.com/pix/django-icon-256.png",
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
