const enter = document.getElementById('enter')
const button = document.getElementById('button')
const end = document.getElementById('end')

button.addEventListener('click', calcul)
document.addEventListener('keydown', (e)=>{
    if(e.keyCode == 13) calcul()
})


function calcul(){
    nombreCote = enter.value
    resulta = 180 - (360 / nombreCote)
    end.innerHTML = resulta
}