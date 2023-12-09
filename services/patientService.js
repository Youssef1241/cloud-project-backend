const Patient = require('../models/patient');

const searchPatient = async (name) => {
    return await Patient.findOne({ name: name });
};

const filterPatients = async (criteria) => {
    return await Patient.find(criteria);
};

const addMedicalHistory = async (patientId, history) => {
};

module.exports = { searchPatient, filterPatients, addMedicalHistory };
