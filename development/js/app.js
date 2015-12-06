
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
	this.projects = [
		{
			name: 'Calories Health Tracker',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-calories-health-tracker/',
            image: 'assets/img/health-tracker.png',
            description: '' 
		},
		{
			name: 'Neighborhood Map',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-neighborhood-map-project/',
            image: 'assets/img/neighbothood-map.png',
            description: ''
		},
		{
			name: 'Web Optimization',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-website-optimization/',
            image: 'assets/img/website-optimization.png',
            description: ''
		},
		{
			name: 'Arcade Game Frogger',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-arcade-game/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-arcade-game',
            image: 'assets/img/arcade-game-frogger.png',
            description: ''
		},
		{
			name: 'Feed Reader Testing',
            url: '//luisfdonavarrete.github.io/frontend-nanodegree-feedreader-jasmine/',
            github: '//github.com/luisfdonavarrete/frontend-nanodegree-feedreader-jasmine',
            image: 'assets/img/feed-reader-testing.png',
            description: ''
		}		
	];
} 


// Activates knockout.js
ko.applyBindings(new portfolio(), document.getElementById('portfolio'));
ko.applyBindings(new bio(), document.getElementById('about'));

$('.navbar-nav a').click(function (e) {
	e.preventDefault();
	var target = $(this).attr('href');
	var topScroll = $(target).position().top;
	$('body').animate({
		scrollTop: topScroll
	}, 1500, function () {
		location.hash = target;
	});	
	return false;
});

