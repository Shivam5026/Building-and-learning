class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getBookInfo() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Published Year: ${this.year}`);
    }
  }
  
  let books = [
    ["The Miracle Morning", "Hal Elrod", 2016],
    ["The Compound Effect", "Darren Hardy", 2018],
    ["The Alchemist", "Coelho", 2010],
    ["Deep Work", "Newport", 2018]
  ];
  
  for (let i = 0; i < books.length; i++) {
    let book = new Book(books[i][0], books[i][1], books[i][2]);
    book.getBookInfo();
    console.log();
  }
  