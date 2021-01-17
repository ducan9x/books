import React, { Component } from 'react';
import Books from './Books';
class List1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            book : [
                {
                    name:'Thay Đổi Cuộc Sống Với Nhân Số Học',          
                    author:"Lê Đỗ Quỳnh Hương",
                    image:'./image/362905_thay-doi-cuoc-song-voi-nhan-so-hoc.jpg',
                    oldprice:"248000",
                    newprice:"210000"
                },
                {
                    name:'Cây Chuối Non Đi Giày Xanh',
                    author:"Nguyễn Nhật Ánh",
                    image: "./image/cay-chuoi-non-di-giay-xanh.jpg",
                    oldprice:"110000",
                    newprice:"77000"
                },
                {
                    name:'Con Chim Xanh Biếc Bay Về',
                    author:"Nguyễn Nhật Ánh",
                    image:"./image/con-chim-xanh-biec-bay-ve.jpg",
                    oldprice:"150000",
                    newprice:"120000"
                },
                {
                    name:'Tạp Chí Pi: Tập 4 - Số 12 (Tháng 12/2020)',
                    author:"",
                    image:"./image/tap-chi-pi.jpg",
                    oldprice:"",
                    newprice:"120000"
                },
                {
                    name:'Con Chó Nhỏ Mang Giỏ Hoa Hồng',
                    author:"Nguyễn Nhật Ánh",
                    image:"./image/con-cho-nho-mang-gio-hoa-hong.jpg",
                    oldprice:"90000",
                    newprice:"63000"
                },
                {
                    name: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh',
                    author:"Nguyễn Nhật Ánh",
                    image:"./image/toi-thay-hoa-vang-tren-co-xanh.jpg",
                    oldprice:"125000",
                    newprice:"100000"
                },
                {
                    name:'Tạp Chí Pi: Tập 4 - Số 10 (Tháng 12/2020)',
                    author:"",
                    image:"./image/tap-chi-pi-2.jpg",
                    oldprice:"",
                    newprice:"30000"
                }
            ]
        };
    }
    render() {
        let listBook = this.state.book.map((item,i)=>{
            return(
                <Books key ={i}
                author={item.author}
                image={item.image}
                oldprice={item.oldprice}
                newprice={item.newprice}
                >{item.name}</Books>
            )
        })
        return (
            <div>
                {/* -------------------------------------body-right-Sách bán chạy trong tuần------------------------------ */}
                <div className="container-body-content-title">
                    <span className="txt-title"> Sách Bán Chạy Trong Tuần</span>
                </div>
                <div className="container">
                   {listBook}
                </div>
            </div>
        );
    }
}

export default List1;