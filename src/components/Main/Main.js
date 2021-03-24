import React from 'react'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'

function Main(props) {
    return (
        <main>
            {props.children}
            <Section2/>
            <Section3/>
        </main>
    )
}

export default Main
