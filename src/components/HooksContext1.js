import React from 'react'
import { Context } from '../App'
import { Channel } from '../App'


function HooksContext1() {
    return (
        <div>
            <Context.Consumer>
                {
                    value => {
                        return (
                            <Channel.Consumer>
                                {
                                    channel => {
                                        return <h1>Ko'rsatuv nomi {value}. Kanal - {channel}</h1>
                                    }
                                }
                            </Channel.Consumer>
                        )
                    }
                }
            </Context.Consumer>
        </div>
    )
}

export default HooksContext1
