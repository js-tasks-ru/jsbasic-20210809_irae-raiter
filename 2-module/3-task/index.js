let calculator = {
  firstNumber: null,
  secondNumber: null,
  read(a, b) {
    if (Number.isFinite(a) && Number.isFinite(b)) {
      this.firstNumber = a;
      this.secondNumber = b;
    }
  },
  sum() {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return this.firstNumber * this.secondNumber;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
