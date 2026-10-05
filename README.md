# Full Stack Developer Capstone

A full-stack dealership web application developed as the capstone project for the **IBM Full Stack Developer Professional Certificate**.

The project demonstrates the complete development lifecycle of a modern web application, including frontend development, backend APIs, database integration, authentication, containerization, deployment, and AI-powered sentiment analysis.

---

## 🚀 Project Overview

The **Full Stack Developer Capstone** is a dealership platform that allows users to browse dealerships, view vehicle information, read customer reviews, and interact with the application through a modern web interface.

The application combines multiple technologies and services into a single full-stack system.

The project demonstrates how a frontend application communicates with backend services and databases while integrating additional services such as authentication, review management, and sentiment analysis.

### Main objectives

* Build a responsive dealership web application
* Develop REST APIs for application data
* Implement user authentication
* Integrate frontend and backend services
* Store and retrieve dealership and review data
* Implement customer review functionality
* Analyze review sentiment using an AI service
* Containerize backend services with Docker
* Deploy application components to cloud infrastructure
* Apply software development, testing, and code-quality practices

---

## 🏗️ Application Architecture

The application consists of several interconnected components:

```text
                    ┌─────────────────────┐
                    │      Frontend       │
                    │      React.js       │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌─────────────────────┐
                    │      Django         │
                    │   Backend Service   │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
          ┌──────────┐   ┌───────────┐  ┌─────────────┐
          │ Database │   │ Node.js / │  │ Sentiment   │
          │          │   │ Express   │  │ Analyzer    │
          └──────────┘   └─────┬─────┘  └─────────────┘
                               │
                               ▼
                         ┌───────────┐
                         │ MongoDB   │
                         └───────────┘
```

---

## ✨ Features

### 🏢 Dealership Management

Users can access dealership information through the application.

The system provides dealership-related data through backend APIs and allows the frontend to consume and display that information.

### 🚗 Vehicle Information

The application provides vehicle information associated with dealerships.

Users can browse available vehicles and view relevant details through the web interface.

### ⭐ Customer Reviews

Users can interact with dealership reviews.

The review functionality allows users to:

* View existing reviews
* Submit reviews
* Associate reviews with dealerships
* Retrieve review information through backend APIs

### 🤖 AI-Powered Sentiment Analysis

The project integrates a sentiment analysis service to analyze customer reviews.

Reviews can be processed to determine whether the expressed sentiment is:

* Positive
* Negative
* Neutral

This demonstrates how AI services can be integrated into a traditional full-stack web application.

### 🔐 User Authentication

The application includes user authentication functionality.

Authenticated users can access functionality that is restricted to registered users.

The authentication system demonstrates:

* User registration
* Login
* Authentication state
* Protected functionality
* User-specific actions

### 🌐 REST APIs

The backend exposes APIs for communication between application components.

The APIs allow the frontend and other services to:

* Retrieve dealership information
* Retrieve vehicle information
* Retrieve reviews
* Create reviews
* Process application requests

### 🐳 Docker

Docker is used to containerize application services.

Containerization provides a consistent environment for running the application and simplifies deployment.

### ☁️ Cloud Deployment

The project demonstrates deploying application services to cloud infrastructure.

The deployment workflow includes building application components, configuring services, and making the application accessible through cloud-hosted endpoints.

---

# 🛠️ Technology Stack

## Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* Bootstrap / responsive UI components

## Backend

* Python
* Django
* Django REST Framework
* Node.js
* Express.js

## Databases

* SQLite / relational database for Django components
* MongoDB for dealership/review services

## AI / Machine Learning

* IBM Watson / IBM Cloud services
* Sentiment analysis

## Development & Deployment

* Docker
* Git
* GitHub
* IBM Cloud / IBM Skills Network environment
* REST APIs

---

# 📂 Project Structure

```text
fullstack_developer_capstone/
│
├── server/
│   │
│   ├── djangoapp/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── ...
│   │
│   ├── templates/
│   ├── static/
│   ├── manage.py
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Dockerfile
├── deployment.yaml
├── entrypoint.sh
├── README.md
└── ...
```

> The exact directory structure may vary depending on the deployment stage and project configuration.

---

# 🔌 API Architecture

The application uses RESTful APIs to allow different components to communicate.

Typical request flow:

```text
User
 │
 ▼
React Frontend
 │
 │ HTTP Request
 ▼
Django / Express API
 │
 ├── Database
 │
 ├── MongoDB
 │
 └── Sentiment Analysis Service
 │
 ▼
JSON Response
 │
 ▼
React Frontend
```

This separation allows the frontend and backend to evolve independently.

---

# 🧠 Sentiment Analysis

