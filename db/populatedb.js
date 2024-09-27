require("dotenv").config();

const { Client } = require("pg");
const date = new Date().toISOString().split('T')[0];

const SQL = `
  CREATE TABLE IF NOT EXISTS message (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 20 ) NOT NULL,
  text VARCHAR (255) NOT NULL,
  date DATE
);

  INSERT INTO message (username, text, date)
  VALUES 
  ('Amando', 'Hi there!', '${date}'),
  ('Charles', 'Hello World!', '${date}'),
  ('Max', 'Super Project', '${date}'),
  ('Bart', 'Eat my shorts', '${date}'),
  ('Quagmire', 'Gigidi', '${date}'),
  ('Spoon', 'What the fork', '${date}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();