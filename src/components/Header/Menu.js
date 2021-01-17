import React, { Component } from 'react';
import Category from "./image/icons8-sorting-52.png";
import Arrow from "./image/icons8-expand-arrow-26.png";
import ArrowRight from "./image/icons8-chevron-right-24.png";
class Menu extends Component {
    render() {
        return (
            <div id="header-category">
                <div id= "menu">
                <ul id="header-category-content">
                    <li className="container-category">
                        <img id="icon-category" src={Category} />
                        <p>Danh Mục Sách</p>
                        <img id="icon-expand-arrow" src={Arrow} />
                        <ul className="category">
                            <a href="#">
                                <li><span>Sách Bán Chạy</span><img id="icon-right" src={ArrowRight} />
                                </li>
                            </a>
                            <a href="#">
                                <li><span>Sách Mới Phát Hành</span><img id="icon-right" src={ArrowRight} />
                                </li>
                            </a>
                            <a href="#">
                                <li><span>Sách Sắp Phát Hành</span><img id="icon-right" src={ArrowRight} />
                                </li>
                            </a>
                            <a href="#">
                                <li><span>Sách Ngoại Văn</span><img id="icon-right" src={ArrowRight} />
                                </li>
                            </a>
                            <a href="#">
                                <li><span>Sách Blockchain</span><img id="icon-right" src={ArrowRight} />
                                </li>
                            </a>
                            <a href="#">
                                <li><span>Sách Kinh Tế</span><img id="icon-right" src={ArrowRight} />
                                </li>
                            </a>
                            <a href="#">
                                <li><span>Sách Văn Học Trong Nước</span><img id="icon-right" src={ArrowRight} />
                                </li>
                            </a>
                            <a href="#">
                                <li><span>Sách Văn Học Nước Ngoài</span><img id="icon-right" src={ArrowRight} />
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