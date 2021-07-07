
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('tasks').insert([
    {task_description: 'use hammer, nails, wood', task_notes: 'this is optional', completed: false, projects_id: 1},
    
  ]);

};