import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    text: '',
  };

  onChange = evt => {
    const { value } = evt.target;
    this.setState({ text: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              onChange={this.onChange}
              type="text"
              defaultValue={text}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
