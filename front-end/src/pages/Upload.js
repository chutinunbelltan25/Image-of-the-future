import React, { Component } from 'react'
import { Button, Col, Row, Select, Input, Form, Icon, Upload } from 'antd'
import Axios from '../config/axios.setup'
import JwtDecode from 'jwt-decode'
import { connect } from 'react-redux';

const { Option } = Select;
const { TextArea } = Input;
class UploadFile extends React.Component {
  state = {
    isDirty: false,
    keywords: [],
    loading: false,
    visible: false,
    category: [],
    file: '', imagePreviewUrl: ''
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.resetFields()
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  // renderModalItems = () => {
  //   const children = [];
  //   this.state.keywords.map(keyword => {
  //     children.push(<Option key={keyword.keyword_id}>{keyword.keyword_name}</Option>)
  //   })
  //   return
  // }
  handleChange = (value) => {
  }
  handleonChange = (value) => {
  }

  handleonBlur = () => {
  }

  handleonFocus = () => {
  }

  handleonSearch = (val) => {
  }

  uploadButton(loading) {
    return (
      <div>
        <Icon type={loading ? "loading" : "plus"} />
      </div>
    );
  }

  submitForm = (e) => {

    e.preventDefault();
    let token = localStorage.getItem('ACCESS_TOKEN')
    let user
    if (token) {
      user = JwtDecode(token)
    }
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        if (user) {
          let data = new FormData();
          data.append('photos', this.state.file);
          data.append('media_name', value.ImageName)
          data.append('text', value.Description)
          data.append('status', "in-progress")
          data.append('reason', '')
          data.append('approve_date', "01-01-2020")
          data.append('number_of_download', "0")
          data.append('category_name', value.category)
          data.append('keyword_name', value.keyWord)

          Axios.post('/create-uploadPic', data, {
            headers: { 'content-type': 'multipart/form-data' }
          })
            .then(result => {
            })
          this.props.form.resetFields()
        }
      }
      else {
        this.props.form.resetFields()
        Axios.put('/upload-media/:media_id', {
          status: value.status,
          reason: value.reason,
          approve_date: new Date(),
          number_of_download: "0"
        }
        )
      }
    })
  }

  // componentDidMount = async () => {
  //   const keywords = (await Axios.get('/keywords')).data
  //   this.setState({ keywords })
  // }

  render() {

    const { getFieldDecorator } = this.props.form;
    // const { keywords } = this.state
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={{ width: '60vh', height: '50vh' }} src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div style={{ width: '60vh', height: '50vh', border: '3px', solid: 'black' }}>Please select an Image</div>);
    }
    return (
      <Row>
        <Row type='flex' justify='center' style={{ fontSize: '28px', marginTop: '7vh' }}>
          <Form onSubmit={this.submitForm} style={{ width: '100%' }}>
            <Col span={12} style={{ paddingLeft: '5vh' }}>
              <Form.Item label="Image file" onSubmit={(e) => this.handleSubmit(e)}>
                {getFieldDecorator('url', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your Image File'
                    }
                  ]
                })(<Input style={{ width: '40vh', height: '8vh', margin: '3vh', padding: '2vh' }}
                  type="file"
                  onChange={(e) => this.handleImageChange(e)} />
                )}
              </Form.Item>
              <Col style={{ width: '60vh', height: '50vh' }}>
                {$imagePreview}
              </Col>
            </Col>
            <Col span={12} style={{ padding: '1vh' }}>
              <Form.Item label="Image Name">
                {getFieldDecorator('ImageName', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your Image Name'
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Description">
                {getFieldDecorator('Description', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your Description'
                    }
                  ]
                })(<TextArea rows={4} />)}

              </Form.Item>
              <Form.Item label="Key Word">
                {getFieldDecorator('keyWord', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your Key Word'
                    }
                  ]
                })(<Select mode="tags" style={{ width: '100%' }} onChange={this.handleChange} tokenSeparators={[',']}>
                  {this.keywords}
                </Select>)}
              </Form.Item>
              <Form.Item label="Category">
                {getFieldDecorator('category', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your Category'
                    }
                  ]
                })(<Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Category"
                  onChange={this.handleonChange}
                  onFocus={this.handleonFocus}
                  onBlur={this.handleonBlur}
                  onSearch={this.handleonSearch}
                >
                  <Option value="Food and Drink">Food and Drink</Option>
                  <Option value="Travel">Travel</Option>
                  <Option value="Background">Forest Background</Option>
                  <Option value="Sky photos">Sky photos</Option>
                  <Option value="Natural">Natural</Option>
                  <Option value="Beauty/Fashion">Beauty/Fashion</Option>
                  <Option value="Animals">Animals</Option>
                  <Option value="The Toys">The Toys</Option>
                  <Option value="Interiors">Interiors</Option>
                </Select>)}

              </Form.Item>
              <Button block type="primary" htmlType="submit">Submit</Button>
            </Col>
          </Form>
        </Row>
      </Row>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user
})

const UploadFileForm = Form.create({ name: 'upload' })(UploadFile);

export default connect(mapStateToProps, null)(UploadFileForm)
