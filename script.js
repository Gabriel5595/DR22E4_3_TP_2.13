const linhas = document.querySelectorAll('tr');

linhas.forEach((row, i) => {
  if(i !== 0){
    if(row.classList.contains('vermelho')){
      row.classList.replace('vermelho', 'azul');
    }else{
      row.classList.replace('azul', 'vermelho');
    }
  }
});


/* const linhas = document.querySelectorAll('tr');

linhas.forEach((row, i) => {
  row.addEventListener('onload', () =>{
    const change = row[i + 1];
    if(change.classList.contains('vermelho')){
      change.classList.remove('vermelho');
      change.classList.add('azul');
    }else{
      change.classList.remove('azul');
      change.classList.add('vermelho');
    }
  });
});
 */
