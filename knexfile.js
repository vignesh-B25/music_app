export default {
  development: {
    client: 'pg',
    connection: {
      host : 'localhost',
     driver: "pg",
    database: "music_app",
    user: "devvicky",
    password: "vignesh2504",
    },
    migrations: {
      directory: './migrations',
            loadExtensions: ['.js']
      
    }
  }
}
