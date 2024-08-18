-- V2__Create_request_count_table.sql

CREATE TABLE request_count (
    client_ip VARCHAR(45) PRIMARY KEY,
    count INT NOT NULL
);
