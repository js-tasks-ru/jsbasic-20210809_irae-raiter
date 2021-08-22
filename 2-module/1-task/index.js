function sumSalary(salaries) {
  let result = 0;
  for (let key in salaries) {
    if (!Number.isNaN(salaries[key]) && Number.isFinite(salaries[key])) {
      result += salaries[key];
    }
  }
  return result;
}
