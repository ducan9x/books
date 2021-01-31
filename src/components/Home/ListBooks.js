import React, { Component } from 'react';
import Book from './Book';
import Data from "../book.json";

class ListBooks extends Component {
    constructor(props) {
        super(props);
    this.state = {
            books: Data.listLeft1
        };
    }
      
      render() {
        let listBook = this.state.books.map((item , i) => {
            return (
                <Book key = {i}
                bid = {item.id}
                data = {"Sách bán chạy"}
                name ={item.name}
                author={item.author}
                image={item.image}
                infor={item.infor}
                sale={item.sale}
                oldprice={item.oldprice}
                newprice={item.newprice}
            />
            )  
        })
        return (
            <div>
                <div className="container-body-content-title">
                    <span className="txt-title">Sách Bán Chạy</span>
                    <div className="xem-them"><a href="#" id="see-more">Xem thêm</a>
                        <img id="icon-right" src="./image/icons8-chevron-right-24.png" />
                    </div>
                </div>
                <div className="box-info-wrapper">
                    {listBook}
                </div>

            </div>
        );
    }
}

export default ListBooks;