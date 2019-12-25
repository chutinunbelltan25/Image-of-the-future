import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import './App.css';
import Home from './pages/Home'
// import Signup from './pages/Signup'
import Register from './pages/Register'
import Upload from './pages/Upload'
import Searching from './pages/Search'
import Narbarmane from './component/Narbarmane';

 class App extends React.Component {
  render () {
    const { Header, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Header style={{ height: '10vh',backgroundColor:'black'}}><Narbarmane /></Header>
        <Content style={{ height:"100vh",backgroundColor:'white'}}>
          <Switch>
            <Route exact path="/" component= {Searching} /> {/*component={()=>  ตัวส่ง elementหลัง =>}*/}
              <Route exact path="/register" component={Register} />
              <Route exact path="/upload" component={Upload} />
              <Route exact path="/home" component={Home} />
              <Redirect to='/search' /> 
              {/* ถ้าพิมที่ไม่ถูกก็จะไปขึ้นหน้านี้ */}
        </Switch>
        </Content>
        
      </Layout>
    </div>
  );
}
 }

export default App;
