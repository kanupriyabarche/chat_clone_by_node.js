const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");
var audio = new Audio('iphone.mp3');

const append = (message, position) =>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message')
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    audio.play();
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.Value;
    append('you: ${message}', right)
    socket.emit('send',message);
    messageInput.Value = ' '
})

const name = prompt("enter your name: ");
socket.emit('new-user-joined', name);

socket.on('user-joined',name =>{
    append('${name} joined the chat','center');
})

socket.on('receive',data =>{
    append('${data.name}: ${data.message}','left');
})

socket.on('left',name =>{
    append('${name} center the chat','center');
})