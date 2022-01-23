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
   var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    var url = 'https://script.google.com/macros/s/AKfycbyqSvcY-hmXB1tQKWPf6X9F7JjPW_ZEgbIZlBEPByKf1ju_lT4/exec';

    var data = {
      mess: userInput,
      date_input: date,
      time_input: time
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