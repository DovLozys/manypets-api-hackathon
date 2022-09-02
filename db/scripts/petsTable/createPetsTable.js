import { query } from "../../connection.js";

async function createPetsTable() {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS petsTable (id SERIAL PRIMARY KEY, species TEXT, gender TEXT, name TEXT, breed TEXT, age INT, address TEXT, postcode TEXT, price INT, email TEXT, petCreatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);`
  );
  console.log(response.status);
  console.log("petsTable created successfully");
}

createPetsTable();
