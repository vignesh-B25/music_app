/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    knex.raw(`
        CREATE TABLE subscription_plan(
        subscription_id SERIAL PRIMARY KEY,
        subscription_name VARCHAR(50),
        )
        `)
    
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    knex.raw(`
        DROP TABLE subscription_plan; `)
}
