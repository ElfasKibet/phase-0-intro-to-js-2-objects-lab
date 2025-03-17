// Write your solution in this file!
// Initialize the employee Object
let employee = {
  name: "Doris",
  streetAddress: "Kimathi Street",
};

// Function to update an employee Object with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

// Function to update an employee Object with a new key-value pair (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a key-value pair from an employee Object (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete a key-value pair from an employee Object (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Update employee non-destructively
const updatedEmployee = updateEmployeeWithKeyAndValue(
  employee,
  "position",
  "Manager"
);
console.log(updatedEmployee);

// Update employee destructively
destructivelyUpdateEmployeeWithKeyAndValue(employee, "salary", 50000);
console.log(employee);

// Delete a key-value pair non-destructively
const employeeWithoutAddress = deleteFromEmployeeByKey(
  employee,
  "streetAddress"
);
console.log(employeeWithoutAddress);

// Delete a key-value pair destructively
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(employee);
