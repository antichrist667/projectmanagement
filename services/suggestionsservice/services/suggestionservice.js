
const Suggestion = require('../db/models/suggestionmodel');

const SuggestionService = {
  createSuggestion: async (suggestionData) => {
    try {
      const suggestion = await Suggestion.create(suggestionData);
      return suggestion;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAllSuggestions: async () => {
    try {
      const suggestions = await Suggestion.findAll();
      return suggestions;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getSuggestionById: async (id) => {
    try {
      const suggestion = await Suggestion.findByPk(id);
      if (!suggestion) throw new Error('Suggestion not found');
      return suggestion;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateSuggestionById: async (id, suggestionData) => {
    try {
      const suggestion = await Suggestion.findByPk(id);
      if (!suggestion) throw new Error('Suggestion not found');
      await suggestion.update(suggestionData);
      return suggestion;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteSuggestionById: async (id) => {
    try {
      const suggestion = await Suggestion.findByPk(id);
      if (!suggestion) throw new Error('Suggestion not found');
      await suggestion.destroy();
      return;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = SuggestionService;
