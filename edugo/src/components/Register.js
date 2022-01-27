import React, { useState } from "react";
import "../Register.css";
const Register = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDob] = useState("");
    // const [sex, setSex] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    // Endpoint : http://localhost:8000/registration
    const handleSubmit = (e) =>{
        e.preventDefault()
        // const submission = {fname,lname,dob,sex,email,phonenumber}
        const submission = {fname,lname,dob,email,phonenumber}

        console.log(submission)
        fetch('http://localhost:8000/registration',{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(submission)
        }).then(()=>{
            console.log("NEW")
        }) 
    }
  return (
    <div className="container" style={{marginTop : "3%",marginBottom : "10%"}}>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{borderRadius: "15px"}}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            value = {fname}
                            onChange={(e)=>(setFname(e.target.value))}
                          />
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                            value = {lname}
                            onChange={(e)=>(setLname(e.target.value))}
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="birthdayDate"
                            value = {dob}
                            onChange={(e)=>(setDob(e.target.value))}
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Date Of Birth
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            value = {email}
                            onChange={(e)=>(setEmail(e.target.value))}
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            value = {phonenumber}
                            onChange={(e)=>(setPhonenumber(e.target.value))}
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;