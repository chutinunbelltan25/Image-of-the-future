import React from 'react';
import { Layout } from 'antd';
import { Switch } from 'react-router-dom'
import './App.css';
import NavbarMenu from './component/NavbarMenu'
import PrivateRoute from './component/route/privateRoute'
import { connect } from 'react-redux'
import { setPicInProgess, setPicInProgess_cate, setPicInProgess_key,setPicApprove_media,setPicReject_media,setHome_media,admin_approve_media,admin_reason_media } from './redux/user/action'
import Axios from 'axios'
import JwtDecode from 'jwt-decode';

class App extends React.Component {
  handlePhotoNew(id) {
    Axios.get(`http://localhost:8080/media_inprogress/user/${id}`).then(res => {
      this.props.setPicInProgess(res)
    });
  }
  handlePhotoApprove(id) {
    Axios.get(`http://localhost:8080/media_approve/user/${id}`).then(res => {
      this.props.setPicApprove_media(res)
    });
  }
  handlePhotoReject(id) {
    Axios.get(`http://localhost:8080/media_reject/user/${id}`).then(res => {
      this.props.setPicReject_media(res)
    });
  }
  handlePhotoMedia() {
    Axios.get(`http://localhost:8080/media_approve`).then(res => {
    this.props.setHome_media(res)
    });
  }
  handlePhotoCate() {
    Axios.get(`http://localhost:8080/category`).then(res => {
      this.props.setPicInProgess_cate(res)
    });
  }
  handlePhotoKey() {
    Axios.get(`http://localhost:8080/keywords`).then(res => {
      this.props.setPicInProgess_key(res)
    });
  }
  handleAdminApprove() {
    Axios.get(`http://localhost:8080/admin_for_approve`).then(res => {
      this.props.admin_approve_media(res)
    });
  }
  handleAdminReason() {
    Axios.post(`http://localhost:8080/admin_Reason/medias/:media_id`).then(res => {
      this.props.admin_reason_media(res)
    });
  }

  componentDidMount() {
    let token = localStorage.getItem('ACCESS_TOKEN')
    let user
    if(token) {
     user = JwtDecode(token)
     this.handlePhotoNew(user.id)
     this.handlePhotoApprove(user.id)
     this.handlePhotoReject(user.id)
    }
    
    
    this.handlePhotoCate()
    this.handlePhotoKey()
    this.handlePhotoMedia()
    this.handleAdminApprove()
    this.handleAdminReason()
  }

  render() {
    let token = localStorage.getItem('ACCESS_TOKEN')
    let role = "guest"
    if(token) {
      let user = JwtDecode(token)
      role = user.role
    }
    const { Header, Content } = Layout;
    return (
      <div className="App">
        <Layout>
          <Header style={{ height: '11vh', backgroundColor: 'black' }}><NavbarMenu /></Header>
          <Content style={{ height: "100vh", backgroundColor: 'white' }}>
            <Switch>
              <PrivateRoute role={role} />
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  adminApproveMedia: state.adminApproveMedia,
  adminReasonMedia: state.adminReasonMedia
})

const mapDispatchToProps = (dispatch) => ({
  setPicInProgess: (data) => dispatch(setPicInProgess(data)),
  setPicInProgess_cate: (data) => dispatch(setPicInProgess_cate(data)),
  setPicInProgess_key: (data) => dispatch(setPicInProgess_key(data)),
  setPicApprove_media: (data) => dispatch(setPicApprove_media(data)),
  setPicReject_media: (data) => dispatch(setPicReject_media(data)),
  setHome_media: (data) => dispatch(setHome_media(data)),
  admin_approve_media: (data) => dispatch(admin_approve_media(data)),
  admin_reason_media: (data) => dispatch(admin_reason_media(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
