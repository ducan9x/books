import React, { Component } from 'react';
class Slide extends Component {
    render() {
        return (
        <div className="container-body-head">
        <div className="container-body-head-category1">
          <img className="container-body-head-category1" src="./image/image-right.jpg" />
        </div>
        <div className="container-body-head-slide">
          <img className="slide" src="./image/slide1.jpg" idx={0} alt="" />
          <img className="slide" src="./image/slide2.jpg" idx={1} alt="" />
          <img className="btn-change" id="next" src="./image/icons8-chevron-right.png" alt="" />
          <img className="btn-change" id="prev" src="./image/icons8-chevron-left-24.png" alt="" />
        </div>
        <div className="container-body-head-highlights pixel-position1">
          <img id="hightlight-image" src="./image/image1.jpg" />
        </div>
        <div className="container-body-head-highlights pixel-position2">
          <img id="hightlight-image" src="./image/image2.jpg" />
        </div>
        <div className="container-body-head-highlights pixel-position3">
          <img id="hightlight-image" src="./image/image3.jpg" />
        </div>
        <div className="container-body-head-highlights pixel-position4">
          <img id="hightlight-image" src="./image/image4.jpg" />
        </div>
        <div className="container-body-head-highlights pixel-position5">
          <img id="hightlight-image" src="./image/image5.jpg" />
        </div>
      </div>
      
        );
    }
}

export default Slide;