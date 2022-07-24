import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16578322)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ title="", stats }) => (
  <SectionStats className="statistics">
    {title ? <Title className="title">{title}</Title> : ""}
      {/* <Title className="title">{title}</Title> */}
      <StatList className="stat-list">
        {stats.map(stat => (
            <StatItem key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                <Span className="label">{stat.label}</Span>
                <Span className="percentage">{stat.percentage}%</Span>
            </StatItem>
        ))}
      </StatList>
    </SectionStats>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
  })),
}
export default Statistics;

const SectionStats = styled.section`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 18px;
max-width:800px;
background: rgb(206 209 245);
margin: 10px auto;
padding: 15px;
border-radius: 10px;
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px -8px 15px -16px rgba(0,0,0,0);
`

const Title = styled.h2`
text-align: center;
  font-size: 25px;
  font-weight: 700;
  text-shadow: 4px 1px 5px #090180aa;
`

const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(80px,150px));
  justify-content: center;
  background-color: rgb(212, 213, 233);
  border-radius: 5px;
  box-shadow: -10px 0px 13px -7px #21222c, 10px 0px 13px -7px #20222c, 8px -8px 15px -16px rgba(0,0,0,0);
`

const StatItem = styled.li`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: -10px 0px 13px -7px #272837, 10px 0px 13px -7px #272837, 8px -8px 15px -16px rgba(0,0,0,0);
`

const Span = styled.span`
  font-size: 18px;
  font-weight: 500;
`
