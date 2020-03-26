import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function Register() {
	function handleRegister(e){
		e.preventDefault();
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be the Hero" />
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>

					<Link className="back-link" to='/'>
						<FiArrowLeft size={16} color="e02041"/>
						Não tenho cadastro
					</Link>

				</section>	

				<form onSubmit={handleRegister}>
					<input placeholder="Nome da ONG" />
					<input type="email" placeholder="E-mail" />
					<input placeholder="Whatsapp" />

					<div className="input-group">
						<input placeholder="Cidade" />
						<input placeholder="UF" style={{ width: 80 }} />
					</div>

					<button type="submit" className="button">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}