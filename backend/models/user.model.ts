import mongoose, { Document, Schema } from 'mongoose';

// TypeScript interface for User document
export interface IUser extends Document {
  email: string;
  phone?: string;
  isVerified: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// User Schema
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(email: string) {
        return emailRegex.test(email);
      },
      message: 'Please provide a valid email address'
    }
  },
  phone: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple null values for unique field
    trim: true,
    validate: {
      validator: function(phone: string) {
        if (!phone) return true; // Phone is optional
        // Validate 10-digit phone number (can include country code)
        return /^\+?[1-9]\d{9,14}$/.test(phone.replace(/\s/g, ''));
      },
      message: 'Please provide a valid phone number (10-15 digits)'
    }
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  lastLoginAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
      return ret;
    }
  }
});

// Index for efficient queries
userSchema.index({ email: 1 });
userSchema.index({ phone: 1 });

// Create and export the User model
export const User = mongoose.model<IUser>('User', userSchema);