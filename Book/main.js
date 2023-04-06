"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_1 = require("./ts");
var book1 = new ts_1.Book('Bay vien ngoc rong', 'nguyen ngoc ngan', false);
var book2 = new ts_1.Book("one piece", 'oda', true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + "by" + book.author;
    if (book.alreadyRead) {
        console.log('ban can doc' + " " + bookInfo);
    }
    else {
        console.log('ban can san sang doc' + " " + bookInfo);
    }
}
