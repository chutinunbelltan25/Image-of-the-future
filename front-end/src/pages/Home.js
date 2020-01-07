import React, { Component } from 'react'
import { Row, Col, Select, Button } from 'antd'
import './Home.css'
import { connect } from 'react-redux'
import pic1 from '../image/2.JPG'
const { Option } = Select;
class Home extends Component {
  state = {
    categorys: []
  }
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  // rendercategory = () => {
  //     const categorySelect = [];
  //     this.state.categorys.filter(category => (
  //         categorySelect.push(`<Option key={category.category_id}>{category.category_name}</Option>`)
  //     )
  //     }

  render() {

    return (
      <Row>
        <Row type='flex' style={{ marginTop: '6vh', marginLeft: '2vh' }}>
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
        </Row>
        <Row>
          <Row type='flex' style={{ marginTop: '2vh', marginLeft: '2vh' }}>
            {this.props.user.picInProgress.map(medias => (
              <Col span={5} style={{ margin: '1vh' }}><img style={{ width: '40vh', height: '30vh' }} src={`${medias.media_url} `} /></Col>
            ))}
          </Row>
          <Row type='flex' style={{ marginTop: '2vh', marginLeft: '2vh' }}>
            <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
            <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
            <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
            <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
          </Row>
          <Row type='flex' style={{ marginTop: '2vh', marginLeft: '2vh' }}>
            <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
            <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
            <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
            <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
          </Row>

        </Row>
      </Row>

    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  cate: state.cate,
  keyword: state.keyword
})
export default connect(mapStateToProps)(Home)