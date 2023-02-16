-- Creates the database hbtn_0d_2 and the user user_0d_2.
-- user_0d_2 should have only SELECT privilege in the database hbtn_0d_2
-- The user_0d_2 password should be set to user_0d_2_pwd
-- If the database hbtn_0d_2 already exists, your script should not fail
-- If the user user_0d_2 already exists, your script should not fail

-- Creates Database hbtn_0d_2
CREATE DATABASE IF NOT EXISTS hbtn_0d_2;

-- Creates user
CREATE USER IF NOT EXISTS
    'user_0d_2'@'localhostt'
    IDENTIFIED by 'user_0d_2_pwd';
-- Grants SELECT privilege
GRANT SELECT ON hbtn_0d_2.* TO 'user_0d_2'@'localhost';
