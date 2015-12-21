
function bio() {
	this.name = 'Luis Navarrete';
	this.role = 'Front-End Developer';
	this.picture = 'assets/img/me.jpg';
	this.summary = 'I am a Front-End developer with a solid knowledge in Responsive Web design using HTML, CSS, JavaScript and JavaScript ' +
	'frameworks such as jQuery, Knockout and Backbone. I worked as a full-stack web developer in the advertising field for 2 ' +
	'years using PHP, CodeIgniter, JavaScript, Bootstrap. I am truly passionate about web development, I love learning new ' +
	'languages and frameworks, and I am always looking for a better way to write code.';
}

function portfolio() {
	
	var template = _.template($('#modal-template').html());
	this.projects = [
		{
			name: 'Calories Health Tracker',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-calories-health-tracker/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-calories-health-tracker/',
            image: 'assets/img/health-tracker.png',
            description: 'A single-page web application built using the Backbone and Firebase, ' +
			'that tracks the user\'s calorie intake. Users can search for food items provided by ' +
			'the Nutritionix API and select them. Once they are selected, they will be added to the ' +
			'list of foods the user is tracking. The total calorie count will also update to reflect ' +
			'the new daily total.' 
		},
		{
			name: 'Neighborhood Map',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-neighborhood-map-project/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-neighborhood-map-project/',
            image: 'assets/img/neighbothood-map.png',
            description: 'Fourth project for Udacity Front-end Nanodegree. This app is an ' +
			'interactive map that lists 30 popular places according to the city the user is ' +
			'in. The places are gotten from the Foursquare API using the user location. If ' +
			'the user does not give permission the places listed are from Chicago, IL. ' +
			'There is a search bar that allows the user to filter the places by name. To see more ' +
			'information about the place, the place can be selected by clicking on the listView or ' +
			'by clicking on the marker. the information is shown in a infoWindow.'
		},
		{
			name: 'Web Optimization',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-website-optimization/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-website-optimization/',
            image: 'assets/img/website-optimization.png',
            description: 'This was the fourth project in Udacity Front-End Web Developer Nanodegree. ' +
			'The objective in this project was to identify and perform optimizations to achieve a ' +
			'PageSpeed score of 90 or above. Grunt.js and grunt.js modules were used to automate tasks ' +
			'like Javascript, CSS and Image minification, and Inline critical CSS between others.'
		},
		{
			name: 'Arcade Game Frogger',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-arcade-game',
            image: 'assets/img/arcade-game-frogger.png',
            description: 'This was the third project in Udacity Front-End Web Developer ' +
			'Nanodegree. The objective of this project was to gain experience in OOP with ' +
			'JavaScript. In this project I had the opportunity to get creative and explore ' +
			'some interesting concept like, Finite State Machine (FSM) which I implemented using JavaScript.'
		},
		{
			name: 'Feed Reader Testing',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-feedreader-jasmine/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-feedreader-jasmine',
            image: 'assets/img/feed-reader-testing.png',
            description: 'Fifth project for Udacity Front-end Nanodegree. In this project I ' + 
			'was given a web-based application that reads RSS feeds, but the application had ' +
			'an incomplete test suite. Coding the test suite required me to explore the ' +
			'application to understand of how it works.'
		}		
	];
	
	this.showModal = function(item){
		var $modalView = $('#portfolio-modal');
		$modalView.html(template(item)); 
		$modalView.modal('show');		
	};
}

function contact(){
	this.contactLinks = [
		{
			name: 'Linkedin',
			link: '//ca.linkedin.com/in/navarreteluis',
			icon: 'fa fa-linkedin'
		},
		{
			name: 'Github',
			link: '//github.com/luisfdonavarrete',
			icon: 'fa fa-github'
		},			
		{
			name: 'Phone',
			link: 'tel:19054647431',
			icon: 'fa fa-phone-square'
		}		
	];
	
}


// Activates knockout.js
ko.applyBindings(new portfolio(), document.getElementById('portfolio'));
ko.applyBindings(new bio(), document.getElementById('about'));
ko.applyBindings(new contact(), document.getElementById('contact'));

$('.navbar-nav a, .side-menu a').click(function (e) {
	e.preventDefault();
	var target = $(this).attr('href');
	var topScroll = $(target).position().top;
	$('body').animate({
		scrollTop: topScroll
	}, 1500, function () {
		location.hash = target;
		if(!$('body').hasClass('menu-hidden')){
			$('body').addClass('menu-hidden');
		}
	});	
	return false;
});

$('.project-entry').hover(function(e){
	$(this).find('.overlay').toggleClass('active');
},
function(e){
	$(this).find('.overlay').toggleClass('active');
});

$('.navbar-brand').click(function(e){
	e.preventDefault();
	$('body').toggleClass('menu-hidden');
});

