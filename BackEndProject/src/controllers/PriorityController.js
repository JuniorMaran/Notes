const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response){
        const priority = request.query;

        const priorityList = await Annotations.find(priority);

        return response.json(priorityList);
    },

    async update(request, response){
        const {id} = request.params;
        const changePriority = await Annotations.findOne({_id: id});

        changePriority.priority = !changePriority.priority

        await changePriority.save();

        return response.json(changePriority);
    }

}