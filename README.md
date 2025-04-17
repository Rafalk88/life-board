# 💼 LifeBoard — Application for Goal, Job, and Finance Management

**LifeBoard** is a modern web application that helps users manage personal and professional goals, finances, savings, and the job application process. It uses a modern tech stack (Next.js, PostgreSQL, Prisma, Kshadcn, Chart.js) and features an intuitive tab-based interface.

---

## 🚀 Features

### 📌 Tabbed Interface Sections:

- **Goals & Progress** – Create and track your goals, assign priorities and deadlines, and monitor completion progress.
- **Job Offers** – Manage job applications, update statuses (e.g. “Pending,” “In Progress,” “Replied”).
- **Budget & Finances** – Track monthly income, expenses, and savings. Create budgets and analyze spending.
- **Emergency Fund** – Keep an overview of your financial safety net for emergencies.
- **Notes & Reflections** – Save personal thoughts, development insights, or reflections.

---

## 🛠️ Tech Stack

| Layer          | Technology                          |
| -------------- | ----------------------------------- |
| **Frontend**   | Next.js, React, shadcn UI, Recharts |
| **Backend**    | Node.js, Prisma ORM, PostgreSQL     |
| **State Mgmt** | Redux                               |

---

## 🗂️ Application Structure

/components ├── NavigationBar.js ├── GoalList.js ├── JobOfferList.js ├── FinanceOverview.js ├── EmergencyFundStatus.js └── NoteList.js /pages └── index.tsx (Dashboard with tab view) /prisma └── schema.prisma

---

## 🧱 Database Schema (Prisma)

```prisma
model Goal {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  progress    Float
  dueDate     DateTime
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model JobOffer {
  id              Int      @id @default(autoincrement())
  title           String
  company         String
  status          String
  applicationDate DateTime
  responseDate    DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model Finance {
  id        Int      @id @default(autoincrement())
  month     String
  income    Float
  expenses  Float
  savings   Float
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model EmergencyFund {
  id        Int      @id @default(autoincrement())
  amount    Float
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Note {
  id        Int      @id @default(autoincrement())
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🧪 Run the Project Locally

**Clone the repository:**

```bash
git clone https://github.com/your-username/life-board.git
```

**Install dependencies:**

```bash
npm install
```

**Configure the database (PostgreSQL):**  
Create a `.env` file and add:

```
DATABASE_URL="postgresql://user:password@localhost:5432/database-name"
```

**Run database migrations:**

```bash
npx prisma migrate dev --name init
```

**Start the development server:**

```bash
npm run dev
```

---

## 👀 Visual Preview

After running the project locally, you will see a dashboard with tabs at the top. Each tab represents a section of the app.

```
+-------------------------------------------------------+
| Goals & Progress | Job Offers | Budget | Emergency | Notes |
+-------------------------------------------------------+

[ Goals & Progress Tab ]
- Learn TypeScript ✔️ 70%
- Apply to 5 Companies ✔️ 100%
- Save $500 this month ❌ 30%

[ Job Offers Tab ]
- Frontend Developer @ TechCorp — Status: In Progress
- UI/UX Designer @ Creatives Inc — Status: Pending

[ Budget Tab ]
- April 2025
  Income: $3000
  Expenses: $1900
  Savings: $1100

[ Emergency Fund Tab ]
- Emergency Fund Balance: $2500

[ Notes Tab ]
- "Remember to follow up on interviews..."
- "Consider improving portfolio design"
```

---

## 🧠 Author

Created with passion by **Rafał Kochanecki**
