# 🧑‍💼 Employee Management System (EMS)

Live Site 🌐: [emsabhay.vercel.app](https://emsabhay.vercel.app/)
GitHub Repo 📁: [github.com/git8abhay/employee-management-system](https://github.com/git8abhay/employee-management-system)

---

## 📌 Overview

This is a **fully responsive Employee Management System** (EMS) built using **React** and **Tailwind CSS**, with modern UI elements like **glassmorphism**, interactive dashboards, and dynamic task handling. The EMS manages **employee credentials, dashboards, and task lifecycle** — from assignment to completion/failure.

## 🚀 Features

### 🧾 Login System

* Simple login system using hardcoded credentials (admin & employee).
* Credentials info accessible via "click here" link.
* Login types: `admin` and `employee`, each with a different dashboard.

### 🧑‍💼 Admin Dashboard

* Displays employee cards.
* Shows each employee's task count summary (New, Active, Completed, Failed).
* Beautiful UI using Tailwind’s modern glassmorphism + Lucide icons.

### 👨‍🔧 Employee Dashboard

* Lists all assigned tasks in card layout.
* Task lifecycle:

  * 🆕 **New Task** → 🎯 **Accept** → ✅ **Complete** / ❌ **Fail**.
* Real-time updates for task state & counts.
* Interactive UI with buttons shown based on current task status.

### 🧠 React Context (AuthProvider)

* Manages user data (employees, tasks) globally.
* Keeps localStorage and state always in sync.
* Functions:

  * `acceptTask(empId, taskIndex)`
  * `completeTask(empId, taskIndex)`
  * `failTask(empId, taskIndex)`

### 🧊 Glassmorphism UI

* Stylish UI across all pages.
* TailwindCSS used for responsiveness.
* Animated buttons, hover glow, custom icons.

### 📦 LocalStorage-Based Backend

* Uses localStorage to simulate backend behavior.
* Dummy data initialized using `setLocalStorage()`.
* All task updates are persistent across reloads.

---

## 🏗️ Folder Structure

```bash
├── public/
├── src/
│   ├── components/       # TaskCards like NewTask, AcceptTask etc
│   ├── pages/            # Login.jsx, AdminDashboard.jsx, EmployeeDashboard.jsx
│   ├── context/          # AuthProvider.jsx (Context API)
│   ├── utils/            # localStorage.js (dummy DB logic)
│   └── App.jsx           # Routing and main logic
```

---

## 🔁 Task State Logic

1. **New Task**:

   * Has `newTask: true`
   * Shows "Accept Task" button.

2. **Accepted Task**:

   * Sets `active: true`, hides accept button.
   * Shows "Complete" and "Fail" buttons.

3. **Completed/Failed Task**:

   * Based on action, sets `completed: true` or `failed: true`
   * Hides all buttons.

> State always updated in both Context API and localStorage.

---

## 🔑 Dummy Credentials

### 👨‍💼 Admin

* **Email**: `a@a.com`
* **Password**: `123`

### 👨‍🔧 Employee(s)

* **Email**: `e@e.com`
* **Password**: `123`

> You can view credentials anytime from the login screen.

---

## 🛠️ Tech Stack

* **React.js**
* **Tailwind CSS**
* **Lucide-react** (for icons)
* **Context API** (AuthProvider)
* **LocalStorage** (Data persistence)

---

## 📸 Screenshots

Images showcasing UI have been included in the repo and uploads (Admin and Employee Dashboards).

---

## 📚 What I Learned

* Creating responsive UI with Tailwind & glassmorphism.
* Managing global state with Context API.
* Task-based logic with dynamic component rendering.
* Simulating real-world backend behavior using localStorage.
* Clean UI/UX design for better user flow.

---

## 🧠 Ideal For

* Students learning **React + Tailwind** basics.
* Developers preparing for **interviews** (task state logic is explainable).
* Beginners looking for a **frontend-only EMS simulation**.

---

## 🤝 Contribute / Fork

Feel free to fork the project or contribute.
If you liked it, don't forget to ⭐ the repo!

---

**Made with ❤️ by Abhay Chauhan**
