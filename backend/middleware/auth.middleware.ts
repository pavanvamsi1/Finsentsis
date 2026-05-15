import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role?: string;
  };
}

const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'MISSING_TOKEN',
      message: 'Access token is required. Please provide a Bearer token in the Authorization header.'
    });
  }

  const jwtSecret = process.env.JWT_SECRET;
  
  if (!jwtSecret) {
    console.error('JWT_SECRET environment variable is not set');
    return res.status(500).json({
      success: false,
      error: 'SERVER_ERROR',
      message: 'Server configuration error'
    });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
          success: false,
          error: 'TOKEN_EXPIRED',
          message: 'Access token has expired. Please login again to get a new token.'
        });
      }
      
      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
          success: false,
          error: 'INVALID_TOKEN',
          message: 'Invalid access token. Please provide a valid token.'
        });
      }
      
      if (err.name === 'NotBeforeError') {
        return res.status(401).json({
          success: false,
          error: 'TOKEN_NOT_ACTIVE',
          message: 'Access token is not active yet.'
        });
      }
      
      return res.status(401).json({
        success: false,
        error: 'TOKEN_VERIFICATION_FAILED',
        message: 'Token verification failed. Please provide a valid token.'
      });
    }

    req.user = {
      id: (decoded as any).id,
      email: (decoded as any).email,
      role: (decoded as any).role
    };

    next();
  });
};

export { authenticateToken, type AuthenticatedRequest };
