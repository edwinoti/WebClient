import React, { Component } from "react";


 
class Home extends Component {


  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch(`http://localhost:8000/api/products`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }


  render() {

        const { isLoading, users, error } = this.state;

    return (

              <div class="container">
              <h4>Products</h4>

        <div class="row">



      <React.Fragment>
         
          

        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { title, price, description } = user;
            return (

            <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{title}</h5>
            <h6 class="card-price text-center"><span class="period">{price}</span></h6>
           
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa fa-check"></i>{description}</span></li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span></li>
            </ul>
          

                         
        </div>
      </div>
        </div>
              
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
       
        </div>
        
       
 
      </div>
    );
  }
}
 
export default Home;
















