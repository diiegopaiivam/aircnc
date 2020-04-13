const Spot = require('./../models/Spot');

module.exports = {
    async show(request, response){

        const { user_id } = request.headers;

        const spots = await Spot.find({ user: user_id });

        return response.status(200).json(spots);

    }
}