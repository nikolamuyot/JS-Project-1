// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  let employees = [];
  let addMore = true;

  while (addMore) {
    let firstName = prompt("Enter the employee's first name:");
    let lastName = prompt("Enter the employee's last name:");
    let salaryInput = prompt("Enter the employee's salary:");
    let salary = isNaN(parseFloat(salaryInput)) ? 0 : parseFloat(salaryInput); // Default salary to $0 if input is not a number

    employees.push({ firstName, lastName, salary });

    addMore = confirm("Would you like to add another employee?");
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = employeesArray.reduce(
    (total, employee) => total + employee.salary,
    0
  );
  let averageSalary = totalSalary / employeesArray.length || 0; // Prevent division by zero
  console.log(
    `Average Salary: ${averageSalary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })} | Number of Employees: ${employeesArray.length}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];
  console.log(
    `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  const employeeTable = document.querySelector("#employee-table");
  employeeTable.innerHTML = ""; // Clear the table before adding new entries

  employeesArray.forEach((employee) => {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.appendChild(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = employee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    newTableRow.appendChild(salaryCell);

    employeeTable.appendChild(newTableRow);
  });
};

const trackEmployeeData = function () {
  const employees = collectEmployees();
  console.table(employees); // Log the array of employees for debugging

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  // Sort employees by last name before displaying
  employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
