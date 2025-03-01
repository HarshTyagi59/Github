const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add this line

const app = express();
app.use(cors());  // Add this line
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://harshtyagi2099:7nu7GUVyu7rAW6o2@funn-db.4zjfr.mongodb.net/?retryWrites=true&w=majority&appName=funn-db');

const projectSchema = new mongoose.Schema({
    type: String,
    name: String,
    link: String,
    tutorial: String
});

const Project = mongoose.model('Project', projectSchema);

// Get all projects
app.get('/api/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// Add a new project
app.post('/api/projects', async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
});

// Delete a project
app.delete('/api/projects/:id', async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
