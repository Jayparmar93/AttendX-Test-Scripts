
# AttendX Test Scripts

## Project Description
This repository contains sample automated tests for the
AttendX Student Attendance Application.

## Test Scripts

### 1. login.test.js
Tests login input validation:
- Accepts valid login inputs.
- Rejects an empty username.
- Rejects a password shorter than six characters.

### 2. attendance-marking.test.js
Tests attendance validation:
- Accepts Present and Absent statuses.
- Rejects an empty student ID.
- Rejects an invalid attendance status.

## Requirements
- Git
- Node.js

## How to Run the Tests
Open the terminal in this folder and run:

node --test

## Purpose
Git and GitHub are used to track script changes,
maintain commit history, and collaborate with team members.
## Version Control Record

- Initial commit: Added login and attendance tests.
- Second commit: Added missing password validation test.
- Remote update: Documented the GitHub editing workflow.
