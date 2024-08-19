const express = require('express');
const ProjectService = require('./services/projectservice');

const router = express.Router();

router.post('/projects', async (req, res) => {
  try {
    const project = await ProjectService.createProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/projects', async (req, res) => {
  try {
    const projects = await ProjectService.getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/projects/:id', async (req, res) => {
  try {
    const project = await ProjectService.getProjectById(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.put('/projects/:id', async (req, res) => {
  try {
    const project = await ProjectService.updateProjectById(req.params.id, req.body);
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/projects/:id', async (req, res) => {
  try {
    await ProjectService.deleteProjectById(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
