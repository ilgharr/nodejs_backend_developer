# Node.js Backend with Express, TypeScript, and Prisma

This is a simple Node.js backend application built with Express.js, TypeScript, and Prisma ORM. It includes basic CRUD operations for items.

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- npm or yarn

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start PostgreSQL using Docker Compose:
```bash
docker-compose up -d
```

4. Run Prisma migrations:
```bash
npm run prisma:migrate
```

5. Generate Prisma Client:
```bash
npm run prisma:generate
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm run build
npm start
```

## API Endpoints

### Create Item
- **POST** `/api/items`
- Request body:
```json
{
  "title": "Example Title",
  "description": "Example Description"
}
```

### Get All Items
- **GET** `/api/items`

## Environment Variables

Create a `.env` file in the root directory with the following content:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb?schema=public"
```

## License

ISC 