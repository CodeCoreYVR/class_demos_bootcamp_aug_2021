-- CREATE TABLE cars(
--     id SERIAL,
--     make VARCHAR(50),
--     model VARCHAR(50),
--     doors INTEGER,
--     description TEXT
-- );
-- SERIAL an aut-incrementing integer
-- VARCHAR is string maximum of 50 characters
-- TEXT is unlimited string

-- ALTER TABLE cars ADD COLUMN color VARCHAR(50);

-- CREATE
-- INSERT INTO
--  cars(make, model, description, color, doors)
--  VALUES('TOYOTA', 'abc', 'it is a car', 'blue', 4 );


-- READ
-- SELECT * FROM students;
-- * means all the columns

-- WHERE
-- SELECT first_name, last_name FROM students WHERE id = 1 ;

-- EXAMPLE

-- SELECT * FROM students WHERE id > 100;
-- SELECT * FROM students WHERE age > 40;
-- SELECT first_name,registration_date FROM students WHERE registration_date >= '2018-01-01';
-- SELECT first_name FROM students WHERE registration_date >= (now() - interval '1000 days');
-- SELECT first_name FROM students WHERE registration_date >= (current_date - 1000);

-- AND / OR

-- SELECT * FROM students WHERE id > 100 AND id < 200;

-- IS NULL / IS NOT NULL
-- Three-Valued Logic (NULL) true, false, null

-- SELECT * FROM students WHERE age IS NULL OR age < 20;

-- LIKE / ILIKE
-- LIKE is case sensitive
-- ILKIE is not
-- % is used as the wildcard
-- SELECT first_name FROM students WHERE first_name LIKE 'Jo%';

-- BETWEEN AND
-- SELECT * FROM students WHERE age BETWEEN 25 AND 35;

-- SELECT first_name, registration_date FROM students WHERE
-- registration_date 
-- BETWEEN (current_date - 3000) AND (current_date - 100);

-- ORDER BY
-- default ASC order
-- ASC / DESC
-- SELECT * FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name, age;

-- LIMIT
-- SELECT * FROM students WHERE first_name ILIKE 'ke%' LIMIT 5;

-- OFFSET
-- SELECT * FROM students LIMIT 10 OFFSET 20;

-- COUNT
-- SELECT count(*) FROM students;

-- AS
-- SELECT count(*) AS students_cout FROM students WHERE age > 25;

-- SUM
-- SELECT sum(age) FROM students;

-- AVG
-- SELECT avg(age) FROM students;

-- ROUND
-- SELECT ROUND(avg(age)) FROM students;

-- MAX & MIN
-- SELECT max(age), min(age),avg(age), sum(age) FROM students;

-- GROUP BY
SELECT first_name, count(first_name) FROM students GROUP BY first_name;

-- UPDATE
-- for multiple columns add them with ,

-- UPDATE cars SET color = 'blue' WHERE id = 1;
-- UPDATE cars SET color = 'blue', doors = 5 WHERE id = 1;

-- DELETE
-- if no conditions, then delete everyting. same as update
-- DELETE FROM cars WHERE id = 1;


