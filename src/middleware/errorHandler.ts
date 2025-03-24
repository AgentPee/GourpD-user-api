import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(" Error:", err.message || err);

  
  if (err.name === "SequelizeValidationError") {
    res.status(400).json({
      message: "Validation error",
      errors: err.errors.map((error: any) => error.message),
    });
    return; 
  }

  res.status(500).json({
    message: "Internal Server Error",
    error: err.message || "Something went wrong!",
  });
  return; 
};

export default errorHandler;
