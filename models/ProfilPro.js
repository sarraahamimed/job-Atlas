const mongoose = require('mongoose');
const experienceTravail = require('./ProfilProfessionel/experienceTravail');
const formation = require('./ProfilProfessionel/Formation');

const schema = new mongoose.Schema({

    Id_etudiant: Number,
    Premiere_experience_pro: experienceTravail.schema,
    Seconde_experience_pro: experienceTravail.schema,
    Troisieme_experience_pro: experienceTravail.schema,
    Formation: formation.schema,
})


// pour l'acces dans les autres fichiers
const ProfilPro = mongoose.model('profilPro', schema);

module.exports = ProfilPro