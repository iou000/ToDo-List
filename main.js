const addBtn = document.querySelector('.footer_button');
const input = document.querySelector('.footer_input');
const items = document.querySelector('.item_list');


function onAdd() {

    // 사용자가 입력한 텍스트를 받아옴.
    const text = input.value;

    //입력이 비어있을 경우
    if(text === ''){
        input.focus();
        return;
    }

    //새로운 아이템(텍스트 + 쓰레기통)을 만듬.
    const itemBox = createItem(text);

    // items 컨테이너에 새로 만든 아이템 추가.
    items.appendChild(itemBox);
    

    //인풋을 초기화.
    input.value = "";
    input.focus();
}

function createItem(text) {

    const itemBox = document.createElement('li');

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
    itemBox.appendChild(divider);

    return itemBox;
}

input.addEventListener('keydown', (e) => {
    if (e.key ==='Enter') {
        onAdd();
    }
});

addBtn.addEventListener('click', () => {
    onAdd();
});