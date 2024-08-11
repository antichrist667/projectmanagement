// routes.js
const express = require('express');
const UserService = require('./services/userservice');

const router = express.Router();

// Crear un nuevo usuario
router.post('/users', async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un usuario por ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Actualizar un usuario por ID
router.put('/users/:id', async (req, res) => {
  try {
    const user = await UserService.updateUserById(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un usuario por ID
router.delete('/users/:id', async (req, res) => {
  try {
    await UserService.deleteUserById(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
