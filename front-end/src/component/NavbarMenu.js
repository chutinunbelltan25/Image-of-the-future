import React, { Component } from 'react'
import { Menu, Icon, Col, Row, Form, Input, Button, Drawer } from 'antd'
import { grey } from '@ant-design/colors'
import logo from '../image/logo1.jpg'
import Axios from '../config/axios.setup'
import './Navber.css'
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
      <Row className='BG' type='flex' align="middle">
        <Col><Link to="/home"><img src={logo} alt='logo' style={{ width: '30vh' }} /></Link></Col>
        <Col span={20}>
          <Row type="flex" justify="end">
            <Col><Link to="/home">
              <h5 style={{ color: 'white', fontSize: '18px' ,marginRight: "4vh"}}>
                Home</h5></Link>
            </Col>

            <Link to="/aboutMe">
              <h5 style={{ color: 'white', fontSize: '18px' ,marginRight: "4vh"}}>
                AboutMe</h5></Link>
            {user.role === "user" || user.role === "admin" ?
              <>
                <Link to="/user">
                  <h5 style={{ color: 'white', fontSize: '18px' ,marginRight: "4vh"}}>
                    User</h5></Link>
                <Link to="/upload">
                  <h5 style={{ color: 'white', fontSize: '18px' ,marginRight: "4vh"}}>
                    Upload</h5></Link>
                <Link to="/search" onClick={this.handleLogout} >
                  <h5 style={{ color: 'white', fontSize: '18px' ,marginRight: "4vh"}}>
                    Logout</h5></Link>
              </>
              : <>
                <Link to onClick={this.showDrawer}>
                  <h5 style={{ color: 'white', fontSize: '18px' ,marginRight: "4vh"}}>
                    Sign In</h5></Link>
                <Link to="/register">
                  <h5 style={{ color: 'white', fontSize: '18px' ,marginRight: "4vh"}}>
                    Register</h5></Link>
              </>
            }
          </Row>
        </Col>

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

