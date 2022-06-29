document.querySelector('#nameClick').addEventListener('click', apiNameRequest)
document.querySelector('#speciesClick').addEventListener('click', apiSpeciesRequest)

async function apiNameRequest(){
    const petName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${petName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}

async function apiSpeciesRequest(){
    const petSpecies = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${petSpecies}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}