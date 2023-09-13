
create database miniproject_1;


create table Users(

user_id int unsigned not null auto_increment,

username varchar(32) not null,
password varchar(32) not null,

first_name varchar(64) not null,
last_name varchar(64) not null,

email varchar(64) not null,
phone_no int,

address_id int unsigned,

created_at timestamp,

PRIMARY KEY (user_id)

);