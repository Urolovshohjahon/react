import React from 'react'

function NameList() {
    const Person = [
        {
            name: 'Shohjahon',
            age: 21,
            skill: "React"
        },
        {
            name: 'Shohruh',
            age: 19,
            skill: "Angular"
        },
        {
            name: 'Nozim',
            age: 12,
            skill: 'Vue'
        }
    ]
    let list = Person.map(person => (
        <h1>My name is {person.name}. I'm {person.age} years old. I'm learning {person.skill}</h1>
    ))
    return (
        <div>
            {list}
        </div>
    )
}

export default NameList
