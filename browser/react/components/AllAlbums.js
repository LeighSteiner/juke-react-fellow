import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AllAlbums extends Component {

  render () {
    const albums = this.props.albums;
    const selectAlbum = this.props.selectAlbum;

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              <Link to={`/albums/${album.id}`} className="thumbnail" href="#" >
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    {album.name}
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}
