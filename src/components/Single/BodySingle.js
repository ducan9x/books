import React, { Component } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
class BodySingle extends Component {
    render() {
        return (
            <div className="container-body_white">
                <div className="single-title">
                    <ul className="title-link">
                        <li>Trang chủ ></li>
                        <li>Sách Văn Học Trong Nước ></li>
                        <li>Tự truyện - hồi ký ></li>
                        <li>Paris + 14</li>
                    </ul>
                </div>
                <div className="single-book-inf">
                    <div className="single-book-img">
                        <img src="./image/paris_14.jpg" className="single-book-image" />
                    </div>
                    <div className="single-book-detail">
                        <h1>Paris + 14</h1>
                        <div className="single-book-detail-author">
                            <p>Tác giả: <span className="single-author">Cù Thu Hương</span></p>
                            <p>Nhà xuất bản: Nxb Hội Nhà Văn</p>
                            <p>Nhà phát hành: Tác giả <span className="single-author">Cù Thu Hương</span></p>
                        </div>
                        <div className="single-book-inf-content">
                            <span>Đây là một cuốn sách viết về đại dịch Covid-19. Tôi nói thế chắc bạn xem tên sách sẽ đoán được ra nội dung của nó: Một người từ Paris về nước trong mùa dịch và phải đi cách ly 14 ngày. Người đó là Cù Thu Hương, học và làm tiến sĩ Tâm lý ...</span>
                        </div>
                        <div className="single-infor-attached">
                            <h4>Thông tin kèm theo</h4>
                            <ul>
                                <li><CheckCircleOutlined className="icon-check" /> Có dịch vụ bọc sách plastic cao cấp cho sách này <a className="single-author" href="#">Chi tiết</a></li>
                                <li><CheckCircleOutlined className="icon-check" /> Miễn phí giao hàng toàn quốc cho Đơn hàng từ 250.000đ (Áp dụng từ 1/2/2015. <a className="single-author" href="#">Xem chi tiết</a>)</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="payment-infor">
                    <div className="book-infor-right">
                            <div className="book-infor-right-title"><span>Thông tin thanh toán</span></div>
                            <div className="book-infor-right-body"></div>
                            
                        </div>
                    </div>
                </div>
                <div className="single-book-content"></div>
            </div>
        );
    }
}

export default BodySingle;