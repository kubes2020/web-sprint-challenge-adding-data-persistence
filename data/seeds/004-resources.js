exports.seed = function(knex) {
  // Inserts seed entries
  return knex('resources').insert([
    {resource_name: 'hammer', resource_description: 'this is optional' },
    {resource_name: 'nails', resource_description: 'this is optional' },
    {resource_name: 'wood', resource_description: 'this is optional' },

  ]);

};
