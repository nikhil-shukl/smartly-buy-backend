import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { WebSocketServer } from 'ws';  // Correct import for WebSocketServer

import productRoutes from './routes/productRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import aboutUsRoutes from './routes/aboutUsRoutes.js';
import heroicRoute from './routes/heroicRoute.js';
import compareContentRoute from './routes/compareContentRoute.js';
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

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', aboutUsRoutes); 
app.use('/api/heroic', heroicRoute);
app.use('/api/compare', compareContentRoute);

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
  console.log(`🚀 Server running at: http://localhost:${process.env.PORT || 5000}`);
});

app.server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

