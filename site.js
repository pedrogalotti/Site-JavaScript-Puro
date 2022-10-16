const divContainer = document.createElement('div');
const divContainer_segundo = document.createElement('div');
const divContainer_terceira = document.createElement('div');
const divContainer_quarta = document.createElement('div');
const divContainer_quinta = document.createElement('div');
const divContainer_sexta = document.createElement('div');
const divInformacao = document.createElement('div');
const divFaco = document.createElement('div');
const informacao = document.createElement('div');

divContainer.classList.add('container');
divContainer.classList.add('bg-dark');
divContainer.classList.add('col-4');
divContainer.style.borderRadius = "0 0 15px 15px";

var title = document.createElement('h1');
title.innerText = "PedroDev";
title.classList.add('text-center');
title.classList.add('text-info');
title.classList.add('bg-dark');
divContainer.append(title);


divContainer_segundo.classList.add('container');
divContainer_segundo.classList.add('bg-dark');
divContainer_segundo.classList.add('col-4');
divContainer_segundo.style.marginTop = "-2.9%";
divContainer_segundo.style.marginLeft = "0%";
divContainer_segundo.style.borderRadius = "0 0 15px 15px";

var title_segundo = document.createElement('h1');
title_segundo.innerText = "Sobre-mim";
title_segundo.classList.add('text-center');
title_segundo.classList.add('text-warning');
title_segundo.classList.add('bg-dark');
divContainer_segundo.append(title_segundo);


divContainer_terceira.classList.add('container');
divContainer_terceira.classList.add('bg-dark');
divContainer_terceira.classList.add('col-4');
divContainer_terceira.style.marginTop = "-2.9%";
divContainer_terceira.style.marginLeft = "66.6%";
divContainer_terceira.style.borderRadius = "0 0 15px 15px";


var title_terceira = document.createElement('h1');
title_terceira.innerHTML = "Oque eu faço";
title_terceira.classList.add('text-center');
title_terceira.classList.add('text-warning');
title_terceira.classList.add('bd-dark');
divContainer_terceira.append(title_terceira);



divContainer_quarta.classList.add('container');
divContainer_quarta.classList.add('bg-dark');
divContainer_quarta.classList.add('col-4');
divContainer_quarta.style.marginTop = "44.2%";
divContainer_quarta.style.marginLeft = "66.6%";
divContainer_quarta.style.borderRadius = "15px 15px 0 0";

var title_quarta = document.createElement('h1');
title_quarta.innerHTML = "Instagram";
title_quarta.classList.add('text-center');
title_quarta.classList.add('bd-dark');
title_quarta.style.color = 'rgb(252, 0, 223)';
divContainer_quarta.append(title_quarta);


divContainer_quinta.classList.add('container');
divContainer_quinta.classList.add('bg-dark');
divContainer_quinta.classList.add('col-4');
divContainer_quinta.style.marginTop = "-2.9%";
divContainer_quinta.style.marginLeft = "33.4%";
divContainer_quinta.style.borderRadius = "15px 15px 0 0";



var title_quinta = document.createElement('h1');
title_quinta.innerHTML = "YouTube";
title_quinta.classList.add('text-center');
title_quinta.classList.add('text-danger');
title_quinta.classList.add('bd-dark');
divContainer_quinta.append(title_quinta);



divContainer_sexta.classList.add('container');
divContainer_sexta.classList.add('bg-dark');
divContainer_sexta.classList.add('col-4');
divContainer_sexta.style.marginTop = "-2.9%";
divContainer_sexta.style.marginLeft = "0.1%";
divContainer_sexta.style.borderRadius = "15px 15px 0 0";



var title_sexta = document.createElement('h1');
title_sexta.innerHTML = "GitHub";
title_sexta.classList.add('text-center');
title_sexta.classList.add('text-white');
title_sexta.classList.add('bd-dark');
divContainer_sexta.append(title_sexta);



divInformacao.classList.add('container');
divInformacao.classList.add('bg-dark');
divInformacao.classList.add('col-4');
divInformacao.style.marginTop = "-40%";
divInformacao.style.marginLeft = "0%";
divInformacao.style.padding = "25px 10px 0 20px";
divInformacao.style.borderRadius = "0 20px 15px 0";



var informacoes = document.createElement('p');
informacoes.innerText = "🟢 Olá, seja bem vindo! \n ⚪ Me chamo Pedro Lucas \n ⚪ Tenho 16 anos \n ⚪ Moro em São Paulo/Santos \n \n \n ⚪ Sou programador web atualmente e pretendo ser programador de jogos! \n \n \n ";
informacoes.classList.add('text-info');
informacoes.classList.add('bg-dark');
informacoes.style.padding = "10px 0 10px 14px";
divInformacao.append(informacoes);



divFaco.classList.add('container');
divFaco.classList.add('bg-dark');
divFaco.classList.add('col-4');
divFaco.style.marginTop = "-14.9%";
divFaco.style.marginLeft = "66.6%";
divFaco.style.padding = "0 0 38px 18px";
divFaco.style.borderRadius = "20px 0 0 15px";


var faco = document.createElement('p');
faco.innerText = "Programo em: \n 🟠 Html  \n 🔵 Css \n 🟡 JavaScript \n 🔵🟡 python App (jogo um pouco usando PYGAME) \n \n \n Mexo com: \n 🔵🟠 Banco de Dados (MySQL)";
faco.classList.add('text-info');
faco.classList.add('bd-info');
informacoes.style.padding = "10px 0 10px 14px";
divFaco.append(faco);



informacao.classList.add('container');
informacao.classList.add('bg-dark');
informacao.classList.add('col-4');
informacao.style.marginTop = "10%";
informacao.style.marginLeft = "0%";
informacao.style.padding = "25px 10px 0 20px";
informacao.style.borderRadius = "0 20px 15px 0";



var informacoe = document.createElement('p');
informacoe.innerText = "✔️Feito 100% em JavaScript! \n \n ✔️©PedroDev | 2022";
informacoe.classList.add('text-info');
informacoe.classList.add('bg-dark');
informacoe.style.padding = "10px 0 10px 14px";
informacao.append(informacoe);



// adicionar tudo na tela
document.body.append(divContainer);
document.body.append(divContainer_segundo);
document.body.append(divContainer_terceira);
document.body.append(divContainer_quarta);
document.body.append(divContainer_quinta);
document.body.append(divContainer_sexta);
document.body.append(divInformacao);
document.body.append(divFaco);
document.body.append(informacao);

document.body.style.backgroundImage = 'linear-gradient(to right, rgb(11, 27, 164), rgb(14, 152, 167))';
