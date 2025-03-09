# Restaurant Project �

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.0-green)](https://spring.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-24.0.0-blue)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A modernized restaurant management system with React frontend and microservices-based backend, replacing legacy JSP/Spring MVC code.

---

## 🔄 Legacy vs. Modern: Comparison


| **Aspect**         | **Legacy Project (2024)**                 | **Modern Project (2025)**                 |
|---------------------|-------------------------------------------|-------------------------------------------|
| **Frontend**        | JSP (JavaServer Pages)                    | React 18 + TypeScript                     |
| **Backend**         | Monolithic Spring MVC                     | Spring Boot 3.2 Microservices             |
| **Deployment**      | Manual WAR deployment                     | Docker + Kubernetes                       |
| **API Style**       | REST (limited documentation)              | REST + Swagger/OpenAPI                    |
| **State Management**| Server-side sessions                      | Redux Toolkit (client-side)               |
| **Scalability**     | Vertical scaling only                     | Horizontal scaling (microservices)        |

---

## 🆕 What’s New in This Version?

### **Major Improvements:**
1. **Frontend Revolution**  
   - Replaced JSP with **React 18** and **TypeScript** for dynamic UIs.  
   - Added responsive design using **Material-UI**.  

2. **Backend Modernization**  
   - Split monolith into **4 microservices**: Orders, Users, Inventory, Payments.  
   - Upgraded to **Spring Boot 3.2** with Spring Cloud integration.  

3. **DevOps Enhancements**  
   - Dockerized all services for consistent environments.  
   - Added CI/CD pipelines via **GitHub Actions**.  

4. **New Features**  
   - Real-time order tracking with **WebSocket**.  
   - JWT-based authentication.  

---

## 📦 Installation

```bash
# Clone the repository
git clone 'https://github.com/Jesus123J/proyect_web_restaurant_with_jsp_and_spring'

# Start services
docker-compose -f docker-compose.yml up --build

🛠️ Technologies
Category	Tools
Frontend	React 18, TypeScript, Redux Toolkit
Backend	Spring Boot 3.2, Spring Cloud, MySQL
DevOps	Docker, Kubernetes, GitHub Actions
Monitoring	Prometheus, Grafana

🔗 Related Projects
Legacy Version (2020):
Restaurant Project with JSP and Spring
Tech Stack: JSP, Spring MVC, MySQL, Tomcat.

Modern Version (2025):
Restaurant-Project-March-2025
Tech Stack: React, Spring Boot Microservices, Docker.
