import React from "react";
// import RegisterForm from "./RegisterForm/RegisterForm.js";


function RegisterPage() {
    return (
        <div>
            <h1>Register page</h1>
             <form >
                <label >User name</label>
                <input type="text"  placeholder="Enter user name"/>
            </form>
            <form >
                <label >User email</label>
                <input type="text"  placeholder="Enter user email"/>
            </form>
            <form >
                <label >User password</label>
                <input type="text"  placeholder="Enter user password"/>
            </form>
             <button>Register</button>
        </div>
    )
}

export default RegisterPage;