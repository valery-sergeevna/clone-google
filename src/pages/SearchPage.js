import React, { useState } from 'react';
import './SearchPage.scss';
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import { Link } from "react-router-dom";
import Search from './Search';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { signInWithGoogle } from '../firebase';
import Modal from './Modal';
import Menu from './Menu';

const SearchPage = () => {

    const [{ term, user }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    const signWithGoogle = () => {
        signInWithGoogle();
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
    };

    const [modal, setModal] = useState(false);
    const [menuOptions, setMenuOptions] = useState(false);


    const toggleMenu = () => {
        setMenuOptions(!menuOptions);
        setModal(false);
    };

    const toggleModal = () => {
        setModal(!modal);
        setMenuOptions(false);
    };

    console.log(data);
    return (
        <div className='search-page'>
            <header className="search-page__header">
                <div className='search-page__container'>
                    <Link to='/'>
                        <img className='search-page__logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />
                    </Link>
                    <div className="search-page__headerBody">
                        <Search hideButtons query={term} />
                        <div className="search-page__options">
                            <div className="search-page__optionLeft">
                                <div className="search-page__option">
                                    <SearchIcon />
                                    <Link to='/all'>All</Link>
                                </div>
                                <div className="search-page__option">
                                    <DescriptionIcon />
                                    <Link to='/news'>News</Link>
                                </div>
                                <div className="search-page__option">
                                    <ImageIcon />
                                    <Link to='/images'>Images</Link>
                                </div>
                                <div className="search-page__option">
                                    <LocalOfferIcon />
                                    <Link to='/shopping'>Shopping</Link>
                                </div>
                                <div className="search-page__option">
                                    <RoomIcon />
                                    <Link to='/maps'>Maps</Link>
                                </div>
                                <div className="search-page__option">
                                    <MoreVertIcon />
                                    <Link to='/more'>More</Link>
                                </div>
                            </div>

                            <div className="search-page__optionRight">
                                <div className="search-page__option">
                                    <Link to='/settings'>Settings</Link>
                                </div>
                                <div className="search-page__option">
                                    <Link to='/tools'>Tools</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-page__headerRight">
                    <AppsIcon onClick={toggleMenu} />
                    <img
                        className="header__photo"
                        style={{ display: `${!user ? "none" : ""}` }}
                        src={!user ? "" : user.photoURL}
                        onClick={toggleModal}
                    />
                    <button onClick={signWithGoogle} className="header__register" style={{ display: `${user ? "none" : ""}` }}>Sign in</button>
                </div>
            </header>
            {term && (
                <div className="search-page__results">
                    <p className="search-page__count">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
                    {data?.items.map(item => {
                        return (<div className='search-page__result'>
                            <a href={item.link}>{item.displayLink} <span>▼</span></a>
                            <a className='search-page__title' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='search-page__snippet'>{item.snippet}</p>

                        </div>)
                    })}
                </div>)}
            {modal && user && (<Modal />)}
            {menuOptions && (<Menu />)}
        </div >
    );
};

export default SearchPage;