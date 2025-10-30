/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await   knex.raw(`
CREATE TABLE users(
   user_id SERIAL PRIMARY KEY,
   user_name VARCHAR(40) NOT NULL,
   email VARCHAR(50) UNIQUE  NOT NULL, 
   access_token VARCHAR(255) NOT NULL, 
   refresh_token VARCHAR(255)
    )
       `)

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.raw(`
        DROP TABLE users`)
};
