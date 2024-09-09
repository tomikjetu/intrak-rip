# Use a base image that contains the necessary runtime (e.g., Node.js, Python, etc.)
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files (for Node.js)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .
RUN npm run build
# Expose the port that the application listens on (optional)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "serve"]

