import {Book} from "./ts";
let book1 = new Book('Bay vien ngoc rong','nguyen ngoc ngan',false,);
let book2 = new Book("one piece",'oda',true);
let books = [];
books.push(book1,book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i]
    let bookInfo = book.title + "by" + book.author;
    if (book.alreadyRead){
        console.log('ban can doc'+bookInfo)
    }else{
        console.log('ban can san sang doc'+bookInfo)
    }
}