const paintData = (lists) => {
  for (let list of lists) {
    const divAppList = document.createElement('div');
    divAppList.setAttribute('class', 'app-list');
    const divP1 = document.createElement('div');
    divP1.setAttribute('class', 'p-1 rounded-sm bg-primary shadow');
    const newColumn = document.createElement('form');
    newColumn.setAttribute('class', 'app-list-form align-middle p-1 position-relative');
    const newInput = document.createElement('input');
    newInput.setAttribute('class', 'app-list-input form-control form-control-sm');
    newInput.setAttribute('id', `${list.id}`);
    newInput.setAttribute('value', `${list.title}`);
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('title', 'Editar el título de la lista');
    newColumn.appendChild(newInput);
    divP1.appendChild(newColumn);
    divAppList.appendChild(divP1);
    appboard.appendChild(divAppList);
    const app = document.querySelector('.app');
    app.appendChild(appboard);

    const divAppListOptions = document.createElement('div');
    divAppListOptions.setAttribute('class', 'app-list-options');
    const spanPl2 = document.createElement('span');
    spanPl2.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');
    divAppListOptions.appendChild(spanPl2);

    const divAppListBtns = document.createElement('div');
    divAppListBtns.setAttribute('class', 'app-list-btns btn-group btn-group-sm');

    const btnDeleteCard = document.createElement('button');
    btnDeleteCard.setAttribute('class', 'btn btn-light text-muted border shadow-sm btn-remove');
    btnDeleteCard.setAttribute('type', 'button');
    btnDeleteCard.setAttribute('title', 'Borrar esta tarjeta');
    const spanBtnDelete = document.createElement('span');
    spanBtnDelete.setAttribute('class', 'fas fa-trash-alt');
    btnDeleteCard.appendChild(spanBtnDelete);

    const btnMoveLeft = document.createElement('button');
    btnMoveLeft.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-list-move-left');
    btnMoveLeft.setAttribute('type', 'button');
    btnMoveLeft.setAttribute('title', 'Mover esta lista hacia la izquierda');
    const spanBtnLeft = document.createElement('span');
    spanBtnLeft.setAttribute('class', 'fas fa-arrow-left');
    btnMoveLeft.appendChild(spanBtnLeft);

    const btnMoveRight = document.createElement('button');
    btnMoveRight.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-list-move-right');
    btnMoveRight.setAttribute('type', 'button');
    btnMoveRight.setAttribute('title', 'Mover esta lista hacia la derecha');
    const spanBtnRight = document.createElement('span');
    spanBtnRight.setAttribute('class', 'fas fa-arrow-right');
    btnMoveRight.appendChild(spanBtnRight);

    divAppListBtns.appendChild(btnDeleteCard);
    divAppListBtns.appendChild(btnMoveLeft);
    divAppListBtns.appendChild(btnMoveRight);
    divAppListOptions.appendChild(divAppListBtns);
    newColumn.appendChild(divAppListOptions);

    for (let card of list.cards) {
      const newCard = document.createElement('article');
      newCard.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
      newCard.setAttribute('id', `${card.id}`)
      newCard.setAttribute('title', 'Abrir la tarjeta');
      const divTags = document.createElement('div');
      const spanTags = document.createElement('span');
      spanTags.setAttribute('class', 'badge badge-secondary bg-success');
      const spanTagsContent = document.createTextNode(`${card.tags}`);
      spanTags.appendChild(spanTagsContent);
      divTags.appendChild(spanTags);
      const cardTitle = document.createElement('h3');
      cardTitle.setAttribute('class', 'h6');
      const cardTitleValue = document.createTextNode(`${card.title}`);
      cardTitle.appendChild(cardTitleValue);
      newCard.appendChild(divTags);
      newCard.appendChild(cardTitle);
      divP1.appendChild(newCard);
    }
    const btnAddNewCard = document.createElement('button');
    btnAddNewCard.setAttribute('type', 'button');
    btnAddNewCard.setAttribute('class', 'ml-1 btn btn-primary btn-sm text-white-50 btn-add-card');
    btnAddNewCard.setAttribute('title', 'Añadir una nueva tarjeta');
    const btnAddNewCardText = document.createTextNode('Añadir otra tarjeta');
    btnAddNewCard.appendChild(btnAddNewCardText);
    const spanBtnAddNewCard = document.createElement('span');
    spanBtnAddNewCard.setAttribute('class', 'fas fa-plus');
    btnAddNewCard.appendChild(spanBtnAddNewCard);
    divP1.appendChild(btnAddNewCard);
  }
  addBtnRemoveListeners();
  addBtnMoveListeners();
  btnAddList();
};

export default paintData;