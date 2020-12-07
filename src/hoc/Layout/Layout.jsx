import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {

    render () {
        return (
           <Fragment>
               <Header/>
               <main>
                  {this.props.children}
               </main>
               <Footer/>
           </Fragment>
        )
    }
}
export default Layout;