import React, { Component } from 'react';

class Book extends Component {
    format_curency(price) {
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        console.log(this.props)
        return (
            <a href="#">
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
            </a>

        );
    }
}

export default Book;