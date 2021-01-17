import React, { Component } from 'react';
import AuthorInfor from './AuthorInfor';
import BookInfor from './BookInfor';
import ListBooks from './ListBooks';
import ListBooks2 from "./ListBooks2";
class BodyLeft extends Component {
    render() {
        return (
            <div className="container-body-content-left">
                <BookInfor
                image = "./image/con-chim-xanh.jpg"
                name = "Con Chim Xanh Biếc Bay Về (Bìa Cứng)"
                author = "Nguyễn Nhật Ánh"
                detail = "Không giống như những tác phẩm trước đây lấy bối cảnh vùng quê miền Trung đầy ắp những hoài niệm tuổi thơ dung dị, trong trẻo với các nhân vật ở độ tuổi dậy thì, trong quyển sách mới lần này nhà văn Nguyễn Nhật Ánh lấy bối cảnh chính là Sài Gòn Thành phố Hồ Chí Minh nơi tác giả sinh sống (như là một sự đền đáp ân tình với mảnh đất miền Nam). Các nhân vật chính trong truyện cũng “lớn” hơn, với những câu chuyện mưu sinh lập nghiệp lắm gian nan thử thách của các sinh viên trẻ đầy hoài bão. Tất nhiên không thể thiếu những câu chuyện tình cảm..."
                oldprice="270000"
                newprice="202000"
                sale = "-25%"
                >Sách Mới Của Tác Giả Nguyễn Nhật Ánh</BookInfor>
                <ListBooks />
                <BookInfor
                image = "./image/how-to-be-rich-cac-nguyen-tac-nghi-giau-lam-giau.jpg"
                name = "How To Be Rich - Các Nguyên Tắc Nghĩ Giàu - Làm..."
                author = "Đỗ Hoàng Phương An"
                detail = "Xét cho cùng, sự giàu có hay tiền bạc đều là sản phẩm của triết lý, quan điểm và thái độ. Cái đầu của triệu phú ngày nay không thể chỉ biết tới tích lũy. Một người có năng lực và tham vọng phải hiểu rằng thuật ngữ “giàu có” có vô số lớp nghĩa. Để đi tìm sự giàu có cho bản thân, anh ta phải biết làm thế nào để trở nên giàu có trên mọi nghĩa. "
                oldprice="129000"
                newprice="103000"
                sale = "-20%"
                >Sách Hay</BookInfor>
                <ListBooks2 />
                <AuthorInfor />
            </div>
        );
    }
}

export default BodyLeft;