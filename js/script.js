// Consegna:
// Data una lista della spesa,
//  stampare sulla pagina (anche brutalmente, basta che si vedano) 
//  gli elementi della lista individualmente con un ciclo while.



const listaSpesa =  ['Arancie','carlo','Latte','Olive','Olio','pane','Carta','Acqua','Vestiti']; 
const lista = document.querySelector('#lista');
let index = 0;

while (index < listaSpesa.length) {
    const listElement = document.createElement('li'); 
    lista.appendChild(listElement);
    listElement.innerHTML = listaSpesa[index];
    index = index + 1;
}






















