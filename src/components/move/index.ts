const imagePapel = require("url:../../assets/papel.svg");
const imagePiedra = require("url:../../assets/piedra.svg");
const imageTijera = require("url:../../assets/tijera.svg");

import { state } from "../../state";

export const initMoveComp = (params) => {
  class MoveComp extends HTMLElement {
    constructor() {
      super();
      this.syncState();
    }

    syncState() {
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      div.innerHTML = `
      <img class="tijeraEl" src=${imageTijera}>
      <img class="piedraEl" src=${imagePiedra}>
      <img class="papelEl" src=${imagePapel}>
        `;

      style.innerHTML = `
         
        div{
          display: flex;
          column-gap: 4.5vw;
        } 
        
          img{
            height: 25vh;
         }
          img:hover, img:active, img:focus{
            transform: translateY(1vh);
            transition: .5s;
         }

         .piedraDown, .tijeraDown, .papelDown{
          opacity: 0.5;
          position: relative;
          top: 5vh;
         }
         
         `;

      const papel = div.querySelector(".papelEl");
      const piedra = div.querySelector(".piedraEl");
      const tijera = div.querySelector(".tijeraEl");

      if (this.getAttribute("variant") == "election") {

        style.innerHTML += `
          img:hover, img:active, img:focus{
            transform: translateY(0vh);
         }`
        
        papel.addEventListener("click", () => {
          piedra.classList.add("piedraDown");
          tijera.classList.add("tijeraDown");
          setTimeout(() => {
            state.setMove("papel");
            params.goTo("/versus");
          }, 1000);
        });

        piedra.addEventListener("click", () => {
          papel.classList.add("papelDown");
          tijera.classList.add("tijeraDown");
          setTimeout(() => {
            state.setMove("piedra");
            params.goTo("/versus");
          }, 1000);
        });

        tijera.addEventListener("click", () => {
          piedra.classList.add("piedraDown");
          papel.classList.add("papelDown");
          setTimeout(() => {
            state.setMove("tijera");
            params.goTo("/versus");
          }, 1000);
        });
      }

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }

  customElements.define("move-comp", MoveComp);
};
