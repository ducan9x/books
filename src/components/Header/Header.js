import React, { Component } from 'react';
import Menu from './Menu';
import CartMini from "../Cart/CartMini";
import { SearchOutlined } from "@ant-design/icons";
class Header extends Component {
    render() {
        return (
            <div className="container-fix">
                <div className="container-header-body">
                    <a><img id="img-logo" src='./image/vnb_logo_2x.png' /></a>
                    <input className="container-header-body-search" type="search" placeholder="Tìm kiếm tựa sách, tác giả" aria-label="Search" />
                    {/* <img id="icon-search" src='./image/icons8-search-50.png' /> */}
                    <SearchOutlined id="icon-search"/>
                    <button id="btn-search" type="submit">Tìm kiếm</button>
                    <div className="btncart" tabIndex="1"><img id="icon-cart" src="image/icon-cart.png" /> </div>
                    <CartMini />
                    <div className="btn-group">
                        <a href="#" className="btn btn-login">| Đăng nhập </a>
                        <a href="#" className="btn" id="btn-logout">| Đăng ký</a>
                    </div>
                    
                </div>
               <Menu />
               
            </div>

        );
    }
}

export default Header;