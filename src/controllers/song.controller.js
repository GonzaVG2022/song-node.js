const catchError = require('../utils/catchError');
const Song = require('../model/Song');

const getAll = catchError(async(req, res) => {
    const songs = await Song.findAll()
    return res.json(songs);
});
const create = catchError(async(req, res) => {
    const { name, artist, genre, releseDate} = req.body;
    const song = await Song.create({
        name,
        artist,
        genre,
        releseDate
    });
    return res.status(201).json(song);
})
const getOne = catchError( async(req, res) => {
    const {id} = req.params;
    const song = await Song.findByPk(id);
    if(!song) return res.status(404).json({menssage: "Song not fonud"});
    return res.json(song)
})
const remuve = catchError( async(req, res) => {
    const {id} = req.params;
    const song = await Song.destroy( { where: {id}});
    if(song === 0) return res.status(404).json({ menssage: "Song not found"}); 
    return res.sendStatus(204);
}); 
const update = catchError( async( req, res ) => {
    const { name, artist, genre, releseDate} = req.body;
    const {id} = req.params;
    const song = await Song.update(
        { name, artist, genre, releseDate },
        { where: {id}, returning: true }
        )
    if( song[0] === 0) return res.status(404).json({menssage: "Song not found"})
    return res.json(song[1][0]);

});

module.exports = {
    getAll,
    create,
    remuve,
    update,
    getOne
}