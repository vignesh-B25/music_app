/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.raw(`
    CREATE TABLE songs(
    song_id  SERIAL PRIMARY KEY,
    title VARCHAR(255),
    lyrics TEXT,
    artist_id INT NOT NULL REFERENCES artist(artist_id),
    song_url VARCHAR(255) NOT NULL,
    genre INT NOT NULL  REFERENCES genres(genre_id),
    released_at TIMESTAMPZ DEFAULT(now()),
    updated_at TIMESTAMPZ,
    embeddings VECTOR(1536),
    metadata JSONB
    updated_by INT NULL REFERENCES artist(artist_id),
    is_active BOOLEAN DEFAULT(TRUE),
    FOREIGN KEY(artist_id) ,
    FOREIGN KEY(updated_by) ,

    
    )`)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    knex.raw(`
        DROP TABLE songs ;
        `)
}
