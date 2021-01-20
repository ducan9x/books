import React, { Component } from 'react';
import Book from './Book';

class ListBooks extends Component {
    constructor(props) {
        super(props);
    this.state = {
            books: [
                {
                    name: "Bắt Trẻ Đồng Xanh (Tái Bản 2020)",
                    author: "Jerome David Salinger",
                    image:"./image/bat-tre-dong-xanh.jpg",
                    infor: "Bắt Trẻ Đồng Xanh là một cuốn sách nhỏ, mỏng và chẳng giống ai. Điều đó cũng...",
                    sale: "-25%",
                    oldprice: "248000",
                    newprice: "210000"
                },
                {
                    name: "Người Bán Hàng Vĩ Đại Nhất Thế Giới",
                    author: "Og Mandino",
                    image: "./image/image-right.jpg" ,
                    infor: "Người Bán Hàng Vĩ Đại Nhất Thế Giới kể về câu chuyện của Hafid, một cậu bé...",
                    sale: "-20%",
                    oldprice: "148000",
                    newprice: "118000"
                },
                {
                    name: "Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)",
                    author: "John Toland",
                    image:  "./image/chan-dung-mot-chum-phat-xit.jpg",
                    infor: "Adolf Hitler - Chân Dung Một Trùm Phát Xít là tác phẩm đồ sộ và chi tiết bậc...",
                    sale: "-20%",
                    oldprice: "489000",
                    newprice: "392000"
                },
                {
                    name: "Muôn Kiếp Nhân Sinh",
                    author: "Nguyễn Phong",
                    image: "./image/muon-kiep-nhan-sinh.jpg" ,
                    infor: "Muôn kiếp nhân sinh là tác phẩm do giáo sư John Vũ - Nguyễn Phong viết từ...",
                    sale: "-20%",
                    oldprice: "168000",
                    newprice: "134000",
                },
                {
                    name: "Tư Duy Nhanh Và Chậm",
                    author:"Daniel Kahneman",
                    image:"./image/tu-duy-nhanh-va-cham.jpg" ,
                    infor:"Tư duy nhanh và chậm( Tái bản 2017) là cuốn sách học làm người nói về tính...",
                    sale:"-15%",
                    oldprice:"239000",
                    newprice:"204000"
                },
                {
                    name: "Bí Quyết Bấm Huyệt Chữa Bệnh",
                    author: "Katsusuke Serizawa",
                    image: "./image/bi-quyet-bam-huyet-chua-benh.jpg",
                    infor: "Với sơ đồ thể hiện chính thức của 1000 huyệt đạo trên cơ thể, cuốn sách...",
                    sale: "-20%",
                    oldprice: "158000",
                    newprice: "126000"
                }
            ]
        };
    }
      
      render() {
        let listBook = this.state.books.map((item , i) => {
            return (
                <Book key = {i}
                name ={item.name}
                author={item.author}
                image={item.image}
                infor={item.infor}
                sale={item.sale}
                oldprice={item.oldprice}
                newprice={item.newprice}
            />
            )  
        })
        return (
            <div>
                <div className="container-body-content-title">
                    <span className="txt-title">Sách Bán Chạy</span>
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

export default ListBooks;