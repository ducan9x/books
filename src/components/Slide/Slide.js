import React, { Component } from 'react';
import ImgRight from "./image/image-right.jpg";
import Slide1 from "./image/slide1.jpg";
import Slide2 from "./image/slide2.jpg";
import IconRight from "./image/icons8-chevron-right.png";
import IconLeft from "./image/icons8-chevron-left-24.png";
import Img1 from "./image/image1.jpg";
import Img2 from "./image/image2.jpg";
import Img3 from "./image/image3.jpg";
import Img4 from "./image/image4.jpg";
import Img5 from "./image/image5.jpg";
class Slide extends Component {
    render() {
        return (
        <div className="container-body-head">
        <div className="container-body-head-category1">
          <img className="container-body-head-category1" src={ImgRight} />
        </div>
        <div className="container-body-head-slide">
          <img className="slide" src={Slide1} idx={0} alt="" />
          <img className="slide" src={Slide2} idx={1} alt="" />
          <img className="btn-change" id="next" src={IconRight} alt="" />
          <img className="btn-change" id="prev" src={IconLeft} alt="" />
        </div>
        <div className="container-body-head-highlights pixel-position1">
          <img id="hightlight-image" src={Img1} />
        </div>
        <div className="container-body-head-highlights pixel-position2">
          <img id="hightlight-image" src={Img2} />
        </div>
        <div className="container-body-head-highlights pixel-position3">
          <img id="hightlight-image" src={Img3} />
        </div>
        <div className="container-body-head-highlights pixel-position4">
          <img id="hightlight-image" src={Img4} />
        </div>
        <div className="container-body-head-highlights pixel-position5">
          <img id="hightlight-image" src={Img5} />
        </div>
      </div>
      
        );
    }
}

export default Slide;