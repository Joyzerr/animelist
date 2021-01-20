import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Create.css'

const Criar=()=>{
    const [name,setName]=useState('');
    const [episodes,setEpisodes]=useState(0);

    const enviar=()=>{
        axios.post('http://localhost:4000/animes', {
            name,
            numberEpisodes:episodes
        }).then((response)=>{
            window.alert('anime adicionado com sucesso');
        }).catch((error)=>{
            window.alert('falha ao adicionar anime');
        })
    }

    return(
        <>
    <div id="area">
        <form id="formulario">
            <fieldset>
        <label>Anime:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input className="campo_nome" onChange={(event)=>{
            setName(event.target.value);
        }} type="text" placeholder="digite o nome do anime" required/>
        <br/>
        <label>Episódios:</label>
        <input className="campo_ep" onChange={(event)=>{
            setEpisodes(event.target.value);
        }} type="number" required/><br/>
        <button className="bottom" onClick={enviar} type="submit">adicionar</button>
        </fieldset>
        </form>
    </div>
    </>
    
    )
}

export default Criar;