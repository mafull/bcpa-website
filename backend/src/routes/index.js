import express from "express";


const router = new express.Router();

// Configure routes
router.get("/", (req, res, next) => res.send("index"));


export default router;
