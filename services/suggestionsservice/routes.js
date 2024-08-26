// routes.js

const express = require('express');
const SuggestionService = require('./services/suggestionservice');

const router = express.Router();

router.post('/suggestions', async (req, res) => {
  try {
    const suggestion = await SuggestionService.createSuggestion(req.body);
    res.status(201).json(suggestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/suggestions', async (req, res) => {
  try {
    const suggestions = await SuggestionService.getAllSuggestions();
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/suggestions/:id', async (req, res) => {
  try {
    const suggestion = await SuggestionService.getSuggestionById(req.params.id);
    res.json(suggestion);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.put('/suggestions/:id', async (req, res) => {
  try {
    const suggestion = await SuggestionService.updateSuggestionById(req.params.id, req.body);
    res.json(suggestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/suggestions/:id', async (req, res) => {
  try {
    await SuggestionService.deleteSuggestionById(req.params.id);
    res.json({ message: 'Suggestion deleted' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
