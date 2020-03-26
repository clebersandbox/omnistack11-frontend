import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(event){
        event.preventDefault();
        const data = {
            name, email, whatsapp, city, uf
        }
        console.log('New ONG: ', {name, email, whatsapp, city, uf});
        try {
            const result = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${ result.data.oidOngs }`);
            history.push('/');
        } catch (error) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude 
                        pessoas a encontrem os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o logon
                    </Link>

                </section>
                <form onSubmit={ handleRegister }>
                    <input 
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                        placeholder="Nome da ONG"
                    />
                    <input 
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                        type="email" 
                        placeholder="E-mail"
                    />
                    <input placeholder="WhatsApp"
                        value={ whatsapp }
                        onChange={ e => setWhatsApp(e.target.value) }                    
                    />
                    <div className="input-group">
                        <input placeholder="City"
                            value={ city }
                            onChange={ e => setCity(e.target.value) }   
                        />
                        <input placeholder="UF" 
                            value={ uf }
                            onChange={ e => setUf(e.target.value) } 
                            style={ {width: 80} }
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>


                </form>
            </div>
        </div>
    )
}
