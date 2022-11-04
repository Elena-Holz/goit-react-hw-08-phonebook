import React from "react";


export default function LoginPage() {
    return (
        <div>
                <h1>Login page</h1>
                <form >
                    <label >User email</label>
                    <input type="text"  placeholder="Enter user email"/>
                </form>
                <form >
                    <label >User password</label>
                    <input type="text"  placeholder="Enter user password"/>
                </form>
                <button>Login</button>
        </div>
    )
}