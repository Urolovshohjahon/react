import React from 'react'

function Errors({hero}) {
    if(hero==='Joker'){
        throw new Error('VOOOW')
    }
    return (
        <div>
            {hero}
        </div>
    )
}

export default Errors
