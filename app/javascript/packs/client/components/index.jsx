import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFormulation } from '../actions';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LandingPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      addressLine: '',
      city: '',
      state: '',
      zip: ''
    }
  }

  componentDidMount() {
    this.props.getFormulation()
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChangeValue(name, event) {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return(
      <Container>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.handleChangeValue('name', e)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Address Line</Label>
            <Input
              placeholder="Address Line"
              value={this.state.addressLine}
              onChange={e => this.handleChangeValue('addressLine', e)}
              required
            />
          </FormGroup>
          <Row>
            <Col sm={4}>
              <FormGroup>
                <Label>City</Label>
                <Input
                  placeholder="City"
                  value={this.state.city}
                  onChange={e => this.handleChangeValue('city', e)}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label>State</Label>
                <Input
                  placeholder="State"
                  value={this.state.state}
                  onChange={e => this.handleChangeValue('state', e)}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label>Zip</Label>
                <Input
                  placeholder="Zip"
                  value={this.state.zip}
                  onChange={e => this.handleChangeValue('zip', e)}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label>Formulation</Label>
            <Input
              type="select"
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="">Custom</option>
              {!_.isEmpty(this.props.formulations) &&
                this.props.formulations.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
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
