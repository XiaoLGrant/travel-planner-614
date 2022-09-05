const deleteBtn = document.querySelectorAll('.del')
const destinationItem = document.querySelectorAll('span.not-visited')
const destinationVisited = document.querySelectorAll('span.visited')
const destinationNotes = document.querySelectorAll('span.expand')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteDestination)
})

Array.from(destinationItem).forEach((el)=>{
    el.addEventListener('click', markVisited)
})

Array.from(destinationVisited).forEach((el)=>{
    el.addEventListener('click', markNotVisited)
})

Array.from(destinationNotes).forEach((el)=>{
    el.addEventListener('click', viewDestinationNotes)
})

async function deleteDestination(){
    const destinationId = this.parentNode.dataset.id
    try{
        const response = await fetch('destinations/deleteDestination', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'destinationIdFromJSFile': destinationId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markVisited(){
    const destinationId = this.parentNode.dataset.id
    try{
        const response = await fetch('destinations/markVisited', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'destinationIdFromJSFile': destinationId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markNotVisited(){
    const destinationId = this.parentNode.dataset.id
    try{
        const response = await fetch('destinations/markNotVisited', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'destinationIdFromJSFile': destinationId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

function viewDestinationNotes() {
    const destinationNoteId = document.querySelector(`#notes${this.parentNode.dataset.id}`)
    destinationNoteId.classList.toggle('hidden')
}