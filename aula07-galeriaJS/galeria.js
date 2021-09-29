"use scrict";

const imagens = [
    "./img/disney.png", 
    "./img/apple.jpg",
    "./img/globo.png",
    "./img/hbo.jpg" ,
    "./img/netflix.jpg", 
    "./img/netnow.jpg" ,
    "./img/playplus.jpg", 
    "./img/prime.png" 
];

const limparId = (url) => url.replace("./img/","").split(".")[0].replace("","-")

const criarItem = (urlImagem) => {
 const container = document.querySelector(".galeria-container");
 
 const novoLink = document.createElement("a")
 novoLink.href = ` #${limparId(urlImagem)}`
 novoLink.classList.add("galeria-items")
 novoLink.innerHTML = `<img src= "${urlImagem}" alt=""></img>`

 container.appendChild(novoLink )
}
 
const carregarGaleria = (imagens) => imagens.forEach(criarItem)
const criarSlide = (urlImagem) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)
    novoDiv.innerHTML=
        ` 
        <div class="imagem_container">
            <a href="" class="icones fechar">&#10006;</a>
            <a href="" class="icones anterior">&#171;</a>
            <img src="${urlImagem}" alt="">
            <a href="#giyu-tomioka" class="icones proximo">&#187;</a>
        </div>
        `



    container.appendChild(novoDiv)
}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)