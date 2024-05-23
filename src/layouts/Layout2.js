import React from 'react'
import Footer2 from './Footer2'
import Header2 from './Header2'

export default function Layout2({ children, className }) {
    return (
        <>
            <Header2/>
            <main>
                {children}
                <Footer2 className={className} />
            </main>


        </>
    )
}
