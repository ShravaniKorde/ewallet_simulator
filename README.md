# 💳 E-Wallet Simulator

A **Full-Stack E-Wallet application** implementing **secure digital wallet operations** with **ACID-compliant transactions**, **real-time balance updates**, **audit logging**, and a **modern responsive UI**.

---

## 📌 Features Overview

### 🔐 Authentication & Security

* User registration with **email & password validation**
* Secure login using **JWT authentication**
* Passwords encrypted using **BCrypt**
* Protected routes (frontend + backend)

---

### 💼 Wallet Management

* Automatic wallet creation on user registration
* Minimum initial balance enforcement
* Fetch wallet balance securely
* Persistent balance storage (MySQL)

---

### 💸 Money Transfer

* Transfer money between wallets
* Prevents:

  * Self-transfer
  * Negative transfers
  * Insufficient balance
* Fully **ACID-compliant** using Spring `@Transactional`

---

### ⚡ Real-Time Balance Updates

* **WebSocket integration**
* Sender and receiver balances update instantly without page refresh

---

### 📜 Transaction History

* Debit / Credit transactions clearly marked
* Color-coded UI (🔴 Debit | 🟢 Credit)
* “You” vs Counterparty wallet display
* Sorted by latest transaction

---

### 🧾 Audit Trail (Compliance-Ready)

* Logs critical user actions:

  * LOGIN (SUCCESS / FAILURE)
  * TRANSFER (SUCCESS / FAILURE)
  * RECEIVE
* Stores:

  * User ID
  * Old balance
  * New balance
  * Timestamp
* Audit logging runs in **independent transactions** (fail-safe)

---

### 🧪 Robust Testing & Quality Assurance
* **Unit Testing with Mockito**: Dependencies are mocked to test service logic in isolation, ensuring fast and reliable test execution.
* **Code Coverage with JaCoCo**: Integrated JaCoCo to track and maintain high testing standards.
* Comprehensive test cases for:
  * Context loading
  * Transaction safety & ACID properties
  * Validation & Exception handling

---

## 🧠 ACID Properties Demonstration

| Property        | How It Is Achieved                     |
| --------------- | -------------------------------------- |
| **Atomicity**   | Transfers rollback entirely on failure |
| **Consistency** | Balance invariants preserved           |
| **Isolation**   | Concurrent transfers don’t interfere   |
| **Durability**  | Data persists after server restart     |

---

## 🛠️ Tech Stack

### Backend

* Java 21
* Spring Boot
* Spring Security + JWT
* Spring Data JPA (Hibernate)
* MySQL (Dockerized)
* WebSockets
* Lombok
* JUnit 5 & Mockito (Testing & Mocking)
* JaCoCo (Code Coverage Tooling)

### Frontend

* React.js
* Axios
* React Router
* WebSockets
* CSS (Custom UI)

### DevOps / Tools

* Docker
* Kubernetes
* Gradle
* Swagger UI
* Git & GitHub

---

## ☸️ Kubernetes Deployment

The application is also containerized and deployed using **Kubernetes** with production-inspired architecture.

### Kubernetes Features Implemented

* **Deployments**
  * Backend, Frontend, and MySQL managed through Kubernetes Deployments
  * Automatic pod recreation on failure

* **Services**
  * Frontend exposed using **NodePort**
  * Backend exposed using **NodePort**
  * MySQL exposed internally using **ClusterIP**

* **ConfigMap**
  * Externalized backend configuration
  * Database connection URL managed separately from code

* **Secrets**
  * Sensitive database credentials managed using Kubernetes Secrets
  * Environment variable injection at runtime

* **PersistentVolumeClaim (PVC)**
  * Persistent MySQL storage
  * Data remains intact even after MySQL pod restart

* **Health Monitoring**
  * **Startup Probe** for safe Spring Boot startup
  * **Readiness Probe** to ensure backend receives traffic only after healthy initialization

* **Built-in Cluster Networking**
  * Backend communicates with MySQL internally using Kubernetes service discovery (`mysql:3306`)

---

### Kubernetes Architecture

```text
Frontend (NodePort : 30080)
        ↓
Backend (NodePort : 30081)
        ↓
Backend Pod
   ↓ ConfigMap
   ↓ Secret
        ↓
MySQL Service (ClusterIP)
        ↓
MySQL Pod
        ↓
PersistentVolumeClaim
```

## 📂 Project Structure

```text
ewallet_simulator/
├── backend/
│   ├── src/
│   │   ├── main/java/com/ewallet/wallet_service/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   │   └── impl/
│   │   │   ├── repository/
│   │   │   ├── entity/
│   │   │   ├── dto/
│   │   │   ├── websocket/
│   │   │   ├── security/
│   │   │   └── exception/
│   │   └── test/java/com/ewallet/wallet_service/
│   ├── Dockerfile
│   ├── build.gradle
│   └── application.properties
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── auth/
│   │   ├── websocket/
│   │   └── api/
│   ├── Dockerfile
│   └── package.json
│
├── k8s/
│   ├── namespace.yaml
│   ├── backend-configmap.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── mysql-deployment.yaml
│   ├── mysql-service.yaml
│   ├── mysql-secret.yaml
│   └── mysql-pvc.yaml
│
├── Screenshots/
├── docker-compose.yml
├── video_overview.mp4
└── README.md
```

---

## 🐳 Running the Application (Docker)

### ▶️ One-Command Startup : 

```bash
docker compose up -d
```

---

## 🚀 Running the Application

### 1️⃣ Backend

* API:
```text
[http://localhost:8080]
```

* Swagger UI:
```text
[http://localhost:8080/swagger-ui.html]
```

---

### 2️⃣ Frontend

```text
[http://localhost:5173]
```

---

## ☸️ Running the Application (Kubernetes)

### 1️⃣ Enable Kubernetes

Ensure Kubernetes cluster is running and `kubectl` is configured.

---

### 2️⃣ Build Docker Images

```bash
docker compose build
```

---

### 3️⃣ Apply Kubernetes Resources

```bash
kubectl apply -f k8s/
```

---

### 4️⃣ Verify Pods

```bash
kubectl get pods -n ewallet
```

Expected:

```text
backend-xxxxx    1/1 Running
frontend-xxxxx   1/1 Running
mysql-xxxxx      1/1 Running
```

---

### 5️⃣ Access Application

#### Frontend

```text
http://localhost:30080
```

#### Backend Swagger UI

```text
http://localhost:30081/swagger-ui.html
```

---


## 🧪 Testing & Quality Reports

* Run Unit Tests:

```bash
  cd backend
  ./gradlew clean test
```

* Generate JaCoCo Coverage Report:

```bash
  ./gradlew jacocoTestReport
```

### 📊 Test Report

- View Reports in Browser:

  - Test Summary:

    ```text
    backend/build/reports/tests/test/index.html
    ```

  - Coverage Details:

    ```text
    backend/build/reports/jacoco/test/html/index.html
    ```

---

## 🧪 ACID Test Cases Summary

### Atomicity

* Transfer fails → balances unchanged

### Consistency

* Total wallet balance conserved

### Isolation

* Concurrent transfers safe

### Durability

* Restart server → data intact

---

## 📸 Screenshots Included

* Real-time balance updates
* Debit/Credit transactions
* Audit logs
* Validation errors
* JUnit test reports

---

## 👥 Contributors

* **Shravani Korde**
* **Gautam Jha**


---

## ✅ Conclusion

This project demonstrates **enterprise-grade transactional integrity**, **real-time systems**, **secure financial application design**,  **containerization with Docker**, and **orchestration using Kubernetes**, making it suitable for **academic evaluation, internships, and interviews**.

---

