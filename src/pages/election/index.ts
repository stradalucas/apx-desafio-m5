
export function initPageElection(params) {

  class PageElection extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const preload = document.createElement("div");
      const containerCount = document.createElement("div");
      const style = document.createElement("style");
      const containerImages = document.createElement("div");

      div.setAttribute("class", "container");
      preload.setAttribute("class", "preload");
      containerCount.setAttribute("class", "container__timer");
      containerImages.setAttribute("class", "container__images");

      containerImages.innerHTML = `
      <move-comp variant="election"></move-comp>
      `;

      style.innerHTML = `

          .container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;;
            align-items: center;
            padding: 0 1vw;
            min-width: 345px;
            height: 100vh;
            margin: 0 auto;
          }
          
          .container__timer{
            padding-top:15vh;
            height: 75vh;
          }
          
          .preload {
            font-family: 'Odibee Sans', cursive;
            font-size : calc((8vh + 2vw)/1.25);
            width:  calc(16vh + 8vw);
            height: calc(16vh + 8vw);
            border: 3vh solid #eee;
            border-top: 3vh solid #141414;
            border-radius: 50%;
            transition: 1s;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
      `;

      function countdown(time, n) {
        preload.textContent = "3";
        // 
        containerImages.addEventListener("click", () => {
          clearInterval(id);
        });
        // setInterval, ejecuta una función cada cierto periodo de tiempo determinado.
        // setInterval(función, intervaloDeTiempo)
        // clearInterval detiene el temporizador.

        var id = setInterval(
          // Fuction
          () => { 
          preload.textContent = n;
          if (n == 2) preload.style.borderRight = "3vh solid #141414";
          if (n == 1) preload.style.borderBottom = "3vh solid #141414";
          if (n == 0) preload.style.borderLeft = "3vh solid #141414";
          if (n < 0) {
            clearInterval(id);
            params.goTo("/");
          }
          // 
          n--;
        }
        // Time
        , time);
      }

      countdown(1000, 3);

      div.appendChild(containerCount);
      containerCount.appendChild(preload);
      div.appendChild(containerImages);
      div.appendChild(style);
      shadow.appendChild(div);
    }
  }

  if (!customElements.get("election-page")) {
    customElements.define("election-page", PageElection);
  }

  return "<election-page></election-page>";
}
