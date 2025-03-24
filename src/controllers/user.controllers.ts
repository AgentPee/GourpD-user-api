import { Request, Response } from "express";
import User from "../models/users.model"; // Correct path to your model


export const getUsers = async (req: Request, res: Response): Promise<void> => {
    const users = await User.findAll();
    res.json(users); // ✅ No return here
  };
  // Get user by ID
  export const getUserById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return; // ✅ Return after sending response
    }
    res.json(user);
  };