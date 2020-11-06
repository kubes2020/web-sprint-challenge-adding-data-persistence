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

    addResources(resourceBody) {
        return db('resources')
        .insert(resourceBody)

    // insert into 
    //     resources (resource_name, resource_description)
    //     values ('glue', 'sticky')
    },

    addProjects(nameBody) {
        return db('projects')
        .insert(nameBody)

    // insert into Projects (project_name)
    //     values ('chair')
    },

    addTasks(taskBody) {
        //must provide id of existing project
        return db('tasks')
        .insert(taskBody)
        .join('projects', 'projects.id', 'tasks.projects_id')

        
        // insert into Tasks (task_description, projects_id)
        // values ('use wood saw', 2)
    }


}