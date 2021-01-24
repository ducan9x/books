import React, { Component } from 'react';
import './Cart.css';
import { Link } from "react-router-dom";
class CartMini extends Component {
    render() {
        return (
            <div className="containerCartMini">
                <div className="product">
                    <img src="image/image-right.jpg" className="img-product"/>
                    <div className="title-prod">Người Bán Hàng Vĩ Đai Nhất Thế Giới</div>
                    <div className="qty-price">
                        <span>Số lượng: 2</span>
                        <div><span>Giá: <span className="cart-price">154000 đ</span></span></div>
                    </div>
                    {/* <div className="buttons_added">
                        <input class="minus is-form" type="button" value="-" />
                        <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                        <input class="plus is-form" type="button" value="+" />
                    </div> */}
                </div>
                <div className="product">
                    <img src="image/image-right.jpg" className="img-product"/>
                    <div className="title-prod">Người Bán Hàng Vĩ Đai Nhất Thế Giới</div>
                    <div className="qty-price">
                        <span>Số lượng: 2</span>
                        <div><span>Giá: <span className="cart-price">154000 đ</span></span></div>
                    </div>
                </div>

                <div className="cart-moreinfo"><Link to="/cart"><a href="#">Xem Thêm</a></Link></div>
            </div>
        );
    }
}

export default CartMini;