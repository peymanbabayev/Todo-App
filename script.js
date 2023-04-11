const form = document.getElementById('form');
const input = document.getElementById('input');
const todUl = document.getElementById('todos');
const checkBox = document.getElementById('check');


const toDoİnformation = (value) => {
    if (value) {
        const li = document.createElement('li');
        todUl.appendChild(li);
        const bigdiv = document.createElement('div')
        bigdiv.className = 'list-container'
        li.appendChild(bigdiv)

        const div = document.createElement('div')
        div.className = 'list'
        bigdiv.appendChild(div)

        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        div.appendChild(checkBox)

        const p = document.createElement('p')
        p.innerText = value;
        div.appendChild(p)

        const btndiv = document.createElement('div');
        bigdiv.appendChild(btndiv)

        const button = document.createElement('button')
        btndiv.appendChild(button)

        const i = document.createElement('i')
        i.className = "fa-sharp fa-solid fa-xmark"
        button.appendChild(i);

        i.onclick = () => {
            li.remove()
        }

        checkBox.onclick = () => {
            li.classList.toggle('completed')
        }
        input.value = ''
    }

}

document.body.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        toDoİnformation(input.value)
        updateLS()
    }
})


// function updateLS() {
//     const todoData = document.querySelectorAll('li')
//     const info = [];

//     todoData.forEach((data) => {
//         // console.log(data)
//         info.push({
//             Text: data.innerText,
//             Completed: todoData.classList.contains('completed')
//         })
//     })
//     console.log(info)
//     localStorage.setItem('Qeydlər', JSON.stringify(info));
// }


function updateLS() {
    const todosEL = document.querySelectorAll('li');
    const todos = [];

    todosEL.forEach((todoEL) => {
        // console.log(todoEL)
        todos.push({
            Text: todoEL.innerText,
            completed: todoEL.classList.contains('completed')
        })
    });
    console.log(todos)
    localStorage.setItem('Qeydlər', JSON.stringify(todos));
}


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     addTodo()
//     updateLS()
// })


// function addTodo() {
//     const todoText = input.value;

//     if (todoText) {
//         const todoEl = document.createElement("li");
//         todoEl.innerText = todoText;
//         todos.appendChild(todoEl);

//         todoEl.onclick = () => {
//             todoEl.classList.toggle('completed');
//             updateLS()
//         }
//         todoEl.oncontextmenu = (e) => {
//             e.preventDefault()
//             todoEl.remove();
//             updateLS()
//         }

//         input.value = ""
//     }
// }




