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
Deployment on GCP Compute Engine
Steps:
* Set the project ID
```bash
gcloud config set project natural-oxygen-452115-h7
```
* Enable APIs, if not done already.
```bash
gcloud services enable compute.googleapis.com
```
* Add firewall for access to port 80, if not done already:
```bash
gcloud compute firewall-rules create allow-tcp-80 \
  --allow tcp:80 \
  --network default \
  --direction INGRESS \
  --priority 1000 \
  --source-ranges 0.0.0.0/0 \
  --target-tags http-server
```
* Create bare metal vm instance:
```bash
gcloud compute instances create elastiq-frontend-instance \
  --zone=us-central1-a \
  --machine-type=n1-standard-1 \
  --image-family=debian-11 \
  --image-project=debian-cloud
```
* Connect to the VM through SSH
```bash
gcloud compute ssh elastiq-frontend-instance --zone=us-central1-a
```
* Execute the following commands:
```bash
sudo apt-get update
sudo apt install git -y
sudo apt-get install -y docker.io
```
* Setup repo
```bash
git clone https://github.com/burrows99/elastiq-frontend.git
cd elastiq-frontend
```
* Build Image
```bash
docker build -f Dockerfile -t elastiq-frontend-docker .
```
* Run container
```bash
docker run -d -p 8000:8000 elastiq-frontend-docker
```
* See the external IP from the UI and use http://<EXTERNAL_IP>:80 to access frontend.


