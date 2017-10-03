// import { NewsSource, renderArticle, requestNews } from './article';
import { delay } from './util';

/**
 * A delayed function that sets the greeting text
 */
const setGreetingText = delay((text: string) => {
	const greeting = document.getElementById('greeting') as HTMLHeadElement;
	greeting.textContent = text;
}, 2000);

/**
 * An event listener that sets the text of the greeting
 * @param evt The `click` mouse event
 */
function clickMeClick(evt: MouseEvent) {
	evt.preventDefault();
	const clickMeButton = evt.target as HTMLButtonElement;
	clickMeButton.setAttribute('disabled', 'disabled');

	setGreetingText('Hello, FRBNY UI Summit!')
		.then(function () {
			clickMeButton.removeAttribute('disabled');
		});
}

// function loadArticlesClick(evt: MouseEvent) {
// 	requestNews(NewsSource.ARS, 'top', (articles) => {
// 		const articlesDiv = document.querySelector('#articles');
// 		articles.forEach((article) => {
// 			articlesDiv!.appendChild(renderArticle(article));
// 		});
// 	}, (error) => {
// 		console.error('[ERROR]', error);
// 	});
// }

/**
 * Function that initialises the application
 */
export function init() {
	const clickMeButton = document.getElementById('click_me') as HTMLButtonElement;
	clickMeButton.addEventListener('click', clickMeClick);
	clickMeButton.removeAttribute('disabled');

	// const articlesButton = document.getElementById('load_articles') as HTMLButtonElement;
	// articlesButton.addEventListener('click', loadArticlesClick);
	// articlesButton.removeAttribute('disabled');
}
