import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// eslint-disable-next-line space-before-function-paren
window.addEventListener('load', async () => {
    // fetch all dogs
    const dogs = await getDogs();
    // render and append all dog cards to the container
    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
});
