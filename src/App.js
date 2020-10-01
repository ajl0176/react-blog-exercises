import React, { Component } from 'react';
import './App.css';

class BlogPost extends Component {
  render() {
      return (
        <form className ="col-12 mb-5">

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Blog Title and Body</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
    )
  }
};

export default BlogPost
