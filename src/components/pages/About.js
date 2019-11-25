import React from 'react'

export default function About() {
    //react fragment is a pseudo element to wrap stuff to be rendered if div is not required
    return (
        <React.Fragment> 
            <h1>About</h1>
            <p>This is a simple to-do-list app created using react.js without any backend</p>
        </React.Fragment>
    )
}
