import React, { Component } from 'react'
import * as allRoutes from './index'
import rolesConfig from '../../config/role'
import { Route, withRouter } from 'react-router-dom';


class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allowedRoutes: []
    }
  }

  componentDidMount() {
    let role = this.props.role
    if (role) {
      this.setState({
        allowedRoutes: rolesConfig[role].routes
      })
    } else {
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <>
        {this.state.allowedRoutes.map(route =>
          < Route
            exact path={route.url}
            component={allRoutes[route.component]}
            key={route.url}
          />
        )}
      </>
    )
  }
}

export default withRouter(PrivateRoute);
