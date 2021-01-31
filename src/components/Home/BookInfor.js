import React, { Component } from 'react';

class BookInfor extends Component {
    format_curency(price) {
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        return (
            <div>
                <div className="container-body-content-title">
                    <span className="txt-title">{this.props.children}</span>
                </div>
                <div className="detail_blue">
                    <div className="image-thumb">
                        <a href="#"><img src={this.props.image} id="img-right" /></a>
                    </div>
                    <div className="text-content-best-sale">
                        <div className="title-book">
                            <a className="image-border" href="#">{this.props.name}</a>
                            <span>{this.props.author}</span>
                        </div>
                        <div className="detail-book">
                            <p>{this.props.detail}</p>
                        </div>
                        {/* <hr > */}
                        <div className="price-book">
                            <div className="box-sale-off">
                                <span>{this.props.sale}</span>
                            </div>
                            <div className="box-old-price">
                                <span>{this.format_curency(this.props.oldprice)} ₫</span>
                            </div>
                            <div className="box-price">
                                <span>{this.format_curency(this.props.newprice)} ₫</span>
                            </div>
                            <input type="submit" className="btn_buy" value="Mua" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BookInfor;