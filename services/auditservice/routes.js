const express = require('express');
const router = express.Router();
const AuditLog = require('./db/models/auditmodel');

router.get('/auditlogs', async (req, res) => {
  try {
    const logs = await AuditLog.findAll();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve audit logs' });
  }
});

module.exports = router;
