# Dockerized Express + MongoDB App

A starter template for building Express.js apps with MongoDB, Docker, and hot-reloading for development.

## Prerequisites

- Docker ([Install](https://docs.docker.com/get-docker/))
- Docker Compose ([Install](https://docs.docker.com/compose/install/))
- Node.js (optional, for local testing)
- Git

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Copy environment variables (if needed)**:

   ```bash
   cp .env.example .env  # Update values as needed
   ```

3. **Build and start the services**:
   ```bash
   docker-compose up --build
   ```
   - This starts:
     - Express app on `http://localhost:3000`
     - MongoDB on `mongodb://localhost:27017`

---

## Development Workflow

### Start the app

```bash
docker-compose up  # Use `-d` to run in background
```

### Stop the app

```bash
docker-compose down
```

### Hot-reloading

- Edit files locally → changes auto-refresh in the container.

### Add a new dependency

1. Install inside the container (updates `package.json`):
   ```bash
   docker-compose exec app npm install <package-name>
   ```
2. Commit the updated `package.json` and `package-lock.json`.

---

## Access Services

| Service     | URL                         |
| ----------- | --------------------------- |
| Express App | `http://localhost:3000`     |
| MongoDB     | `mongodb://localhost:27017` |

---

## Collaboration Guide

1. **Pull the latest changes**:

   ```bash
   git pull origin main
   ```

2. **Rebuild containers (if dependencies change)**:

   ```bash
   docker-compose down && docker-compose up --build
   ```

3. **Branching workflow**:
   - Create a feature branch:
     ```bash
     git checkout -b feat/your-feature
     ```
   - Commit changes:
     ```bash
     git add .
     git commit -m "Description"
     git push origin feat/your-feature
     ```
   - Create a Pull Request (PR) on GitHub.

---

## Troubleshooting

- **"Module not found" error**:

  ```bash
  docker-compose down && docker-compose up --build
  ```

- **MongoDB connection issues**:

  - Use `mongo` (not `localhost`) as the hostname in your code.

- **Hot-reload not working**:

  - Ensure `nodemon` is in `devDependencies` and `--legacy-watch` is used (for macOS/Windows).

- **Port conflicts**:
  - Stop local MongoDB: `sudo service mongod stop`.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

**Happy Hacking!**
