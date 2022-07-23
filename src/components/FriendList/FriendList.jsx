import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FriendList = ({ friends }) => (

    <FriendListUl className="friend-list">
        {friends.map(friend => 
            <FriendsItem className="item" key={friend.id}>
                <SpanStatus className="status" isOnline={friend.isOnline} >{friend.isOnline ? 'on-line' : 'off-line'}</SpanStatus>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <Name className="name">{friend.name}</Name>
            </FriendsItem>
        )}
    </FriendListUl>
);

export default FriendList;


FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    })),
}

const FriendListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(80px,150px));
  justify-content: center;
  background-color: rgb(207, 209, 245);
  border-radius: 5px;
  box-shadow: -10px 0px 13px -7px #21222c, 10px 0px 13px -7px #20222c, 8px -8px 15px -16px rgba(0,0,0,0);
`

const FriendsItem = styled.li`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin: 15px;
  padding: 20px;
  background-color: rgb(212, 213, 233);
  border-radius: 5px;
  box-shadow: -10px 0px 13px -7px #272837, 10px 0px 13px -7px #272837, 8px -8px 15px -16px rgba(0,0,0,0);
`

const SpanStatus = styled.span`
    background-color: ${({ isOnline }) => (isOnline ? "green" : "red")};
    font-size: 8px;
    margin: 10px;
    padding: 2px;
    border-radius: 40%;
    box-shadow: -5px 0px 7px -5px #000024, 5px 0px 7px -5px #000024, 8px -8px 15px -16px #434367;
`

const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
`
