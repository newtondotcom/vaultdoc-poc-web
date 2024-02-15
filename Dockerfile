# Use an official Node runtime as a parent image
FROM node:lts as build
# Set the working directory to /app
WORKDIR /app
# Copy the package.json and package-lock.json to the container
COPY package.json yarn.lock ./
# Install dependencies
RUN yarn
# Copy the rest of the application code to the container
COPY . .
# Build the React app
RUN yarn build
# Use an official Nginx runtime as a parent image
FROM nginx:stable-alpine3.17
# Copy the ngnix.conf to the container
COPY ngnix.conf /etc/nginx/conf.d/default.conf
# Copy the React app build files to the container
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 for Nginx
EXPOSE 80
# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]