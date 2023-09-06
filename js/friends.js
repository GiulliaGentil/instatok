export const amigos = [];

export const exibirAmigos= () => {
    //usamos o iterador for Each para percorrer
    //o array. Para cada pessoa do array 
    //vamos criar um card
    amigos.forEach(amigo => {
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
        imgFeed.src = amigo.img;
        curtir.src = './assets/icons/heart-solid.svg';
        curtir.classList.add('btn_curtir');

        curtir.onclick = () => addCurtidas(amigo, textoCurtir)


        textoCurtir.innerHTML = `${amigo.curtidas} curtidas`;
        imgUser.src = amigo.imgProfile;
        imgUser.classList.add('img_user');
        acoes.classList.add('acoes');
        nome.innerHTML = amigo.name;
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
        cardFriends.appendChild(cardItem);

    })
}