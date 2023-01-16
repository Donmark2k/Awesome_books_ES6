import showContact from './modules/showContact.js';
import showAdd from './modules/showAdd.js';
import showList from './modules/showList.js';
// import displayTime from './modules/displayTime';
import { DateTime } from './modules/luxon.js';
import Library from './modules/manageBooks.js';


// Library.addBook(Booktitle, Bookauthor);
// Library.showBooks();
// obj.removeBook(index);


showList();
showAdd();
showContact();
Library.addBook();

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date').innerHTML = currentDate;


let shelf = [];


function printBooks() {
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
  
  buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();
  obj.addBook(inputTitle.value, inputAuthor.value);
  printBooks();

  inputTitle.value = '';
  inputAuthor.value = '';
});

  const stringShelf = localStorage.getItem('shelf');
  const obj = new Library();
  
  if (stringShelf) {
    const parsedShelf = JSON.parse(stringShelf);
    // if (parsedShelf !== null) {
    shelf = parsedShelf;
    // }
  }

  booklist.innerHTML = innerhtml;

  shelf.forEach((book, index) => {

    const removeBtn = document.getElementById(`remove-btn${index}`);
    removeBtn.addEventListener('click', () => {
      obj.removeBook(index);
      printBooks();
    });
  });

  localStorage.setItem('shelf', JSON.stringify(shelf));
}

printBooks();





// let shelf = [];

// class Library {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   addBook(Booktitle, Bookauthor) {
//     this.title = Booktitle;
//     this.author = Bookauthor;
//     // if (Booktitle && Bookauthor) {
//     if (Booktitle === '' || Bookauthor === '') {
//       document.getElementById('message').innerHTML = '*Please provide a title and author.';
//     } else {
//       document.getElementById('message').innerHTML = '*Book added to the list.';
//       const newBook = new Library(Booktitle, Bookauthor);
//       shelf.push(newBook);
//     }
//   }

//   removeBook(index) {
//     this.index = index;
//     shelf.splice(index, 1);
//   }
// }

// const booklist = document.querySelector('#book-list');
// const inputTitle = document.getElementById('title');
// const inputAuthor = document.getElementById('author');
// const buttonAdd = document.getElementById('add-btn');

// const stringShelf = localStorage.getItem('shelf');
// const obj = new Library();

// if (stringShelf) {
//   const parsedShelf = JSON.parse(stringShelf);
//   // if (parsedShelf !== null) {
//   shelf = parsedShelf;
//   // }
// }

// function printBooks() {
//   let innerhtml = '';

//   shelf.forEach((book, index) => {
//     innerhtml += `
//     <div>
//         <p>"${book.title}" by ${book.author} </p> 
//         <button id="remove-btn${index}">Remove</button>
//             </div>`;
//   });

//   booklist.innerHTML = innerhtml;

//   shelf.forEach((book, index) => {
//     const removeBtn = document.getElementById(`remove-btn${index}`);
//     removeBtn.addEventListener('click', () => {
//       obj.removeBook(index);
//       printBooks();
//     });
//   });

//   localStorage.setItem('shelf', JSON.stringify(shelf));
// }

// printBooks();

// buttonAdd.addEventListener('click', (event) => {
//   event.preventDefault();
//   obj.addBook(inputTitle.value, inputAuthor.value);
//   printBooks();

//   inputTitle.value = '';
//   inputAuthor.value = '';
// });

// const date = document.getElementById('date');
// const listLink = document.getElementById('list-link');
// const addLink = document.getElementById('add-link');
// const contactLink = document.getElementById('contact-link');
// const listSection = document.querySelector('.list-section');
// const addSection = document.querySelector('.add-section');
// const contactSection = document.querySelector('.contact-section');

// function showDateTime() {
//   const d = new Date();
//   date.innerHTML = d.toLocaleString('en-GB');
// }
// showDateTime();
// setInterval(showDateTime, 1);

// listLink.addEventListener('click', () => {
//   listSection.style.display = 'block';
//   addSection.style.display = 'none';
//   contactSection.style.display = 'none';
// });

// addLink.addEventListener('click', () => {
//   document.getElementById('message').innerHTML = '';
//   listSection.style.display = 'none';
//   addSection.style.display = 'block';
//   contactSection.style.display = 'none';
// });

// contactLink.addEventListener('click', () => {
//   listSection.style.display = 'none';
//   addSection.style.display = 'none';
//   contactSection.style.display = 'block';
// });