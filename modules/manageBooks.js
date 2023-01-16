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
              document.getElementById('message').innerHTML = '*Book added to the list.';
              let shelf = [];
              const newBook = new Library(Booktitle, Bookauthor);
              shelf.push(newBook);
            }
          }
        
          removeBook(index) {
            this.index = index;
            shelf.splice(index, 1);
          }
        }
        
       
        
        
  