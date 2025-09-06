let user_input=document.getElementById('input')
let sentence_ele=document.getElementById('sentence')
let value=sentence_ele.textContent
sentence_ele.innerHTML=value.split('').map(e=>`<span>${e}</span>`).join('')
user_input.addEventListener('keyup',function(e){
    let chr_elements=document.querySelectorAll('span')

    for(let i=0; i<user_input.value.length;i++){
        if(user_input.value[i]==chr_elements[i].textContent){
            console.log(user_input.value[i],value[i],'hello')
            chr_elements[i].style.color='green'
        }else{
            chr_elements[i].style.color='red'
        }
    }
})