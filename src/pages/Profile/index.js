import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile() {
    const history = useHistory();

    const [incidents, setIncidents] = useState([]);
    const oidOngs = localStorage.getItem('oidOngs');
    const ongName = localStorage.getItem('ongName');

    useEffect( () => {
        api.get('profile', {
            headers: {
                Authorization: oidOngs
            }
        }).then(res => {
            setIncidents(res.data);
        })
    }, [oidOngs]);

    async function handleDeleteIncident(oid_indidents) {
        try {
            await api.delete(`incidents/${ oid_indidents }`, {
                headers: {
                    Authorization: oidOngs
                }
            });
            setIncidents(incidents.filter(incident => incident.oid_indidents !== oid_indidents));
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente!');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be The Hero"/>
                <span>Bem Vinda, { ongName }</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={ () => handleLogout() }>
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                { incidents.map(incident => (
                    <li key={ incident.oid_indidents }>
                        <strong>CASO:</strong>
                        <p>{ incident.title }</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{ incident.description }</p>

                        <strong>VALOR:</strong>
                        <p>{ 
                            Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)
                            }
                        </p>
                        <button type="button" onClick={ () => handleDeleteIncident(incident.oid_indidents) }>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
                                                                
            </ul>

        </div>
    )
}
/*

O parâmetro de empresa "Permite a entrada de nota com custo abaixo da tabela de preço" na aba "Nota Fiscal Entrada" do tela "Parâmetros Empresa". Esse parâmetro tem o COD_PARAMETRO = 330 na tabela TAB_PARAMETRO_EMPRESA. 

Implementação da validação quando o valor do item na nota for menor que o custo mínimo e o parâmetro é "N", o sistema não permite a insersão do item. Caso o parâmetro é "S" então é permitido inserir o item com valor menor que o custo mínimo. Quando o valor do item está maior que o custo máximo, não é permitido inserir.

*/