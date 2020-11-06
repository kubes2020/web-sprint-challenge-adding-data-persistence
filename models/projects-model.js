const db = require('../data/config.js')

module.exports = {
    getProjects() {
        //get all project names
        return db('projects')
        .select('project_name')
    },

    getTasks() {
        //include project name and project description
        return db('projects')
        .join('tasks', 'tasks.projects_id', 'projects.id')
        .select('task_description', 'project_name', 'project_description')

    // select 
    //     task_description,
    //     project_name,
    //     project_description
    // from Projects
    // join Tasks
    //     on tasks.projects_id = projects.id;
    },

    getResources() {
        return db('resources')
        .select('resource_name')

    // select 
    //     resource_name
    // from Resources 
    },

    addResoures() {
        return db('')
    },

    addProjects() {
        return db('')
    },

    addTasks(id) {
        //must provide id of existing project
        return db('')
    }


}