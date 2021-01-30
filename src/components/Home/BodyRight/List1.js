import React, { Component } from 'react';
import Books from './Books';
import Data from "../book.json";
class List1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            book : Data.listRight1
        };
    }
    render() {
        let listBook = this.state.book.map((item,i)=>{
            return(
                <Books key ={i}
                author={item.author}
                image={item.image}
                oldprice={item.oldprice}
                newprice={item.newprice}
                >{item.name}</Books>
            )
        })
        return (
            <div>
                {/* -------------------------------------body-right-Sách bán chạy trong tuần------------------------------ */}
                <div className="container-body-content-title">
                    <span className="txt-title"> Sách Bán Chạy Trong Tuần</span>
                </div>
                <div className="container">
                   {listBook}
                </div>
            </div>
        );
    }
}

export default List1;