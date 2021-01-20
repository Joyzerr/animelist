import React, { useState , useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router'
import './Index.css'
import { Link } from 'react-router-dom';
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
    const apagar=(id)=>{
        axios.delete('http://localhost:4000/animes/'+id).then((response)=>{
            window.alert(response.data);
        }).catch((error)=>{
            window.alert(error);
        })
    }
    const edit=(anime)=>{
        
    }
    return (
        <>
        <h1 id="title">lista de animes</h1>
        <div id="tabella">
            <table id="tabela">
                <tr id="tr-titulo">
                    <td>Animes:</td>
                    <td>Episodios:</td>
                    <td>Status:</td>
                    <td>Ações:</td>
                </tr>
            
            {animes.map(anime => {
                return <tr key={anime._id}>
                    <td>{anime.name}</td>
                    <td>{anime.numberEpisodes}</td>
                    <td><button onClick={()=>{
                        onOrOff(anime._id,anime.status)
                    }}>
                    {anime.status ? "assistido" : "nao assistido"} </button>
                    </td>
                    <td>
                        <button>
                            <Link to={{pathname:"/criar",
                        anime}}>Editar</Link>
                        </button> 
                        <button onClick={()=>{
                            apagar(anime._id);
                        }}>apagar</button>
                    </td>
                    </tr> 
            })}
            </table>
            </div>
        </>
    )
}

export default Animes;