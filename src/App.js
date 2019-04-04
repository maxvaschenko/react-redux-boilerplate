import React, { Component } from 'react'
import { connect } from 'react-redux'
import { appLoaded } from '../src/redux/auth/actions'

// App container which contains app with modal
class App extends Component {
  componentDidMount() {
    this.props.appLoaded()
  }

  render() {
    return (
      <>
        <p>Hello App</p>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    appLoaded: () => {
      dispatch(appLoaded())
    },
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(App)
