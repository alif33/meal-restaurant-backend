const router = require('express').Router();
const { 
   getCoupons,
   addCoupon,
   updateCoupon,
   deleteCoupon
 } = require("../controller/couponController");

const { 
   getSchedules,
   addSchedule,
   dropSchedule
   // deleteCoupon
 } = require("../controller/scheduleController");

const { 
   getDeliveryZones,
   addDeliveryZone,
   updateDeliveryZone
 } = require("../controller/deliveryZoneController");
 
const { 
   getPhotos,
   addPhoto,
   dropPhoto
  //  updateDeliveryZone
 } = require("../controller/photoController");

const { 
   getRestaurants, 
   addRestaurant, 
   updateRestaurant 
} = require('../controller/restaurantController');


const { 
   getCuisineTypes,
   addCuisineType,
   deleteCuisineType 
} = require('../controller/cuisineTypeController');

router.get('/restaurants', getRestaurants);
router.post('/restaurant', addRestaurant);
router.put('/restaurant', updateRestaurant);



router.get('/restaurant/coupons', getCoupons);
router.post('/restaurant/coupon', addCoupon);
router.put('/restaurant/coupon', updateCoupon);
router.delete('/restaurant/coupon', deleteCoupon);

router.get('/restaurant/schedules', getSchedules);
router.post('/restaurant/schedule', addSchedule);
router.delete('/restaurant/schedule', dropSchedule);
// router.delete('/restaurant/coupon', deleteCoupon); 

router.get('/restaurant/delivery-zones', getDeliveryZones);
router.post('/restaurant/delivery-zone', addDeliveryZone);
router.put('/restaurant/delivery-zone', updateDeliveryZone);

router.get('/restaurant/photos', getPhotos);
router.post('/restaurant/photo', addPhoto);
router.delete('/restaurant/photo', dropPhoto);

router.get('/restaurant/cuisine-types', getCuisineTypes);
router.post('/restaurant/cuisine-type', addCuisineType);
router.delete('/restaurant/cuisine-type', deleteCuisineType);



// router.put('/resturant/delivery-zone', updateDeliveryZone);

module.exports = router;