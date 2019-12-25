import React, { Component } from 'react'
import { Menu, Dropdown, Icon, message, Row, Col, Button, Modal, Form, Input, Select } from 'antd'
import pic1 from '../image/2.JPG'
import pic2 from '../image/1.JPG'

const onClick = ({ key }) => {
    message.info({});
};
const { Option } = Select;
const { TextArea } = Input;



class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDirty: false,
        }
    } state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 1000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleonChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleonBlur = () => {
        console.log('blur');
    }

    handleonFocus = () => {
        console.log('focus');
    }

    handleonSearch = (val) => {
        console.log('search:', val);
    }


    render() {
        
        const children = [];
        for (let i = 1; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        const { visible, loading } = this.state
        const menu = (
            <Menu onClick={onClick} >
                <Menu.Item style={{ fontSize: '25px' }} key="1"><a onClick={this.showModal}>File Image JPG</a></Menu.Item>
                <Menu.Item style={{ fontSize: '25px' }} key="2">File Video MP4,MOV</Menu.Item>

            </Menu>
        );

        return (
            <Row type='flex' justify="right" style={{ fontSize: '28px', margin: '50px' }}>
                <Col>
                    <Dropdown overlay={menu} >
                        <a className="ant-dropdown-link" href="#">
                            Upload File <Icon type="down" />
                        </a>
                    </Dropdown>
                    <Row>
                        <Col>
                            Image waiting for verification
                        </Col>
                        <Row type='flex' style={{ marginTop: '5vh', marginLeft: '2vh' }}>
                            <Col span={6} style={{ margin: '1vh' }}><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
                            <Col span={6} style={{ margin: '1vh' }}><img src={pic2} alt="pic" style={{ width: '50vh' }} /></Col>
                            <Col span={6} style={{ margin: '1vh' }}><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
                            <Col span={6} style={{ margin: '1vh' }}><img src={pic1} alt="pic" style={{ width: '50vh' }} /></Col>
                        </Row>
                    </Row>
                </Col>
                <Modal
                    visible={visible}
                    title="Upload file Image"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
                                </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
                                </Button>,
                    ]}>
                    <Row>
                        <Col>
                            <Button>
                                <Icon type="picture" /> Picture
                            </Button>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Item label="Image Name">
                                    <Input/>    
                                <Form.Item label="description">
                                   <TextArea rows={4} />
                                
                            Key Word
                            <Select mode="tags" style={{ width: '100%' }} onChange={this.handleChange} tokenSeparators={[',']}>
                                {children}
                            </Select>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Category"
                                optionFilterProp="children"
                                onChange={this.handleonChange}
                                onFocus={this.handleonFocus}
                                onBlur={this.handleonBlur}
                                onSearch={this.handleonSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="Food and Drink">Food and Drink</Option>
                                <Option value="Travel">Travel</Option>
                                <Option value="Background">Forest Background</Option>
                                <Option value="Sky photos">Sky photos</Option>
                                <Option value="Nature">Nature</Option>
                                <Option value="Beauty/Fashion">Beauty/Fashion</Option>
                                <Option value="Animals">Animals</Option>
                                <Option value="The Toys">The Toys</Option>
                                <Option value="Interiors">Interiors</Option>
                            </Select>
                            </Form.Item></Form.Item>

                            </Form>
                        </Col>
                    </Row>
                </Modal>
                <Row  type='flex' style={{marginTop:'5vh'}}>
                    <Col span={24}>
                    <b>Image approve</b>
                    </Col>
                    <Col>Picture</Col>
                </Row>
                <br />
                <Row  type='flex' style={{marginTop:'5vh'}}>
                    <Col span={24}>
                    <b>Image Buy</b>
                    </Col>
                    <Col>Picture</Col>
                </Row>
            </Row >
        )
    }
}
export default Upload
