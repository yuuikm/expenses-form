Client on React, I used axios library to communicate with backend.

Server on Express using mysql2 to coonect my DB in phpmyadmin.

in phpmyadmin i created transactions_db:
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dateTime DATE,
    sum DECIMAL(10, 2),
    category VARCHAR(255),
    comment TEXT
  )
