use sakila;

-- 1a. Display the first and last names of all actors from the table actor. 
select first_name, last_name
from actor;

-- 1b. Display the first and last name of each actor in a single column in upper case letters. Name the column Actor Name. 
SELECT upper(CONCAT(first_name, " ", last_name)) AS 'Actor Name'
from actor;

-- 2a. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe." What is one query would you use to obtain this information?
select actor_id, first_name, last_name
from actor
where first_name = 'Joe';

-- 2b. Find all actors whose last name contain the letters GEN
select first_name, last_name
from actor
where lower(last_name) like '%gen%';

-- 2c. Find all actors whose last names contain the letters LI. This time, 
-- order the rows by last name and first name, in that order:
select first_name, last_name
from actor
where lower(last_name) like '%li%'
order by last_name, first_name;

-- 2d. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:
select country_id, country
from country
where country in ('Afghanistan','Bangladesh','China');

-- 3a. Add a middle_name column to the table actor. Position it between first_name and last_name.
-- Hint: you will need to specify the data type.
alter table actor
add middle_name varchar(20);

-- 3b. You realize that some of these actors have tremendously long last names. Change the data type of the middle_name column to blobs.
ALTER TABLE actor modify middle_name blob;

-- 3c. Now delete the middle_name column.
ALTER TABLE tbl_Country
  DROP middle_name;

-- 4a. List the last names of actors, as well as how many actors have that last name.
select last_name, count(actor_id)
from actor
group by last_name;


-- 4b. List last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors
select last_name, count(actor_id)
from actor
group by last_name
having count(actor_id) > 1;

-- 4c. Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS,
-- the name of Harpos second cousins husbands yoga teacher. Write a query to fix the record.
update actor
set first_name = 'HARPO'
where last_name = 'WILLIAMS'
and first_name = 'GROUCHO';

-- 4d. Perhaps we were too hasty in changing GROUCHO to HARPO. 
-- It turns out that GROUCHO was the correct name after all! In a single query, 
-- if the first name of the actor is currently HARPO, change it to GROUCHO. Otherwise, 
-- change the first name to MUCHO GROUCHO, as that is exactly what the actor will be with the 
-- grievous error. BE CAREFUL NOT TO CHANGE THE FIRST NAME OF EVERY ACTOR TO MUCHO GROUCHO, HOWEVER! 
-- (Hint: update the record using a unique identifier.)
update actor
set first_name = 'GROUCHO'
where actor_id = 172;


-- 5a. You cannot locate the schema of the address table. Which query would you use to re-create it? 
SHOW CREATE TABLE address


-- 6a. Use JOIN to display the first and last names, as well as the address, of each staff member. 
-- Use the tables staff and address:
select first_name, last_name, address
from staff s
join address a 
on s.address_id = a.address_id;

-- 6b. Use JOIN to display the total amount rung up by each staff member in August of 2005. 
-- Use tables staff and payment. 
select first_name, last_name, sum(amount) Total
from payment p
join staff s 
on p.staff_id = s.staff_id
where date(payment_date) like '2005-08%'
group by first_name, last_name;

-- 6c. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.
select title, count(actor_id)
from film f 
join film_actor fa 
on f.film_id = fa.film_id
group by title;

-- 6d. How many copies of the film Hunchback Impossible exist in the inventory system?
select count(inventory_id)
from inventory i
join film f 
on i.film_id = f.film_id
where title = 'Hunchback Impossible';
-- 6 copies --

-- 6e. Using the tables payment and customer and the JOIN command, list the total paid by each customer. List the customers alphabetically by last name:
select last_name, sum(amount)
from payment p
join customer c
on p.customer_id = c.customer_id
group by last_name
order by last_name;