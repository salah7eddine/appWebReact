import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HitItem extends Component {
  render() {
    return (
      <div className={this.props.details === false ? 'col-md-4 mt-2' : 'm-2'}>
        <div className='card'>
          <div className='card-header'>
            {this.props.details === false ? this.props.hit.tags : 'Details'}|{' '}
            {this.props.details === false
              ? this.props.hit.webformatWidth
              : this.props.hit.imageWidth}{' '}
            x{' '}
            {this.props.details === false
              ? this.props.hit.webformatHeight
              : this.props.hit.imageWidth}
          </div>
          <div className='card-body'>
            {this.props.details === false ? (
              <img
                className='card-img'
                height={200}
                src={this.props.hit.webformatURL}
                alt='hit'
              />
            ) : (
              <img src={this.props.hit.largeImageURL} alt='hit' />
            )}
          </div>

          {this.props.details === false ? (
            <div className='m-2'>
              <Link
                to={'/hitDetails/' + this.props.hit.id}
                className='btn btn-success'
              >
                Hit Details
              </Link>
            </div>
          ) : (
            <div>
              <div className='row p-2'>
                <div className='col-auto'>
                  <img
                    src={this.props.hit.userImageURL}
                    className='img-thumbnail'
                    alt=''
                  />
                </div>
                <div>
                  <ul className='nav nav-pills'>
                    <li className='list-group-item'>
                      Views : <strong>{this.props.hit.views}</strong>
                    </li>
                    <li className='list-group-item'>
                      Comments : <strong>{this.props.hit.comments}</strong>{' '}
                    </li>
                    <li className='list-group-item'>
                      Downloads : <strong>{this.props.hit.downloads}</strong>
                    </li>
                    <li className='list-group-item'>
                      Likes : <strong>{this.props.hit.likes}</strong>
                    </li>
                    <li className='list-group-item'>
                      Favorites :<strong>{this.props.hit.favorites}</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link to={'/gallery'} className='btn btn-primary'>
                  Back
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HitItem;
