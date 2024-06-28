import express from "express";
import { createUser, deleteUserController, getSingleUserController, getUsersController, patchUserController, userUpdateController } from "../Controllers/authController.js";

const router = express.Router();

// Routes for API
router.post("/register", createUser);
router.get("/userDetails", getUsersController); 
router.get('getSingle-user/:id',getSingleUserController)
router.put('/update-user/:id', userUpdateController);
router.delete('/delete-user/:id',deleteUserController)
router.patch('/patchUser/:id',patchUserController)
export default router;
