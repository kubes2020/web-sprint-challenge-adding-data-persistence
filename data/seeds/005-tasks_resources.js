exports.seed = function(knex) {
  // Inserts seed entries
  return knex('tasks_resources').insert([
    {tasks_id: 1, resources_id: 1},
    {tasks_id: 1, resources_id: 2},
    {tasks_id: 1, resources_id: 3},

  ]);

};
