/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    knex.raw(` 
        CREATE TABLE song_play_log(
        play_id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(user_id),
        song_id INT REFERENCES songs(song_id),
        played_at TIMESTAMPZ DEFAULT(now()),
        session_embeddings VECTOR(1536)
        )
        `)
    
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    knex.raw(`
        DROP TABLE song_play_log ;
        `)
    
} ;
