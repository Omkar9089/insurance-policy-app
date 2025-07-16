# Use Node.js base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
