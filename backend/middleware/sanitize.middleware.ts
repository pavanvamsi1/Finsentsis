import mongoSanitize from 'express-mongo-sanitize';
// @ts-ignore - xss-clean doesn't have TypeScript definitions
import xss from 'xss-clean';
import type { Request, Response, NextFunction } from 'express';

const mongoSanitizeMiddleware = mongoSanitize({
  replaceWith: '_',
  onSanitize: ({ req, key }: { req: Request; key: string }) => {
    console.warn(`NoSQL injection attempt detected in parameter: ${key}`);
  }
});

const xssProtectionMiddleware = xss();

const sanitizeInput = (req: Request, res: Response, next: NextFunction) => {
  mongoSanitizeMiddleware(req, res, () => {
    xssProtectionMiddleware(req, res, next);
  });
};

export { sanitizeInput, mongoSanitizeMiddleware, xssProtectionMiddleware };
