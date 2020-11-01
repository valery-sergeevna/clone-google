import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import './Search.scss';
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from '../reducer';
import CloseIcon from '@material-ui/icons/Close';
const Search = ({ hideButtons = true, query }) => {

    //https://cse.google.com/cse/create/new

    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        if (input) {
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input
            });
            history.push('./search');
        }
    };

    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className='search__icon' />
                <input value={input || query} onChange={(e) => setInput(e.target.value)}></input>
                <MicIcon className='search__mic' />
            </div>
            {hideButtons && !query ? (
                <div className="search__buttons">
                    <Button variant="outlined" type='submit' onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky!</Button>
                </div>
            ) : (
                    <div className="search__buttons">
                        <Button className="button_hidden" type='submit' variant="outlined" onClick={search}>Google Search</Button>
                        <Button className="button_hidden" variant="outlined">I'm Feeling Lucky!</Button>
                    </div>
                )}
        </form>
    );
};

export default Search;