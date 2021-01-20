import React, { Component } from 'react';
import Book from './Book';

class ListBooks2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            book: [
                {
                    name: "Gió Heo May Ngày Nắng Gián Đoạn",
                    author:"Lê Thiếu Nhơn",
                    image:"./image/gio-heo-may-ngay-nang.jpg",
                    infor:"Ở tập Gió heo may ngày nắng gián đoạn, chủ đề đã được Lê Thiếu Nhơn tập...",
                    sale:"-25%",
                    oldprice:"68000",
                    newprice:"51000"
                },
                {
                    name: "Tỏa Sáng Jessica Jung",
                    author:"Jessica Jung",
                    image:"./image/sach-toa-sang-jessica-jung.jpg",
                    infor:"Cuốn sách đầu tay của cựu thành viên nhóm nhạc huyền thoại SNSD(GIRLS'...",
                    sale:"-16%",
                    oldprice:"95000",
                    newprice:"80000"
                },
                {
                    name: "Mặt Trời Lúc Nửa Đêm",
                    author: "Stephanie Meyer",
                    image:  "./image/mat-troi-luc-nua-dem.jpg",
                    infor: "Khi Edward Cullen và Bella Swan gặp nhau trong Chạng vạng, một chuyện tình...",
                    sale: "-20%",
                    oldprice:"289000",
                    newprice:"224000"
                },
                {
                    name: "Em Rắc Thính, Anh Thả Tình",
                    author: "Dương Thụy",
                    image:  "./image/em-rac-thinh-anh-tha-tinh.jpg" ,
                    infor: "Nhà xuất bản Trẻ giới thiệu đến Quý vị sách mới của Dương Thụy, một trong...",
                    sale: "-20%",
                    oldprice: "120000",
                    newprice: "96000",
                },
                {
                    name: "Chuyện Về Ellie",
                    author:"W.Bruce Cameron",
                    image:"./image/chuyen-ve-ellie.jpg",
                    infor:"Từ lúc còn là chú cún thơ ngây, Ellie đã được sĩ quan cảnh sát Jakob chọn để...",
                    sale:"-15%",
                    oldprice:"85000",
                    newprice:"68000"
                },
                {
                    name: "Kẻ Trừng Phạt (Series Bác Sĩ Pháp Y Tần Minh) (Tái Bàn 2020)",
                    author: "Vi Nhất Minh",
                    image: "./image/ke-trung-phat-2020.jpg",
                    infor: "Kẻ Trừng Phạt” , kích thích hơn “người giải mã tử thi” của Tần Minh, rúng...",
                    sale: "-15%",
                    oldprice: "125000",
                    newprice: "106000"
                }
            ]
        };
    }
    render() {
        let listBook = this.state.book.map((item,i)=>{
            return(
            <Book key = {i}
                name = {item.name}
                author= {item.author}
                image={item.image}
                infor={item.infor}
                sale={item.sale}
                oldprice={item.oldprice}
                newprice={item.newprice}
            />) 
        })
        return (
            <div>
                <div className="container-body-content-title">
                    <span className="txt-title">Sách Văn Học Mới</span>
                    <div className="xem-them"><a href="#" id="see-more">Xem thêm</a>
                        <img id="icon-right" src="./image/icons8-chevron-right-24.png" />
                    </div>
                </div>
                <div className="box-info-wrapper">
                   {listBook}
                </div>

            </div>
      
        );
    }
}

export default ListBooks2;