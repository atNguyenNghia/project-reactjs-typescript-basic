import React from 'react';
export const Footer = () => {
 return (
    <footer className="bg-dark text-center text-white mt-5">
    {/* Grid container */}
    <div className="container p-4">
      {/* Section: Form */}
      <section >
        <form>
          {/*Grid row*/}
          <div className="row d-flex justify-content-center">
        
            <div className="col-md-5 col-12">
              {/* Email input */}
              <div className="form-outline form-group form-white mb-4">
                <input type="email" id="form5Example21" className="form-control" placeholder='Enter Email'/>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-auto">
              {/* Submit button */}
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </form>
      </section>
      {/* Section: Form */}
      {/* Section: Text */}
      <section className="mb-4">
        <p>
        お客様の会社の現場にエンジニアを派遣することで、品質保証とコストの両方を約半分に削減できます。
        </p>
      </section>
      {/* Section: Text */}
      {/* Section: Links */}
      <section >
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
             
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
             
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
            
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
            
            </ul>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-white" href="#"> Bootstrap.com</a>
    </div>
    {/* Copyright */}
  </footer>
 );
};