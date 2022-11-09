const destinationItem = document.querySelectorAll('.not-visited')
const destinationVisited = document.querySelectorAll('.visited')

Array.from(destinationItem).forEach((el)=>{
    el.addEventListener('click', markVisited)
})

Array.from(destinationVisited).forEach((el)=>{
    el.addEventListener('click', markNotVisited)
})

async function markVisited(){
    const destinationId = this.parentNode.parentNode.parentNode.dataset.id
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
    const destinationId = this.parentNode.parentNode.parentNode.dataset.id
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