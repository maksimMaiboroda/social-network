import React from "react";
import classes from "./App.module.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Muzic from "./components/Muzic/Muzic";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

const App = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.appWrapper}>
        <HeaderContainer />
        <Navbar />
        <div className={classes.appWrapperContent}>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/muzic" component={Muzic} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
