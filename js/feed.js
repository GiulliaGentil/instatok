import { amigos, exibirAmigos } from "./friends.js";

const feed = [
    {
        name: 'Roberta', 
        img: './assets/images/m1.jpeg',
        imgProfile: './assets/images/m1.jpeg',
        curtidas: 10
    },
    {
        name: 'Nati', 
        img: './assets/images/m2.jpeg',
        imgProfile: './assets/images/m2.jpeg',
        curtidas: 0
    },
    {
        name: 'Liz', 
        img: './assets/images/m3.jpeg',
        imgProfile: './assets/images/m3.jpeg',
        curtidas: 0
    },
]

//função que exibirá cada pessoa em um array
export const exibirFeed= () => {
    //usamos o iterador for Each para percorrer
    //o array. Para cada pessoa do array 
    //vamos criar um card
    feed.forEach(feedItem => {
        //criamos cada elemento necessário
        const cardItem = document.createElement('div');
        const userInfo = document.createElement('div');
        const acoes = document.createElement('div');
        const imgFeed = document.createElement('img');
        const imgUser = document.createElement('img');
        const curtir = document.createElement('img');
        const nome = document.createElement('h2');
        const textoCurtir = document.createElement('p');

        //configurar os atributos e classes
        cardItem.classList.add('cardItem');
        userInfo.classList.add('userInfo');
        imgFeed.classList.add('imgFeed');
        imgFeed.src = feedItem.img;
        curtir.src = './assets/icons/heart-solid.svg';
        curtir.classList.add('btn_curtir');

        curtir.onclick = () => addCurtidas(feedItem, textoCurtir)

        textoCurtir.innerHTML = `${feedItem.curtidas} curtidas`;
        imgUser.src = feedItem.imgProfile;
        imgUser.classList.add('img_user');
        acoes.classList.add('acoes');
        nome.innerHTML = feedItem.name;
        //add o bnt do curtir e o texto curtir na
        //div das acoes
        acoes.appendChild(curtir);
        acoes.appendChild(textoCurtir);

        //anexar os elementos
        userInfo.appendChild(imgUser);
        userInfo.appendChild(nome);
        cardItem.appendChild(userInfo);
        cardItem.appendChild(imgFeed);
        cardItem.appendChild(acoes);
        //anexa tudo ao card principal
        card.appendChild(cardItem);

    })
}

const addCurtidas = (pQSeraCurtida, texto )=> {
    pQSeraCurtida.curtidas ++;
    texto.innerHTML = `${pQSeraCurtida.curtidas} curtidas`;

    amigos.push(pQSeraCurtida);
    exibirAmigos()

}