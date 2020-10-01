import React, { Component } from 'react';
import './App.css';


class BlogPost extends Component {

  constructor(props) {
      super(props);

      this.state= {
      fname:'',
      lname:'',
      address:'',
      number:'',
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event){
  this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
  event.preventDefault();
  this.setState({fname:'', lname: '', address:'', number:''});
}




  render() {
      return (
        <form className ="col-12 mb-5" onSubmit{...this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Blog Title and Body</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className="form-row">
            <div className="col">
            <input type="text" className="form-control" id="fname" name= "fname" placeholder="First name" value = {this.state.fname} onChange = {this.handleChange}/>
            </div>
          <div className="col">
            <input type="text" className="form-control" id="lname" name="lname" placeholder="Last name" value = {this.state.lname} onChange = {this.handleChange}/>
          </div>
          <div className="col">
          <input type="text" className="form-control" id="adress" name="address" placeholder="Address" value = {this.state.address} onChange = {this.handleChange}/>
          </div>
        <div className="col">
          <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" value = {this.state.number} onChange = {this.handleChange}/>
        </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      )
    }
  };







export default BlogPost
