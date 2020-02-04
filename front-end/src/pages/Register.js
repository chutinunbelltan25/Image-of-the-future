import React, { Component } from 'react'
import { Col, Input, Row, Button, Checkbox, Form } from 'antd'
import Axios from '../config/axios.setup'
import { FailedRegisterNotification, SuccessRegisterNotification } from "./RegisterNoti";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['User', 'Admin'];
const defaultCheckedList = ['User'];

class Register extends Component {

  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    isDirty: false,
  };
  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };
  handleDirtyBlur = e => {
    const { value } = e.target
    this.setState({ isDirty: this.state.isDirty || !!value })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post('/registerUser', {
          username: value.username,
          password: value.password,
          full_name: value.fullName,
          // birth: value.Birthday,
          role: 'User'
        })
          .then(result => {
            SuccessRegisterNotification()
          })
          .catch(err => {
            FailedRegisterNotification()
          })
        this.props.form.resetFields()
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" style={{ fontSize: '20px', marginTop: '5vh' }}>
        <Col xs={24} sm={22} md={18} lg={14} >
          <Form onSubmit={this.submitForm} className="login-form" style={{ width: '100%' }}>
            <Row>
              <Row type="flex" justify="center" ><h2>Register</h2></Row>
              <Form.Item label="Username">
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'username is already existed'
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Password">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your password'
                    },
                    {
                      validator: this.compareToSecondPassword
                    }
                  ]
                })(<Input.Password />)}
              </Form.Item>
              <Form.Item label="Confirm password">
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your Confirm password'
                    },
                    {
                      validator: this.compareToFirstPassword,
                    }
                  ]
                })(<Input.Password onBlur={this.handleDirtyBlur} />)}
              </Form.Item>
              <Form.Item label="Full Name">
                {getFieldDecorator('fullName', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your full Name'
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              {/* <Form.Item label="Birthday">
                {getFieldDecorator('Birthday', {
                  rules: [
                    {
                      required: true,
                      message: 'DD-MM-YYYY'
                    }
                  ]
                })(<Input />)}
              </Form.Item> */}
            </Row>
            <Row>
              <Col>
              <Form.Item label="User">
              {getFieldDecorator('User', {
                  rules: [
                    {
                      required: true,
                      message: 'user'
                    }
                  ]
                })(<CheckboxGroup
                  options={plainOptions}
                  value={this.state.checkedList}
                  onChange={this.onChange}
                />)}
                </Form.Item>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col md={8} sm={12} xs={24}>
                <Form.Item>
                  <Button style={{ fontSize: '20px', marginTop: '5px' }} block type="primary" htmlType="submit" className="login-form-button">
                    Sign up
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}
export default Register = Form.create({ name: 'register' })(Register)
