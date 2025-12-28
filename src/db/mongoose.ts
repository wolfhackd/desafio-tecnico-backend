import mongoose from 'mongoose';

export async function connectDB() {
  try {
    const url = process.env.MONGO_URL as string;
    if (!url) {
      throw new Error('MONGO_URL is not defined');
    }
    await mongoose.connect(url);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}
