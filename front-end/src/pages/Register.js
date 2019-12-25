import React, { Component } from 'react'
import { Col, Input, Row, Button, Checkbox } from 'antd'
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Customer', 'Vendor', 'Admin'];
const defaultCheckedList = ['Customer', 'Vendor'];
export default class Register extends Component {
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
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
    render() {
        return (
            <Row type="flex" justify="center" style={{ fontSize: '20px', marginTop: '5vh' }}>
                <Col xs={24} sm={22} md={18} lg={14} >
                    <Row type="flex" justify="center" ><b>Register</b></Row>
                    <Row >
                        <Col>

                        </Col>
                        <Col>
                            Username:
          <Input placeholder="Username" />
                        </Col>
                        <Col>
                            Password:
          <Input.Password placeholder="Password" />
                        </Col>
                        <Col>
                            Confirm Password:
          <Input.Password placeholder="Confirm password" />
                        </Col>
                        <Col>
                            FullName:
          <Input placeholder="FullName" />
                        </Col>
                        <Col>
                            Birthday:
          <Input placeholder="01/01/1995" />
                        </Col><br />
                        <Col>
                            <Row>
                                <Col style={{ borderBottom: '1px solid #E9E9E9' }}>
                                    <Checkbox style={{ fontSize: '20px' }}
                                        indeterminate={this.state.indeterminate}
                                        onChange={this.onCheckAllChange}
                                        checked={this.state.checkAll}
                                    >
                                        Check all
          </Checkbox>
                                </Col>
                                <br />
                                <Col>
                                    <CheckboxGroup
                                        options={plainOptions}
                                        value={this.state.checkedList}
                                        onChange={this.onChange}
                                    /></Col>
                            </Row>
                            <Row type="flex" justify="center" style={{ marginTop: 10, }}>
                                <Button style={{ fontSize: '20px' }} type="primary">Sign up</Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        )
    }
}
