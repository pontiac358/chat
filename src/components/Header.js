import React from 'react';
import logo from '../img/logo.svg'
import { connect } from "react-redux";


const Header = ({ user, type }) => {
    console.log(user)

    const defaultRender = (
        <header className="header">
            <div className="header__center">
                <div className="logo logo_header">
                    <a href="/" className='logo__link'>
                        <img src={ logo } alt=""/>

                    </a>
                </div>

                <div className="header__nav-wrap">
                    <nav className="nav nav_header">
                        <div className="nav__element">
                            <a href="" className="nav__link">Сообщения</a>
                        </div>
                        <div className="nav__element">
                            <a href="" className="nav__link">Найти ситтера</a>
                        </div>
                        <div className="nav__element">
                            <a href="" className="nav__link">Все ситтеры</a>
                        </div>

                    </nav>
                </div>

                <div className="profile-link">
                    <div className="profile-link__photo-wrap">
                        <img className='profile-link__photo' src={ user && user.photo } alt=""/>
                    </div>
                    <i className='profile-link__btn'>
                        <img src="/img/icons/arrBottom.svg" className='profile-link__btn-icon' alt=""/>
                    </i>
                </div>

            </div>
        </header>
    );



    switch(type) {

        default:
            return defaultRender
    }


}




const mapStateToProps = (state) => (
    {
        user: state.user
    }
)


export default connect(mapStateToProps, null)(Header);