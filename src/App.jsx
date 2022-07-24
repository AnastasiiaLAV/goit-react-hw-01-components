import React from "react";
import user from './data-json/user.json';
import data from './data-json/data.json';
import friends from './data-json/friends.json';
import transactions from './data-json/transactions.json';

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  )


}

export default App;

