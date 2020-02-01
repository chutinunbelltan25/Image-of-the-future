import React, { Component } from 'react'
import { Carousel, Row, Col } from 'antd'
import './AboutMe.css'
import Carousel1 from '../image/P1001352.jpg';
import Carousel2 from '../image/P1012025.jpg';
import Carousel3 from '../image/P1000591.jpg';
import photo1 from '../image/P1001212.jpg';
import photo2 from '../image/P1001525.jpg';
import photo3 from '../image/P1001009.jpg';
import html from '../image/html.png'
import css from '../image/css.jpg'
import js from '../image/js.png'
import re from '../image/re.png'
import node from '../image/node.png'
import fm from '../image/fm.png'
import my from '../image/my.png'

class AboutMe extends Component {
  _isMounted = false;
  state = {
    imageUrls: [
      Carousel1,
      Carousel2,
      Carousel3
    ],
  };

  componentDidMount = async () => {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { imageUrls } = this.state;
    return (
      <Row type="flex" justify="center" className='bgColor'>
        <Col span={24} className="HomePage-Carousel" style={{ marginTop: '7vh' }}>
          <Carousel autoplay>
            {imageUrls.map((url, i) => (
              <img key={i + "Carousel"} src={url} alt="Carousel" className="HomePage-CarouselImage" />
            ))}
          </Carousel>
          <Row type="flex" justify="center" style={{ marginTop: '4vh' ,marginLeft: '40vh',marginRight: '40vh' ,marginBottom: '10vh'}}>
            <Col >
              <span className='text'>
                About Me
                <br />
          I am like art and design, I have experience of being a photographer and made a website which selling an image, I am interested to work in frontend developer. No matter what happens, I am always willing to take responsibility.
            </span>
            <br />
            </Col>
          <Col  >
            <figure class="snip1321 "><img src={photo1} alt="sq-sample26" />
            <figcaption><i class="ion-upload"></i>
            <h2> Frontend Developer</h2>
            </figcaption><a href="#"></a>
          </figure>
          </Col>
          <Col ><figure class="snip1321 hover"><img src={photo2} alt="sq-sample27" />
            <figcaption><i class="ion-stats-bars"></i>
              <h4> Tantasathiar</h4>
              <h2>Chutinun </h2>
            </figcaption><a href="#"></a>
          </figure>
          </Col>
          <Col ><figure class="snip1321"><img src={photo3} alt="sq-sample28" />
            <figcaption><i class="ion-share"></i>
              <h2>Contact</h2>
              <h4>E-mail  bellchutinun25bacon@gmail.com</h4>
              <h4>Phone 0650055564</h4>
            </figcaption><a href="#"></a>
          </figure>
          </Col>
          </Row>
          <Row type="flex" justify="center">
          <Col> <img src={html} alt="sq-sample28" style={{ margin: '5vh',width: '28vh', height: '20vh'}}/></Col>
          <Col> <img src={css} alt="sq-sample28" style={{ margin: '5vh',width: '30vh', height: '20vh'}}/></Col>
          <Col> <img src={js} alt="sq-sample28" style={{ margin: '5vh',width: '20vh', height: '20vh'}}/></Col>
          <Col> <img src={re} alt="sq-sample28" style={{ margin: '5vh',width: '20vh', height: '20vh'}}/></Col>
          <Col> <img src={node} alt="sq-sample28" style={{ margin: '5vh',width: '30vh', height: '20vh'}}/></Col>
          <Col> <img src={fm} alt="sq-sample28" style={{ margin: '5vh',width: '23vh', height: '20vh'}}/></Col>
          <Col> <img src={my} alt="sq-sample28" style={{ margin: '5vh',width: '30vh', height: '20vh'}}/></Col>
        </Row>
        </Col>
        
      </Row>
      
    )
  }
}



export default AboutMe
