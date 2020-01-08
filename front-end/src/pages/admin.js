import React, { Component } from 'react'
import { Row, Col } from 'antd'

import Axios from 'axios'
import { connect } from 'react-redux'

// showDetailAdmin = () => {
//   picInProgress => {
//       medias: media_url,
//       medias: media_name,
//       medias: text,
//       categorys: category_name,
//       keywords: keyword_name
//     }))
// }

class Admin extends Component {

  render() {

    return (
      <Row type='flex' justify="right" style={{ fontSize: '28px', margin: '50px' }}>
        <Col>
          <Row>
          <Row>
            <Col>
              Image waiting for verification
            </Col>
            <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
              {this.props.user.picInProgress.map(medias => (
                <Col span={5} style={{ margin: '1vh' }}><img style={{ width: '40vh', height: '30vh' }} src={`${medias.media_url} `} /></Col>
              ))}
              {this.props.cate.cate_List.map(categorys => (
                <Col>{categorys.category_name}</Col>
              ))}

              {this.props.keyword.key_List.map(keywords => (
                <Col>{keywords.keyword_name}</Col>
              ))}
            </Row></Row>
        <Col span={24}>
          Image Reject
        </Col>
        {console.log("this.props.mediaReject.mediaReject", this.props.mediaReject.mediaReject)}
        <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
          {this.props.mediaReject.mediaReject.map(medias => (
            <Col span={5} style={{ margin: '1vh' }}><img style={{ width: '40vh', height: '30vh' }} src={`${medias.media_url} `} />
              </Col>
          ))}
            </Row>
            </Row>
        </Col>
      </Row>
    )
  }
}


const mapStateToProps =(state) => ({
  user : state.user
})

export default connect(mapStateToProps)(Admin) 
