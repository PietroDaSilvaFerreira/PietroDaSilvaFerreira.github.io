document.getElementById('ano').textContent = new Date().getFullYear();

const barradepesquisa = document.getElementById('barra-de-pesquisa');
const botaodapesquisa = document.getElementById('submit')
const resultadodabusca = document.getElementById('resultado-da-busca');
const resultsList = document.getElementById('resultado-da-busca');
const listItems = resultsList.querySelectorAll('li');
const menulateral = document.getElementById('menu-lateral')
const menuexpandido = document.getElementById('menu-expandido');
const pages = [
    { title: 'Linguagens', url: 'linguagens.html', content: 'Conteúdo da página Linguagens'},
    { title: 'Documentações', url: 'documentacoes.html', content: 'Conteúdo da página Documentações'},
    { title: 'Sobre', url: 'sobre.html', content: 'Conteúdo da página Sobre'},
    { title: 'Política de privacidade', url: 'politicadeprivacidade.html', content: 'Conteúdo da página Política de privacidade'},
    { title: 'Termos de uso', url: 'termosdeuso.html', content: 'Conteúdo da página Termos de uso'},
    { title: 'Home', url: 'index.html', content: 'Conteúdo da página Home'},
];

barradepesquisa.addEventListener('input', function () {
    if (barradepesquisa.value.trim() !== '') {
        resultadodabusca.style.display = 'flex';

    } else {
        resultadodabusca.style.display = 'none';
    }
});

barradepesquisa.addEventListener('input', function () {
    let encontrou = false;
    let itens = resultadodabusca.querySelectorAll('li');

    itens.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(barradepesquisa.value.toLowerCase())) {
            encontrou = true;
        }
    });

    if (encontrou && barradepesquisa.value.trim() !== '') {
        resultadodabusca.style.display = 'flex';
    } else {
        resultadodabusca.style.display = 'none';
    }
});

barradepesquisa.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    resultadodabusca.innerHTML = '';
    pages.forEach(page => {
        if (page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${page.url}" id="link-do-pesquisa">${page.title}</a>`;
            resultadodabusca.appendChild(li);
        }
    });
});

botaodapesquisa.addEventListener('click', function () {
    if (barradepesquisa.value.trim() === '') {
        barradepesquisa.placeholder = 'Preencha o campo';
        barradepesquisa.style.setProperty('--placeholder-color', 'red');
        barradepesquisa.value = ''
    } else {
        let primeirolink = document.getElementById('link-do-pesquisa');
        window.location.href = primeirolink
        barradepesquisa.style.setProperty('--placeholder-color', '');
    }
})

barradepesquisa.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault()

        const vazioounao = barradepesquisa.value.trim()

        if (barradepesquisa.value.trim() === '') {
            barradepesquisa.placeholder = 'Preencha o campo';
            barradepesquisa.style.setProperty('--placeholder-color', 'red');
            barradepesquisa.value = ''
        }

        if (vazioounao) {
            let primeirolink = document.getElementById('link-do-pesquisa');
            window.location.href = primeirolink
            barradepesquisa.style.setProperty('--placeholder-color', '');
        }
    }
})

menulateral.addEventListener('click', function () {
    this.classList.toggle('active');
    menuexpandido.classList.toggle('active')
})