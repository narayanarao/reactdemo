import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Switch,Route} from 'react-router-dom';
import NewAccount from './components/NewAccount/NewAccount';
import Login from './components/Login/Login';
import ErrorBoundary from './containers/Error/ErrorBoundary';
import AdminHome from './components/Admin/AdminHome';
import StudentHome from './components/Student/StudentHome';
import Logout from './components/Logout/Logout';
  const App = () => {
    console.log("App.js");
    const routes = (
      <ErrorBoundary>
      <Switch>
         <Route exact path="/" component={Login}></Route>
         <Route exact path="/newaccount" component={NewAccount}></Route>
         <Route exact path="/admin" component={AdminHome}></Route>
         <Route exact path="/student" component={StudentHome}></Route>
         <Route exact path="/logout" component={Logout}></Route>
       </Switch>
       </ErrorBoundary>
      ); 
    return (
      <Layout>
         {routes}
      </Layout>
    )
  }
export default App;
