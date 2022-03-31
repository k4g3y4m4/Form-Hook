import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const FormUser = props => {
    const { inputs, setInputs} = props;

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

        //check if firstname and lastName is empty or 2 characters minimum
        if(e.target.name === "firstName" || e.target.name === "lastName"){
            if(e.target.value.length < 2){
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value,
                    error: true
                });
            }else{
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value,
                    error: false
                });
            }
        }else if(e.target.name === "email"){
            if(e.target.value.length < 5){
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value,
                    error: true
                });
            }else{
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value,
                    error: false
                });
            }  
        }else if(e.target.name === "password" || e.target.name === "confirmPassword"){
            if(e.target.value.length < 8){
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value,
                    error: true
                });
            }else{
                if(e.target.value !== inputs.confirmPassword){
                    setInputs({
                        ...inputs,
                        [e.target.name]: e.target.value,
                        error: true
                    });
                }else{
                    setInputs({
                        ...inputs,
                        [e.target.name]: e.target.value,
                        error: false
                    });
                }
            }  
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h3>Form User</h3>
            </div>
            <div className="card-body">
                <form>
                    <div class="form-group row py-1">
                        <label for="firstName" className="col-md-4 col-form-label">First Name: </label>
                        <div class="col-md-8">
                            <input type="text" onChange={handleChange} className="form-control" name="firstName"/>
                            {
                                inputs.error && inputs.firstName.length < 2 ?
                                <div className="alert alert-danger">
                                    First Name must be at least 2 characters
                                </div>
                                : null
                            }
                        </div>
                    </div>
                    <div class="form-group row py-1">
                        <label for="lastName" className="col-md-4 col-form-label">Last Name: </label>
                        <div className="col-md-8">
                            <input type="text" onChange={handleChange} className="form-control" name="lastName"/>
                            {
                                inputs.error && inputs.lastName.length < 2 ?
                                <div className="alert alert-danger">
                                    Last Name must be 2 characters minimum
                                </div>
                                : null
                            }
                        </div>
                    </div>
                    <div class="form-group row py-1">
                        <label for="email" className="col-md-4 col-form-label">Email: </label>
                        <div className="col-md-8">
                            <input type="text" onChange={handleChange} className="form-control" name="email"/>
                            {
                                inputs.error && inputs.email.length < 5 ?
                                <div className="alert alert-danger">
                                    Email must be 5 characters minimum
                                </div>
                                : null
                            }
                        </div>
                    </div>

                    <div class="form-group row py-1">
                        <label for="password" className="col-md-4 col-form-label">Password: </label>
                        <div className="col-md-8">
                            <input type="password" onChange={handleChange} className="form-control" name="password"/>
                            {
                                inputs.error && inputs.password.length < 8 ?
                                <div className="alert alert-danger">
                                    Password must be 8 characters minimum
                                </div>
                                : null
                            }
                        </div>
                    </div>
                    <div class="form-group row py-1">
                        <label for="confirmPassword" className="col-md-4 col-form-label">Confirm Password: </label>
                        <div className="col-md-8">
                            <input type="password" onChange={handleChange} className="form-control" name="confirmPassword"/>
                            {
                                inputs.error && inputs.password !== inputs.confirmPassword ?
                                <div className="alert alert-danger">
                                    Password and Confirm Password must be equal
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
    }

export default FormUser;