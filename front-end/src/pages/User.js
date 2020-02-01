import React, { Component } from 'react'
import { Row, Col, Modal, Form, Input, Select } from 'antd'
import Axios from 'axios'
import { connect } from 'react-redux'
import JwtDecode from "jwt-decode";
const { Option } = Select;
class UserProfile extends Component {
  state = {
    id_media: '',
    Name_media: '', 
    Des_media: '',
    visible: false, 
  };

  showModal = (media_name, text, media_id) => {
    this.setState({
      visible: true,
      Name_media: media_name,
      Des_media: text,
      id_media: media_id
    });
  };
  handleonSearch = (val) => { }

  handleOk = e => {
    this.handleSubmit(e)
    console.log(e);
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
          status: values.status,
          reason: values.reason,
          approve_date: new Date(),
        })
        .then(result => {
        })
        window.location.reload(true)
        this.props.history.push("/user")
      }
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    let token = localStorage.getItem('ACCESS_TOKEN')
    let user
    if(token) {
     user = JwtDecode(token)
    }

    return (
      <Row type='flex' justify="right" style={{ fontSize: '28px', margin: '50px' }}>
        {user.role === "user" &&
         <div>
          <Col>
            <Row>
              <Col span={24}>
                Image waiting for verification
              </Col>
              <br />
              <Row type='flex' justify="start" style={{ margin: '1vh' }}>
                {this.props.user.picInProgress.map(medias => (
                  <Col  style={{ margin: '0.5vh' }}><img style={{ width: '40vh', height: '30vh' }}
                    src={`${medias.media_url} `} alt="" />
                  </Col>
                ))}
              </Row>
            </Row>
          </Col>
          <Col span={24}>
            Image Reject
          </Col>
          <br />
          <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
            {this.props.mediaReject.mediaReject.map(medias => (
              <Col style={{ margin: '0.5vh' }}><img style={{ width: '40vh', height: '30vh' }} src={`${medias.media_url} `} alt=""/>
              </Col>
            ))}
          </Row>
          <Col span={24}>
            Image approve
          </Col>
          <br />
          <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
            {this.props.mediaApprove.mediaApprove.map(medias => (
              <Col style={{ margin: '0.5vh' }}><img style={{ width: '40vh', height: '30vh' }} src={`${medias.media_url} `} alt=""/>
              </Col>
            ))}
          </Row>
         </div>
        }
        
        {user.role === "admin" && 
          <div>
            <Col span={24}>
              Image In-Progress
            </Col>
            <br />
            <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
              {this.props.adminApproveMedia.adminApproveMedia.map(medias => (
                <Col style={{ margin: '0.5vh' }}><img style={{ width: '40vh', height: '30vh' }}
                  onClick={()=>this.showModal(medias.media_name, medias.text, medias.media_id)} src={`${medias.media_url} `} alt=""/>
                </Col>
              ))}
            </Row>
            <Modal
              title="Admin Approve"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>{this.state.Name_media}</p>
              <p>{this.state.Des_media}</p>
              <Form style={{ width: '100%' }}>
                <Col span={24} >
                <Form.Item label="Reason" onSubmit={(e) => this.handleSubmit(e)}>
                    {getFieldDecorator('reason', {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter your reason'
                        }
                      ]
                    })(<Input />
                    )}
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Status">
                    {getFieldDecorator('status', {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter your Status'
                        }
                      ]
                    })(<Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select"
                      onChange={this.handleonChange}
                      onSearch={this.handleonSearch}
                    >
                      <Option value="Approve">Approve</Option>
                      <Option value="Reject">Reject</Option>
                    </Select>)}
                  </Form.Item>
                </Col>
              </Form>
            </Modal>
          </div>
        }
      </Row>
    )
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  cate: state.cate,
  keyword: state.keyword,
  mediaApprove: state.mediaApprove,
  mediaReject: state.mediaReject,
  adminApproveMedia: state.adminApproveMedia
})
const UserProfileForm = Form.create({ name: 'UserProfile' })(UserProfile)
export default connect(mapStateToProps)(UserProfileForm) 
