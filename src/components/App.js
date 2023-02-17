import logo from '../logo.svg';
import '../App.css';

// components
import Layout from './layout';

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
function App() {
  // var { isAuthenticated } = useUserState();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Layout/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Layout>
    </Router>
  );

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        // render={props =>
        //   isAuthenticated ? (
        //     React.createElement(component, props)
        //   ) : (
        //     <Navigate
        //       to={{
        //         pathname: "/login",
        //         state: {
        //           from: props.location,
        //         },
        //       }}
        //     />
        //   )
        // }
        render={<Navigate
          to={{
            pathname: "/login",
          }}
        />
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        // render={props =>
        //   isAuthenticated ? (
        //     <Navigate
        //       to={{
        //         pathname: "/",
        //       }}
        //     />
        //   ) : (
        //     React.createElement(component, props)
        //   )
        // }
        render={ <Navigate
          to={{
            pathname: "/",
          }}
        />}
      />
    );
  }
}

export default App;
