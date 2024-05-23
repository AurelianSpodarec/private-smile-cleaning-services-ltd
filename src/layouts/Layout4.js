import React from 'react'
import Footer4 from './Footer4'
import Header4 from './Header4'

export default function Layout4({ children, className }) {
    return (
        <>
            <Header4 />
            <main>
                {children}
                <Footer4 className={className} />
            </main>

        </>
    )
}
