import express from "express";
import { createUser, getUser, updateUser, deleteUser, users } from "../controllers/usersController.js";
// TODO: setup routing for users and user data

const router = express.Router();



router.get("/", (req, res) => {
  res.send(users);
});

// ------------- CREATE New User
router.post('/', createUser);

// ------------- GET request.params from user id via router
router.get("/:id", getUser);

// ------------ PATCH / UPDATE
router.patch("/:id", updateUser);

// ------------ DELETE User
router.delete("/:id", deleteUser);


export default router;
