const enter1 = document.getElementById('enter1')
const enter2 = document.getElementById('enter2')
const button = document.getElementById('button')
const end = document.getElementById('end')

button.addEventListener('click', calcul)
document.addEventListener('keydown', (e)=>{
    if(e.keyCode == 13) calcul()
})


function calcul(){
    longeur = enter1.value
    largeur = enter2.value
    resulta = largeur * 2 + longeur * 2
    end.innerHTML = resulta
}