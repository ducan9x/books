import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="container-footer">
                <div className="cotainer-footer-h">
                    <div className="footer-content">
                        <div className="spans">
                            <label className="lbsignup">ĐĂNG KÝ NHẬN EMAI</label>
                            <span >Đăng ký nhận thông tin sách mới, sách bán</span>
                        </div>
                        <input className="txtName" type="text" placeholder="Tên của bạn"></input>
                        <input className="txtName" type="text" placeholder="Nhập email của bạn"></input>
                        <select className="list-category">
                            <option value="">Thể loại yêu thích</option>
                            <option value="all">Tất cả</option>
                            <option value="739">Sách Ngoại Văn</option>
                            <option value="348">Sách Kinh Tế </option>
                            <option value="353">Sách Văn học Trong Nước</option>
                            <option value="354">Sách Văn học Nước Ngoài</option>
                            <option value="671">Sách Thường Thức – Đời Sống</option>
                            <option value="525">Sách Thiếu Nhi</option>
                            <option value="668">Sách Phát Triển Bản Thân</option>
                            <option value="669">Sách Tin Học - Ngoại Ngữ</option>
                            <option value="670">Sách Chuyên Ngành</option>
                            <option value="357">Sách Giáo Khoa - Giáo Trình</option>
                            <option value="851">Tạp chí - Văn phòng phẩm</option>
                        </select>
                        <button className="btn-signup">đăng ký ngay</button>
                    </div>
                </div>
                <div className="cotainer-footer-b">
                    <div className="footer-content">
                        <div className="backgroud-white">
                            <div className="container-footer-top"> 
                                <div className=" footer-body-left"> 
                                    <div className="wysiwyg-content">
                                        <span className="p-highlight">Về Công Ty</span> 
                                        <ul> 
                                            <li><a href="#">Giới thiệu công ty</a></li> 
                                            <li><a href="#">Tuyển dụng</a></li> 
                                            <li><a href="#">Góc báo chí</a></li> 
                                            <li><a href="">Chương trình đại lý</a></li>
                                            <li><a href="">Chính sách bảo mật</a></li> 
                                            <li><a href="">Ứng dụng đọc ebook</a></li> 
                                        </ul>
                                    </div> 
                                </div>
                                <div className=" footer-body-left"> 
                                    <div className="wysiwyg-content">
                                        <span className="p-highlight">Trợ giúp</span> 
                                        <ul> 
                                            <li><a href="#">Quy định sử dụng</a></li> 
                                            <li><a href="#">Hướng dẫn mua hàng</a></li> 
                                            <li><a href="#">Phương thức thanh toán</a></li> 
                                            <li><a href="">Phương thức vận chuyển</a></li>
                                            <li><a href="">Các câu hỏi thường gặp</a></li>
                                            <li><a href="">Bọc sách bìa bằng Plastic</a></li> 
                                        </ul>
                                    </div> 
                                </div>
                                <div className=" footer-body-left"> 
                                    <div className="wysiwyg-content">
                                        <span className="p-highlight">Tin tức sách</span> 
                                        <ul> 
                                            <li><a href="#">Tin tức</a></li> 
                                            <li><a href="#">Chân dung</a></li> 
                                            <li><a href="#">Điểm sách</a></li> 
                                            <li><a href="">Phê bình</a></li>
                                        </ul>
                                    </div> 
                                </div>
                                <div className=" footer-body-left"> 
                                    <div className="wysiwyg-content">
                                        <span className="p-highlight">Chấp nhận thanh toán</span> 
                                        <img src="./image/thanh-toan.PNG" />
                                    </div> 
                                </div>
                                <div className=" footer-body-left"> 
                                    <div className="wysiwyg-content">
                                        <span className="p-highlight">Đối tác vận chuyển</span> 
                                        <img src="./image/dtbh.PNG" />
                                    </div> 
                                </div>
                                <div className=" footer-body-left"> 
                                    <div className="wysiwyg-content">
                                        <span className="p-highlight">Đối tác bán hàng</span> 
                                        <img src="./image/dtvc.PNG" />
                                    </div> 
                                </div>
                            </div>
                            
                        <p className="p-highlight">Thường được tìm kiếm</p>
                        <ul className="menu-category"> 
                            <li><a href="#" >truyện dan brown</a></li> 
                            <li><a href="#" >sách warren buffett</a></li> 
                            <li><a href="#">sách digital marketing</a></li> 
                            <li><a href="#">truyện mới của nguyễn nhật ánh</a></li> 
                            <li><a href="#">sách cho con</a></li> 
                            <li><a href="#" >sách hay về gia đình</a></li> 
                            <li><a href="#">giáo trình tiếng anh trẻ em</a></li> 
                            <li><a href="#" >sách hay về kinh tế</a></li> 
                            <li><a href="#">sách về đầu tư</a></li> 
                            <li><a href="#" >sách doanh nhân</a></li> 
                            <li><a href="#">sach hoc tieng trung</a></li> 
                            <li><a href="#">tiểu thuyết tình yêu</a></li> 
                            <li><a href="#" >sách y học</a></li> 
                            <li><a href="#">tủ sách gia đình</a></li> 
                            <li><a href="#">sách dạy kỹ năng giao tiếp</a></li> 
                            <li><a href="#">sách blockchain</a></li> 
                            <li><a href="#">sách du học</a></li> 
                            <li><a href="#" >sách kỹ năng mềm</a></li> 
                            <li><a href="#">sách làm giàu</a></li> 
                            <li><a href="#">sách phong thủy cổ</a></li> 
                            <li><a href="#">sách khởi nghiệp</a></li> 
                            <li><a href="#">sách bán hàng</a></li> 
                            <li><a href="#">sách về đầu tư chứng khoán</a></li> 
                            <li><a href="#">sách dạy nấu ăn</a></li> 
                            <li><a href="#">sách tâm lý về tình yêu</a></li> 
                            <li><a href="#">sách quản lý nhân sự</a></li> 
                            <li><a href="#">sách về quản trị kinh doanh</a></li> 
                            <li><a href="#">sách tài chính</a></li> 
                            <li><a href="#">sách hay cho thiếu nhi</a></li> 
                            <li><a href="#">sách tự học tiếng anh giao tiếp</a></li> 
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="cotainer-footer-f">
                    <div className="footer-content">

                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;