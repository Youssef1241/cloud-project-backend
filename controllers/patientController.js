const patientService = require('../services/patientService'); 
const Patient = require('../models/patient');
const getPatientInfo = async (req, res) => {
    try {
      const patientName = req.params.name;
      const patient = await Patient.findOne({ name: patientName }).select('phone location');
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.json(patient);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
const getFilteredPatients = async (req, res) => {
    try {
      let query = {};
      if (req.query.age) {
        query.age = req.query.age;
      }
      if (req.query.location) {
        query.location = req.query.location;
      }
  
      const patients = await Patient.find(query);
      res.json(patients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const updateMedicalHistory = async (req, res) => {
    try {
      const patientId = req.params.patientId;
      const updateData = req.body.medicalHistory; 
  
      const updatedPatient = await Patient.findByIdAndUpdate(patientId, {
        $set: { medicalHistory: updateData }
      }, { new: true, runValidators: true });
  
      if (!updatedPatient) {
        return res.status(404).json({ message: "Patient not found" });
      }
  
      res.json(updatedPatient);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
   const getAllPatients = async (req, res) => {
    try {
      const patients = await Patient.find(); 
      res.json(patients);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  };
  module.exports = {
    getPatientInfo,
    getFilteredPatients,
    updateMedicalHistory,
    getAllPatients
};
