import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';
// Database connection
const pool = new Pool({
host: process.env.DB_HOST || 'localhost',
port: parseInt(process.env.DB_PORT || '5432'),
database: process.env.DB_NAME || 'water_billing_db',
user: process.env.DB_USER || 'postgres',
password: process.env.DB_PASSWORD || 'password',
});
// Middleware
app.use(cors());
app.use(express.json());