# Docker CRUD Book Management Application

This is a simple Book Management System built with Node.js, Express, and EJS, containerized using Docker. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on book records.

## Features

1. **Create**: Add new books with title, author, and publication year
2. **Read**: View list of all books in a clean tabular format
3. **Update**: Edit existing book information
4. **Delete**: Remove books from the system

## Prerequisites

- Docker Desktop (Windows/Mac) or Docker Engine (Linux)
- Node.js 18.x or higher (for local development only)
- Web browser

## Installation & Running with Docker

1. Clone this repository:
   ```bash
   git clone (https://github.com/RizkaFitrina/TUGAS-CRUD-DOCKER.git)
   cd docker-crud-books
   ```

2. Build and run using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Open your web browser
   - Navigate to `http://localhost:3000`

## Docker Configuration Explanation

### Dockerfile
```dockerfile
# Use the official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files into the container
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
```

Key components:
- `FROM node:14`: Uses Node.js 14 as the base image
- `WORKDIR /usr/src/app`: Sets the working directory in the container
- `COPY package*.json ./`: Copies package.json files first for better caching
- `RUN npm install`: Installs dependencies
- `COPY . .`: Copies application code
- `EXPOSE 3000`: Documents the port the application uses
- `CMD ["npm", "start"]`: Specifies the command to run the application

### Docker Compose
```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      NODE_ENV: development
```

Key components:
- `version: '3'`: Specifies Docker Compose file version
- `services`: Defines the services to run
- `app`: Main application service
- `ports`: Maps container port to host port
- `volumes`: Mounts local directory for development
- `environment`: Sets environment variables

## Application Structure

```
docker-crud-books/
├── src/
│   ├── models/
│   │   └── book.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── views/
│   │   ├── books/
│   │   │   ├── add.ejs
│   │   │   ├── edit.ejs
│   │   │   └── index.ejs
│   │   ├── layout/
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   └── error.ejs
│   └── app.js
├── public/
│   └── styles.css
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Features Implementation

1. **Create Book**
   - Navigate to "Tambah Buku Baru" button
   - Fill in book details (title, author, year)
   - Submit to create new book

2. **Read Books**
   - Homepage displays all books in a table
   - Shows ID, title, author, and publication year
   - Responsive design for various screen sizes

3. **Update Book**
   - Click "Edit" button next to book entry
   - Modify book details in the form
   - Save changes to update

4. **Delete Book**
   - Click "Hapus" button next to book entry
   - Confirm deletion in the popup
   - Book will be removed from the system

## Development

For local development without Docker:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the application:
   ```bash
   npm start
   ```

3. Access at `http://localhost:3000`

## Security Considerations

- Input validation implemented for all forms
- SQL injection protection through parameterized queries
- XSS protection using EJS template escaping

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License.
