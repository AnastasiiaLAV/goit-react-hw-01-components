import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TransactionHistory = ({ items }) => (
    <Div>
        <Table className="transaction-history">
    <Thead>
        <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
        </tr>
    </Thead>
    <Tbody>
        {items.map(({ id, type, amount, currency }) => 
            <tr key={id}>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
            </tr>)
        }
    </Tbody>
    </Table>
    </Div>
    
);

TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string,
    })),
}
export default TransactionHistory;

const Div = styled.div`
    margin: 10px;
`

const Table = styled.table`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 18px;
    text-align:center;
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
    justify-content: center;
    background-color: rgb(207, 209, 245);
    border-radius: 10px;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px -8px 15px -16px rgba(0,0,0,0);
` 
const Thead = styled.thead`
background-color: rgb(212, 213, 233);
  box-shadow: -10px 0px 13px -7px #272837, 10px 0px 13px -7px #272837, 8px -8px 15px -16px rgba(0,0,0,0);
`
const Th = styled.th`
    padding: 10px 10px;
    border-radius: 5px;
    box-shadow: -10px 0px 13px -7px #6f7081, 10px 0px 13px -7px #656674, 8px -8px 15px -16px rgba(0,0,0,0);
`

const Tbody = styled.tbody`
background-color: rgb(212, 213, 233)
  box-shadow: -10px 0px 13px -7px #272837, 10px 0px 13px -7px #272837, 8px -8px 15px -16px rgba(0,0,0,0);
`

const Td = styled.td`
    padding: 10px 20px;
    box-shadow: -10px 0px 13px -7px #272837, 10px 0px 13px -7px #272837, 8px -8px 15px -16px rgba(0,0,0,0);
`
