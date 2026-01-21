# Frontend Assignment Project üK 223

This is the frontend component for the üK 223 assignment, built with **React** and **Vite**.

## Getting Started

The project is located in the `frontend_react` directory.

### Prerequisites
- Node.js (Latest LTS recommended)
- Yarn package manager

### Installation and Run
```bash
cd ./frontend_react
yarn install
yarn dev
```

---

## E2E Testing

We use **Cypress** for end-to-end testing.

```bash
cd ./frontend_react
yarn install
yarn cypress open
```

---

## Login Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **ADMIN** | `admin@example.com` | `1234` |
| **USER** | `user@example.com` | `1234` |
| **DEFAULT** | `default@example.com` | `1234` |

---

## Available Routes

| Path | Description |
| :--- | :--- |
| `localhost:3000` | **Homepage** |
| `/login` | Login page |
| `/user` | User dashboard/profile page |
| `/list` | Entries list overview |
| `/user/edit/user` | Edit personal profile |
| `/list/edit/list` | Edit personal lists |
| `/admin` | Admin dashboard |
| `/user/edit/admin` | User management (Admin only) |
| `/list/edit/admin` | List management (Admin only) |
