export function initTextComp() {
  class TextComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      if (this.getAttribute("variant") == "title") {
        div.innerHTML = `
                <h1 class="title">
                  Piedra <br>
                  Papel ó <br>
                  Tijera <br>
                </h1>
                `;
        style.innerHTML = `

        .title {
            color: #009048;
            font-weight: bold;
            font-size: calc( (8vh + 2vw)/1.4);
            font-family: 'Cutive', serif;
            line-height: 1.25;
            margin: 0 auto;
            letter-spacing: 1.5px;
            width: fit-content;
          }
            
            `;
      }

      if (this.getAttribute("variant") == "election") {
        div.innerHTML = `
                <h3 class="election">
                  Presioná jugar <br>
                  y elegí: piedra, <br>
                  papel o tijera <br>
                  antes de que <br> 
                  pasen los 3 <br>
                  segundos.
                </h3>
                `;
        style.innerHTML = `
                .election {
                    font-size : calc( (8vh + 2vw)/2.1);
                    color: #141414;
                    font-family: 'Cutive', serif;
                    text-align: center;
                    line-height: 1.25;
                    margin: 0 auto;
                    width: fit-content;
                }
                
            `;
      }

      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("text-comp", TextComponent);
}
