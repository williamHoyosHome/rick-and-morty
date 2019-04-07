import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
  state = {
    search: ''
  }

  updateSearch(e){
    this.setState ({
      search: e.target.value
    })
  }
  
  render(){
    return(
      <div className="form-inline my-2 my-lg-0" >
        <input type="text" placeholder="find your character" 
            className="form-control mr-sm-2" 
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            onSubmit={this.handleSubmit}
        />
        <Link to={`/character/search/${this.state.search}`} className="btn btn-primary">Submit</Link>
      </div>
    )
  }
}

export default Search;

