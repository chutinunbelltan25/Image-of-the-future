import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Row, Col } from 'antd'
import Axios from 'axios'
import { connect } from 'react-redux'

class User extends Component {

  render() {

    const menu = (
      <Menu >
        <Menu.Item style={{ fontSize: '25px' }} key="1"><div onClick={this.showModal}>File Image JPG</div></Menu.Item>
      </Menu>
    );

    return (
      <Row type='flex' justify="right" style={{ fontSize: '28px', margin: '50px' }}>
        <Col>
          <Dropdown overlay={menu} >
            <a href="/picture">
              Upload File <Icon type="down" />
            </a>
          </Dropdown>
          <Row>
            <Col>
              Image waiting for verification
            </Col>
            <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
              {this.props.user.picInProgress.map(medias => (
                <Col span={5} style={{ margin: '1vh' }}><img style={{ width: '40vh', height: '30vh' }} src={`${medias.media_url} `} />
                  <h5>Image Name :{medias.media_name} </h5>
                  <h5>Description : {medias.text} </h5></Col>
              ))}
              {this.props.cate.cate_List.map(categorys => (
                <Col>{categorys.category_name}</Col>
              ))}

              {this.props.keyword.key_List.map(keywords => (
                <Col>{keywords.keyword_name}</Col>
              ))}
            </Row></Row>
        </Col>
        <Col span={24}>
          Image Reject
        </Col>
        {console.log(this.props.user.setPicReject_media)}
        <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
          {this.props.user.mediaReject.map(medias => (
            <Col span={5} style={{ margin: '1vh' }}><img style={{ width: '40vh', height: '30vh' }} src={`${medias.media_url} `} />
              <h5>Image Name :{medias.media_name} </h5>
              <h5>Description : {medias.text} </h5></Col>
          ))}
        </Row>
        <br />
        <Col span={24}>
          Image approve
        </Col>
        <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
          {this.props.user.mediaApprove.map(medias => (
            <Col span={5} style={{ margin: '1vh' }}><img style={{ width: '40vh', height: '30vh' }} src={`${medias.media_url} `} />
              <h5>Image Name :{medias.media_name} </h5>
              <h5>Description : {medias.text} </h5></Col>
          ))}
        </Row>
        <Col span={24}>
          Image Buy
        </Col>
      </Row>
    )
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  cate: state.cate,
  keyword: state.keyword,
  mediaApprove: state.mediaApprove,
  mediaReject: state.mediaReject
})

export default connect(mapStateToProps)(User) 
