const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/', patientController.getAllPatients);
router.get('/search/:name', patientController.getPatientInfo);
router.get('/filter', patientController.getFilteredPatients);
router.post('/history/:patientId', patientController.updateMedicalHistory);

module.exports = router;