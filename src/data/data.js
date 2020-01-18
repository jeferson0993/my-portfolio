const HEADER = "Jeferson0993";

const NAVBAR_DATA = [
    { id: 1, url: "/", label: "Inicio" },
    { id: 2, url: "#about", label: "Sobre" },
    { id: 3, url: "#webdev", label: "Projetos para Web" },
    { id: 4, url: "#mobile", label: "Projetos para mobile" },
    { id: 5, url: "#skills", label: "Minhas habilidades" },
    { id: 6, url: "#footer", label: "Contatos" }
];

const BANNER_DATA = {
    HEADING: "Meus projetos em vanilla e svelte",
    DECRIPTION:
        "Espaço de divulgação e detalhamento de projetos criados ao longo do meu aprendizado de programação em vanilsa js e svelte com o framework sapper.",
    ABOUT_SECTION:
        "#about",
    KNOW_MORE: "Saiba mais"
};

const ABOUT_DATA = {
    HEADING: "Sobre",
    TITLE: "Por que escolhi me especializar nessa linguagem?",
    IMAGE_URL: "images/js_html_css.svg",
    WHY_CHOOSE_JAVASCRIPT: [
      "Uma das melhores coisas em se aprender essa linguagem é que isso pode ser o marco de um início de carreira no mundo do desenvolvimento de software, já que a curva de aprendizado para essa linguagem tende a ser menor.",
      "Ademais com as atualizações constantes e implementações diversas, o javascript encontra-se em todos os lugares atualmente.",
      "É importante destacar ainda a necessidade constante das empresas por profissionais que realmente dominem a linguagem."
    ]
  };

const WEB_DATA = {
    HEADING: "Projetos para Web",
    ALL_PROJECTS: "Todos os projetos",
    PROJECT_LIST: [
        {
            LABEL: "CRUD com javascript",
            DESCRIPTION: "Uma aplicação simples em Javascript com as ações tradicionais: cadastrar, recuperar, alterar, e excluir",
            URL: "https://jeferson0993.github.io/JavaScript-todoList-com-localStorage/",
            IMAGE: "images/todo_list.svg"
        },
        {
            LABEL: "Trabalhando com vetores e DOM",
            DESCRIPTION: "Atividade com LocalStorage para a matéria de Gerenciamento de dados para Web.",
            URL: "https://jeferson0993.github.io/Livros-Autores/",
            IMAGE: "images/atividade_javascript.svg"
        },
        {
            LABEL: "CRUD com svelte",
            DESCRIPTION: "Aplicação utilizando o Google Firebase Realtime Database, Now Web Hosting, Bulma CSS e Svelte 3.",
            URL: "https://crud-svelte-firebase.now.sh/",
            IMAGE: "images/to_do_list.svg"
        }
    ]
};
const MOCK_DATA = {
    HEADER,
    NAVBAR_DATA,
    BANNER_DATA,
    ABOUT_DATA,
    WEB_DATA,
};
  
export default MOCK_DATA;