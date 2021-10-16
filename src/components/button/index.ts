import { state } from "../../state";

export function initButtonComp(params) {
  
  class ButtonComponent extends HTMLElement {
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
      const button = document.createElement("button");
      button.setAttribute("class", "button");

      style.innerHTML = `

          .button{
            width: 100%;
            min-width: 320px;
            background-color:#141414;
            border-radius: 1vh;
            border: 10px groove #4C4C4C;
            font-size: calc( (8vh + 2vw)/2.25);
            color:#Fafafa;
            font-family: 'Odibee Sans', cursive;
            align-self: center;
            padding: 1.25vh 1.25vw;
            z-index:20;
            margin: .5vh 0;
          }
          .button:hover, .button:active, .button:focus {
            background-color:#6CB46C;
            border: 10px groove #009048;
            transform: translateY(.5vh);
            transition: .5s;


          }
          
      `;

      if (this.getAttribute("color") == "invert") {
        style.innerHTML += `
        .button{
          background-color:#Fafafa;
          border: 10px groove #4C4C4C;
          color:#141414;
        }
        .button:hover, .button:active, .button:focus {
          background-color:#006CFC;
          border: 10px groove #001997;
          color: #Fafafa;
          transform: translateY(.5vh);
          transition: .5s;

        `;
      }

      this.textContent = this.getAttribute("text");
      button.addEventListener("click", () => {
        
        if (this.textContent == "Empezar") {
          params.goTo("/instruction");
        }
        if (this.textContent == "Jugar") {
          params.goTo("/election");
        }
        if (this.textContent == "Volver a jugar") {
          params.goTo("/election");
        }
        if (this.textContent == "Reiniciar puntaje") {
          state.setState({
            ...state.getState(),
            history: {
              computerWin: 0,
              myWin: 0,
            },
          });
          localStorage.removeItem("state")
          params.goTo("/");
        }
      });

      button.textContent = this.textContent;
      shadow.appendChild(div);
      shadow.appendChild(style);
      div.appendChild(button);
    }
  }
  customElements.define("button-comp", ButtonComponent);
}
