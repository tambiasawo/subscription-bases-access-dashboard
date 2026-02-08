import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`,
);

export const dbConnect = async () => {
  try {
    await sql`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title VARCHAR (255) NOT NULL, excerpt VARCHAR (255) NOT NULL, content TEXT NOT NULL, canonical_url VARCHAR (255) NOT NULL, cover_image_url VARCHAR (255) NOT NULL, reading_time_min INT NOT NULL, author_name VARCHAR (255) NOT NULL, author_email VARCHAR (255) NOT NULL, slug VARCHAR (255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;
    console.log("posts table created successfully.");

    await sql`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR (255) NOT NULL, email VARCHAR (255) NOT NULL, password_hash VARCHAR (255) NOT NULL, subscription_tier VARCHAR (255) NOT NULL, auth_provider VARCHAR (255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;
    console.log("Users table created successfully.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
