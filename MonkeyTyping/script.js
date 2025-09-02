let user_input=document.getElementById('input')

user_input.addEventListener('keyup',function(e){
    for(let i=0; i<user_input.ariaValueMax.length;i++){
        console.log(user_input.value[i])
    }
})