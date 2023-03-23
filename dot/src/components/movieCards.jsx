import React from 'react';


class Moviecards extends React.Component {
  render() {
    
    return (
      <div className="container ">
        <br></br><br></br><br></br>
        <div className="row">
        <div class="col col-lg-4 col-sm-12 col-md-6">
              <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        </div>
    );
  }
}

export default Moviecards;