One of the key features of the project is the integration of sentiment analysis.

When a customer submits a review, the review text can be sent to the sentiment analysis service.

Example:

```text
Customer Review

"Great service and very helpful staff!"
```

The sentiment analyzer processes the text and returns sentiment information.

```text
Sentiment: Positive
```

This functionality demonstrates how AI-powered services can enhance a traditional business application.

---

# 🗄️ Database

The project uses multiple database technologies depending on the application component.

### Django Database

The Django application uses a relational database for structured application data.

Django migrations are used to manage database schema changes.

Example:

```bash
python manage.py makemigrations
python manage.py migrate
```

### MongoDB

MongoDB is used by the Node.js/Express service for dealership and review-related data.

MongoDB provides a flexible document-based data model suitable for storing dealership and customer review information.

---

# 🐳 Running with Docker

Build the Docker image:

```bash
docker build -t fullstack-developer-capstone .
```

Run the container:

```bash
docker run -p 8000:8000 fullstack-developer-capstone
```

The application can then be accessed through:

```text
http://localhost:8000
```

The exact command may vary depending on the configured Docker services.

---

# 💻 Local Development

## 1. Clone the repository

```bash
git clone https://github.com/Vachigubhu/fullstack_developer_capstone.git
```

Navigate into the project:

```bash
cd fullstack_developer_capstone
```

---

## 2. Create a Python virtual environment

```bash
python -m venv djangoenv
```

Activate it on Windows:

```powershell
.\djangoenv\Scripts\Activate.ps1
```

On Linux/macOS:

```bash
source djangoenv/bin/activate
```

---

## 3. Install Python dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Run Django migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 5. Start the Django development server

```bash
python manage.py runserver
```

The application should then be available at:

```text
http://127.0.0.1:8000/
```

---

# 🧪 Testing

Testing is an important part of the project development process.

Before committing changes, run the project's available tests.

For Django:

```bash
python manage.py test
```

Python syntax can also be checked with:

```bash
python -m compileall .
```

Linting can be performed using the project's configured linting tools.

The project follows Python code-quality standards including **PEP 8** where applicable.

---

# 🔍 Code Quality

The project uses automated linting and validation to identify issues before deployment.

Examples of checks include:

* Python PEP 8 compliance
* Line-length validation
* Syntax checking
* JavaScript linting
* Django validation
* Automated tests

Maintaining code quality helps ensure that the application remains maintainable and reliable as new functionality is added.

---

# 🔐 Security Considerations

Sensitive information should not be committed to the repository.

Environment variables should be used for values such as:

```text
Database credentials
API keys
Cloud service credentials
Secret keys
Authentication credentials
```

Example:

```env
SECRET_KEY=your-secret-key
DATABASE_URL=your-database-url
API_KEY=your-api-key
```

`.env` files containing secrets should be excluded using `.gitignore`.

---

# 🚀 Deployment

The project includes deployment configuration for running the application in a cloud environment.

The deployment process generally consists of:

```text
Source Code
     │
     ▼
GitHub Repository
     │
     ▼
Build Application
     │
     ▼
Build Docker Image
     │
     ▼
Deploy Container
     │
     ▼
Cloud Application
     │
     ▼
Public API / Web Application
```

The repository includes deployment configuration such as:

```text
Dockerfile
deployment.yaml
entrypoint.sh
```

---

# 📈 What I Learned

This project brought together concepts from the full-stack development workflow, including:

* Frontend application development
* Backend API development
* Django
* React
* Node.js and Express
* MongoDB
* REST API design
* User authentication
* Database integration
* Docker containerization
* Cloud deployment
* AI service integration
* Sentiment analysis
* Git and GitHub
* Automated testing
* Code linting and quality control

The project also provided experience working with multiple services that communicate through APIs rather than building the entire application as a single component.

---

# 🎯 Future Improvements

Potential improvements include:

* Improved responsive UI/UX
* Advanced dealership search
* Vehicle filtering and sorting
* Pagination
* User profile management
* Review ratings and moderation
* Improved sentiment visualization
* Admin dashboard
* More comprehensive automated tests
* CI/CD pipeline
* Improved API documentation
* Production-grade monitoring and logging

---

# 👨‍💻 Author

**Trinity Chigubhu**

Computer Science Engineering Student
Full-Stack Developer

### Skills Demonstrated

```text
Python        Django        React
JavaScript    Node.js       Express
MongoDB       REST APIs     Docker
Git           GitHub        Cloud
AI Integration
```

---

# 📜 License

This project was developed as part of the **IBM Full Stack Developer Professional Certificate Capstone Project**.

See the repository and associated course materials for applicable licensing and usage information.
