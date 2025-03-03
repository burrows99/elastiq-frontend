# Elastiq Frontend

This is the frontend of the **Elastiq** application built with **React**. It allows users to input movie reviews and classify their sentiment (positive or negative) using the Elastiq backend service.

## Requirements

- Docker
- React (for building the frontend)

## Getting Started

Follow the steps below to build and run the Elastiq frontend using Docker.

### 1. Clone the Repository

```bash
git clone https://github.com/burrows99/elastiq-frontend.git
cd elastiq-frontend
```

### 2. Build the docker image
Make sure you are in the root directory of the project.

```bash
docker build -t elastiq-frontend-docker .
```

### 3. Run the Docker Container
To start the container and run the server on port 8000, use the following command:

```bash
docker run -d -p 80:80 elastiq-frontend-docker
```

### 4. Access the frontend
Once the local frontend is running, you can access it at:

```bash
http://localhost:80
```
Deployed server can be accessed it at:

```bash
http://34.123.138.124:80
```

### 5. Deployment on GCP Compute Engine
The Elastiq frontend is deployed on GCP Compute Engine.
```

