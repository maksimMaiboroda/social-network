import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";

import News from "./components/News/News";
import Muzic from "./components/Muzic/Muzic";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <div className={classes.appWrapper}>
          <Header />
          <Navbar />
          <div className={classes.appWrapperContent}>
            <Route path="/Dialogs" component={Dialogs} />
            <Route path="/Profile" component={Profile} />
            <Route path="/News" component={News} />
            <Route path="/Muzic" component={Muzic} />
            <Route path="/Settings" component={Settings} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
