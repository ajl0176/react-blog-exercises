import React, { Component } from 'react';


class Blogs extends Component {
  render(){
    return(

    <div className="row">
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          <a className="list-group-item list-group-item-action active" id="list-blog1-list" data-toggle="list" href="#list-blog1" role="tab" aria-controls="blog1">Blog 1</a>
          <a className="list-group-item list-group-item-action" id="list-blog2-list" data-toggle="list" href="#list-blog2" role="tab" aria-controls="blog2">Blog 2</a>
          <a className="list-group-item list-group-item-action" id="list-blog3-list" data-toggle="list" href="#list-blog3" role="tab" aria-controls="blog3">Blog 3</a>
          <a className="list-group-item list-group-item-action" id="list-blog4-list" data-toggle="list" href="#list-blog4" role="tab" aria-controls="blog4">Blog 4</a>
        </div>
      </div>
      <div className="col-8">
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-blog1-list">Lorem ipus</div>
          <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-blog2-list">Lorem ipus</div>
          <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-blog3-list">Lorem ipus</div>
          <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-blog4-list">Lorem ipus</div>
        </div>
      </div>
      </div>

    )
  }
};
 export default Blogs
