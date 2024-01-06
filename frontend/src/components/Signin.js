import React from "react";

export default function Signin() {
  // const registerFrom = (e)=>{
  //  e.preventDefault();
  // }
  return (
    <>
      <form className="row g-3" method="POST" action="/register"
      //  onSubmit={registerFrom}
       >
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" name="name" autoComplete="true" />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            autoComplete="f"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            name="address"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
