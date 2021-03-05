import React, { useContext } from 'react';
import { Context, Channel } from '../App';

function HooksContext1Between() {

    const peredacha = useContext(Context);
    const kanal = useContext(Channel);

    return (
        <div>
            {kanal}
        </div>
    )
}

export default HooksContext1Between
