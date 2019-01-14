BEGIN;

DROP TABLE IF EXISTS users, teams, events CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  location TEXT,
  team_id INTEGER REFERENCES teams(id),
  name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  contact_number INTEGER
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  location TEXT,
  user_id INTEGER REFERENCES users(id),
  size INTEGER,
  genders VARCHAR(100),
  ages INTEGER,
  skill TEXT,
  sport TEXT, 
  join TEXT
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams(id),
  user_id INTEGER REFERENCES users(id),
  location TEXT NOT NULL,
  genders TEXT NOT NULL,
  open TEXT NOT NULL
);


INSERT INTO users (location, name, password, email) VALUES
(
  'Tufnell Park',
  'Sasspants_sally', 
  'password',
  'grahlsan@gmail.com'
);


COMMIT;