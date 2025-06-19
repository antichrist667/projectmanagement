<p align="center">
  <a href="" rel="noopener">
    <img width=200px height=200px src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Escudo_de_la_Universidad_Central_del_Ecuador_-_Andr%C3%A9s_Agual.png/300px-Escudo_de_la_Universidad_Central_del_Ecuador_-_Andr%C3%A9s_Agual.png" alt="Project logo">
  </a>
</p>

<h3 align="center">Project Managed</h3>

<div align="center">

[![Node.js][Node.js]][Node.js-url]
[![Python][Python]][Python-url]
[![Go][Go]][Go-url]
[![ASP.NET Core][ASP.NET]][ASP.NET-url]
[![GraphQL][GraphQL]][GraphQL-url]
[![MongoDB][MongoDB]][MongoDB-url]
[![MySQL][MySQL]][MySQL-url]
[![Google Cloud Pub/Sub][GoogleCloudPubSub]][GoogleCloudPubSub-url]
[![JWT][JWT]][JWT-url]

</div>

---

## 📝 Table of Contents

- [Microservices Overview](#microservices-overview)
  - [User Login](#user-login)
  - [Projects Microservice](#projects-microservice)
  - [User Microservice](#user-microservice)
  - [Comments Microservice](#comments-microservice)
  - [Suggestions Microservice](#suggestions-microservice)
  - [Audit Microservice](#audit-microservice)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


## Introduction

**Project Managed** is a microservices-based application designed to efficiently handle project management, user management, comments, suggestions, and audit logging. Each microservice is implemented independently, allowing for scalability, maintainability, and ease of deployment. This modular architecture ensures that each component can be developed, deployed, and scaled independently, optimizing resource utilization and system performance.

## 🏁 Getting Started <a name = "getting_started"></a>


### Prerequisites

You must have the Docker desktop downloaded on the computer, due to the docker-compose in addition to having Postman installed, y la version de npm instalada
* npm
  ```sh
  npm install npm@latest -g
  ```
* Windows Version Docker Desktop
[Docker](https://docs.docker.com/desktop/install/windows-install/)


### Installing


Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/antichrist667/sales.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3.Install dependencies If you use pip and have a requirements.txt file:
    ```sh
   pip install -r requirements.txt
   ```
4. Install dependencies If you use modules (go.mod):
   ```sh
   go mod tidy
   ```
5. Install Restore dependencies c#:
   ```sh
   dotnet restore
   ```
## 🧐 Microservices Overview <a name = "microservices-overview"></a>

### User Login <a name = "user-login"></a>
- **Actor:** User
- **Preconditions:** The user must be registered in the system.
- **Main Flow:**
  1. The user enters their email and password in the login interface.
  2. The system verifies that the email is registered.
  3. The system validates the password.
  4. If credentials are correct, a JWT token is generated.
  5. The login attempt is logged in the Audit Microservice.
  6. The user receives the JWT token.
- **Alternative Flow:**
  - If the email is not registered, the system returns an error.
  - If the password is incorrect, the system returns an error.
- **Postconditions:** The user has successfully logged in and has a valid JWT token.

### Projects Microservice <a name = "projects-microservice"></a>
- **Actor:** User
- **Preconditions:** The user must be authenticated.
- **Main Flow:**
  1. The user creates a new project by entering the necessary data.
  2. The system saves the project in the database.
  3. The user can view the list of all projects.
  4. The user selects a project to view in detail.
  5. The user updates the project information.
  6. The user deletes a project.
- **Alternative Flow:**
  - If the project does not exist when trying to view or update it, the system returns an error.
- **Postconditions:** The project is created, updated, viewed, or deleted as applicable.

### User Microservice <a name = "user-microservice"></a>
- **Actor:** Administrator
- **Preconditions:** The administrator must be authenticated.
- **Main Flow:**
  1. The administrator creates a new user.
  2. The system saves the user in the database.
  3. The administrator views the list of all users.
  4. The administrator selects a user to view details.
  5. The administrator updates the user information.
  6. The administrator deletes a user.
- **Alternative Flow:**
  - If the user does not exist when trying to view or update it, the system returns an error.
- **Postconditions:** The user is created, updated, viewed, or deleted as applicable.

### Comments Microservice <a name = "comments-microservice"></a>
- **Actor:** User
- **Preconditions:** The user must be authenticated.
- **Main Flow:**
  1. The user creates a new comment on a project.
  2. The system saves the comment in the database.
  3. The user views the list of all comments on a project.
  4. The user updates a comment.
  5. The user deletes a comment.
- **Alternative Flow:**
  - If the comment does not exist when trying to view or update it, the system returns an error.
- **Postconditions:** The comment is created, updated, viewed, or deleted as applicable.

### Suggestions Microservice <a name = "suggestions-microservice"></a>
- **Actor:** User
- **Preconditions:** The user must be authenticated.
- **Main Flow:**
  1. The user creates a new suggestion.
  2. The system saves the suggestion in the database.
  3. The user views the list of all suggestions.
  4. The user updates a suggestion.
  5. The user deletes a suggestion.
- **Alternative Flow:**
  - If the suggestion does not exist when trying to view or update it, the system returns an error.
- **Postconditions:** The suggestion is created, updated, viewed, or deleted as applicable.

### Audit Microservice <a name = "audit-microservice"></a>
- **Actor:** System (Automatic)
- **Preconditions:** A login attempt event must be received by the system.
- **Main Flow:**
  1. The system receives a message with login attempt data.
  2. The data is stored in the audit database.
- **Alternative Flow:**
  - If there is an error processing the message, an error notification is generated.
- **Postconditions:** The login attempt is recorded in the audit database.

## 🛠 Technologies Used <a name = "technologies-used"></a>
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Python:** A high-level programming language used for backend services.
- **Go:** A statically typed, compiled programming language designed for simplicity and efficiency.
- **ASP.NET Core:** A cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications.
- **GraphQL:** A data query language and runtime for executing queries by using a type system you define for your data.
- **MongoDB:** A NoSQL database used for storing JSON-like documents with optional schemas.
- **MySQL:** A relational database management system based on SQL – Structured Query Language.
- **Google Cloud Pub/Sub:** A messaging service for event-driven systems and analytics.


## 🏁 Setup Instructions <a name = "setup-instructions"></a>
1. Clone the repository:
   ```bash
   git clone https://github.com/antichrist667/projectmanagement.git
   ```

## 🎈 Usage <a name = "usage"></a>
Instructions on how to use the microservices will be added here.

## 🤝 Contributing <a name = "contributing"></a>
Contributions, issues, and feature requests are welcome!

## 📜 License <a name = "license"></a>
This project is licensed under the MIT License.

<!-- MARKDOWN LINKS & IMAGES -->
[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.js-url]: https://nodejs.org/
[Python]: https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[Go]: https://img.shields.io/badge/go-00ADD8?style=for-the-badge&logo=go&logoColor=white
[Go-url]: https://golang.org/
[ASP.NET]: https://img.shields.io/badge/ASP.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white
[ASP.NET-url]: https://dotnet.microsoft.com/apps/aspnet
[GraphQL]: https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white
[GraphQL-url]: https://graphql.org/
[MongoDB]: https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[MySQL]: https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
[GoogleCloudPubSub]: https://img.shields.io/badge/Google_Cloud_Pub/Sub-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[GoogleCloudPubSub-url]: https://cloud.google.com/pubsub
[JWT]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white
[JWT-url]: https://jwt.io/
