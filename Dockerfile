# Use Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (caching optimization)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app code
COPY . .

# Expose port and start the app
EXPOSE 3000

# Auto-reload on code changes
CMD ["npm", "run", "dev"]  