USE blog;

CREATE TABLE category (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50)
);

CREATE TABLE posts (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(50),
  content TEXT,
  creationDate DATETIME,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
);