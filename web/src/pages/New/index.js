import React, { useState, useMemo } from 'react';
import './styles.css';
import camera from './../../assets/camera.svg';
import  api from './../../services/api';

export default function New({ history }){

    const [ thumbnail, setThumbnail ] = useState(null);
    const [ company, setCompany ] = useState('');
    const [ techs, setTechs] = useState('');
    const [ price, setPrice ] = useState('');

    const preview = useMemo( () => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    },[thumbnail]);

    function handleSubmit(e){
        e.preventDefault();

        const data = new FormData()
        const user_id = localStorage.getItem('user')

        data.append('thumbnail', thumbnail)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)

        api.post('spot', data, {
            headers: { user_id }
        })

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label 
            id="thumbnail" 
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>
            <label htmlFor="company">SUA EMPRESA *</label>
            <input 
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgulas)</span></label>
            <input 
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={e => setTechs(e.target.value)}
            />

            <label htmlFor="price">Preço * <span>(se for gratuito deixar em branco)</span></label>
            <input 
                id="price"
                placeholder="Qual o valor da diária?"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    );
}