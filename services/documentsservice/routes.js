const express = require('express');
const DocumentService = require('./services/documentservice');

const router = express.Router();

router.post('/documents', async (req, res) => {
  try {
    const document = await DocumentService.createDocument(req.body);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/documents', async (req, res) => {
  try {
    const documents = await DocumentService.getAllDocuments();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/documents/:id', async (req, res) => {
  try {
    const document = await DocumentService.getDocumentById(req.params.id);
    res.json(document);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.put('/documents/:id', async (req, res) => {
  try {
    const document = await DocumentService.updateDocumentById(req.params.id, req.body);
    res.json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/documents/:id', async (req, res) => {
  try {
    await DocumentService.deleteDocumentById(req.params.id);
    res.json({ message: 'Document deleted' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
