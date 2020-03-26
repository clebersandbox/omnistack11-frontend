import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import heroresImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon() {
    const [oid, setOid] = useState('');

    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('sessions', { oid_ongs : oid});
            localStorage.setItem('oidOngs', oid);
            localStorage.setItem('ongName', res.data.name);
            history.push('/profile')
        } catch (error) {
            alert('Falha no logon, tente mais tarde!');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="Be The Hero"/>
                <form onSubmit={ handleLogin }>
                    <h1>Faça seu logon</h1>    
                    
                    <input 
                        placeholder="Sua ID"
                        value={ oid }
                        onChange={ e => setOid(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={ heroresImg } alt="Heroes"/>
        </div>
    )
}