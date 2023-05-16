document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }

  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id
    const name = event.target.dataset.title
     const result = prompt('введите новое название',`${name}`);
    console.log('result',result);
    if(result !== null){
      edit(id, result).then((resolve)=>{
        console.log('Hi');
        // const x=event.target.closest('span')
        console.log('response',resolve);
    })
    }
 }
})



async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(id,data) {
  await fetch(`/${id}`, {
    method: 'PUT', 
  //   headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json'
  // },
   body: JSON.stringify(data)})
}