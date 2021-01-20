import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Create.css'

const Criar=(props)=>{
    const [name,setName]=useState('');
    const [episodes,setEpisodes]=useState(0);
    const [verifica,setVerifica]=useState(false);

    useEffect(()=>{
        if(props.location.anime){
            setVerifica(true);
            const anime=props.location.anime;
            setName(anime.name);
            setEpisodes(anime.numberEpisodes);
        }
    },[verifica, props.location.anime])
    
    const editar=(anime)=>{
        axios.put('http://localhost:4000/animes/'+anime._id,{name,numberEpisodes:episodes}).then().catch()
    }
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
        <form onSubmit={verifica ? ()=> editar(props.location.anime) : enviar} id="formulario">
        <fieldset>
        <label>Anime:</label><br/>
        <input value={name} className="campo_nome" onChange={(event)=>{
            setName(event.target.value);
        }} type="text" placeholder="digite o nome do anime" required/>
        <br/>
        <label>Episódios:</label><br/>
        <input value={episodes} placeholder="Número de episódios" className="campo_ep" onChange={(event)=>{
            setEpisodes(event.target.value);
        }} type="number" required/><br/>
        <button className="bottom" type="submit">{verifica ? "editar" : "adicionar"}</button>
        </fieldset>
        </form>
    </div>
    </>
    
    )
}

export default Criar;