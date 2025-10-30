/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    knex.raw(`
        CREATE TABLE playlist_songs(
        playlis_songs_id SERIAL PRIMARY KEY,
        song_id INT REFERENCES songs(song_id)
        )
        `)
    
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    knex.raw(`
        DROP TABLE playlist_songs;
        `)
    
} {
  
};
