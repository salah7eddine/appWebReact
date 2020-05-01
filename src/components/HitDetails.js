import React, { Component } from 'react';
import axios from 'axios';
import HitItem from './HitItem';

export default class HitDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hit: null,
    };
  }

  getHits(id) {
    let url =
      'https://pixabay.com/api/?key=6825048-b53e55ee93018fe0c6947593b&id=' + id;
    axios
      .get(url)
      .then((resp) => {
        this.setState({
          hit: resp.data?.hits[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getHits(this.props.match.params.id);
  }

  render() {
    if (this.state.hit !== null)
      return (
        <div>
          <HitItem hit={this.state.hit} details={true} />
        </div>
      );
    else {
      return <div></div>;
    }
  }
}
