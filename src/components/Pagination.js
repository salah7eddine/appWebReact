import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  changePage = (page) => {
    console.log('go To changePage ____________________');
    this.setState({
      currentPage: page,
    });
  };

  goToPage = () => {
    console.log('go To Page ____________________');
    this.props.onPage(this.state.currentPage);
  };

  render() {
    return (
      <li>
        <button
          className={
            this.state.currentPage === this.props.index + 1
              ? 'btn btn-primary'
              : 'btn btn-link'
          }
          onClick={() => this.changePage(this.props.index + 1)}
        >
          {this.props.index + 1}
        </button>
      </li>
    );
  }
}
