BEGIN;

DROP TABLE IF EXISTS users, teams, events CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  team Text,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name Text,
  location TEXT,
  user_id INTEGER REFERENCES users(id),
  size INTEGER,
  genders INTEGER,
  ages INTEGER,
  skill INTEGER,
  sport TEXT,
  solo  BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name TEXT,
  sport TEXT,
  users_id INTEGER REFERENCES users(id),
  location TEXT NOT NULL,
  genders INTEGER,
  open BOOLEAN NOT NULL DEFAULT false
);

INSERT INTO users (team, username, password, email) VALUES
(  '',  'Sasspants_sally',   'password',  'grahlsan@gmail.com'),
('footy',  'charlie', 'ilovefootball', 'charlie@gmail.com');

INSERT INTO teams (name, location, user_id, size, genders, ages, skill, sport, solo) VALUES
('fac',  'london',  '1',   '1', '3', '1', '3',  'football',  'true');

INSERT INTO events(name, users_id, location, genders, open) VALUES
('fun at the park','Football', '1', 'london', '3', true );

COMMIT;
