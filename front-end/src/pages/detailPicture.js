import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'

class DetailPicture extends Component {

  render() {

    return (
      <Row type='flex' justify="right" style={{ fontSize: '28px', margin: '50px' }}>
        <Col>
          <Row>
            <Row type='flex' justify="space-around" style={{ margin: '1vh' }}>
              {this.props.user.picInProgress.map(medias => (
                <Col span={11} style={{ margin: '1vh' }}><img style={{ width: '80vh', height: '50vh' }}  src={`${medias.media_url}`} alt=""/>
                <Col span={12} style={{ padding: '1vh' }}>
                <h5>Image Name :{medias.media_name} </h5>
                <h5>Description : {medias.text} </h5>
                </Col>
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

export default connect(mapStateToProps)(DetailPicture) 
