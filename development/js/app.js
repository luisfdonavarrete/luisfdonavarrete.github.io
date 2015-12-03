
function bio() {
	this.name = 'Luis Navarrete';
	this.role = 'Front-End Developer';
	this.summary = 'I am a Front-End developer with a solid knowledge in Responsive Web design using HTML, CSS, JavaScript and JavaScript' +
	'frameworks such as jQuery, Knockout and Backbone. I worked as a full-stack web developer in the advertising field for 2' +
	'years using PHP, CodeIgniter, JavaScript, Bootstrap. I am truly passionate about web development, I love learning new' +
	'languages and frameworks, and I am always looking for a better way to write code.';

}

function portfolio() {
	this.projects = [
		{
			name: 'Arcade Game Frogger (Clone)',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-arcade-game',
            image: 'images/arcade-game-frogger.png',
            description: "This is a personal project I built to perform a calculation " +
            "I regularly do at my job as an HVAC engineer.  This was my first ever web " +
            "development project and I'm very proud of it!  It's been very rewarding " +
            "to see most of the engineers in my office using it!  The site was built " +
            "on Google App Engine with a Python back end.",
		},
		{
			name: 'Arcade Game Frogger (Clone)',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-arcade-game',
            image: 'images/arcade-game-frogger.png',
            description: "This is a personal project I built to perform a calculation " +
            "I regularly do at my job as an HVAC engineer.  This was my first ever web " +
            "development project and I'm very proud of it!  It's been very rewarding " +
            "to see most of the engineers in my office using it!  The site was built " +
            "on Google App Engine with a Python back end.",
		},
		{
			name: 'Arcade Game Frogger (Clone)',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-arcade-game',
            image: 'images/arcade-game-frogger.png',
            description: "This is a personal project I built to perform a calculation " +
            "I regularly do at my job as an HVAC engineer.  This was my first ever web " +
            "development project and I'm very proud of it!  It's been very rewarding " +
            "to see most of the engineers in my office using it!  The site was built " +
            "on Google App Engine with a Python back end.",
		},
		{
			name: 'Arcade Game Frogger (Clone)',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-arcade-game',
            image: 'images/arcade-game-frogger.png',
            description: "This is a personal project I built to perform a calculation " +
            "I regularly do at my job as an HVAC engineer.  This was my first ever web " +
            "development project and I'm very proud of it!  It's been very rewarding " +
            "to see most of the engineers in my office using it!  The site was built " +
            "on Google App Engine with a Python back end.",
		}
	];
} 


// Activates knockout.js
ko.applyBindings(new portfolio(), document.getElementById('portfolio'));
ko.applyBindings(new bio(), document.getElementById('header'));

