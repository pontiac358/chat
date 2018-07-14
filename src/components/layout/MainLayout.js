import React from 'react';
import Header from '../../components/Header'


const Layout = ({ children }) => {
    return (
        <section className="wrapper">
            <Header />

            <main className="content">
                { children }
            </main>
        </section>
    )
}




export default Layout;