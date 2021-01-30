import React, { Component } from 'react';
import './Cart.css';
import CartBook from "./CartBook";
class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    name: "Bắt Trẻ Đồng Xanh (Tái Bản 2020)",
                    author: "Jerome David Salinger",
                    image:"./image/bat-tre-dong-xanh.jpg",
                    infor: "Bắt Trẻ Đồng Xanh là một cuốn sách nhỏ, mỏng và chẳng giống ai. Điều đó cũng...",
                    sale: "-25%",
                    price: "248000",
                    newprice: "210000",
                    quantity: "2"
                },
                {
                    name: "Người Bán Hàng Vĩ Đại Nhất Thế Giới",
                    author: "Og Mandino",
                    image: "./image/image-right.jpg" ,
                    infor: "Người Bán Hàng Vĩ Đại Nhất Thế Giới kể về câu chuyện của Hafid, một cậu bé...",
                    sale: "-20%",
                    price: "148000",
                    newprice: "118000",
                    quantity: "4"
                },
                {
                    name: "Người Bán Hàng Vĩ Đại Nhất Thế Giới",
                    author: "Og Mandino",
                    image: "./image/image-right.jpg" ,
                    infor: "Người Bán Hàng Vĩ Đại Nhất Thế Giới kể về câu chuyện của Hafid, một cậu bé...",
                    sale: "-20%",
                    price: "148000",
                    newprice: "118000",
                    quantity: "4"
                },
                {
                    name: "Người Bán Hàng Vĩ Đại Nhất Thế Giới",
                    author: "Og Mandino",
                    image: "./image/image-right.jpg" ,
                    infor: "Người Bán Hàng Vĩ Đại Nhất Thế Giới kể về câu chuyện của Hafid, một cậu bé...",
                    sale: "-20%",
                    price: "148000",
                    newprice: "118000",
                    quantity: "4"
                },
                {
                    name: "Người Bán Hàng Vĩ Đại Nhất Thế Giới",
                    author: "Og Mandino",
                    image: "./image/image-right.jpg" ,
                    infor: "Người Bán Hàng Vĩ Đại Nhất Thế Giới kể về câu chuyện của Hafid, một cậu bé...",
                    sale: "-20%",
                    price: "148000",
                    newprice: "118000",
                    quantity: "4"
                }
            ]
        };
    }
    deleteBook = (id) =>{
        var arrBook = this.state.books;
        arrBook.splice(id,1);
        this.setState({books : arrBook})
    }
    editQuantityBook = (id,quantity) =>{
        var arrBook = this.state.books;
        arrBook[id].quantity = quantity;
        this.setState({books : arrBook})
    }
    render() {
        let listBook = this.state.books.map((item , i) => {
            return (
                <CartBook key = {i}
                index = {i}
                edit={ (id,quantity) =>{this.editQuantityBook(id,quantity)} }
                delete={ (id) =>{this.deleteBook(id)} }
                name ={item.name}
                image={item.image}
                quantity={item.quantity}
                price={item.price}
            />
            )  
        })
        return (
            <div className="cart-container">
                <div className="cart-container-body">
                    <div className="cart-container-body-title">
                        <img src='./image/vnb_logo_2x.png' />
                    </div>
                    <h2>Giỏ Hàng</h2>
                    <div className="cart-container-body-content">
                        <div className="cart-body">
                            <h2>Sản Phẩm</h2>
                            {/* <div className="cart-book">
                                <img className="img-cart" src="./image/duongmaytrendathoa-01-bia-1.png" />
                                <p>Lãnh Đạo Và Văn Hóa Doanh Nghiệp<span>1x144000đ</span></p>
                                <p className="soluong">Số lượng: 1</p>
                                <div className="buttons_added">
                                    <input class="minus is-form" type="button" value="-" />
                                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                                    <input class="plus is-form" type="button" value="+" />
                                </div> 
                                <button>Xóa</button><button>Sửa</button>
                            </div> */}
                            {listBook}
                        </div>
                        <div className="tt-cart">
                            <div className="tt-cart-title">
                                <span>Tóm tắt đơn hàng</span>
                            </div>
                            <table className="table">
                                <tr>
                                    <td className="left">Sản phẩm</td>
                                    <td className="right">1</td>
                                  
                                </tr>
                                <tr>
                                    <td className="left">Phí vận chuyển</td>
                                    <td className="right">Miễn phí</td>
                                  
                                </tr>
                                <tr>
                                    <td className="left">Tạm tính</td>
                                    <td className="right">144000 đ</td>
                                </tr>
                                
                            </table>
                            <div className="total-price">
                                    <p>Tổng cộng
                                    <span>144000 đ</span></p>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Cart;