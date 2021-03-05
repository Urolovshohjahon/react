import React from 'react'
import HooksUmumiyExport from './HooksUmumiyExport'

function HooksUmumiyImport() {

    const [add, isolate] = HooksUmumiyExport()

    return (
        <div>
            {add(3,5)}
        </div>
    )
}

export default HooksUmumiyImport
