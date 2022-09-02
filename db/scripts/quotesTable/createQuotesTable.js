import { query } from "../../connection.js";

async function createQuotesTable() {
  const response = await query(
    `
    DROP TABLE IF EXISTS quotesTable CASCADE;

    CREATE TABLE quotesTable (
      id SERIAL PRIMARY KEY,
      price INT,
      email TEXT,
      quoteCreatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
  );
  console.log(response.status);
  console.log("quotesTable created successfully");
}

createQuotesTable();
