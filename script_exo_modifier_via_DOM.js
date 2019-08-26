function changeTitles(){
  document.getElementsByClassName('jumbotron-heading')[0].textContent = "Ce que j'ai appris à THP";
  document.querySelector('p.lead').textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

function changeCallToActions() {
  let mainCallToAction = document.querySelector('section.jumbotron > div > p > a');
  mainCallToAction.textContent = "OK je veux tester !";
  mainCallToAction.href = "http://www.thehackingproject.org";

  let secCallToAction = document.getElementsByClassName('btn-secondary');
  secCallToAction[0].textContent = "Non Merci";
  secCallToAction[0].href = "https://www.pole-emploi.fr/accueil/";
}

function changeLogoName() {
  let navBarBrand = document.querySelectorAll('.navbar-brand > strong');
  navBarBrand[0].textContent = "The THP Experience";
  navBarBrand[0].style.fontSize = "2em";
}

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
function populateImages() {
  let imgCard = document.getElementsByClassName('card-img-top');
  for (i = 0 ; i < imgCard.length ; i++){
    imgCard[i].src = imagesArray[i];
  }
}

function deleteLastCards() {
  let cards = document.getElementsByClassName('card');
  for (i = 3 ; i > 0; i--) {
    cards[cards.length - 1].remove();
  }
}

let textsArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype." ]
function changeCardsText() {
  let cards = document.getElementsByClassName('card-text');
  let i = 0;
  while (i < 3) {
    cards[i].textContent = textsArray[i];
    i++ ;
  }
}

function changeViewButtons() {
  let buttonView = document.querySelectorAll('.btn-group');
  buttonView.forEach( btngroup =>{
    btngroup.firstElementChild.className = "btn btn-success";
  });
}

function addDivAndMove() {
  let row = document.getElementsByClassName('row')[1].parentNode;
  let jsRow = document.getElementsByClassName('col-md-4')[2];
  let div = document.createElement("div");
  div.className = "row";
  row.appendChild(div);
  row.appendChild(jsRow);
}


// Appel des fonctions
function executeAll() {
  changeTitles()
  changeCallToActions()
  changeLogoName()
  populateImages()
  deleteLastCards()
  changeCardsText()
  changeViewButtons()
  addDivAndMove()
  hideTheButton()
  buttonReload()
}

// Cacher le bouton
function hideTheButton() {
  let theButton = document.getElementById("the-button");
  theButton.style = "display:none;";
}
function buttonReload() {
  let theButton = document.getElementById("the-reload-button");
  theButton.style = "display:block;"
}
