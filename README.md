# Task App

Task App is a web application designed to manage tasks efficiently. It allows users to create, update, and delete tasks with various attributes such as title, description, status, and user association.

## Features

- Create, update, and delete tasks
- Search tasks by title
- User authentication and task association
- Responsive design

## Installation

To set up the Task App locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/faisalfjri/task-app.git
    cd task-app
    ```

2. **Install dependencies:**

    ```bash
    composer install
    npm install
    ```

3. **Set up environment variables:**

    Copy the `.env.example` file to `.env` and update the necessary environment variables, such as database credentials.

    ```bash
    cp .env.example .env
    ```

4. **Generate application key:**

    ```bash
    php artisan key:generate
    ```

5. **Run database migrations and seeders:**

    ```bash
    php artisan migrate --seed
    ```

6. **Start the development server:**

    ```bash
    composer run dev
    ```

## Usage

- Access the application at `http://localhost:8000`.
- Log in or register to start managing tasks.
- Use the search functionality to find tasks by title.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
