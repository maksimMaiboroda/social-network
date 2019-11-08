import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.appWrapper}>
        <Header />
        <Navbar />
        <Profile />
        <Footer />
      </div>
    </div>
  );
};

export default App;
