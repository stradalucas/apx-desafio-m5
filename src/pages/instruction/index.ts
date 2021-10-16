
export function initPageInstruction(params) {
  class PageInstruction extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");
      div.setAttribute("class", "container");

      div.innerHTML = `

      <div class="container__main">
          <div class="container__elements">
          <text-comp variant="election"></text-comp>
          <button-comp text="Jugar"><button-comp>
          </div>
          <div class="container__images">
            <move-comp variant="welcome"></move-comp>
          </div>
        </div>
      `;

      style.innerHTML = `

      .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1vw;
        min-width: 345px;
        height: 100vh;
        margin: 0 auto;
      }
      
      .container__main{
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }
      .container__elements{
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 9vh;
        width: 100%;
        height: 75vh;
      }

      .container__images{
          margin-bottom:-3.5vh;
        }

      `;

      div.appendChild(style);
      shadow.appendChild(div);
    }
  }

  if (!customElements.get("instruction-page")) {
    customElements.define("instruction-page", PageInstruction);
  }

  return "<instruction-page></instruction-page>";
}