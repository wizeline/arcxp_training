# arcxp_training
Playwright Project POC

## **Goals**
- Implement a design pattern and structured folders for frontend automation.
  - Page Object Model.
- Use different levels of documentation.
  - README.md [file](https://www.makeareadme.com/).
  - Comments inside code.
- Use best practices for element selectors.
  - Avoid absolute selectors.
  - Unique selectors.
  - Use different selectors supported.
- Use Eslint for static analysis and assure code standards.
- Coding best practices.
  - Code Abstraction.
  - Naming conventions for method, classes and tests.
  - Avoid hardcoded data.
  - Avoid magic numbers.
  - Descriptive name for test scripts.
  - Avoid explicit waits. (if possible).
  - Hooks.
- Best practiced for Assertions.
  - Single assertion per test.
  - Avoid assertions on the page objects.
- Proper Data management
  - Usage of data providers
  - Usage of .env/config files (when possible) for sensible data.
- Implement an automated reporter.
- Include a .gitignore file.

### Fronted Automation Tasks:
- Successful login.
  - Define a test case that performs a successful login, using credentials stored preferably in a .env file
- Unsuccessful login. 
  - Define multiple negative scenarios for login.
- Create a new task. 
  - Create a new task and validate it was created correctly.
- Create 10 new tasks. 
  - Create 10 new tasks and validate they were created correctly. 
  - Task Names should be dynamic.
