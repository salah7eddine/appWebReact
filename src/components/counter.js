import React, { Component } from 'react';

export default class Counter extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      imagesList: [0],
    };
  }

  compute = (op) => {
    let sign = op === '+' ? 1 : -1;
    if (this.state.counter === 1 && op === '-') sign = 0;
    let c = this.state.counter + sign;
    this.setState({
      counter: c,
      imagesList: new Array(c).fill(0),
    });
  };

  render() {
    return (
      <div className='card m-3'>
        <div className='card-header'>
          <strong>
            {this.props.title ? this.props.title : 'Default title'} :{' '}
            {this.state.counter}
          </strong>
        </div>
        <div className='ml-auto'>
          <button
            onClick={() => this.compute('+')}
            className='btn btn-primary m-2'
          >
            +
          </button>
          <button
            onClick={() => this.compute('-')}
            className='btn btn-warning m-2'
          >
            -
          </button>
        </div>
        <div className='card-body'>
          {this.state.imagesList.map((v, index) => (
            <span key={index}>
              {index}
              <img
                width={100}
                src={this.props.image ? this.props.image : 'images/hacker.png'}
                alt=''
              />
            </span>
          ))}
        </div>
      </div>
    );
  }
}
