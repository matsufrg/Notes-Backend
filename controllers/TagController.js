const Tag = require('../models/Tag');

class TagController {

    async store(req, res){
        const tag = await Tag.create({
            title: req.body.title,
            pin: false
        });

        return res.json(tag);
    }

    async show (req, res) {
        const tag = await Tag.find({});
        
        return res.json(tag);
    }

    async showOne (req, res) {
        const tag = await Tag.findOne({ _id: req.params.id });

        return res.json(tag);
    }

    async updateTag(req, res) {

        const tag = await Tag.update({ _id: req.params.id}, req.body);

        return res.json(tag);

    }
}

module.exports = new TagController();