# Next-Gen Learning Dashboard

## Overview

A futuristic student learning dashboard built as part of a Frontend Intern Challenge.

The dashboard fetches course data from Supabase and displays it using a responsive Bento Grid layout with Framer Motion animations.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

## Features

- Server Component data fetching
- Supabase PostgreSQL integration
- Dynamic course cards
- Dynamic Lucide icons
- Animated progress bars
- Staggered page animations
- Responsive Bento Grid layout
- Sidebar navigation
- Loading skeletons
- Dark mode UI

## Supabase Database Schema

The application uses a Supabase `courses` table:

| Column | Type |
|---|---|
| id | uuid |
| title | text |
| progress | integer |
| icon_name | text |
| created_at | timestamp |

Course cards are generated dynamically from this database data.
## Architecture

### Server Components

Course data is fetched securely from Supabase using Next.js Server Components.

### Client Components

Client components are used for:

- Framer Motion animations
- Interactive sidebar
- Hover effects
- Animated progress indicators

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

## Run Locally

```bash
npm install
npm run dev
```

## Deployment

The application is deployed using Vercel.
## Challenges Faced

- Implementing secure Supabase fetching with Next.js Server Components
- Managing Server and Client Component separation
- Creating reusable animated UI components
- Dynamically rendering Lucide icons from database values
- Building a responsive Bento Grid layout
## Author

Asish