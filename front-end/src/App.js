import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import './App.css';
import Home from './pages/Home'
// import Signup from './pages/Signup'
import Register from './pages/Register'
import User from './pages/User'
import Upload from './pages/upload'
import NavbarMenu from './component/NavbarMenu'
import DetailPicture from './pages/detailPicture'
//redux
import { connect } from 'react-redux'
import { setPicInProgess, setPicInProgess_cate, setPicInProgess_key,setPicApprove_media,setPicReject_media } from './redux/user/action'
import Axios from 'axios'

class App extends React.Component {


  handlePhotoNew() {
    Axios.get(`http://localhost:8080/media_inprogress`).then(res => {
      this.props.setPicInProgess(res)
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
  handlePhotoApprove() {
    Axios.get(`http://localhost:8080/media_approve`).then(res => {
      this.props.setPicApprove_media(res)
    });
  }
  handlePhotoReject() {
    Axios.get(`http://localhost:8080/media_reject`).then(res => {
      this.props.setPicReject_media(res)
    });
  }


  componentDidMount() {
    this.handlePhotoNew()
    this.handlePhotoCate()
    this.handlePhotoKey()
    this.handlePhotoApprove()
    this.handlePhotoReject()
  }

  render() {



    const { Header, Content } = Layout;
    return (
      <div className="App">
        <Layout>
          <Header style={{ height: '10vh', backgroundColor: 'black' }}><NavbarMenu /></Header>
          <Content style={{ height: "100vh", backgroundColor: 'white' }}>
            <Switch>
              {localStorage.getItem("ACCESS_TOKEN") ? <Route exact path="/upload" component={Upload} /> :
                null} {/*component={()=>  ตัวส่ง elementหลัง =>}*/}
              <Route exact path="/register" component={Register} />
              {localStorage.getItem("ACCESS_TOKEN") ? <Route exact path="/User" component={User} /> :
                null}
              <Route exact path="/home" component={Home} />
              <Route exact path="/detailPicture" component={DetailPicture} />
              {/* <Redirect to='/search' /> */}
              {/* ถ้าพิมที่ไม่ถูกก็จะไปขึ้นหน้านี้ */}
            </Switch>
          </Content>

        </Layout>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  setPicInProgess: (data) => dispatch(setPicInProgess(data)),
  setPicInProgess_cate: (data) => dispatch(setPicInProgess_cate(data)),
  setPicInProgess_key: (data) => dispatch(setPicInProgess_key(data)),
  setPicApprove_media: (data) => dispatch(setPicApprove_media(data)),
  setPicReject_media: (data) => dispatch(setPicReject_media(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
