import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { triple, double } from './testActions';
const mapState = state => ({
  data: state.data
});
const actions = {
  triple,
  double
};
class testComponent extends Component {
  render() {
    const { data, triple, double } = this.props;
    return (
      <div>
        <Form>
          <h1>Test Page</h1>
          <h3>The number is: {data}</h3>
          <button className="danger" onClick={triple}>
            Triple
          </button>
          <button className="primary" onClick={double}>
            Double
          </button>
        </Form>
      </div>
    );
  }
}
export default connect(mapState, actions)(testComponent);
