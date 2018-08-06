import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFormulation, getIngredient, generatePDF } from '../actions';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LandingPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      addressLine: '',
      city: '',
      state: '',
      zip: '',
      formulation: '',

      formulations: [],
      ingredients: []
    }
  }

  componentDidMount() {
    this.props.getFormulation()
    this.props.getIngredient()
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.state.formulations, nextProps.formulations)) {
      this.setState({
        formulations: nextProps.formulations
      })
    }

    if (!_.isEqual(this.state.ingredients, nextProps.ingredients)) {
      this.setState({
        ingredients: nextProps.ingredients
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, addressLine, city, state, zip, formulation, formulations, ingredients } = this.state
    const address = [addressLine, city, state, zip].filter(value => !!value).join(', ')
    let formulationValue = 'Custom'
    if (formulation !== '') {
      formulationValue = formulations.find(item => item.id === parseInt(formulation)).name      
    }

    const correctIngredients = ingredients.filter(item => item.percentage && item.percentage > 0)

    let ingredientsText = correctIngredients.reduce((accumulator, currentValue) => {
      return accumulator + `<p>${currentValue.name}: ${currentValue.percentage}%</p>`
    }, '')

    const params = {
      name,
      address,
      formulation: formulationValue,
      ingredients: ingredientsText
    }

    this.props.generatePDF(params)
  }

  handleChangeValue(name, event) {
    this.setState({
      [name]: event.target.value
    })
  }

  handleFormulationChange(event) {
    const formulationId = event.target.value
    this.props.getIngredient(formulationId)
    this.setState({
      formulation: formulationId
    })
  }

  handleChengeIngredients(index, event) {
    const { ingredients } = this.state
    const ingredient = ingredients[index]
    ingredient.percentage = event.target.value
    this.setState({
      ingredients
    })
  }

  render() {
    const { name, addressLine, city, state, zip, formulation, formulations, ingredients } = this.state
    console.log(ingredients)
    return(
      <Container>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              placeholder="Name"
              value={name}
              onChange={e => this.handleChangeValue('name', e)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Address Line</Label>
            <Input
              placeholder="Address Line"
              value={addressLine}
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
                  value={city}
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
                  value={state}
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
                  value={zip}
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
              value={formulation}
              onChange={(e) => this.handleFormulationChange(e)}
            >
              <option value="">Custom</option>
              {!_.isEmpty(formulations) &&
                formulations.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </Input>
          </FormGroup>
          <h3 className="ingredients-name">Ingredients</h3>
          <Row>
          {!_.isEmpty(ingredients) &&
            ingredients.map((item, index) => (
              <Col key={`ingredient-${item.id}`} sm={4}>
                <div className="ingredient-labels">
                  <Label>{item.name}</Label>
                  <Label className="minmax-label">{`${item.minimum_percentage} - ${item.maximum_percentage}`}</Label>
                </div>
                <Input
                  type="number"
                  value={item.percentage}
                  placeholder={item.name}
                  onChange={e => this.handleChengeIngredients(index, e)}
                />
              </Col>
            ))
          }
          </Row>
          <Button className="btn-submit" color="primary">Submit</Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = ({ formulations, ingredients }) => {
  return { formulations, ingredients }
}

const mapDispatchToProps = (dispatch) => {
 return {
   getFormulation: () => dispatch(getFormulation()),
   getIngredient: (id = "") => dispatch(getIngredient(id)),
   generatePDF: (data) => dispatch(generatePDF(data))
 }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage))
