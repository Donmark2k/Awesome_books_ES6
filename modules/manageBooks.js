export default class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook(Booktitle, Bookauthor) {
    this.title = Booktitle;
    this.author = Bookauthor;
    if (Booktitle === '' || Bookauthor === '') {
      document.getElementById('message').innerHTML = '*Please provide a title and author.';
    } else {
      const shelf = JSON.parse(localStorage.getItem('shelf')) || [];
      const newBook = new Library(Booktitle, Bookauthor);
      shelf.push(newBook);
      localStorage.setItem('shelf', JSON.stringify(shelf));
      document.getElementById('message').innerHTML = '*Book added to the list.';
    }
  }

  removeBook(index) {
    this.index = index;
    const shelf = JSON.parse(localStorage.getItem('shelf')) || [];
    shelf.splice(index, 1);
    localStorage.setItem('shelf', JSON.stringify(shelf));
  }
}
