# HCDMS

## MySQL | ExpressJS | ReactJS | React Bootstrap | NodeJS | Docker

### Technology Stack

-   Frontend: ReactJS, React Bootstrap
-   Backend: ExpressJS, NodeJS
-   Database: MySQL
-   Authentication: JWT (JSON Web Tokens), Password Hashing
-   Containerization: Docker

### Authentication

-   Passwords are securely hashed before being stored in the database.
-   JWTs:
    -   Stored in the user's local storage.
    -   Expire after 1 hour for added security.
    -   Tokens are immutable but readable since they are generated using a SECRET_KEY. Without this key, tokens cannot be altered.

### Routing and Role-Based Access Technology Stack

-   Frontend: ReactJS, React Bootstrap
-   Backend: ExpressJS, NodeJS
-   Database: MySQL
-   Authentication: JWT (JSON Web Tokens), Password Hashing
-   Containerization: Docker

### Authentication

-   Passwords are securely hashed before being stored in the database.
-   JWTs:
    -   Stored in the user's local storage.
    -   Expire after 1 hour for added security.
    -   Tokens are immutable but readable since they are generated using a SECRET_KEY. Without this key, tokens cannot be altered.

### Routing and Role-Based Access

-   React Router: Used for dynamic web route changes.
-   Routes are protected and accessible only if the user's token is valid for their specific profile.
-   Login Form:
    -   Queries the database for ID, First Name, Last Name, and Password.
    -   Denies access if user credentials do not match a record in the database.
-   Role-Based Authentication:
    -   Users are redirected to specific pages based on their roles (e.g., Admin, Doctor, Nurse).
    -   Scalable system for adding new roles and views with privilege constraints.

### Backend and Database

-   Backend: Built with ExpressJS to handle API requests.
-   Database: MySQL database for persistent storage.
-   Preloaded with 50 test records per table for testing. The .sql file can be edited to:
    -   Remove test data for a clean database.
    -   Connect to an existing database with a compatible schema.

### Containerization

-   Docker:
    -   Simplifies the launch and configuration of the application.
    -   Command for First Run:  
        docker-compose up --build
    -   Subsequent Runs:  
        docker compose start
    -   Automatically sets up required environments and dependencies in three containers:
        1. Frontend
        2. Backend
        3. Database
-   Ensures consistency across different host systems.

### Dynamic Data Rendering

-   Changes in the database are dynamically reflected on the web app upon refreshing the page.
-   Environment variables manage ports, keys, passwords, and routes, enabling quick updates and enhanced security.

### Middleware and Security

-   Custom JavaScript middleware for token creation and authentication.
-   Can be replaced with third-party services like OAuth in the future.

### Search Functionality

-   Search queries are powered by SQL logic.
-   Users can efficiently search by fields such as First_Name, Last_Name, Staff_ID, etc.

### Record Insertion / Removal Functionality

-   Only the admin account is allowed to insert and remove records from the database.
-   Records can be inserted by navigating the page to which the record should be added (Appointments, Patients, etc...), then clicking the "Add Record" button in the bottom right corner. At this point, a form upon which the new record information should be provided will become visible.
-   Records can be removed by clicking the "Remove Record" button in the bottom right of the screen, and then providing the ID of the record to be removed.

### Current Features

-   Admin, Doctor, and Nurse pages.
-   Additional pages can be easily integrated for other roles due to flexible privilege handling.

### Styling and UI

-   Combination of CSS and React Bootstrap for consistent styling.
-   Responsive design to accommodate various device sizes and orientations.

-   React Router: Used for dynamic web route changes.
-   Routes are protected and accessible only if the user's token is valid for their specific profile.
-   Login Form:
    -   Queries the database for ID, First Name, Last Name, and Password.
    -   Denies access if user credentials do not match a record in the database.
-   Role-Based Authentication:
    -   Users are redirected to specific pages based on their roles (e.g., Admin, Doctor, Nurse).
    -   Scalable system for adding new roles and views with privilege constraints.
