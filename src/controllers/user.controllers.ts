import { Request, Response } from "express";
import User from "../models/users.model";

export const deleteUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    await user.destroy();
    res.json({ message: "User deleted successfully" });
    return;
  };