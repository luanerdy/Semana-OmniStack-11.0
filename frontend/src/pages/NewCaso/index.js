import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewCaso(){
	return (
		<div className="caso-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be the Hero" />
					<h1>Cadastrar novo caso</h1>
					<p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

					<Link className="back-link" to='/profile'>
						<FiArrowLeft size={16} color="e02041"/>
						Voltar para a Home
					</Link>

				</section>	

				<form>
					<input placeholder="Título do caso" />
					<textarea placeholder="Descrição" />
					<input placeholder="Valor em reais" />

					<button type="submit" className="button">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}