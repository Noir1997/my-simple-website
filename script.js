//送信ボタンで入力内容を表示する機能
const submitBtn =document.getElementById('submitBtn');
const userNameInput = document.getElementById('userName');
const resultMessage = document.getElementById('resultMessage');

submitBtn.addEventListener('click',function(){
    const name = userNameInput.value.trim();

    if(name){
        resultMessage.textContent=`こんにちは、${name}さん！`;

    }else{
        resultMessage.textContent = 'お名前が入力されていません。';
    }

    console.log('送信ボタンが押されました');
});


//カウントアップ機能
let count=0;
const countBtn = document.getElementById('countBtn');
const countValue = document.getElementById('countValue');

countBtn.addEventListener('click',function(){
    count++;
    countValue.textContent=count;
    console.log('カウント:${count}');
});

