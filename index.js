const buttonEl=document.querySelectorAll('button')
const pEl = document.getElementById('p-el')
buttonEl.forEach(occurence =>{
    let id = occurence.getAttribute('id')
    occurence.addEventListener('click',function(){
        pEl.innerHTML = `You selected ${id} out of 5` 
    })
})
