import React, { Component } from 'react'
import { Row, Col, Select, Button,Modal, Form, InputNumber , Icon } from 'antd'
import Axios from 'axios'
import './Home.css'
import { connect } from 'react-redux'
const { Option } = Select;
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
  // handleonSearch = (val) => { }

  handleOk = e => {
    this.handleSubmit(e)
    this.setState({
      visible: false,
    });
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
        // this.forceUpdate(() => console.log('FOrce updated'))
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
    const { getFieldDecorator } = this.props.form;
    console.log('test re render count', this.props.homeMedia)

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
          <Row type='flex' justify="space-between" style={{ marginTop: '8vh', marginLeft: '1vh' }}>
            {
              this.props.homeMedia.homeMedia.map(medias => (
                <Col span={6} ><img style={{ width: '50vh',padding: '2vh' }}
                onClick={()=>this.showModal(medias.media_name, medias.text, medias.media_id, medias.media_url)}src={`${medias.media_url} `} /></Col>
              ))
            }
          </Row>
          <Modal
          title="Admin Approve"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Name Image: {this.state.Name_media}</p>
          <p>Description: {this.state.Des_media}</p>
          <Form style={{ width: '100%' }}>
            <Col span={24} >
            <Form.Item label="Upload" >
          {getFieldDecorator('upload', {
            rules: [
              {
                required: true,
                message: 'Please plus 1 number'
              }
            ]
          })(
            <InputNumber min={1} max={100} defaultValue={1}/>
          )}
        </Form.Item>
            </Col>
          </Form>
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