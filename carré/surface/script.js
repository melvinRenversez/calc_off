const enter = document.getElementById('enter')
const button = document.getElementById('button')
const end = document.getElementById('end')

button.addEventListener('click', calcul)
document.addEventListener('keydown', (e)=>{
    if(e.keyCode == 13) calcul()
})


function calcul(){
    cote = enter.value
    resulta = cote ** 2
    end.innerHTML = resulta
}