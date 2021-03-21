console.log('Client side javascript file is loaded!')
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')
weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;
    console.log('testing')
    // messageone.textContent = 'message 1'
    // messageone.textContent = 'message 2'
    // fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    //     response.json().then((data) => {
    //         if (data.error) {
    //             // console.log(data.error)
    //             messageone.textContent = data.error
    //         } else {
    //             // console.log(data.forecast)
    //             // console.log(data.location)
    //             messageone.textContent = data.forecast
    //             messagetwo.textContent = data.location
    //         }

    //     })
    // })
})

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.forecast)
//             console.log(data.location)
//         }

//     })
// })