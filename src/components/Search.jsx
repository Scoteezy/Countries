import styled from "styled-components";
import {IoSearch} from 'react-icons/io5';

const InputCointainer = styled.label``;
const Input = styled.input.attrs()``;

export const Search=({search,setSearch})=>{
    return(
        <InputCointainer>
            <IoSearch/>
            <Input onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
        </InputCointainer>
    )
}