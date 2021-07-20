import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addstat, getstats } from '../../actions/stats';

export class Form extends Component {
  state = {
    name: '',
    age: '',
    matches: '',
    runs:'',
  };

  static propTypes = {
    addstat: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, age, matches, runs } = this.state;
    const stat = { name, age, matches, runs };
    this.props.addstat(stat);
    //this.props.getstats();

  };

  render() {
    const { name, age, matches, runs } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              className="form-control"
              type="number"
              name="age"
              onChange={this.onChange}
              value={age}
            />
          </div>
          <div className="form-group">
            <label>Matches</label>
            <input
              className="form-control"
              type="number"
              name="matches"
              onChange={this.onChange}
              value={matches}
            />
          </div>
            <div className="form-group">
            <label>Runs</label>
            <input
              className="form-control"
              type="number"
              name="runs"
              onChange={this.onChange}
              value={runs}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addstat })(Form);