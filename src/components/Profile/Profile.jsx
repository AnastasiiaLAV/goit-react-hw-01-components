import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileWrap className="container">
    <Description>
      <Avatar src={avatar} alt="User avatar" className="avatar" />
      <Name className="name">{username}</Name>
      <Tag className="tag">@{tag}</Tag>
      <Location className="location">{location}</Location>
    </Description>
    
    <Stats className="stats">
    <Elements>
      <Label className="label">Followers</Label>
      <Quantity className="quantity">{stats.followers}</Quantity>
    </Elements>
    <Elements>
      <Label className="label">Views</Label>
      <Quantity className="quantity">{stats.views}</Quantity>
    </Elements>
    <Elements>
      <Label className="label">Likes</Label>
      <Quantity className="quantity">{stats.likes}</Quantity>
    </Elements>
  </Stats>
  </ProfileWrap>
);

Profile.protoTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers:  PropTypes.number,
    views:  PropTypes.number,
    likes:  PropTypes.number
  }),
};
export default Profile;

const ProfileWrap = styled.div`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 18px;
width:400px;
background: rgb(207 209 245);
margin: 10px auto;
padding: 15px;
border-radius: 10px;
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px -8px 15px -16px rgba(0,0,0,0);
`

const Description = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`

const Avatar = styled.img`
border-radius:60%;
width:300px;
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px -8px 15px -16px rgba(0,0,0,0);
`

const Name = styled.p`
font-size: 25px;
font-weight: 600;
`

const Tag = styled.p`
font-size: 16px;
`

const Location = styled.p`
font-style: italic;
`

const Stats = styled.ul`
display:flex;
justify-content:space-evenly;
align-items:center;
border: 1px solid black;
border-radius: 10px;
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px -8px 15px -16px rgba(0,0,0,0);
`

const Elements = styled.li`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`

const Label = styled.span`
font-size:17px;
margin:10px 0;
`

const Quantity = styled.span`
font-size:17px;
font-weight:500;
margin:10px 0;
`
