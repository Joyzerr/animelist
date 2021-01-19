import React, { useState , useEffect} from 'react';
import axios from 'axios';

const Animes=()=>{
    const [animes,setAnimes]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/animes').then((response)=>{
            setAnimes(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    })

    return (
        <>
        <h1>lista de animes</h1>
            <table border="1">
                <tr>
                    <td>Animes:</td>
                    <td>Episodios:</td>
                    <td>Status:</td>
                </tr>
            
            {animes.map(anime => {
                return <tr key={anime._id}>
                    <td>{anime.name}</td>
                    <td>{anime.numberEpisodes}</td></tr> 
            })}
            </table>
        </>
    )
}

export default Animes;