import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());

// Write API - Create a new item
app.post('/api/items', async (req, res) => {
  try {
    const { title, description } = req.body;
    const item = await prisma.item.create({
      data: {
        title,
        description,
      },
    });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Read API - Get all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await prisma.item.findMany();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 