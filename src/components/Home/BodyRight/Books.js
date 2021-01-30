import React, { Component } from 'react';

class Books extends Component {
  format_curency(price) {
  	return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  render() {
      return (
          <a href="#">
          <div className="container-body-content-right-product">
            <img src={this.props.image} className="img-right-product" />
            <div className="pro-info-right">
              <div id="title-book-right">
                <span>{this.props.children}</span>
              </div>
              <div id="author-book-right"><span>{this.props.author}</span></div>
              <span id="old-price">{this.format_curency(this.props.oldprice)} ₫</span>
              <span id="new-price">{this.format_curency(this.props.newprice)} ₫</span>
            </div>
          </div>
        </a>
      );
  }
}

export default Books;