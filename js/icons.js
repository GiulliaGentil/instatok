//essa função vai exibir nossos icones
export const exibirIcones = () => {
    //armazenamos na variável nosso menu inferior
    const bottomNavigation = document.getElementById('bottom_navigation');
    
    //vams criar imagens contendo os icones
    const imgIconHouse = document.createElement('img');
    const imgIconFriends = document.createElement('img');
    const imgIconUser = document.createElement('img');

    //colocar os icones e atribuir o id
    imgIconHouse.src = '../assets/icons/home.svg';
    imgIconHouse.id = 'iconHouse';
    imgIconFriends.src = '../assets/icons/amigos.svg';
    imgIconFriends.id = 'iconFriends';
    imgIconUser.src = '../assets/icons/profile.svg';
    imgIconUser.id = 'iconUser';

    //adicionamos tudo ao bottom
    bottomNavigation.appendChild(imgIconHouse)
    bottomNavigation.appendChild(imgIconFriends)
    bottomNavigation.appendChild(imgIconUser)
}

//função que será chamada quando o icone for clicado
export const clickIcon = () => {
    const iconHouseId = document.getElementById('iconHouse');
    const iconFriendsId = document.getElementById('iconFriends');
    const iconUserId = document.getElementById('iconUser');

    //pegamos o ids do HTML
    const home = document.getElementById('home');
    const friends = document.getElementById('friends')
    const user = document.getElementById('user')

    //vamos ouvir os eventos de click nos icones
    iconHouseId.addEventListener('click', () => {
        //removemos a classe dos outros
        iconFriendsId.classList.remove('icon');
        iconUserId.classList.remove('icon');
        //add a classe no atual
        iconHouseId.classList.add('icon');
        //escondemos os elementos
        friends.style.display = 'none';
        user.style.display = 'none';
        //fazemos aparecer o atual
        home.style.display = 'block';
    })
    iconFriendsId.addEventListener('click', () => {
        //removemos a classe dos outros
        iconHouseId.classList.remove('icon');
        iconUserId.classList.remove('icon');
        //add a classe no atual
        iconFriendsId.classList.add('icon');
        //escondemos os elementos
        home.style.display = 'none';
        user.style.display = 'none';
        //fazemos aparecer o atual
        friends.style.display = 'block';
    })
    iconUserId.addEventListener('click', () => {
        //removemos a classe dos outros
        iconFriendsId.classList.remove('icon');
        iconHouseId.classList.remove('icon');
        //add a classe no atual
        iconUserId.classList.add('icon');
        //escondemos os elementos
        friends.style.display = 'none';
        home.style.display = 'none';
        //fazemos aparecer o atual
        user.style.display = 'block';
    })
}