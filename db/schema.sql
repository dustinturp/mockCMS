-- remove db if it already exists
DROP DATABASE IF EXISTS mock_crm_employees;
-- create database
CREATE DATABASE mock_crm_employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manger_id INTEGER,
    CONSTRAINT role_id FOREIGN KEY (role_id) REFERENCES mock_crm_role(id) ON DELETE SET NULL
);

DROP DATABASE IF EXISTS mock_crm_department;
-- create database
CREATE DATABASE mock_crm_department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);


DROP DATABASE IF EXISTS mock_crm_role;
-- create database
CREATE DATABASE mock_crm_role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    CONSTRAINT department_id FOREIGN KEY (department_id) REFERENCES mock_crm_department(id) ON DELETE SET NULL
);