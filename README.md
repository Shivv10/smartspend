# 📊 SmartSpend – Personal Finance Manager

SmartSpend is a modern web application that helps users manage their expenses, track spending habits, scan receipts using AI, and get financial insights — all in one place.

---

## 🚀 Features

- ✅ **Expense Tracking** – Add, edit, and organize expenses by category  
- 🤖 **AI Receipt Scanner** – Uses Google Gemini AI to read and extract data from receipts  
- 📈 **Insights & Analytics** – Powered by Inngest workflows for automated financial insights  
- 🔐 **Authentication** – Secure login and account setup  
- 🎯 **Budget Planning** – Set spending limits per category  
- 📊 **Charts & Visuals** – Insights with dynamic charts  
- 🌙 **Modern Design** – Built with Next.js + Tailwind + shadcn/ui  

---

## 🛠️ Tech Stack

| Category       | Technologies Used |
|----------------|-------------------|
| **Frontend**   | Next.js 13+, React, Tailwind CSS, shadcn/ui |
| **Backend**    | Next.js API Routes, Inngest |
| **Database**   | PostgreSQL + Prisma ORM |
| **AI Service** | Google Gemini AI (for receipt scanning) |
| **State/Utils**| Custom `useFetch`, Sonner (toast notifications) |
| **Charts**     | Chart.js / React-Chartjs-2 |

---

## 📂 Project Structure

```
smartspend/
├── app/              # Next.js App Router
├── components/       # UI Components
├── lib/
│   ├── inngest/      # Inngest workflows and events
│   ├── prisma/       # Prisma Client setup
│   └── ai/           # Google Gemini Receipt Parser
├── prisma/           # Prisma schema
├── public/
│   └── images/ 
├── .env
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```
git clone https://github.com/shivv/smartspend.git
cd smartspend
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Create `.env` file
Create a `.env` file in the root and add:

```
DATABASE_URL="postgresql://user:password@localhost:5432/smartspend"
GOOGLE_GEMINI_API_KEY="your_gemini_api_key"
INNGEST_EVENT_KEY="your_inngest_key"
NEXT_PUBLIC_ENV="development"
ARCJET_KEY=""
```

### 4️⃣ Setup database using Prisma
```
npx prisma migrate dev --name init
npx prisma generate
```

### 5️⃣ Run the development server
```
npm run dev
```

---

## 🤖 Google Gemini Receipt Scanning

The app allows you to upload receipt images → Gemini AI extracts:

- Store name  
- Date  
- Items & prices  
- Total amount  

Implementation:  
`/lib/ai/receiptParser.ts`

---

## 📬 Inngest – Expense Insights

Inngest is used for:

- Sending automated finance reports  
- Detecting overspending in categories  
- Background processing of analytics  

Workflows located at:  
`/lib/inngest/`

---

## 📸 UI

Add your screenshots to `public/images/` and reference them here:

| Screen              | Preview |
|---------------------|---------|
| **Dashboard**       | ![Dashboard](public/images/img1.png) |
| **Transaction Overview**     | ![Transactions](public/images/img2.png) |
| **History**       | ![Analytics](public/images/img3.png) |
| **Receipt Scanner** | ![Receipt Scan](public/images/img4.png) |

---


## 📄 License

This project is licensed under the **MIT License**.

---

## 🧑‍💻 Author

**Shiv Gandhi**
