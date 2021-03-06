const addBtn = document.querySelector('.footer_button');
const input = document.querySelector('.footer_input');
const items = document.querySelector('.item_list');

// 리스트에 아이템을 추가하는 함수
function onAdd() {

    const text = input.value;

    if(text === ''){
        input.focus();
        return;
    }

    const itemBox = createItem(text);

    items.appendChild(itemBox);
    itemBox.scrollIntoView({ block : 'end'});

    input.value = "";
    input.focus();
}

// 리스트에 들어갈 아이템을 만드는 함수
let id = 0; //일단 이렇게 해줌(고유 id)
function createItem(text) {

    const itemBox = document.createElement('div');
    itemBox.setAttribute('class', 'itemBox');
    itemBox.setAttribute('data-id', id);

    itemBox.innerHTML = `
        <li class="item">
            <span class="item_name">${text}</span>
            <button class="item_delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </li>
        <div class="item_divider"></div>`;
    id++;
    return itemBox;

    /*
    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const item_name = document.createElement('span');
    item_name.setAttribute('class', 'item_name');
    item_name.textContent = text;

    const item_delete = document.createElement('Button');
    item_delete.setAttribute('class', 'item_delete');
    item_delete.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    item_delete.addEventListener('click', () => {
        items.removeChild(itemBox);
    });

    const divider = document.createElement('div');
    divider.setAttribute('class', 'item_divider');
    
    item.appendChild(item_name);
    item.appendChild(item_delete);

    itemBox.appendChild(item);
    itemBox.appendChild(divider); */
}


input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        onAdd();
    }
});

addBtn.addEventListener('click', () => {
    onAdd();
});

items.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){ //id가 존재한다면
        const toBeDelete = document.querySelector(`.itemBox[data-id="${id}"]`);
        toBeDelete.remove();
    }
})