import React, { Component } from 'react';
import "./Single.css";
import { CheckCircleOutlined } from '@ant-design/icons';
import Data from "../book.json";
import { Redirect } from 'react-router-dom';
class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: [],
            isRedirect: false
        };
    }
    componentWillMount() {
        if (this.props.match.params.data == "sach-ban-chay") {
            this.setState({ book: Data.listLeft1 });
        }
        else if (this.props.match.params.data == "sach-van-hoc-moi") {
            this.setState({ book: Data.listLeft2 });
        }
        else if (this.props.match.params.data == "sach-ban-chay-trong-tuan") {
            this.setState({ book: Data.listRight1 });
        }
        else {
            this.setState({ book: Data.listRight2 });
        }

    }
    buttonBuy = () => {
        this.setState({
            isRedirect: true
        });
    }
    render() {
        if (this.state.isRedirect) {
            return (
                <Redirect to="/" />
            )
        }
        let bid = parseInt(this.props.match.params.id, 10)
        let listBook = this.state.book.map((item, i) => {
            if (item.id === bid) {
                return (
                    <div className="container-body_white">
                        <div className="single-title">
                            <ul className="title-link">
                                <li>Trang chủ </li>
                                <li>Sách Văn Học Trong Nước </li>
                                <li>Tự truyện - hồi ký </li>
                                <li>{item.name}</li>
                            </ul>
                        </div>
                        <div className="single-book-inf">
                            <div className="single-book-img">

                                <div class="book-container">

                                    <div class="book">

                                        <div class="book-cover">
                                        <img src={item.image} className="imgx" />
                                        </div>

                                        <div class="book-spine">
                                            <h6>{item.name}</h6>
                                        </div>

                                    </div>

                                </div>




                            </div>
                            <div className="single-book-detail">
                                <h1>{item.name}</h1>
                                <div className="single-book-detail-author">
                                    <p>Tác giả: <span className="single-author">{item.author}</span></p>
                                    <p>Nhà xuất bản: Nxb Hội Nhà Văn</p>
                                    <p>Nhà phát hành: Tác giả <span className="single-author">{item.author}</span></p>
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
                                    <div className="book-infor-right-body">
                                        <p>Giá bìa <span id="giabia">{item.oldprice}</span></p>
                                        <p>Giá bán <span id="giaban">{item.newprice}</span></p>
                                        <p>Tiết kiệm <span id="tietkiem">17000đ</span></p>
                                        <p>Chất lượng sách <span id="chatluong">Loại A(?)</span></p>
                                        <div className="buttons_added">
                                            <span>Số lượng </span>
                                            <input className="minus is-form" type="button" defaultValue="-" />
                                            <input aria-label="quantity" className="input-qty" max="10" min="1" name="" type="number" defaultValue="1" />
                                            <input className="plus is-form" type="button" defaultValue="+" />
                                        </div>
                                    </div>
                                    <button onClick={this.buttonBuy}>MUA NGAY</button>
                                </div>
                            </div>
                        </div>
                        <div className="single-book-content">
                            <div className="single-book-content-title">
                                <span>Giới thiệu sách</span>
                            </div>
                            <div className="single-book-infor">
                                <h3>{item.name}</h3>
                                <div className="inf-author">
                                    <div className="book-infor-right-title"><span className="green">Thông tin tác giả</span></div>
                                    <div className="name-author-content">
                                        <h4 className="green">{item.author}</h4>
                                        <p className="green">Vào trang riêng của tác giả</p>
                                        <p className="green">Xem tất cả các sách của tác giả</p>
                                    </div>
                                </div>
                                <p>Đây là một cuốn sách viết về đại dịch Covid-19. Tôi nói thế chắc bạn xem tên sách sẽ đoán được ra nội dung của nó: Một người từ Paris về nước trong mùa dịch và phải đi cách ly 14 ngày. Người đó là Cù Thu Hương, học và làm tiến sĩ Tâm lý học ở Liên Xô trước đây, nhưng nay sống ở Pháp. Chị về nước ăn tết Canh Tý rồi trở lại Paris với tâm trạng háo hức chờ tháng 3 lại về để họp mặt bạn bè kỷ niệm 40 năm sang Nga học. Nhưng con virus quái ác xuất hiện từ Vũ Hán (Trung Quốc) đã đảo lộn mọi sự đối với chị cũng như tất cả mọi người khắp nơi trên thế giới. Từ đây Cù Thu Hương bước vào một hành trình bất ngờ, trải qua một "khóa học" không có trong dự tính, để nhận về cho mình những bài học thế nhân tình đời sâu sắc, thấm thía.</p>
                                <span>Mời bạn đón đọc!</span>
                                <div className="divttchitiet">
                                    <h4>Thông tin chi tiết</h4>
                                    <ul className="thongtinctiet">
                                        <li>Tác giả: <span>{item.author}</span></li>
                                        <li>Nhà phát hành: <span>{item.author}</span></li>
                                        <li>Khối lượng: <span>65000 gam</span></li>
                                        <li>Định dạng: <span>Bìa mềm</span></li>
                                        <li>Ngày phát hành: <span>22/12/2020</span></li>
                                        <li>Nhà xuất bản: <span>Nxb Hội Nhà Văn</span></li>
                                        <li>Mã sản phẩm: <span>9876043068511</span></li>
                                        <li>Ngôn ngữ: <span>Tiếng Việt</span></li>
                                        <li>Kích thước: <span>14,5 x 22,5 cm</span></li>
                                        <li>Số trang: <span>274</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return '';

        })
        return (
            <div style={{ backgroundColor: "white" }}>
                {listBook}
            </div>
        );
    }
}

export default Single;