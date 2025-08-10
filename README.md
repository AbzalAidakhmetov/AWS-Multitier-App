# AWS Multitier Todo Application

A scalable, cloud-native todo application built with a three-tier architecture on AWS, demonstrating modern cloud computing practices and DevOps principles.

## 🏗️ Architecture Overview

This project implements a **3-tier architecture** pattern:

- **Presentation Tier**: Responsive web frontend (HTML5, CSS3, JavaScript)
- **Application Tier**: Node.js REST API backend with Express.js
- **Data Tier**: AWS DynamoDB NoSQL database

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete todos
- **Real-time Updates**: Dynamic frontend updates without page refresh
- **Scalable Architecture**: Built for AWS cloud scalability
- **Containerized Deployment**: Docker support for consistent deployments
- **Load Testing Ready**: Includes Loader.io verification endpoint
- **Cross-Origin Support**: CORS enabled for flexible frontend deployment

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox layouts
- **Vanilla JavaScript** - ES6+ with async/await pattern
- **Responsive Design** - Mobile-friendly interface

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **AWS SDK v2** - AWS service integration
- **Body Parser** - JSON request parsing
- **CORS** - Cross-origin resource sharing

### Database
- **AWS DynamoDB** - NoSQL document database
- **AWS DocumentClient** - Simplified DynamoDB operations

### DevOps & Infrastructure
- **Docker** - Containerization platform
- **AWS EC2** - Elastic compute instances
- **AWS Application Load Balancer** - Traffic distribution
- **IAM Roles** - Secure AWS service access

## 📁 Project Structure

```
AWS-Multitier-App/
├── frontend/
│   ├── index.html          # Main application interface
│   ├── script.js           # Frontend JavaScript logic
│   └── style.css           # Application styling
├── backend/
│   ├── server.js           # Express.js API server
│   ├── package.json        # Node.js dependencies
│   ├── package-lock.json   # Dependency lock file
│   └── Dockerfile          # Container configuration
└── README.md              # Project documentation
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check endpoint |
| `GET` | `/todos` | Retrieve all todos |
| `POST` | `/todos` | Create a new todo |
| `PUT` | `/todos/:id` | Update existing todo |
| `DELETE` | `/todos/:id` | Delete a todo |
| `GET` | `/loaderio-*` | Load testing verification |

## 🏃‍♂️ Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AWS-Multitier-App
   ```

2. **Set up backend**
   ```bash
   cd backend
   npm install
   node server.js
   ```

3. **Configure AWS credentials**
   - Set up AWS CLI or EC2 IAM role
   - Ensure DynamoDB access permissions

4. **Launch frontend**
   - Open `frontend/index.html` in a web browser
   - Update API URL in `script.js` to point to your backend

### Docker Deployment

```bash
cd backend
docker build -t todo-backend .
docker run -p 3000:3000 todo-backend
```

## ☁️ AWS Deployment

### Prerequisites
- AWS Account with appropriate permissions
- DynamoDB table named `todos` with primary key `id` (String)
- EC2 instances with IAM roles for DynamoDB access
- Application Load Balancer configured

### Deployment Steps

1. **DynamoDB Setup**
   - Create table `todos` with partition key `id` (String)
   - Configure appropriate read/write capacity

2. **EC2 Configuration**
   - Launch EC2 instances in multiple AZs
   - Attach IAM role with DynamoDB permissions
   - Deploy backend using Docker or directly

3. **Load Balancer Setup**
   - Create Application Load Balancer
   - Configure target groups for EC2 instances
   - Update frontend API URL

## 🔒 Security Features

- **IAM Roles**: Secure AWS service access without hardcoded credentials
- **CORS Configuration**: Controlled cross-origin access
- **Input Validation**: Basic request validation and error handling
- **Environment Isolation**: Separate development/production configurations

## 📊 Performance & Scalability

- **Auto Scaling**: EC2 Auto Scaling Groups for dynamic scaling
- **Load Distribution**: Application Load Balancer for traffic management
- **Database Scaling**: DynamoDB on-demand scaling
- **Stateless Design**: Horizontally scalable architecture

## 🧪 Testing

- **Load Testing**: Loader.io integration for performance testing
- **Health Checks**: Built-in health monitoring endpoints
- **Error Handling**: Comprehensive error responses

## 📝 Learning Outcomes

This project demonstrates:

- **Cloud Architecture Design**: Multi-tier application patterns
- **AWS Services Integration**: DynamoDB, EC2, Load Balancers
- **Containerization**: Docker best practices
- **RESTful API Design**: Express.js backend development
- **Frontend Development**: Modern JavaScript and responsive design
- **DevOps Practices**: Deployment and scaling strategies

## 👨‍💻 Authors

**Abzal Aidakhmetov** - Student ID: 2115331
**Eldar Gabdulsattarov** - Student ID: 2113224
**Nadir Nuralin** - Student ID: 2113428
Academic Year: 2024/2025

---