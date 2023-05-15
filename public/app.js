document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }

  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id
    const name = event.target.dataset.name
     const result = prompt('введите новое название',`${name}`);
    console.log('result',result);
    // console.log('event.target.li',event.target.closest('li').textContent);
    if(result !== null){
      edit(id, result).then(()=>{
       console.log('Hi');
       
    })
    }
 }
 })


async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(id,data) {
  await fetch(`/${id}`, {method: 'PUT',  body: JSON.stringify(data)})
}