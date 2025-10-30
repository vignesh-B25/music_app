/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    knex.raw(`
        CREATE TABLE pricing_plan(
        pricing_id SERIAL PRIMARY KEY,
        plan_id INT REFERENCES subscription_plan(subscription_id)
        currency_id INT REFERENCES currency(currency_id),
        amount INT ,
        country INT REFERENCES country(country_id)
        duration INT 

        `)
    
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
