import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfChars: 16,
      numberOfStrings: 4,
      charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      stringList: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    let tempStringList = [];

    function generatePassword(stringLength, charset) {
      let test = '';
      for (let i = 0, n = charset.length; i < stringLength; ++i) {
        test += charset.charAt(Math.floor(Math.random() * n));
      }
      return test;
    }

    for (let i = 0; i < this.state.numberOfStrings; ++i) {
      tempStringList = [
        ...tempStringList,
        generatePassword(this.state.numberOfChars, this.state.charset)
      ];
    }

    this.setState({
      stringList: tempStringList
    });
  }

  handleClear(event) {
    event.preventDefault();

    this.setState({
      stringList: []
    });
  }

  render() {
    return (
      <div className="section">
        <form className="field" onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label" htmlFor="numberOfChars">
              Number of chars
            </label>
            <input
              className="input"
              type="number"
              name="numberOfChars"
              value={this.state.numberOfChars}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="numberOfStrings">
              Number Of Strings
            </label>
            <input
              className="input"
              type="number"
              name="numberOfStrings"
              value={this.state.numberOfStrings}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="charset">
              Charset
            </label>
            <input
              className="input"
              type="text"
              name="charset"
              value={this.state.charset}
              onChange={this.handleChange}
            />
          </div>

          <button className="button is-link" type="submit">
            Generate
          </button>
          <button
            className="button is-text"
            onClick={this.handleClear.bind(this)}
          >
            Clear
          </button>
        </form>

        <textarea
          className="textarea"
          name="stringList"
          rows="4"
          value={this.state.stringList.join('\n')}
          readOnly
          placeholder="Strings..."
        />
      </div>
    );
  }
}

export default Input;
