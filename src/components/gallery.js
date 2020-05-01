import React, { Component } from 'react';
import axios from 'axios';
import SearchHitForm from './SearchHitForm';
import HitItem from './HitItem';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      currentPage: 1,
      pageSize: 10,
      currentKeyWord: '',
      totalPages: 1,
      pages: [],
    };
  }

  componentDidMount() {
    // this.getHits();
  }

  getHits(keyWord) {
    let url =
      'https://pixabay.com/api/?key=6825048-b53e55ee93018fe0c6947593b&q=' +
      keyWord +
      '&page=' +
      this.state.currentPage +
      '&per_page=' +
      this.state.pageSize;
    axios
      .get(url)
      .then((resp) => {
        let totalPages =
          resp.data.totalHits % this.state.pageSize === 0
            ? resp.data.totalHits / this.state.pageSize
            : Math.floor(resp.data.totalHits / this.state.pageSize) + 1;
        this.setState({
          hits: resp.data?.hits,
          totalPages,
          pages: new Array(totalPages).fill(0),
          currentKeyWord: keyWord,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  search = (keyWord) => {
    this.setState(
      {
        currentPage: 1,
        totalPages: 1,
        pages: [],
      },
      () => {
        this.getHits(keyWord);
      }
    );
  };

  goToPage = (page) => {
    this.setState(
      {
        currentPage: page,
      },
      () => {
        this.getHits(this.state.currentKeyWord);
      }
    );
  };

  render() {
    return (
      <div>
        <SearchHitForm onSearch={this.search} />

        <div className='row'>
          {this.state.hits.map((hit) => (
            <HitItem hit={hit} key={hit.id} details={false} />
          ))}
        </div>
        <div>
          <ul className='nav nav-pills'>
            {this.state.pages.map((v, index) => (
              // <Pagination
              //   index={index}
              //   onPage={this.goToPage(index)}
              //   key={index}
              // />

              <li key={index}>
                <button
                  className={
                    this.state.currentPage === index + 1
                      ? 'btn btn-primary'
                      : 'btn btn-link'
                  }
                  onClick={() => this.goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
