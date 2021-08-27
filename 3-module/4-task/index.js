function showSalary(users, age) {
  return (
    data.filter(users => users.age <= age)
      .map(users => `${users.name}, ${users.balance}`)
      .join('\n')
  );
}
