# Dentist Appointment System

### Requirements
- install postgreDB
- modify connection string `DATABASE_URL="postgresql://youruser:randompassword@localhost:5432/your_db_name?schema=public"` in `.env`

### Installation
1. `npm install` in `/client` and `/server` directory
2. `npx prisma migrate dev` to migrate
3. you should see `Test Data 1` in `http://localhost:5173/` if correctly set up