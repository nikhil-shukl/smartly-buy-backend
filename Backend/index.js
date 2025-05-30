
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { WebSocketServer } from 'ws';  // Correct import for WebSocketServer

import contactRoutes from './routes/contactRoutes.js';

import aboutUsRoutes from './routes/aboutUsRoutes.js';
import affiliateDisclosureRoutes from "./routes/affiliateDisclosureRoutes.js";
import privacyPolicyRoutes from './routes/privacyPolicyRoutes.js';
import termsConditionsRoutes from './routes/termsConditionsRoutes.js';
import phoneRoutes from "./routes/phoneRoutes.js";
import laptopRoutes from "./routes/laptopRoutes.js";
import earbudRoutes from "./routes/earbudRoutes.js";
import guideRoutes from "./routes/guideRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", 
           "https://frontend-5vfpe3rjq-nikhil-shuklas-projects.vercel.app",
           "https://www.techtrendydeals.com"
          ], // Add Vercel frontend URL
  credentials: true, // Allow cookies & headers
}));
app.use(morgan('dev')); // For showing API logs (GET / POST / etc.)

// API 

app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', aboutUsRoutes); 
app.use("/api/disclosure", affiliateDisclosureRoutes);
app.use('/api/privacy-policy', privacyPolicyRoutes);
app.use('/api/terms-conditions', termsConditionsRoutes);
app.use('/api/phones', phoneRoutes);
app.use("/api/laptops", laptopRoutes);
app.use("/api/earbuds", earbudRoutes);
app.use("/api/guides", guideRoutes);
// Test Route
app.get('/', (req, res) => {
  res.send('✅ API is working fine...');
});

// 404 Error Handling
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// WebSocket server setup
const wss = new WebSocketServer({ noServer: true });  // Corrected the import

wss.on('connection', (ws) => {
  console.log('A new client connected');
  
  ws.on('message', (message) => {
    console.log('Received:', message);
  });

  ws.send('Welcome to the WebSocket server');
});

// Handle WebSocket upgrade requests
app.server = app.listen(process.env.PORT || 5000, () => {
  
});

app.server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

