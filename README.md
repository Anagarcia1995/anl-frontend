# ART NO LOGIA

Modern full-stack web application developed for the electronic music duo **ART NO LOGIA**.

Discover music releases, upcoming events and DJ sets through a modern and responsive platform, while providing a secure administration panel for content management.

---

## Live Demo

🌐 https://anl-frontend.vercel.app/

---

## Backend Repository

https://github.com/Anagarcia1995/anl-backend

---

# About The Project

ART NO LOGIA is a real-world full-stack application developed for the electronic music duo ART NO LOGIA.

The platform allows visitors to explore the artists' latest music releases, discover upcoming performances, watch DJ sets and access streaming platforms through a clean and responsive interface.

A complete administration area allows authenticated users to manage all website content without interacting directly with the database.

Unlike a static portfolio website, this project was designed as a scalable content management solution.

---

# Main Features

## Public Website

- Home page
- Featured release
- Music catalogue
- Individual release pages
- Embedded DJ sets
- Upcoming events
- Past events
- External streaming platform links
- Ticket purchase links
- Responsive navigation

---

## Administration Panel

- JWT authentication
- Protected routes
- Create releases
- Edit releases
- Delete releases
- Create events
- Edit events
- Delete events
- Cloudinary image uploads
- Unsaved changes protection

---

## User Experience

- Fully responsive
- Mobile-first design
- Modern interface
- Loading states
- Toast notifications
- Image previews
- Form validation
- Dynamic content rendering

---

# Tech Stack

## Frontend

- React 19
- Vite
- Chakra UI 3
- React Router
- Context API
- Axios
- React Icons
- Embla Carousel
- React Country Flag

---

## Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Cloudinary

---

# Main Dependencies

| Library | Purpose |
|----------|---------|
| React | Component-based UI |
| Chakra UI | Responsive component library |
| React Router | Client-side routing |
| Axios | HTTP requests |
| React Icons | Icons |
| Embla Carousel | Releases carousel |
| React Country Flag | Country flags |

---

# Project Structure

```text
src
│
├── assets
├── components
├── context
├── hooks
├── layouts
├── pages
├── services
├── utils
└── routes
```

### assets

Static assets such as images and icons.

### components

Reusable UI components.

### context

Global authentication state management.

### hooks

Reusable custom hooks.

### layouts

Shared application layouts.

### pages

Application pages.

### services

Communication with the backend API.

### utils

Utility and helper functions.

### routes

Application routing.

---

# Authentication

The administration panel is protected using JWT authentication.

Authenticated users can:

- Create releases
- Edit releases
- Delete releases
- Create events
- Edit events
- Delete events

Public visitors can browse all public content without authentication.

---

# Responsive Design

The interface has been designed following a mobile-first approach.

Optimized for:

- Mobile
- Tablet
- Desktop

---

# Screenshots

*(Add screenshot)*

---

# Installation

Clone the repository

```bash
git clone https://github.com/Anagarcia1995/anl-frontend.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:3000
```

Run the development server

```bash
npm run dev
```

---

# Available Scripts

```bash
npm run dev
```

Starts the development server.

---

```bash
npm run build
```

Builds the application for production.

---

```bash
npm run preview
```

Runs the production build locally.

---

# Future Improvements

- Custom domain
- SEO optimization
- Merch section
- Contact section
- Internationalization
- Accessibility improvements

---

# Author

Ana García

GitHub

https://github.com/Anagarcia1995

---

# Acknowledgements

This project was developed as a real-world full-stack application for the electronic music duo ART NO LOGIA, applying modern frontend practices together with a custom backend API for authentication and content management.