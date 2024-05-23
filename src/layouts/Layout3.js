import React from 'react'
import Header3 from './Header3'
import Footer3 from './Footer3'

export default function Layout3({children, className}) {
    return (
        <>
           <Header3/>
            <main>
                {children}
                <Footer3 className={className} />
            </main>  
        </>
    )
}
