
const apiKey = "6e510e0abcdbc6afbcba98a481bdcbef"
const title = document.querySelector('.title')
const title2 = document.querySelector('.title2')
const title3 = document.querySelector('.title3')
const btn_sub = document.querySelector('.fa fa-search')



const lerDados = async(cidade) =>{  

    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
    const response = await fetch(urlApi);
    const data = await response.json()
    

    console.log(data);


    console.log(data.main.temp)
    console.log(data.name)
    console.log(data.weather[0].description);

    title.innerHTML = data.name
    title2.innerHTML = data.main.temp
    title3.innerHTML = data.weather[0].description
    
}


const submit = () =>{
    const search = document.querySelector('#Search').value
    console.log(search);

    lerDados(search)

}

btn_sub.addEventListener























//  const arrayD = ['maça', 'pera', 'banana']
// console.log(arrayD[1]);

// const obj = {
//     Fruta: 'abacaxi',
//     Carro: 'Mustang',
//     Suco: 'Tang',
//     Nome: 'Kamilly',
//     Sobrenome: 'Rodrigues',
//     endereco: {
//         bairro: 'Primavera',
//         cidade: 'Cajamar',
//         rua: 'Irapua',
//     },
//     array: ['Faca', 'Garfo', 'colher']
// }

// console.log(obj);
 



