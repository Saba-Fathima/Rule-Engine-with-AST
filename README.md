# Rule-Engine-with-AST
Before running the application enter "npm install" in the terminal so that all the packages are installed for running the application.

//Rule Engine Application
Rule Engine Application

Overview

This project is a dynamic rule engine built using React.js for the frontend and a custom rule evaluation logic implemented in JavaScript. The application allows users to create complex rules using logical conditions, such as age, department, salary, and experience. Users can then input attributes to evaluate these rules in real-time, making the application suitable for scenarios like eligibility checks, decision-making systems, and business rule validations.

Features

Rule Creation: Users can create rules with conditions using logical operators (AND, OR) and parentheses for grouping conditions.
Attribute Input: Users can provide a JSON object with attributes such as age, department, salary, and experience.
Rule Evaluation: The application evaluates rules against the provided attributes and returns either True or False based on the conditions.
Dynamic Feedback: Instant feedback is provided if a rule or attribute is invalid, ensuring clarity and correctness.
Core Functionalities

Add Rule: Users can input rules like (age > 30 AND department == 'Sales') OR (age < 25 AND department == 'Marketing').
Validate Input: JSON attributes must be correctly formatted; the app validates these before processing.

Evaluate Rule: Upon clicking "Evaluate", the system checks if the rule matches the provided attributes.
Support for Parentheses: The rule engine correctly handles nested conditions with parentheses.

Technical Details

Frontend: Implemented using React.js, ensuring a dynamic and interactive user interface for rule input and attribute management.

Backend Logic: A custom rule engine written in JavaScript parses the rules and conditions, handling logical operators and nested parentheses.
Error Handling: If any syntax error occurs in the rule or attribute, appropriate messages guide the user to correct the input.

Example Usage
Rule: "((age > 30 AND department == 'Sales') OR (age < 25 AND department == 'Marketing')) AND (salary > 50000 OR experience > 5)"

Result: True if the attributes meet the rule criteria, otherwise False.
