import showContact from './modules/showContact.js';
import showAdd from './modules/showAdd.js';
import showList from './modules/showList.js';
import { DateTime } from './modules/luxon.js';
import Library from './modules/manageBooks.js';

// The funtions below display the header
showList();
showAdd();
showContact();

// Display the time
setInterval(() => {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('date').innerHTML = currentDate;
}, 1000);

// Display the book in the array
function printBooks() {
  const shelf = JSON.parse(localStorage.getItem('shelf')) || [];
  let innerhtml = '';

  shelf.forEach((book, index) => {
    innerhtml += `
    <div>
        <p>"${book.title}" by ${book.author} </p> 
        <button id="remove-btn${index}">Remove</button>
            </div>`;
  });

  const booklist = document.querySelector('#book-list');
  const inputTitle = document.getElementById('title');
  const inputAuthor = document.getElementById('author');
  const buttonAdd = document.getElementById('add-btn');

  // Calling the event listener when the add button is clicked

  buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const obj = new Library();
    obj.addBook(inputTitle.value, inputAuthor.value);
    printBooks();

    inputTitle.value = '';
    inputAuthor.value = '';
  });

  booklist.innerHTML = innerhtml;

  // Delete the book in the array.
  shelf.forEach((book, index) => {
    const removeBtn = document.getElementById(`remove-btn${index}`);
    removeBtn.addEventListener('click', () => {
      const obj = new Library();
      obj.removeBook(index);
      printBooks();
    });
  });
}

// Calling the display function
printBooks();