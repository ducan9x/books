import React, { Component } from 'react';
import './Cart.css';
class Cart extends Component {
    render() {
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
                            <div className="cart-book">
                                <img className="img-cart" src="./image/duongmaytrendathoa-01-bia-1.png" />
                                <p>Lãnh Đạo Và Văn Hóa Doanh Nghiệp<span>1x144000đ</span></p>
                                <div className="buttons_added">
                                    {/* <span>Số lượng </span> */}
                                    <input class="minus is-form" type="button" value="-" />
                                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                                    <input class="plus is-form" type="button" value="+" />
                                </div>                            
                            </div>
                        </div>
                        <div className="tt-cart">

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Cart;