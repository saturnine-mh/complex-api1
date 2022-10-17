document.querySelector('button').addEventListener('click', getWord)

// function getWord(){
// fetch('https://random-word-api.herokuapp.com/word')
// .then(res => res.json())
// .then(data =>{
//     // console.log(data)
//     // document.querySelector('#word').innerText = data
//   let randomWord = data
//     console.log(randomWord)
//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
//     .then(res => res.json()
//     .then(data =>{
//     // console.log(data)
//     console.log(data.length, data)
//     document.querySelector('#word').innerText = randomWord
//     for(i=0; i < data.length; i++){
//     document.querySelector('#definition').innerText = data[i].meanings[0].definitions[0].definition
    
//         }
//     })
//     // data[i].meanings[0].definitions[0]
   


//     }
   
// })

function getWord(){
    document.querySelector('#definition').innerText = ''
    fetch('https://random-word-api.herokuapp.com/word')
    .then(res => res.json())
    .then(data =>{
        let randomWord = data
        
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data.length, data)
            document.querySelector('#word').innerText = 'Word: ' + randomWord
            if(data.title){
                document.querySelector('#definition').innerText = 'This word does not have a definition'
            }
            else{
                document.querySelector('#definition').innerText = 'Defintion: ' + data[0].meanings[0].definitions[0].definition
            }
            
         

        })
        
        .catch(err => {
            console.log(`error ${err}`)
            document.querySelector('#definition').innerText = 'This word does not exist'
        })


    })
}
