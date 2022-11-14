import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
// eslint-disable-next-line space-before-function-paren
window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    // get the id from URL
    const id = params.get('id');
    // use the id to fetch the dog
    const dog = await getDog(id);
    // render and append this dog's details to the container
    const dogDetailEl = renderDogDetail(dog);
    dogDetailContainer.append(dogDetailEl);
});
