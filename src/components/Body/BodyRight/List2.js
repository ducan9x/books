import React, { Component } from 'react';
import Books from './Books';
class List2 extends Component {
    render() {
        return (
            <div>
                {/* -------------------------------------body-right-Sách bán chạy trong tuần------------------------------ */}
                <div className="container-body-content-title">
                    <span className="txt-title">Báo Trí Giới Thiệu</span>
                </div>
                <div className="container">
                    <Books
                        author="Cù Thu Hương"
                        image='./image/paris_14.jpg'
                        oldprice="168000"
                        newprice="151000"
                    >Paris + 14</Books>
                    <Books
                        author="Nguyễn Ngọc Tư"
                        image='./image/bien-su-nuoc.jpg'
                        oldprice="95000"
                        newprice="85000"
                    >Biên Sử Nước</Books>
                    <Books
                        author="Nguyễn Nhật Ánh"
                        image='./image/con-chim-xanh-biec-bay-ve-bia-cung-moi-01.jpg'
                        oldprice="270000"
                        newprice="202000"
                    >Con Chim Xanh Biếc Bay Về(Bìa Cứng)</Books>
                    <Books
                        author="E. H. Gombrich"
                        image='./image/cau-chuyen-nghe-thuat.jpg'
                        oldprice="999000"
                        newprice="849000"
                    >Câu Chuyện Nghệ Thuật (Bìa Cứng)</Books>
                    <Books
                        author="Cao Minh"
                        image="./image/so-tay-nha-thoi-mien.jpg"
                        oldprice="145000"
                        newprice="123000"
                    >Sổ Tay Nhà Thôi Miên</Books>
                    <Books
                        author="David Christian"
                        image="./image/sach-coi-nguon-lich-su-vi-d-6992-1600055021.jpg"
                        oldprice="219000"
                        newprice="186000"
                    >Cội Nguồn Lịch Sử Vĩ Đại Của Vạn Vật</Books>
                    <Books
                        author="Hòa Thượng Hư Vân"
                        image="./image/duongmaytrendathoa-01-bia-1.png"
                        oldprice="118.000"
                        newprice="94000"
                    >Đường Mây Trên Đất Hoa</Books>
                    <Books
                        author="James R. Doty. MD"
                        image="./image/buoc-vao-cua-hieu-nhiem-mau.jpg"
                        oldprice="148000"
                        newprice="118000"
                    >Bước Vào Cửa Hiệu Nhiệm Màu</Books>
                    <Books
                        author="Nguyễn Phong"
                        image="./image/muon-kiep-nhan-sinh.jpg"
                        oldprice="168000"
                        newprice="134000"
                    >Muôn Kiếp Nhân Sinh</Books>
                </div>
            </div>
        );
    }
}

export default List2;