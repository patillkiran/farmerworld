const express = require('express');
const farmerController = require('./../controllers/farmerController');

const router = express.Router();


router.get('/getAllFarmers', farmerController.getAllFarmers);
router.post('/createFarmer', farmerController.createFarmer);
router.get('/getFarmer/:farmerid', farmerController.getFarmer);
router.patch('/updateFarmer/:farmerid', farmerController.updateFarmer);
router.delete('/deleteFarmer/:farmerid', farmerController.deleteFarmer);
    // .route('/')
    // .get(farmerController.getAllFarmers)
    // .post(farmerController.createFarmer);

// router
//     .route('/:id')
//     .get(farmerController.getFarmer)
//     .patch(farmerController.updateFarmer)
//     .delete(farmerController.deleteFarmer);


module.exports = router;
