import express from "express";
/* import Hotel from "../models/Hotel.js"; */
import {createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js"

const router = express.Router();

//CREATE ==>post
router.post("/",createHotel);

//UPDATE ==>put
router.put("/:id",updateHotel);

//DELETE ==>delete
router.delete("/:id",deleteHotel);

//GET ==>get
router.get("/:id",getHotel);

//GET ALL ==>get
router.get("/",getHotels);

export default router;
