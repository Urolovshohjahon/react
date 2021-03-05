import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import './myStyle.css';
import Example from './HooksGETReal_example';

const meals = [
    {
        name: "Burger",
        img: "https://www.onceuponachef.com/images/2010/08/hamburgers-575x754.jpg",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Cheesburger",
        img: "https://images.unsplash.com/photo-1501197827945-7d2594e437b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlYnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Shashlik",
        img: "https://odam.uz/upload/media/posts/2018-04/14/3a75850af6133ed2c2f37037c718f9e8_1523694766-b.jpg",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Palov",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/220px-Polu.jpg",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Sho'rva",
        img: "https://s.daryo.uz/wp-content/uploads/2018/01/75981_PhotoNews-680x420.jpg",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Salat",
        img: "https://www.gazeta.uz/media/img/2020/08/rO2UOF15974032737398_b.jpg",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Coca-cola",
        img: "https://odam.uz/upload/media/entries/2019-11/10/2072-entry-1-1573370834.jpg",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Pepsi",
        img: "https://zamin.uz/uploads/posts/2019-12/1575549224_m.jpg",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Sharbat",
        img: "https://kansasteamnutrition.org/img/gardening/how-to-make-apricot-juice.webp",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
    {
        name: "Limonad",
        img: "https://zamin.uz/uploads/posts/2018-07/1531372017_28142.jpg",
        title: "These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done.These are the ultimate steakhouse burgers. They are packed with flavor and reliably juicy, even when cooked to well-done."
    },
]

function HooksGETReal_2() {
    //const [data, setData] = useState([])
    const [value, setValue] = useState("");
    const [arr, setArr] = useState([]);
    const handleChange = event => {
        setValue(event.target.value);
    };
    useEffect(() => {
        //axios.get('https://jsonplaceholder.typicode.com/users')
        //    .then((res) => {
        //        setData(res.data)
        //    })
        //    .catch((err) => {
        //        console.log("O'xshamadiku...")
        //    })

        const results = meals.filter(user =>
            user.name.toLowerCase().includes(value.toLowerCase())
        );
        setArr(results);
    }, [value]);



    return (
        <div >
            <input type='text' placeholder="Taom yoki ichimlikni izlash" value={value} onChange={handleChange} />
            <div className='bigBlock'>
                {
                    arr.map(val => (
                        <div className='block'>
                            <img src={val.img} className='img' />
                            <h1>{val.name}</h1>
                            <p>{val.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HooksGETReal_2