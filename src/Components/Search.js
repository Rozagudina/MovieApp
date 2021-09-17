import React from 'react'
import { Button } from './Styles';
import styled from "Styled-components";

const Search = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [from, setForm] = useState({searchValue:"", type:""});
    const handleChange = (e) => {
        
    }

    return (
			<from>
				<input name="searchValue" type="text" placeholder="search Movie" />
				onChange ={handleChange}
				<select name="type">
					<option>Choose Type</option>
					<option>movie</option>
					<option>series</option>
					<option>game</option>
				</select>
				<Button bgcolor="lightblue" size="medium" color="white">
					Close
				</Button>
			</from>
		);
}
const Button = Styled.button `
background-color: ${(props) => props.bgColor};
color:${(props) => props.color};
font-size:${(props) => props.color}
border-radius:5px;
border:solid 2px;
transition: transform 0.1s ease-in;

cursor:pointer;
& :hover{

    background-color:${props.hbgColor};
    transform: scale(1.05);
}
`;

export default Search
