import React, { Component } from 'react'
import { Row, Col, Select, Button } from 'antd'
import './Home.css'

import pic1 from '../image/2.JPG'
import pic2 from '../image/1.JPG'
const { Option } = Select;
export default class Home extends Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
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
                        <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
                        <Col span={6} ><img src={pic2} alt="pic" style={{ width: '50vh' }} /></Col>
                        <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
                        <Col span={6} ><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
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
                    {/* style={{width:'50vh', height:'1vh'}}><img className="picture" src={pic1} alt="pic"/> */}
                    {/* <img className="picture" src={pic1} alt="pic"/>
                    <img className="picture" src={pic1} alt="pic"/> */}
                </Row>
            </Row>

        )
    }
}