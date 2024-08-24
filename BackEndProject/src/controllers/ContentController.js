const Annotations = require('../models/AnnotationData');

module.exports = {
    async update(request, response){
        const {
            params: {
                id
            }, 
            body: {
                title,
                notes
            }
        } = request;
        
        if (title || notes) {
            const getNote = await Annotations.findOne({_id: id});
            if ((!title || getNote.title === title) && (!notes || getNote.notes === notes)) {
                return response.json("Sem alteração de valor!");
            }
            if (title) getNote.title = title;
            if (notes) getNote.notes = notes;

            await getNote.save();


            return response.json(getNote);
        }

        return response.json("Nenhum valor alterado!");
    }

}