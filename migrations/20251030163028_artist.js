/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  knex.raw(`CREATE TABLE artist(
    artist_id INT SERIAL  PRIMARY KEY,
    artist_name VARCHAR(40) NOT NULL,
    metadata JSONB,
    access_key VARCHAR(255) NOT NULL,
    refresh_key VARCHAR(255) NULL,
    created_at TIMESTAMPZ DEFAULT(now()),
    updated_at TIMESTAMPZ NULL,
    created_by INT REFERENCE artist(artist_id),
    updated_by INT NULL REFERENCE artist(artist_id) ,
    is_active BOOLEAN DEFAULT(TRUE))
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down (knex) {
    knex.raw(`
        DROP TABLE artist;
        `)
  
};
