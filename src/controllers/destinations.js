const {validationResult} = require('express-validator');
const Destination = require('../models/destination');


exports.createDest = (req, res, next) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    if(!req.file){
        const err = new Error('Image harus diupload');
        err.errorStatus = 422;
        throw err;  
    }
    const title = req.body.title;
    const description = req.body.description;
    const image = req.file.path;

    // Post data ke mongoDB dengan response API
    const Posting = new Destination({
        title: title,
        description: description,
        image: image,
        author: {uuid: 1, name: 'Testing'}
    })
    Posting.save()
    .then(result => {
        res.status(201).json({
            message: "Create destination post success",
            data: result
        })
    })
    .catch(err => {
        console.log('Err: ', err)
    });
};
