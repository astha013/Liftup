# 🚀 Liftup Project (DevOps Enabled)

## 📌 Tech Stack
- **Frontend:** React + Vite + TailwindCSS + Redux
- **Smart Contracts:** Solidity + Hardhat
- **Blockchain:** Infura (Sepolia Testnet)
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes (Minikube)
- **Monitoring:** Prometheus + Grafana
- **CI/CD:** GitHub Actions


---

## 🐳 Docker Setup
```bash
# Build images
sudo docker compose up --build -d

# Start minikube
minikube start --driver=docker

# Deploy frontend + hardhat
kubectl apply -f k8s/frontend-deployment.yml
kubectl apply -f k8s/hardhat-deployment.yml

# Deploy monitoring
kubectl apply -f k8s/prometheus-deployment.yml
kubectl apply -f k8s/grafana-deployment.yml
