const Tag = require('../models/Tag');
const Trash = require('../models/Trash');

class TrashController {

    async deleteTag(req, res) {

        const tag = await Tag.findById(req.params.id);

        const trash = await Trash.create({
            _id: tag.id,
            title: tag.title,
            text: tag.text
        });

        await Tag.deleteOne({
            _id: req.params.id,
        })

        return res.json(trash);
    }

    async showDeleted(req, res) {

        const trash = await Trash.find({});
        return res.json(trash);
    }

    async showOneDeleted(req, res) {
        const trash = await Trash.findById({
            _id: req.params.id
        });
        
        return res.json(trash);
    }

    async deleteFromTrash(req, res) {

        const trash = await Trash.deleteOne({
            _id: req.params.id
        });

        return res.json(trash);
    }

    async updateFromTrash(req, res) {
        const trash = await Trash.update({_id: req.params.id}, req.body);

        return res.json(trash);
    }
}

module.exports = new TrashController();