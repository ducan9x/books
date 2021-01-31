import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
    format_curency(price) {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    render() {
        
        return (
            <Link to={"chi-tiet/" + this.to_slug(this.props.data) + "/"  + this.props.bid + "/" + this.to_slug(this.props.name) + ".html"}>
                <div className="box-info-book">
                    <div id="container-image-border">
                        <img src={this.props.image} id="image-border" />
                    </div>
                    <div className="box-info-book-right">
                        <div className="box-title-book">
                            <div id="box-title-book-title"><span>{this.props.name} </span>
                            </div>
                            <span id="author-book-right">{this.props.author}</span>
                        </div>
                        <div className="text-content-book">
                            <p>{this.props.infor}</p>
                        </div>
                    </div>
                    <div className="box-info-book-price">
                        <div className="box-sale-off">
                            <span>{this.props.sale}</span>
                        </div>
                        <div className="box-sale-off-price">
                            <span id="old-price">{this.format_curency(this.props.oldprice)} ₫</span>
                            <span id="new-price">{this.format_curency(this.props.newprice)} ₫</span>
                        </div>
                    </div>
                </div>
            </Link>

        );
    }
}

export default Book;