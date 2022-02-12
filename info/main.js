const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 

   var today = new Date();
   var time_start = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

submitBtn.addEventListener('click', ()=>{

  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let userInput = inputElm.value;

    var url = 'https://script.google.com/macros/s/AKfycbwOqJwESaIOZdJ3yKOkK7W8x9XUkN_PhxTi4YHnz8CHAyyc484/exec';

    var data = {
      mess: userInput,
      time_now: time,
      time_site: time_start,
      date: date
    };

    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: data
    });


    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="img/me.png" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})