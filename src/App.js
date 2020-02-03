import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Muzic from "./components/Muzic/Muzic";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.appWrapper}>
        <Header />
        <Navbar />
        <div className={classes.appWrapperContent}>
          <Route
            path="/Dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route
            path="/Profile"
            render={() => <Profile store={props.store} />}
          />
          <Route
          
            path="/Users"
            render={() => <UsersContainer store={props.store} />}
          />
          <Route path="/News" component={News} />
          <Route path="/Muzic" component={Muzic} />
          <Route path="/Settings" component={Settings} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
