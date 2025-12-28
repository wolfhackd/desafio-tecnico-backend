import 'dotenv/config';
import express from 'express';
import { connectDB } from './db/mongoose.js';
import userRoutes from './modules/user/user.routes.js';

const app = express();
//Config express
const PORT = process.env.PORT || 3000;
app.use(express.json());

await connectDB();

//Routes
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
