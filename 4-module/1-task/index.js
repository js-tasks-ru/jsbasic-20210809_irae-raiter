function makeFriendsList(friends) {
  const list = document.createElement('ul');

  friends.forEach((people) => {
    let listElement = document.createElement('li');
    listElement.append(`${people.firstName} ${people.lastName}`);
    list.insertAdjacentElement("beforeend", listElement);
  });

  return list;
}
