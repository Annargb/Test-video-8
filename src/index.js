import axios from 'axios';

const list = document.querySelector('.js-books');
// const categories = document.querySelector('.js-categories');

const BASE_URL = 'https://books-backend.p.goit.global/books/';
const categories = {
  top: 'top-books',
};

async function fetchTopBooks(category) {
  return await axios.get(`${BASE_URL}${category}`);
}

// async function fetchTopBooks() {
//   return await axios.get(`${BASE_URL}top-books`);
// }

fetchTopBooks(categories.top)
  .then(response => {
    console.log(response.data);
    renderBooks(response.data);
  })
  .catch(error => console.log(error));

function renderBooks(arr) {
  arr.map(({ books, list_name }) => {
    const categoriesHeader = `<h2>${list_name}</h2>`;
    const button = `<button type="button">See More</button>`;

    const markup = books
      .map(
        ({
          author,
          book_image,
          title,
          _id,
        }) => `<li class="book-card" data-id="${_id}">
         <img class="book-img" src="${book_image}" alt="" width="335">
         <h2 class="book-title">${title}</h2>
         <p class="book-author">${author}</p>
         </li>`
      )
      .join('');

    list.insertAdjacentHTML('beforeend', categoriesHeader);
    list.insertAdjacentHTML('beforeend', markup);
    list.insertAdjacentHTML('beforeend', button);
  });
}

// console.log(window.innerWidth);
