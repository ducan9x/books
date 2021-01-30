import React, { Component } from 'react';

class CartBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing : false, 
        }
    }
    buttonEdit = () =>{
        this.setState({editing : true});
    }
    buttonSave = () =>{
        this.setState({editing : false});
        this.props.edit(this.props.index,this.txtQuantity.value)
        console.log(this.txtQuantity.value)
    }
    buttonDelete = () =>{
        this.props.delete(this.props.index)
    }
    renderNormal = () => {
        return  <div>
                    <p className="soluong">Số lượng: {this.props.quantity}</p>
                        <button onClick={()=>{this.buttonDelete()}}>Xóa</button>
                        <button onClick={()=> this.buttonEdit()}>Sửa</button>
                </div>
    }
    renderForm = () =>{
        return <div>
            <p className="soluong1">Số lượng</p>
                <div className="buttons_added">
                <input ref={(input)=>{this.txtQuantity = input}} type="number" min="1" max="10" defaultValue={this.props.quantity} />
                </div> 
                <button className="save" onClick={()=> this.buttonSave()}>Lưu</button>
        </div>
    }
    show_button = () =>{
        if (this.state.editing === false){
            return this.renderNormal();
        }
        else{
            return this.renderForm();
        }
    }
    render() {
        return (
            <div className="cart-book">
                <img className="img-cart" src={this.props.image} />
                <p>{this.props.name}<span>{this.props.quantity}x{this.props.price}đ</span></p>
                {this.show_button()}
            </div>
        );
    }
}

export default CartBook;