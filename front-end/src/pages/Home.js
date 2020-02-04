import React, { Component } from 'react'
import { Row, Col, Modal, Form, Button } from 'antd'
import Axios from 'axios'
import './Home.css'
import { connect } from 'react-redux'
class Home extends Component {
  state = {
    categorys: [],
    id_media: '',
    Name_media: '', 
    Des_media: '',
    Pic_media: '',
    visible: false
  }
  handleChange = (value) => {
  }
  showModal = (media_name, text, media_id,media_url) => {
    this.setState({
      visible: true,
      Pic_media: media_url,
      Name_media: media_name,
      Des_media: text,
      id_media: media_id
    });
  };
  handleOk = e => {
    this.handleSubmit(e)
    this.setState({
      visible: false,
    });
  };

//  handdleDownloadImg = (link_download) => () => {
//   console.log(link_download)
//   let link = document.createElement('a');
//   link.href = link_download;
//   link.download = 'Download.jpg';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   console.log(link_download)
//  }

 handleClick = path => () => {
  var image = new Image();
  image.crossOrigin = "anonymous";
  image.src = path;
  var fileName = image.src.split(/(\\|\/)/g).pop();
  image.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
    canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
    canvas.getContext("2d").drawImage(this, 0, 0);
    var blob;
    // ... get as Data URI
    if (image.src.indexOf(".jpg") > -1 || image.src.indexOf(".jpeg") > -1) {
      blob = canvas.toDataURL("image/jpeg");
    } else if (image.src.indexOf(".png") > -1) {
      blob = canvas.toDataURL("image/png");
    } else if (image.src.indexOf(".gif") > -1) {
      blob = canvas.toDataURL("image/gif");
    } else {
      blob = canvas.toDataURL("image/png");
    }

    let dataUriOctet = blob.replace(
      /^data:image\/[^;]+/,
      "data:application/octet-stream"
    );
    let anchor = document.createElement("a");
    anchor.setAttribute("href", dataUriOctet);
    anchor.setAttribute("download", fileName);
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
};

  handleSubmit = e => {
    const mediaId = this.state.id_media
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Axios.post(`/admin_Reason/medias/${mediaId}`, {
          number_of_download: values.upload,
        })
        .then(result => {
        })
        this.props.form.resetFields()
        window.location.reload(true)
      }
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  // rendercategory = () => {
  //     const categorySelect = [];
  //     this.state.categorys.filter(category => (
  //         categorySelect.push(`<Option key={category.category_id}>{category.category_name}</Option>`)
  //     )
  //     }

  render() {
    return (
      <Row>
        {/* <Row type='flex' style={{ marginTop: '8vh', marginLeft: '2vh' }}>
          <Col>
            <Select defaultValue="Category" style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="Food and Drink">Travel</Option>
              <Option value="Travel">Travel</Option>
              <Option value="Background">Background</Option>
              <Option value="Sky photos">Sky photos</Option>
              <Option value="Nature">Nature</Option>
              <Option value="Beauty/Fashion">Beauty/Fashion</Option>
              <Option value="Animals">Animals</Option>
              <Option value="The Toys">The Toys</Option>
              <Option value="Interiors">Interiors</Option>
            </Select>
          </Col>
          <Col><Button>Porpular</Button></Col>
          <Col><Button>Image New</Button></Col>
          <Col><Button type="primary" icon="search">
            Search
              </Button></Col>
        </Row> */}
        <Row>
          <Row type='flex' justify="start" style={{ marginTop: '8vh', marginLeft: '1vh'}}>
            {
              this.props.homeMedia.homeMedia.map(medias => (
                <Col >
                <img  style={{ width: '50vh',padding: '2vh' }}
                onClick={()=>this.showModal(medias.media_name, medias.text, medias.media_id, medias.media_url)}src={`${medias.media_url} `} alt="" />
                </Col>
              ))
            }
          </Row>
          <Modal
          title="Buy Image"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Name Image: {this.state.Name_media}</p>
          <p>Description: {this.state.Des_media}</p>
          <img scr={`${this.state.Pic_media} `} alt='' style={{ width: '50vh' }}/> 
          <Button type="primary" onClick={this.handleClick(`${this.state.Pic_media}`)}>
            Download
          </Button>
        </Modal>
        </Row>
      </Row>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  cate: state.cate,
  keyword: state.keyword,
  homeMedia: state.homeMedia
})
const HomeForm = Form.create({ name: 'home' })(Home)
export default connect(mapStateToProps)(HomeForm) 