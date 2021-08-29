import React                 from "react";
import {
  HashRouter,
  Route,
  withRouter,
  Switch,
  Redirect
}                            from "react-router-dom";
import classes               from "./App.module.css";
import HeaderContainer       from "./components/Header/HeaderContainer";
import Navbar                from "./components/Navbar/Navbar";
import Footer                from "./components/Footer/Footer";
import UsersContainer        from "./components/Users/UsersContainer";
import News                  from "./components/News/News";
import Muzic                 from "./components/Muzic/Muzic";
import Settings              from "./components/Settings/Settings";
import Login                 from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose }           from "redux";
import { initializedApp }    from "./redux/appReducer";
import Preloader             from "./components/common/preloader/preloader";
import store                 from "./redux/reduxStore";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className={classes.wrapper}>
        <HeaderContainer />
        <div className={classes.contentWrapper}>
          <Navbar />
          <div className={classes.appWrapperContent}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to={"/login"} />}
                component={Login}
              />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route
                path="/profile/:userId?"
                render={withSuspense(ProfileContainer)}
              />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/news" component={News} />
              <Route path="/muzic" component={Muzic} />
              <Route path="/settings" component={Settings} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializedApp })
)(App);

const AppSocialNetwork = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default AppSocialNetwork;
