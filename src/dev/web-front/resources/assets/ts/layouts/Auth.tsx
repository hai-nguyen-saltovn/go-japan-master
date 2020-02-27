import React from "react";
import { Switch, Route } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import AuthNavbar from "../common/Navbars/AuthNavbar";

import Footer from "../common/Footer/Footer";

import routes from "../routes/pages";

import pagesStyle from "../../styles/layouts/authStyle";

// import login from "assets/img/login.jpeg";
// import lock from "assets/img/lock.jpeg";ts
// import error from "assets/img/clint-mckoy.jpg";
// import pricing from "assets/img/bg-pricing.jpeg";

class Pages extends React.Component<{ classes: any }, {}> {

  componentDidMount() {
    document.body.style.overflow = "unset";
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      return (
        <Route
          path={prop.path}
          component={prop.component}
          key={key}
        />
      );
    });
  };

  // getBgImage = () => {
  //   if (window.location.pathname.indexOf("/auth/register-page") !== -1) {
  //     return register;
  //   } else if (window.location.pathname.indexOf("/auth/login-page") !== -1) {
  //     return login;
  //   } else if (window.location.pathname.indexOf("/auth/pricing-page") !== -1) {
  //     return pricing;
  //   } else if (
  //     window.location.pathname.indexOf("/auth/lock-screen-page") !== -1
  //   ) {
  //     return lock;
  //   } else if (window.location.pathname.indexOf("/auth/error-page") !== -1) {
  //     return error;
  //   }
  // };

  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf( routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <AuthNavbar brandText={this.getActiveRoute(routes)} {...rest} />
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
           // style={{ backgroundImage: "url(" + banner +")" }}
          >
            <Switch>{this.getRoutes(routes)}</Switch>
            <Footer gray />
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(pagesStyle)(Pages);
