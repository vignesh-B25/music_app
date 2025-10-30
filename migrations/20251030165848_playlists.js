/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    knex.raw(`
       CREAE TABLE playlist_songs(
       playlist_id SERIAL PRIMARY KEY,
       user_id INT REFERENCE artist(artist_id),
       title   VARCHAR(50),
       created_at TIMESTAMPZ DEFAULT(now()),
       updated_at TIMESTAMPZ NULL,
       updated_by INT NULL REFERENCE artist(artist_id) ,
       is_active BOOLEAN DEFAULT(TRUE))
       )
        `)

}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down  (knex) {
    knex.raw(`
       DROP TABLE playlist_songs ; 
        `)

};
