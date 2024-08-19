const Project = require('../db/models/projectmodel');

const ProjectService = {
  createProject: async (projectData) => {
    try {
      const project = await Project.create(projectData);
      return project;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAllProjects: async () => {
    try {
      const projects = await Project.findAll();
      return projects;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getProjectById: async (id) => {
    try {
      const project = await Project.findByPk(id);
      if (!project) throw new Error('Project not found');
      return project;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateProjectById: async (id, projectData) => {
    try {
      const project = await Project.findByPk(id);
      if (!project) throw new Error('Project not found');
      await project.update(projectData);
      return project;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteProjectById: async (id) => {
    try {
      const project = await Project.findByPk(id);
      if (!project) throw new Error('Project not found');
      await project.destroy();
      return;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = ProjectService;
