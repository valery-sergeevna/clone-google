import React, { useState } from 'react';
import './Modal.scss';
import { useStateValue } from "../StateProvider";
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import { auth } from "../firebase";
import { actionTypes } from '../reducer';

const Modal = ({ toggle }) => {

    const [{ user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
            dispatch({
                type: actionTypes.SET_USER,
                user: null,
            });
        }
    };


    return (
        <div className='modal user'>
            <div className='user__item'>
                <img
                    className="user__photo"
                    src={user.photoURL}
                />
                <h3 className="user__name" >{user.displayName}</h3>
                <p className="user__email" >{user.email}</p>
                <button className="user__manage">Manage your Google Account</button>
            </div>
            <div className='user__item'><GroupAddOutlinedIcon /><a href="#">Add another account</a></div>
            <div className='user__item'><button className="sign-out" onClick={handleAuthenticaton}>Sign out of all accounts</button></div>
            <div className="policy">
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
            </div>
        </div>
    );
};

export default Modal;