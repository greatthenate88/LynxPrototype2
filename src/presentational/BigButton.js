import React, {useState}  from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';


const TestButton = styled.button `
    background-color:#006adf;
    font-size:20px;
    color:lightcyan;
    border-radius:7px;
    border-style:solid;
    border-color:silver;
    height:40px;
    width:100px;
    margin-top:1rem;
    &:hover {
    background-color:whitesmoke;
    font-size:20px;
    color:darkcyan;
    border-radius:5px;
    border-style:solid;
    border-color:black;
    }
`;
const BestButton = styled.button `
    background-color:whitesmoke;
    font-size:20px;
    color:darkcyan;
    border-radius:7px;
    border-style:solid;
    border-color:black;
    height:40px;
    width:100px;
    &:hover {
    background-color:lightcyan;
    font-size:20px;
    color:#006adf;
    border-radius:7px;
    border-style:solid;
    border-color:silver;
    height:40px;
    width:100px;
    }
`;
const JestButton = styled.button `
    background-color:lightcyan;
    font-size:20px;
    color:#006adf;
    border-radius:7px;
    border-style:solid;
    border-color:silver;
    height:40px;
    width:100px;
    &:hover {
    background-color:#006adf;
    font-size:20px;
    color:lightcyan;
    border-radius:7px;
    border-style:solid;
    border-width:2px;
    border-color:silver;
    height:40px;
    width:100px;
    }
`;

export const BigButton = (props) => {
        const [count, setCount] = useState(200);
        const [countTwo, setCountTwo] = useState(1000);
        const [countThree, setCountThree] = useState(0);

return (
    <div className="BigButton">
        <Container>
            <TestButton onClick={() => setCount(count+1)}>{count}{props.name}</TestButton>
            <br></br>
            <br></br>
            <BestButton onClick={() => setCountTwo(countTwo+5)}>{countTwo}</BestButton>
            <br></br>
            <br></br>
            <JestButton  onClick={() => setCountThree(countThree+100)}>{countThree}</JestButton>
            </Container>
    </div>
  );
}
export default BigButton;