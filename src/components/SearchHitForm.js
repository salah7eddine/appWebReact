import React, { Component } from 'react';

export default class SearchHitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWordValue: '',
    };
  }

  setKeyWord = (event) => {
    this.setState({
      keyWordValue: event.target.value,
    });
  };

  doSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.keyWordValue);
  };

  render() {
    return (
      <form onSubmit={this.doSearch}>
        <div className='row m-2 p-2'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='keyword'
              value={this.state.keyWordValue}
              onChange={this.setKeyWord}
            />
          </div>
          <div className='col-auto'>
            <button className='btn btn-success' type='submit'>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
