import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Songs from './Songs';
import AllAlbums from './AllAlbums'

export default class SingleArtist extends Component {
 constructor (props) {
  super(props);
  this.state = {
    artist: {},
    artistAlbums: [],
    artistSongs: []
  }
}
  

  componentDidMount() {
  	const artistId = this.props.match.params.artistId;
  	axios.get(`/api/artists/${artistId}`)
  	.then(res => res.data)
  	.then(artist => this.setState({
  	  artist: artist
  	}));

  	axios.get(`/api/artists/${artistId}/albums`)
  	.then(res => res.data)
  	.then( albums => this.setState({
       artistAlbums: albums
  	}))

  	axios.get(`/api/artists/${artistId}/songs`)
  	.then(res => res.data)
  	.then( songs => this.setState({
  	  artistSongs: songs
  	}))
  }


render () {

  const artist = this.state.artist; // or however you've named it

  return (
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
        <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
      </ul>

      {
      <div>
        <Route path='/artists/:artistId/albums' render={() => <AllAlbums albums={this.state.artistAlbums}/>} />
     	<Route path='/artists/:artistId/songs' render={() => <Songs songs={this.state.artistSongs}/>} />
     </div>
      }
    </div>
  );
}
}