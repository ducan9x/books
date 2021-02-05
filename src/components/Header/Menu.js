import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Menu extends Component {
    render() {
        return (
            <div id="header-category">
                <div id="menu">
                    <ul id="header-category-content">
                        <li className="container-category">
                            <img id="icon-category" src="./image/icons8-sorting-52.png" />
                            <p>Danh Mục</p>
                            <img id="icon-expand-arrow" src="./image/icons8-expand-arrow-26.png" />
                            <ul className="category">
                                <li>
                                    <Link to="/"><span>Home</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" /></Link>
                                </li>
                                <li>
                                    <Link to=""><span>Single</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" /></Link>
                                </li>
                                <li>
                                    <Link to="/cart"><span>Giỏ hàng</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" /></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;