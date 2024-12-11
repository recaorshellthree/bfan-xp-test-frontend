# Bfan XP Task Management Application

This project is a simple task management system with a backend built using Laravel and SQLite, and a frontend built using React and TailwindCSS. It allows users to:

- List tasks
- Create tasks (with a title, description, and a done flag)
- Delete tasks

The backend provides a REST API for managing tasks, with Swagger OpenAPI documentation included. The frontend consumes these APIs to provide an interactive user interface.

## Backend Repository

The backend repository can be found at: https://github.com/recaorshellthree/bfan-xp-test-backend?tab=readme-ov-file#bfan-xp-task-management-application-backend-repository

## Frontend Repository

### Prerequisites

- Node.js (>= 20.9.0)
- yarn

### Installation and Setup

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/recaorshellthree/bfan-xp-test-frontend.git
   cd bfan-xp-test-frontend
   ```

2. Install JavaScript dependencies:

   ```bash
   yarn
   ```

3. Configure the API base URL:

   - Copy the `.env.example` file to `.env`:
   - Add the following variable to the `.env` file:
     ```env
     REACT_APP_API_URL=http://localhost:8000/api/
     ```

4. Start the development server:

   ```bash
   yarn start
   ```

   The frontend will be available at `http://localhost:3000`.

## Project Description

This project implements a simple task management system:

- **Frontend**:

  - Built using React and styled with TailwindCSS.
  - Provides an intuitive interface to interact with the tasks backend.
  - Fetches tasks from the backend, displays them in a list, and provides options to create and delete tasks.

- **Backend**:
  - Developed in Laravel and uses SQLite for storage.
  - Implements a REST API to manage tasks.
  - Includes Swagger OpenAPI documentation for ease of API consumption.

## Key Features

- **Frontend**:
  - User-friendly UI with responsive design.
  - Dynamic task management.
- **Backend**:
  - Lightweight and easy to set up with SQLite.
  - RESTful API with clear documentation.

### Usage

- Use the frontend interface to manage tasks seamlessly.
- Test the backend API endpoints using Swagger or any API testing tool (like Postman).

---

Feel free to reach out for additional support or customizations.
