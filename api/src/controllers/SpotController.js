const Spot = require('./../models/Spot');
const User = require('./../models/User');

module.exports = {
    async index(request, response){
        const { tech } = request.query;
        const spots = await Spot.find({ techs: tech });
        response.status(200).json(spots);
    },
    
    async store(request, response){
        const { filename } = request.file;
        const { company, techs, price } = request.body;
        const { user_id } = request.headers;

        const user = await User.findById(user_id);

        if (!user){
            response.status(400).json({ error: "Usuário não existe!" });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        response.status(201).json(spot);
    }
}