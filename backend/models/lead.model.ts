import mongoose, { Document, Schema } from 'mongoose';

export type LeadSourceType = 'demo' | 'contact';
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'lost';

export interface ILead extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  sourceType: LeadSourceType;
  message?: string;
  demoRequestId?: mongoose.Types.ObjectId;
  contactId?: mongoose.Types.ObjectId;
  status: LeadStatus;
  createdAt: Date;
  updatedAt: Date;
}

const leadSchema = new Schema<ILead>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    sourceType: {
      type: String,
      enum: ['demo', 'contact'],
      required: [true, 'Source type is required'],
    },
    message: {
      type: String,
      trim: true,
    },
    demoRequestId: {
      type: Schema.Types.ObjectId,
      ref: 'DemoRequest',
    },
    contactId: {
      type: Schema.Types.ObjectId,
      ref: 'Contact',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'lost'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

leadSchema.index({ email: 1 });
leadSchema.index({ phone: 1 });
leadSchema.index({ sourceType: 1 });
leadSchema.index({ status: 1 });
leadSchema.index({ createdAt: -1 });

const Lead = mongoose.model<ILead>('Lead', leadSchema);

export default Lead;