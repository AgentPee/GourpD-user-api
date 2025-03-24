import { Request, Response, NextFunction } from "express";
import Joi from "joi";


const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(100).required(),
  password: Joi.string().min(6).max(50).required(),
});


const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(400).json({
      message: "Validation error",
      errors: error.details.map((err) => err.message),
    });
    return; 
  }

  next(); 
};

export default validateUser;
