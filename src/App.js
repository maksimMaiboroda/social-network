import React from "react";
import {
  HashRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import classes from "./App.module.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Muzic from "./components/Muzic/Muzic";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializedApp } from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

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
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/login" replace />}
              />
              <Route path="/dialogs" element={
                <React.Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </React.Suspense>
              } />
              <Route path="/profile/:userId" element={
                <React.Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </React.Suspense>
              } />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/muzic" element={<Muzic />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, { initializedApp })(App);

const AppSocialNetwork = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </Provider>
  );
};

export default AppSocialNetwork;
