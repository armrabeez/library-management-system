import React, { useState } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import "./Login.css";
import Dashboard from "../Dashboard/Dashboard"
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [isLoggedIn, setLogin] = useState(false);
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(email==="admin@gmail.com" && password==="admin123"){
        setLogin(true)
    }

  }
  function Login(){
      return(<div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
        <Form.Label>Email</Form.Label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
        <Form.Label>Password</Form.Label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
     {/* { showResults ? <Results /> : null } */}
    </div>)
  }

  return (
    <div>
        {isLoggedIn ? <Dashboard/> :Login()}
    </div>
  );
}

