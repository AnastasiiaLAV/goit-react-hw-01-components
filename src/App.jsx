import React from "react";
import user from './user.json';
import Profile from "./components/Profile/Profile";

import "./App.css";

function App() {
  return <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
}

export default App;
