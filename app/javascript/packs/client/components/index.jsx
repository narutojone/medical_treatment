import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFormulation } from '../actions';

class LandingPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    this.props.getFormulation()
  }

  render() {
    console.log(this.props.formulations)
    return(
      <div>
        <h1>Hello World</h1>
        <div>test</div>
      </div>
    )
  }
}

const mapStateToProps = ({ formulations }) => {
  return { formulations }
}

const mapDispatchToProps = (dispatch) => {
 return {
   getFormulation: () => dispatch(getFormulation())
 }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage))
