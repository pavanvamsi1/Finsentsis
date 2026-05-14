import { Request, Response } from 'express';
import { User, IUser } from '../models/user.model';

// Response interface for consistent API responses
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

/**
 * Get user by email or phone
 * @param email - User email (optional)
 * @param phone - User phone (optional)
 * @returns User document or null
 */
export const getUserByEmailOrPhone = async (
  email?: string,
  phone?: string
): Promise<IUser | null> => {
  try {
    if (!email && !phone) {
      throw new Error('Either email or phone must be provided');
    }

    const query: any = {};
    if (email) {
      query.email = email.toLowerCase().trim();
    }
    if (phone) {
      query.phone = phone.trim();
    }

    const user = await User.findOne(query);
    return user;
  } catch (error) {
    console.error('Error in getUserByEmailOrPhone:', error);
    throw error;
  }
};

/**
 * Controller function to get user by email or phone
 */
export const getUserByEmailOrPhoneController = async (
  req: Request,
  res: Response<ApiResponse<IUser>>
): Promise<void> => {
  try {
    const { email, phone } = req.query;

    if (!email && !phone) {
      res.status(400).json({
        success: false,
        error: 'Either email or phone parameter is required'
      });
      return;
    }

    const user = await getUserByEmailOrPhone(
      email as string,
      phone as string
    );

    if (!user) {
      res.status(404).json({
        success: false,
        error: 'User not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error in getUserByEmailOrPhoneController:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

/**
 * Create user if not exists, otherwise return existing user
 * @param email - User email
 * @param phone - User phone (optional)
 * @returns User document
 */
export const createUserIfNotExists = async (
  email: string,
  phone?: string
): Promise<IUser> => {
  try {
    if (!email) {
      throw new Error('Email is required');
    }

    // Check if user already exists
    const existingUser = await getUserByEmailOrPhone(email, phone);
    if (existingUser) {
      return existingUser;
    }

    // Create new user
    const userData: any = {
      email: email.toLowerCase().trim()
    };

    if (phone) {
      userData.phone = phone.trim();
    }

    const newUser = new User(userData);
    await newUser.save();

    return newUser;
  } catch (error) {
    console.error('Error in createUserIfNotExists:', error);
    throw error;
  }
};

/**
 * Controller function to create user if not exists
 */
export const createUserIfNotExistsController = async (
  req: Request,
  res: Response<ApiResponse<IUser>>
): Promise<void> => {
  try {
    const { email, phone } = req.body;

    if (!email) {
      res.status(400).json({
        success: false,
        error: 'Email is required'
      });
      return;
    }

    const user = await createUserIfNotExists(email, phone);

    res.status(201).json({
      success: true,
      data: user,
      message: user.createdAt.getTime() === user.updatedAt.getTime() 
        ? 'User created successfully' 
        : 'User already exists'
    });
  } catch (error: any) {
    console.error('Error in createUserIfNotExistsController:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      res.status(409).json({
        success: false,
        error: `User with this ${field} already exists`
      });
      return;
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      res.status(400).json({
        success: false,
        error: validationErrors.join(', ')
      });
      return;
    }

    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

/**
 * Update last login timestamp for a user
 * @param userId - User ID
 * @returns Updated user document
 */
export const updateLastLogin = async (userId: string): Promise<IUser | null> => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { lastLoginAt: new Date() },
      { new: true, runValidators: true }
    );

    return updatedUser;
  } catch (error) {
    console.error('Error in updateLastLogin:', error);
    throw error;
  }
};

/**
 * Controller function to update last login
 */
export const updateLastLoginController = async (
  req: Request,
  res: Response<ApiResponse<IUser>>
): Promise<void> => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({
        success: false,
        error: 'User ID is required'
      });
      return;
    }

    const updatedUser = await updateLastLogin(userId);

    if (!updatedUser) {
      res.status(404).json({
        success: false,
        error: 'User not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
      message: 'Last login updated successfully'
    });
  } catch (error) {
    console.error('Error in updateLastLoginController:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
