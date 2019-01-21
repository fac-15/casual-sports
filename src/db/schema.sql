BEGIN;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  team Text,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(40) NOT NULL UNIQUE
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
  name TEXT NOT NULL,
  sport TEXT NOT NULL,
  event_date TEXT NOT NULL,
  start_time TEXT NOT NULL,
  users_id INTEGER REFERENCES users(id),
  location TEXT NOT NULL,
  genders INTEGER,
  open BOOLEAN NOT NULL DEFAULT false
);

COMMIT;
