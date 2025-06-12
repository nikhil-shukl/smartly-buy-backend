import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
// import mongoSanitize from 'express-mongo-sanitize';

// Route Imports
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

dotenv.config();

// ✅ Connect to MongoDB
connectDB();

const app = express();

// 🔐 Security Middlewares
app.use(helmet());
// app.use(mongoSanitize()); // Prevent NoSQL injection

// 🛡️ Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 200, // adjust if needed
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// 🔧 General Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://frontend-5vfpe3rjq-nikhil-shuklas-projects.vercel.app",
    "https://www.techtrendydeals.com"
  ],
  credentials: true,
}));
app.use(morgan('dev'));

// 🚀 API Routes
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

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('✅ API is working fine...');
});

// ❌ 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ❗ 500 Handler
app.use((err, req, res, next) => {
  console.error("💥 Error:", err.stack);
  res.status(500).json({ message: "Something went wrong on the server!" });
});

// 🌐 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

