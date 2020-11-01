import React, { useState } from 'react';
import './Home.scss';
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import Search from './Search';
import { signInWithGoogle } from '../firebase';
import { useStateValue } from "../StateProvider";
import Modal from './Modal';

const Home = () => {

    const signWithGoogle = () => {
        signInWithGoogle();
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
    };

    const [{ user }, dispatch] = useStateValue();
    const [modal, setOpenModal] = useState(false);

    return (
        <div className='home'>
            <header className="home__header header">
                <div className="header__left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="header__right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <button onClick={signWithGoogle} className="header__register" style={{ display: `${user ? "none" : ""}` }}>Sign in</button>
                    <img
                        className="header__photo"
                        style={{ display: `${!user ? "none" : ""}` }}
                        src={!user ? "" : user.photoURL}
                        onClick={() => setOpenModal(!modal)}
                    />
                </div>
            </header>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />
                <div className="home__input">
                    <Search hideButtons />
                </div>
            </div>
            <footer className="footer">
                <div className="footer__item">
                    <Link to='/advertising'>Advertising</Link>
                    <Link to='/business'>Business</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/search-work'>How Search works</Link>
                </div>
                <div className="footer__item">
                    <Link to='/privacy'>Privacy</Link>
                    <Link to='/terms'>Terms</Link>
                    <Link to='/setting'>Settings</Link>
                </div>
            </footer>
            {modal && user && (<Modal />)}
        </div>
    );
};

export default Home;