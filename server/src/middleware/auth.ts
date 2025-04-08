import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  // This needs to verify the the .env notice that we are importing jwt from jsonwebtoken
  // In the .env we specify name, user, password, as well as a secret key
};
