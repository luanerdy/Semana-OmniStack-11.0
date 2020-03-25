const connection = require('../database/connection');

module.exports = {

	async index(req, res){
		const { page = 1} = req.query;

		const [count] = await connection('casos').count();

		const casos = await connection('casos')
		.join('ongs', 'ongs.id', '=', 'casos.ong_id')
		.limit(5)
		.offset((page - 1) * 5)
		.select(['casos.*', 
				'ongs.name',
				'ongs.email',
				'ongs.whatsapp',
				'ongs.city',
				'ongs.uf']);

		res.header('X-Total-Count', count['count(*)']);

		return res.json(casos);
	},

	async create(req, res){
		const { title, description, value } = req.body;
		const ong_id = req.headers.authorization;

		const [id] = await connection('casos').insert({
			title,
			description,
			value,
			ong_id
		});

		return res.json({ id });
	},

	async delete(req, res){
		const { id } = req.params;
		const ong_id = req.headers.authorization;

		const caso = await connection('casos')
			.where('id', id)
			.select('ong_id')
			.first();

			if(caso.ong_id != ong_id){
				return res.status(401).json({ error: 'Operation not allowed' });
			}

			await connection('casos').where('id', id).delete();

			return res.status(204).send();
	}
}