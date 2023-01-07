const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  age: {
    type: String,
  },
  sexe: {
    type: String,
  },
  numDoss: {
    type: String,
  },
  etab: {
    type: String,
  },
  antecedents: {
    type: String,
  },
  indications: {
    type: String,
  },
  FOGDmaterials: {
    type: String,
  },
  FOGDoesophage: {
    type: String,
  },
  FOGDcardia: {
    type: String,
  },
  FOGDEstomac: {
    type: String,
  },
  FOGDBiopsie: {
    type: String,
  },
  FOGDfundus: {
    type: String,
  },
  FOGDantre: {
    type: String,
  },
  FOGDpyloreExplored: {
    type: String,
  },
  FOGDpylore: {
    type: String,
  },
  FOGDdidii: {
    type: String,
  },
  FOGDdidiiExplored: {
    type: String,
  },
  ColoscopieMaterials: {
    type: String,
  },
  ColoscopieColonGauche: {
    type: String,
  },
  ColoscopieColonTansverse: {
    type: String,
  },
  ColoscopieColonDroit: {
    type: String,
  },
  ColoscopiePreparation: {
    type: String,
  },
  ColoscopieIleon: {
    type: String,
  },
  ColoscopieBasFondCaecal: {
    type: String,
  },
  ColoscopieColonGaucheText: {
    type: String,
  },
  ColoscopieColonTansverseText: {
    type: String,
  },
  ColoscopieColonDroitText: {
    type: String,
  },
  ColoscopieRectum: {
    type: String,
  },
  ColoscopieIleonExplored: {
    type: String,
  },
  ColoscopieBasFondCaecalExplored: {
    type: String,
  },
  ColoscopieColonGaucheTextExplored: {
    type: String,
  },
  ColoscopieColonTansverseTextExplored: {
    type: String,
  },
  ColoscopieColonDroitTextExplored: {
    type: String,
  },
  ColoscopieRectumExplored: {
    type: String,
  },
  conclusion: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Report', reportSchema);
