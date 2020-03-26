import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be The Hero"/>
                <span>Bem Vinda, APAE</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Cas Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                    <p>R$ 120,00</p>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Cas Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                    <p>R$ 120,00</p>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Cas Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                    <p>R$ 120,00</p>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Cas Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                    <p>R$ 120,00</p>
                </li>                                                
            </ul>

        </div>
    )
}
/*

O parâmetro de empresa "Permite a entrada de nota com custo abaixo da tabela de preço" na aba "Nota Fiscal Entrada" do tela "Parâmetros Empresa". Esse parâmetro tem o COD_PARAMETRO = 330 na tabela TAB_PARAMETRO_EMPRESA. 

Implementação da validação quando o valor do item na nota for menor que o custo mínimo e o parâmetro é "N", o sistema não permite a insersão do item. Caso o parâmetro é "S" então é permitido inserir o item com valor menor que o custo mínimo. Quando o valor do item está maior que o custo máximo, não é permitido inserir.

*/