const mongoose = require('./db.js');
const OffreEmploischema = new mongoose.Schema ({
	Id_offre: number,
	Id_employeur_lie: String,
    Description: String,
    Nbr_postes_vides: number
})

// pour l'acces dans les autres fichiers
const offres_emploi = mongoose.model('offres_emploi', OffreEmploischema);
module.exports= offres_emploi