function highlight(table) {
  let tableBody = table.tBodies[0];
  let tableHeader = table.tHead.rows[0].cells;

  [].forEach.call(tableBody.rows, (row) => {
    let available = row.querySelector('[data-available]');

    if (available) {
      switch (available.dataset.available) {
      case "true":
        row.classList.add('available');
        break;
      case "false":
        row.classList.add('unavailable');
        break;
      default:
        break;
      }
    } else {
      row.setAttribute('hidden', '');
    }

    let indexes = findTableHeadIndexes(tableHeader, "Age", "Gender");

    if (row.cells[indexes['age']].textContent < 18) {
      row.style = "text-decoration: line-through";
    }

    if (row.cells[indexes['gender']].textContent === "f") {
      row.classList.add('female');
    } else if (row.cells[indexes['gender']].textContent === "m") {
      row.classList.add('male');
    }
  });
}

function findTableHeadIndexes(tHead, ...cellNames) {
  let headerIndexes = [];

  for (let item = 0; item < tHead.length; item++) {
    for (let cellName of cellNames) {
      if (tHead[item].textContent === cellName) {
        headerIndexes[cellName.toLowerCase()] = tHead[item].cellIndex;
      }
    }
  }

  return headerIndexes;
}
