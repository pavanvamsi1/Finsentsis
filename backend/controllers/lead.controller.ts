import { Request, Response } from 'express';
import Lead, { ILead } from '../models/lead.model';

const requiredLeadFieldsMissing = (body: Record<string, unknown>): boolean => {
  return !body.firstName || !body.lastName || !body.email || !body.phone;
};

const buildLeadFilter = (query: Request['query']): Record<string, unknown> => {
  const filter: Record<string, unknown> = {};
  if (query.status) {
    filter.status = query.status;
  }
  if (query.sourceType) {
    filter.sourceType = query.sourceType;
  }
  return filter;
};

export const captureDemoLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, phone, companyName, message, demoRequestId } = req.body;

    if (requiredLeadFieldsMissing(req.body)) {
      res.status(400).json({
        success: false,
        message: 'First name, last name, email, and phone are required',
      });
      return;
    }

    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      res.status(409).json({
        success: false,
        message: 'Lead with this email already exists',
      });
      return;
    }

    const lead = await Lead.create({
      firstName,
      lastName,
      email,
      phone,
      companyName,
      message,
      sourceType: 'demo',
      demoRequestId,
      status: 'new',
    });

    res.status(201).json({
      success: true,
      message: 'Lead captured successfully from demo request',
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error capturing lead from demo request',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const captureContactLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, phone, message, contactId } = req.body;

    if (requiredLeadFieldsMissing(req.body)) {
      res.status(400).json({
        success: false,
        message: 'First name, last name, email, and phone are required',
      });
      return;
    }

    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      res.status(409).json({
        success: false,
        message: 'Lead with this email already exists',
      });
      return;
    }

    const lead = await Lead.create({
      firstName,
      lastName,
      email,
      phone,
      message,
      sourceType: 'contact',
      contactId,
      status: 'new',
    });

    res.status(201).json({
      success: true,
      message: 'Lead captured successfully from contact form',
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error capturing lead from contact form',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getAllLeads = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '10' } = req.query;
    const filter = buildLeadFilter(req.query);

    const pageNum = Math.max(1, parseInt(String(page), 10) || 1);
    const limitNum = Math.max(1, Math.min(100, parseInt(String(limit), 10) || 10));
    const skip = (pageNum - 1) * limitNum;

    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    const total = await Lead.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: leads,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching leads',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const exportLeads = async (req: Request, res: Response): Promise<void> => {
  try {
    const format = String(req.query.format || 'json').toLowerCase();
    const filter = buildLeadFilter(req.query);
    const leads = await Lead.find(filter).sort({ createdAt: -1 });

    if (format === 'csv') {
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="leads.csv"');
      res.send(convertToCSV(leads));
      return;
    }

    if (format !== 'json') {
      res.status(400).json({
        success: false,
        message: 'Invalid format. Allowed values are json or csv',
      });
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="leads.json"');
    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error exporting leads',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getLeadById = async (req: Request, res: Response): Promise<void> => {
  try {
    const lead = await Lead.findById(req.params.id).populate('demoRequestId').populate('contactId');

    if (!lead) {
      res.status(404).json({ success: false, message: 'Lead not found' });
      return;
    }

    res.status(200).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching lead',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const updateLeadStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status } = req.body;

    if (!['new', 'contacted', 'qualified', 'lost'].includes(status)) {
      res.status(400).json({
        success: false,
        message: 'Invalid status. Must be one of: new, contacted, qualified, lost',
      });
      return;
    }

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!lead) {
      res.status(404).json({ success: false, message: 'Lead not found' });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Lead status updated successfully',
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating lead status',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getLeadStatistics = async (req: Request, res: Response): Promise<void> => {
  try {
    const totalLeads = await Lead.countDocuments();
    const byStatus = await Lead.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]);
    const bySource = await Lead.aggregate([{ $group: { _id: '$sourceType', count: { $sum: 1 } } }]);

    res.status(200).json({
      success: true,
      data: {
        totalLeads,
        byStatus,
        bySource,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching lead statistics',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

const convertToCSV = (leads: ILead[]): string => {
  if (leads.length === 0) {
    return '';
  }

  const headers = [
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Company Name',
    'Source Type',
    'Message',
    'Status',
    'Created At',
    'Updated At',
  ];

  const rows = leads.map((lead) => [
    lead.firstName,
    lead.lastName,
    lead.email,
    lead.phone,
    lead.companyName || '',
    lead.sourceType,
    String(lead.message || '').replace(/"/g, '""'),
    lead.status,
    lead.createdAt.toISOString(),
    lead.updatedAt.toISOString(),
  ]);

  return [headers.join(','), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(','))].join('\n');
};