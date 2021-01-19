import React, { useState , useEffect} from 'react';
import axios from 'axios';

const Animes=()=>{
    const [animes,setAnimes]= useState([]);
    const [status,setStatus]= useState(false);

    useEffect(()=>{
        axios.get('http://localhost:4000/animes').then((response)=>{
            setAnimes(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    })
    const onOrOff=(id,stts)=>{
        axios.put('http://localhost:4000/animes/'+id,{
            status: !stts
        });
    }

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
                    <td>{anime.numberEpisodes}</td>
                    <td><button onClick={()=>{
                        onOrOff(anime._id,anime.status)
                    }}>
                    {anime.status ? "assistido" : "nao assistido"} </button></td>
                    {/* <td>{anime.status ? "assistido": "não assistido"}</td> */}
                    </tr> 
            })}
            </table>
        </>
    )
}

export default Animes;