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
                            <p>Danh Mục Sách</p>
                            <img id="icon-expand-arrow" src="./image/icons8-expand-arrow-26.png" />
                            <ul className="category">
                                <li>
                                    <Link to="/"><span>Home</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" /></Link>
                                </li>
                                <li>
                                    <Link to="/single"><span>Single</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" /></Link>
                                </li>
                                <a href="#">
                                    <li>
                                        <Link to="/cart"><span>Giỏ hàng</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" /></Link>
                                    </li>
                                </a>
                                <a href="#">
                                    <li><span>Sách Ngoại Văn</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" />
                                    </li>
                                </a>
                                <a href="#">
                                    <li><span>Sách Blockchain</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" />
                                    </li>
                                </a>
                                <a href="#">
                                    <li><span>Sách Kinh Tế</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" />
                                    </li>
                                </a>
                                <a href="#">
                                    <li><span>Sách Văn Học Trong Nước</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" />
                                    </li>
                                </a>
                                <a href="#">
                                    <li><span>Sách Văn Học Nước Ngoài</span><img id="icon-right" src="./image/icons8-chevron-right-24.png" />
                                    </li>
                                </a>


                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;