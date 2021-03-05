import React from 'react'

const UpdatedComp = (element)=>{
    class NewComponent extends React.Component{
        render(){
            return <element name="okok,vbdfv"/>
        }
    }
    return NewComponent
}

export default UpdatedComp