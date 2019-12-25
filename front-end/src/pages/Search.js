import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'
import './search.css'


const { Search } = Input;
export default class Searching extends Component {
    render() {
        return (
            <div style={{ height: '100%', marginTop: '5vh' }} className="style1">
                <Row type='flex' justify="center" align="middle" style={{ height: '80%' }}>
                    <Col span={12} className='search'>
                        <Search
                            className='search'
                            style={{ opacity: 0.6,height: '50px' }}
                            placeholder="Search"
                            onSearch={value => console.log(value)}
                        />

                    </Col>
                </Row>
            </div >
        )
    }
}
