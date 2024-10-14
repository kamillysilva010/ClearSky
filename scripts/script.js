
const apiKey = "6e510e0abcdbc6afbcba98a481bdcbef"
const nomeCidade = document.querySelector('.nomeCidade')
const temperatura = document.querySelector('.temperatura')
const descricao = document.querySelector('.descricao')
const enter = document.querySelector('.search')
const icon = document.querySelector('.icon')
const informacoesSens = document.querySelector('.informacoes-s')
const informacoesVent = document.querySelector('.informacoes-v')
const informacoesHum = document.querySelector('.informacoes-h')



// const foreCast = async(cidade) => {
//     const urlforeCast = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
//     const response2 = await fetch(urlforeCast);
//     const data2 = await response2.json()

//     console.log(data2);
    
// }
// foreCast()

const lerDados = async(cidade) =>{  

    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
    const response = await fetch(urlApi);
    const data = await response.json()
    

    console.log(data);


    console.log(data.main.temp)
    console.log(data.name)
    console.log(data.weather[0].description);
    console.log(data.main.feels_like);
    console.log(data.wind.speed);
    console.log(data.main.humidity);
    

    nomeCidade.innerHTML = data.name
    temperatura.innerHTML = data.main.temp
    informacoesSens.innerHTML=`${data.main.feels_like}°C`
    informacoesVent.innerHTML = `${data.wind.speed}m/s`
    informacoesHum.innerHTML = `${data.main.humidity}%`
    // descricao.innerHTML = data.weather[0].description
  
   
    const icons_url = data.weather[0].icon 
    
    icon.src = `https://openweathermap.org/img/wn/${icons_url}.png`
    

}


const submit = () =>{
    const search = document.querySelector('#Search').value
    console.log(search);

    lerDados(search);
    // foreCast(search);
}

enter.addEventListener('keydown', (event)=>{
if (event.key == 'Enter'){
    submit()
}
});

lerDados('cajamar')























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
 



