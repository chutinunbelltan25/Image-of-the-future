import React, { Component } from 'react'
import { Menu, Icon, Col, Row, Form, Input } from 'antd'
import { grey } from '@ant-design/colors'
import { Button, Drawer } from 'antd'
import logo from '../image/logo1.jpg'

// const initialState = () => {
//     const token = localStorage.getItem('ACCESS_TOKEN');
//     if (token) {
//         return jwtDecode(token)
//     } else {
//         return {
//             role: "user"
//         }
//     }
// }
class Narbarmane extends Component {
    state = { visible: false, placement: 'left' };

    // fetchLogin = token => {
    //     localStorage.setItem(TOKEN, token)
    // }

    // login = (user,token) => {
    //     fetchLogin(token)
    //     return {
    //         type: LOGIN_USER,
    //         ...user
    //     }
    // }

    // fetchLogout = token => {
    //     localStorage.removeItem(TOKEN)
    // }

    // logout = (user,token) => {
    //     this.fetchLogout(token)
    //     return {
    //         type: LOGOUT_USER,
    //         ...user
    //     }
    // }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row >
                <Row style={{ display: 'flex', justifyItems: 'center' }}>
                    <Col span={6} style={{ margin: '3.5vh' }}>
                        <a href="/home"><img src={logo} alt='logo' style={{ width: '40vh' }} /></a>
                    </Col>
                    <Col span={9}>
                    </Col>
                    <Col span={9} style={{}}>
                        <Menu
                            selectedKeys={[]}
                            mode="horizontal"
                            // blue:['#002766']
                            style={{ fontSize: '25px', marginTop: '2vh', backgroundColor: grey[9] }}
                        >
                            <Menu.Item key="1" >
                                <a href="/">
                                    <h5 style={{ color: 'white' }}>
                                        <span><Icon type="pie-chart" />Search</span></h5></a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a onClick={this.showDrawer}>
                                    <h5 style={{ color: 'white' }}>
                                        <Icon type="desktop" />
                                        <span>Sign up</span></h5></a>
                            </Menu.Item>

                            <Menu.Item key="3">
                                <a href="/register">
                                <h5 style={{ color: 'white' }}>
                                    <Icon type="inbox" />
                                    <span>Register</span></h5></a>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <a href="/upload">
                                <h5 style={{ color: 'white' }}>
                                    <Icon type="inbox" />
                                    <span>Upload File</span></h5></a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <Drawer
                    title="Login"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}

                >
                    <Col span='24'>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item >
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Col >
                                <Form.Item>
                                    <Col span='8'>

                                    </Col>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>

                                </Form.Item></Col>
                        </Form>
                    </Col>
                </Drawer>
            </Row>
        )
    }
}

export default Narbarmane = Form.create({ name: 'normal_login' })(Narbarmane);