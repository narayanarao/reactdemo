import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import classes from '../Error/ErrorBoundary.module.css';
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
     // logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div className={classes.error}><h4>Something went wrong.</h4>
        <NavLink to="/" exact>Home</NavLink>
        </div>;
      }
      return this.props.children;
    }
  }
export default ErrorBoundary
