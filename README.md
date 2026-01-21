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

## Integration Testing

The project uses **Postman** for integration testing. The collection and environment files are located in the backend repository.

> **!IMPORTANT!**
> Please ensure the **backend is (re)started** before executing the tests to ensure a clean state.

### Postman Setup Guide

---

#### 1. Import Collection
![postman.png](frontend_react/public/postman.png)

Open Postman, click **Import**, and select the entire `postman` directory from the backend repository.

---

#### 2. Select Environment
Select the imported environment in the **top right corner**. 

> **!CAUTION!**
> The tests will fail if no environment is active.

---

#### 3. Run Collection
![postman2.png](frontend_react/public/postman2.png)

Click the **three dots** next to the collection, choose **Run**, and click **Run UEK-223-Group_6**.

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
