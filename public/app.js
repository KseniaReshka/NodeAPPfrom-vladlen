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
    
    if(result !== null){
      edit({id,title:result}).then(response => console.log(response))
      // .then(data => console.log(data,"data") );
        // const x=event.target.closest('span')
        // console.log('response', res);
    }
  }
})



async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(data) {
  await fetch(`/${data.id}`, {
    method: 'PUT', 
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
   body: JSON.stringify(data)})
}