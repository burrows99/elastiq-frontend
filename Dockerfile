# Step 1: Use an official Node.js image as a base image
FROM node:16 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the React app's source code
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use NGINX to serve the app
FROM nginx:alpine

# Step 8: Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port the app will run on (80 by default for NGINX)
EXPOSE 80

# Step 10: Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]