import React, { Component } from 'react'
import { Menu, Row, Col } from 'antd'

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

class admin extends Component {

  render() {

    return (
      <Row type='flex' justify="right" style={{ fontSize: '28px', margin: '50px' }}>
        <Col>
          <Row>
            <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
              {this.props.user.picInProgress.map(medias => (
                <Col span={5} style={{ margin: '1vh' }}><img style={{ width: '80vh', height: '50vh' }}  src={`${medias.media_url}`} />
                <h5>Image Name :{medias.media_name} </h5>
                <h5>Description : {medias.text} </h5>
                </Col>
              ))}
              {/* <h3>Key Word : {keywords.keyword_name}</h3>
              <h3>Category : {Categorys.Category_name}</h3> */}
            </Row></Row>
        </Col>
      </Row>
    )
  }
}


const mapStateToProps =(state) => ({
  user : state.user
})

export default connect(mapStateToProps)(Admin) 
