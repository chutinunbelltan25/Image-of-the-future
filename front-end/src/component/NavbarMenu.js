import React, { Component } from 'react'
import { Menu, Icon, Col, Row, Form, Input, Button, Drawer } from 'antd'
import { grey } from '@ant-design/colors'
import logo from '../image/logo1.jpg'
import Axios from '../config/axios.setup'
import { Link } from "react-router-dom";
import JwtDecode from 'jwt-decode'
import { withRouter } from 'react-router-dom'
import { failLoginNotification, successLoginNotification } from './notification'
class NavbarMenu extends Component {
  state = {
    username: '',
    password: '',
    visible: false,
    placement: 'right',
    collapsed: true
  };

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
  handleLogout = () => {
    localStorage.removeItem('ACCESS_TOKEN')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    Axios.post('loginUser', { username, password })
      .then(result => {
        successLoginNotification()
        localStorage.setItem('ACCESS_TOKEN', result.data.token)
        window.location.reload(true)
        this.props.history.push("/home")
      })
      .catch(err => {
        failLoginNotification()
      })
    this.props.form.resetFields()
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    let token = localStorage.getItem('ACCESS_TOKEN')
    let user = {
      role: 'guest'
    }
    if (token) {
      user = JwtDecode(token)
    }

    return (
      <Row >
        <Row style={{ display: 'flex', justifyItems: 'center' }}>
          <Col span={6} style={{ margin: '3vh' }}>
            <a href="/home"><img src={logo} alt='logo' style={{ width: '30vh' }} /></a>
          </Col>
          <Col span={10}>
          </Col>
          <Col span={8} style={{ marginTop: '2vh' }}>
            <Menu
              mode="horizontal"
              style={{ backgroundColor: grey[9], display: "flex", justifyContent: "space-around" }}
            >
              <Menu.Item key="1" >
                <Link to="/home">
                  <h5 style={{ color: 'white', fontSize: '15px' }}>
                    <Icon type="appstore" />
                    <span>Home</span></h5></Link>
              </Menu.Item>
              <Menu.Item key="9" >
                <Link to="/aboutMe">
                  <h5 style={{ color: 'white', fontSize: '15px' }}>
                    <Icon type="rocket" />
                    <span>AboutMe</span></h5></Link>
              </Menu.Item>
              {user.role === "user" || user.role === "admin" ?
                <>
                  <Menu.Item key="2">
                    <Link to="/user">
                      <h5 style={{ color: 'white', fontSize: '15px' }}>
                        <Icon type="user" />
                        <span>User</span></h5></Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/upload">
                      <h5 style={{ color: 'white', fontSize: '15px' }}>
                        <Icon type="upload" />
                        <span>Upload</span></h5></Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/search" onClick={this.handleLogout} >
                      <h5 style={{ color: 'white', fontSize: '15px' }}>
                        <Icon type="logout" />
                        <span>Logout</span></h5></Link>
                  </Menu.Item>
                </>
                : <>
                  <Menu.Item key="2" >
                    <Link to onClick={this.showDrawer}>
                      <h5 style={{ color: 'white', fontSize: '15px' }}>
                        <Icon type="lock" />
                        <span>Sign In</span></h5></Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/register">
                      <h5 style={{ color: 'white', fontSize: '15px' }}>
                        <Icon type="desktop" />
                        <span>Register</span></h5></Link>
                  </Menu.Item>
                </>
              }
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
                    onChange={(e) => this.setState({ username: e.target.value })}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your Password!' }
                  ],
                })(
                  <Input
                    onChange={(e) => this.setState({ password: e.target.value })}
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
                  <Button htmlType='submit' block type="primary" className="login-form-button">
                    Log in
                  </Button>
                </Form.Item>
              </Col>
            </Form>
          </Col>
        </Drawer>
      </Row>
    )
  }
}

NavbarMenu = Form.create({ name: 'normal_login' })(NavbarMenu);
export default withRouter(NavbarMenu)

