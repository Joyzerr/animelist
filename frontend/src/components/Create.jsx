import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    <div>
        <label>Nome do Anime:</label>
        <input onChange={(event)=>{
            setName(event.target.value);
        }} type="text" placeholder="digite o nome do anime"/>
        <br/>
        <label>Número de episódios:</label>
        <input onChange={(event)=>{
            setEpisodes(event.target.value);
        }} type="number"/>
        <button onClick={enviar} type="submit">adicionar</button>

    </div>
    
    )
}

export default Criar;