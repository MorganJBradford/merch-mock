import React from "react";
import Toilet from "./../img/taj-mahal-2.jpg";
import ticketsImage from "./../img/IMG_5044_castle-facebook.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageChange: true,
    }
  }
  handleImageChange = () =>{
    this.setState(prevState => ({
      imageChange: !prevState.imageChange
    }));
    this.styleImg();
    console.log(this.state);
  }
  // this function not working
  styleImg=()=>{
    document.getElementById("carousel").style.animation= "fadeout 2s";
    document.getElementById("carousel").style.animation= "fadein 2s";
  }
  render(){
    let currentImage = Toilet;
    if(this.state.imageChange){
      currentImage = Toilet;
    }else{
      currentImage = ticketsImage;
    }
    return(
      <img src={currentImage}  onClick={this.handleImageChange} id="carousel" alt="Logo" />
    )
  }
}

export default Carousel;