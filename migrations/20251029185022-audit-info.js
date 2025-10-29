'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db,callback) {
db.runSql("CREATE TABLE user (user_id serial PRIMARY KEY, user_name varChar(40), email varchar(50), access_token varchar(255), refresh_token varchar(255)) ;",callback)
};

exports.down = function(db,callback) {
  db.runSql("DROP TABLE user ; ",callback);
};

exports._meta = {
  "version": 1
};
