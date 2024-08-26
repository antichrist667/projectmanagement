const Document = require('../db/models/documentmodel');

const DocumentService = {
  createDocument: async (documentData) => {
    try {
      const document = await Document.create(documentData);
      return document;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAllDocuments: async () => {
    try {
      const documents = await Document.findAll();
      return documents;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getDocumentById: async (id) => {
    try {
      const document = await Document.findByPk(id);
      if (!document) throw new Error('Document not found');
      return document;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateDocumentById: async (id, documentData) => {
    try {
      const document = await Document.findByPk(id);
      if (!document) throw new Error('Document not found');
      await document.update(documentData);
      return document;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteDocumentById: async (id) => {
    try {
      const document = await Document.findByPk(id);
      if (!document) throw new Error('Document not found');
      await document.destroy();
      return;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = DocumentService;
