
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.string('project_name', 128).notNullable()
      tbl.text('project_description')
      tbl.boolean('completed').defaultTo(false).notNullable()
  })

  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('task_description', 128).notNullable()
      tbl.text('task_notes')
      tbl.boolean('completed').defaultTo(false).notNullable()
      tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
})

.createTable('resources', tbl => {
    tbl.increments()
    tbl.string('resource_name', 128).notNullable().unique()
    tbl.text('resource_description')
})

.createTable('tasks_resources', tbl => {
      tbl.increments()
      tbl.integer('tasks_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
})



};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
