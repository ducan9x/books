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
                                <p className="soluong">Số lượng: 1</p>
                                {/* <div className="buttons_added">
                                    <input class="minus is-form" type="button" value="-" />
                                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                                    <input class="plus is-form" type="button" value="+" />
                                </div> */}
                                <button>Xóa</button><button>Sửa</button>
                            </div>

                            <div className="cart-book">
                                <img className="img-cart" src="./image/duongmaytrendathoa-01-bia-1.png" />
                                <p>Lãnh Đạo Và Văn Hóa Doanh Nghiệp<span>1x144000đ</span></p>
                                <p className="soluong">Số lượng: 1</p>
                                {/* <div className="buttons_added">
                                    <input class="minus is-form" type="button" value="-" />
                                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                                    <input class="plus is-form" type="button" value="+" />
                                </div> */}
                                <button>Xóa</button><button>Sửa</button>
                            </div>
                            <div className="cart-book">
                                <img className="img-cart" src="./image/duongmaytrendathoa-01-bia-1.png" />
                                <p>Lãnh Đạo Và Văn Hóa Doanh Nghiệp<span>1x144000đ</span></p>
                                <p className="soluong">Số lượng: 1</p>
                                {/* <div className="buttons_added">
                                    <input class="minus is-form" type="button" value="-" />
                                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                                    <input class="plus is-form" type="button" value="+" />
                                </div> */}
                                <button>Xóa</button><button>Sửa</button>
                            </div>


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