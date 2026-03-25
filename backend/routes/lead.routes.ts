import { Router } from 'express';
import {
  captureContactLead,
  captureDemoLead,
  exportLeads,
  getAllLeads,
  getLeadById,
  getLeadStatistics,
  updateLeadStatus,
} from '../controllers/lead.controller';

const router = Router();

router.post('/capture/demo', captureDemoLead);
router.post('/capture/contact', captureContactLead);
router.get('/', getAllLeads);
router.get('/statistics', getLeadStatistics);
router.get('/export', exportLeads);
router.get('/:id', getLeadById);
router.patch('/:id/status', updateLeadStatus);

export default router;