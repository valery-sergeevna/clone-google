import React from 'react';
import './Menu.scss';
import { useStateValue } from "../StateProvider";
import { actionTypes } from '../reducer';


const Menu = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='modal options'>
            <div className="options__item">
                <img
                    className="options-photo options__photo"
                    src={user.photoURL}
                />
                <h4 className='options__title'>Account</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://cdn2.iconfinder.com/data/icons/social-media-2259/512/search-512.png'
                />
                <h4 className='options__title'>Search</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://otzyv-shop.ru/components/com_jshopping/files/img_products/full_google-maps.png'
                />
                <h4 className='options__title'>Map</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png'
                />
                <h4 className='options__title'>Youtube</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://cdn.pixabay.com/photo/2016/08/31/00/49/google-1632434_1280.png'
                />
                <h4 className='options__title'>Play</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_News_icon.svg/1251px-Google_News_icon.svg.png'
                />
                <h4 className='options__title'>News</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/200px-Gmail_icon_%282020%29.svg.png'
                />
                <h4 className='options__title'>Gmail</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png'
                />
                <h4 className='options__title'>Meet</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png'
                />
                <h4 className='options__title'>Contacts</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://static.wikia.nocookie.net/logopedia/images/7/78/GoogleDrive_2020.svg'
                />
                <h4 className='options__title'>Drive</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://static.wikia.nocookie.net/logopedia/images/6/69/GoogleCalendar_2020.svg'
                />
                <h4 className='options__title'>Calendar</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1024px-Google_Translate_logo.svg.png'
                />
                <h4 className='options__title'>Translate</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://assets.stickpng.com/thumbs/5847faedcef1014c0b5e48cc.png'
                />
                <h4 className='options__title'>Photos</h4>
            </div>
            <div className="options__item">
                <img
                    className="options__photo"
                    src='https://assets.stickpng.com/images/5e8ce423664eae0004085465.png'
                />
                <h4 className='options__title'>Duo</h4>
            </div>
        </div>

    );
};

export default Menu;