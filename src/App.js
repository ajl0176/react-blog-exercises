import React, { Component } from 'react';
import './App.css';


class BlogPost extends Component {
  render() {
      return (
        <form className ="col-12 mb-5">

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Blog Title and Body</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className="form-row">
            <div className="col">
            <input type="text" className="form-control" placeholder="First name"/>
            </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name"/>
          </div>
          <div className="col">
          <input type="text" className="form-control" placeholder="Address"/>
          </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Phone Number"/>
        </div>
        </div>
      </form>
    )
  }
};

export default BlogPost
