import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultUser = ({data}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>Result User</h3>
            </div>
            <div className="card-body">
                <h6>First Name : {data.firstName}</h6>
                <h6>Last Name : {data.lastName}</h6>
                <h6>Email : {data.email}</h6>
                <h6>Password : {data.password}</h6>
                <h6>Confirm Password: {data.confirmPassword}</h6>
            </div>
        </div>
    );
};

export default ResultUser;