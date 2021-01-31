import React, { Component } from 'react';
import Books from './Books';
import Data from "../book.json";
class List2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            book : Data.listRight2
        };
    }
    render() {
        let listBook = this.state.book.map((item,i)=>{
            return(
                <Books key ={i}
                data = {"Báo chí giới thiệu"}
                bid = {item.id}
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
                    <span className="txt-title">Báo Trí Giới Thiệu</span>
                </div>
                <div className="container">
                    {listBook}
                </div>
            </div>
        );
    }
}

export default List2;