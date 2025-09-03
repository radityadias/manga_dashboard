import type { Request, Response, NextFunction } from "express";

export interface AppError extends Error{
    status?: number;
}

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    const status = err.status || 500;
    res.status(status).json({
        message: err.message,
        status,
    });
}



