import React, { useEffect, useState } from "react";
import axios from "axios";
import './UserList.css'

export const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPosts()
    }, []);

    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
    } 

    

    return (
        <div>
            <h1 style={{fontSize: '99px', textAlign: 'center',}}>Задание 2</h1>
             {data.map(item => ( 
                <ul key={item.id} style = {{
                    textAlign: 'center',
                    width: '360px',
                    height: 'auto',
                    border: '3px solid #242424',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '50px auto' ,
                    padding: '20px',
                    fontFamily: 'Helvetica',
                    backgroundColor: 'rgb(220, 220, 220)',
                    color: 'black'
                }}> 
                    <li style={{listStyleType: 'none'}}>Name:{item.name}</li>
                    <li style={{listStyleType: 'none'}}>UserName:{item.username}</li> 
                </ul>
            ))} 
        </div>
    )
}

