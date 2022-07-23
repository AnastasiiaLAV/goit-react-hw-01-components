import React from "react";
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
// import transactions from './transactions.json';

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import "./App.css";


function App() {
  return (
    <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </>
  )


}

export default App;
