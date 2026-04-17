import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests
  standardHeaders: true, // return rate limit info in headers
  legacyHeaders: false, // disable old headers

  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: "Too many requests, please try again later",
    });
  },
});