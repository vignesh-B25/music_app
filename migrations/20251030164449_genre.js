/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up (knex) {
  knex.raw(`
    CREATE TABLE genres(
    genre_id SERIAL PRISMARY KEY,
    gere_name VARCHAR(50) ,
    description TEXT ,
    parent_genre_id INT NULL  REFERENCE genres(genre_id),
    created_at TIMESTAMPZ DEFAULT(now()),
    updated_at TIMESTAMPZ NULL,
    created_by INT REFERENCE artist(artist_id),
    updated_by INT NULL REFERENCE artist(artist_id) ,
    is_active BOOLEAN DEFAULT(TRUE))
    )
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down (knex) {
    knex.raw(`
        CREATE TABLE genres ; 
        `)
  
};
