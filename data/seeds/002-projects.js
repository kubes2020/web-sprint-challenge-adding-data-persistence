
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'birdhouse', project_description: 'build birdhouse', completed: false},
        
      ]);

};
