import { state } from "../../state";
const papel = require("url:../../assets/papel.svg");
const piedra = require("url:../../assets/piedra.svg");
const tijera = require("url:../../assets/tijera.svg");
const win = require("url:../../assets/ganaste.svg");
const lose = require("url:../../assets/perdiste.svg");

export function initPageRound(params) {
  class PageRound extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const background = document.createElement("div");
      const cardScore = document.createElement("div");
      const containerButton= document.createElement("div");
      const style = document.createElement("style");
      const currentState = state.getState();

      

      div.setAttribute("class", "container");
      background.setAttribute("class", "background");
      cardScore.setAttribute("class", "cardScore");

      const myPlay =
        currentState.currentRound.myPlay == "piedra"
          ? piedra
          : currentState.currentRound.myPlay == "papel"
          ? papel
          : tijera;

      const computerPlay =
        currentState.currentRound.computerPlay == "piedra"
          ? piedra
          : currentState.currentRound.computerPlay == "papel"
          ? papel
          : tijera;


      div.innerHTML = `
        <img class="computerPlay" src=${computerPlay}>
        <img class="myPlay" src=${myPlay}>
        `;

      setTimeout(() => {
        const result = state.whoWins()
        // console.log(result);
        
        if ( result == "win") {
          div.appendChild(background);
          background.innerHTML = `
            <img class="win" src=${win}>
          `;
          background.style.backgroundColor = "rgba(136, 137, 73, 0.9)";
        }
        if (result == "lose") {
          div.appendChild(background);
          background.innerHTML = `
            <img class="lose" src=${lose}>
          `;
          background.style.backgroundColor = "rgba(137, 73, 73, 0.9)";
        }
        
        if (result == "tie"){
          div.appendChild(background);
          background.innerHTML = `
          <span class="tie">Empate</span>
          `;
          background.style.backgroundColor = "rgba(50, 30, 90, 0.9)";
        }

        cardScore.innerHTML = `
          <h3>Score</h3>
          <div class="span-container">
            <span>Vos: ${currentState.history.myWin}</span>
            <span>Máquina: ${currentState.history.computerWin}</span>
          <div>
        `;

        containerButton.innerHTML = `
        <button-comp text="Volver a jugar"></button-comp>
        <button-comp color="invert" text="Reiniciar puntaje"></button-comp>
        `
        
        background.appendChild(cardScore);
        background.appendChild(containerButton);
        
      }, 2000);

      style.innerHTML = `

          .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            font-size : calc( (8vh + 2vw)/2);
            color: #141414;
            font-family: 'Odibee Sans', cursive;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }

          h3{
            text-align:center;
            margin:0;
          }

          .tie{
            color: #FAFAFA;
          }
          .win, .lose {
            height: calc( (35vh + 15vw)/1.9);
          }
          .computerPlay {
            top:0px;
            transform: rotate(180deg);
            height:45vh;
          }
          .myPlay {
            bottom:0px;
            height:45vh;
          }

          .background{
            width:100%;
            height:100vh;
            z-index:1;
            display:flex;
            flex-direction:column;
            justify-content:space-evenly;
            align-items:center;
            position: absolute;
            top: 0;
          }

          .cardScore{
            border: 7px solid #141414;
            border-radius: 1vh;
            background-color:#fafafa;
            padding: 1vh 3vw 2vh;
          }

          .span-container{
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            font-family: 'Odibee Sans', cursive;
          }

      `;

      div.appendChild(style);
      shadow.appendChild(div);
    }
  }

  if (!customElements.get("round-page")) {
    customElements.define("round-page", PageRound);
  } 

  return "<round-page></round-page>";
}
