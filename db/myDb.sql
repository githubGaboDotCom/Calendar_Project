CREATE TABLE loginCredentials
( 
  
  id BIGSERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  UNIQUE (username)

);

CREATE TABLE user_information
(
	id SERIAL NOT NULL PRIMARY KEY,
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	address VARCHAR (100) NOT NULL,
	city VARCHAR (50) NOT NULL,
	states VARCHAR (50) NOT NULL,
	zip INTEGER NOT NULL,
	phone INTEGER NOT NULL,
	email VARCHAR(100) NOT NULL,
	pin INTEGER NOT NULL
);


INSERT INTO loginCredentials ( username,
                               password )
					VALUES   ( 'lazaro',
					           'gutierrez');  
  
 