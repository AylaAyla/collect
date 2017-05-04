const collectButton = document.querySelector('button.collect'); 
const exploreButton = document.querySelector('button.explore');
const myHeading = document.getElementById('myHeading');
const collectDiv = document.querySelector('.collectDiv');
const exploreDiv = document.querySelector('.exploreDiv');

exploreDiv.style.display = 'none';
collectDiv.style.display = 'none';


// Change so button can toggle when clicked
collectButton.addEventListener('click', () => {
	if (collectDiv.style.display == 'none') {
		exploreDiv.style.display = 'none';
		collectButton.textContent = 'Collecting ...';
		exploreButton.textContent = 'Explore';
	    collectDiv.style.display = 'block';
	} else {
		collectDiv.style.display = 'none';
		collectButton.textContent = 'Collect';
	}
});

exploreButton.addEventListener('click', () => {
	if (exploreDiv.style.display == 'none') {
		collectDiv.style.display = 'none';
		exploreButton.textContent = 'Exploring ...';
		collectButton.textContent = 'Collect';
	    exploreDiv.style.display = 'block';
	} else {
		exploreDiv.style.display = 'none';
		exploreButton.textContent = 'Explore';
	}
});

