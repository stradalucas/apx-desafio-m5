var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},i=n.parcelRequire79af;null==i&&((i=function(n){if(n in e)return e[n].exports;if(n in t){let i=t[n];delete t[n];let o={id:n,exports:{}};return e[n]=o,i.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){t[n]=e},n.parcelRequire79af=i);const o={data:{currentRound:{computerPlay:"",myPlay:""},history:{computerWin:0,myWin:0}},getState(){return this.data},setState(n){this.data=n},setMove(n){const{currentRound:e}=this.getState();e.myPlay=n,e.computerPlay=["papel","piedra","tijera"][Math.floor(3*Math.random())],this.historyState()},whoWins(){const{currentRound:n}=this.getState(),e=n.myPlay,t=n.computerPlay;return"papel"==e&&"piedra"==t||"tijera"==e&&"papel"==t||"piedra"==e&&"tijera"==t?"win":e==t?"tie":"lose"},historyState(){const n=this.whoWins(),e=this.getState(),t=e.history.myWin,i=e.history.computerWin;"win"==n&&this.setState({...e,history:{myWin:t+1,computerWin:i}}),"lose"==n&&this.setState({...e,history:{myWin:t,computerWin:i+1}}),localStorage.setItem("state",JSON.stringify(o.getState()))}};var r;i.register("vNK0r",(function(n,e){var t,i,o,r,a;t=n.exports,i="getBundleURL",o=()=>a,r=n=>a=n,Object.defineProperty(t,i,{get:o,set:r,enumerable:!0,configurable:!0});var s=null;function c(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(){return s||(s=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return c(n[0])}return"/"}()),s}})),r=i("vNK0r").getBundleURL()+"papel.411bce94.svg";var a;a=i("vNK0r").getBundleURL()+"piedra.578f3049.svg";var s;s=i("vNK0r").getBundleURL()+"tijera.0403a6bb.svg";const c=n=>{class e extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style");t.innerHTML=`\n      <img class="tijeraEl" src=${s}>\n      <img class="piedraEl" src=${a}>\n      <img class="papelEl" src=${r}>\n        `,i.innerHTML="\n         \n        div{\n          display: flex;\n          column-gap: 4.5vw;\n        } \n        \n          img{\n            height: 25vh;\n         }\n          img:hover, img:active, img:focus{\n            transform: translateY(1vh);\n            transition: .5s;\n         }\n\n         .piedraDown, .tijeraDown, .papelDown{\n          opacity: 0.5;\n          position: relative;\n          top: 5vh;\n         }\n         \n         ";const c=t.querySelector(".papelEl"),l=t.querySelector(".piedraEl"),d=t.querySelector(".tijeraEl");"election"==this.getAttribute("variant")&&(i.innerHTML+="\n          img:hover, img:active, img:focus{\n            transform: translateY(0vh);\n         }",c.addEventListener("click",(()=>{l.classList.add("piedraDown"),d.classList.add("tijeraDown"),setTimeout((()=>{o.setMove("papel"),n.goTo("/versus")}),1e3)})),l.addEventListener("click",(()=>{c.classList.add("papelDown"),d.classList.add("tijeraDown"),setTimeout((()=>{o.setMove("piedra"),n.goTo("/versus")}),1e3)})),d.addEventListener("click",(()=>{l.classList.add("piedraDown"),c.classList.add("papelDown"),setTimeout((()=>{o.setMove("tijera"),n.goTo("/versus")}),1e3)}))),e.appendChild(i),e.appendChild(t)}}customElements.define("move-comp",e)};var l;l=i("vNK0r").getBundleURL()+"ganaste.5ece265f.svg";var d;d=i("vNK0r").getBundleURL()+"perdiste.6da996ab.svg";const p=[{path:/\//,component:function(n){class e extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style");e.setAttribute("class","container"),e.innerHTML='\n        <div class="container__main">\n          <div class="container__elements">\n            <text-comp variant="title"></text-comp>\n            <button-comp text="Empezar"><button-comp>\n          </div>\n          <div class="container__images">\n            <move-comp variant="welcome"></move-comp>\n          </div>\n        </div>\n      ',t.innerHTML="\n        \n      .container{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding: 0 1vw;\n        min-width: 345px;\n        height: 100vh;\n        margin: 0 auto;\n      }\n      \n      .container__main{\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n      }\n      .container__elements{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        row-gap: 9vh;\n        width: 100%;\n        height: 75vh;\n      }\n\n      .container__images{\n          margin-bottom:-3.5vh;\n        }\n\n      ",e.appendChild(t),n.appendChild(e)}}return customElements.get("welcome-page")||customElements.define("welcome-page",e),"<welcome-page></welcome-page>"}},{path:/\/instruction/,component:function(n){class e extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style");e.setAttribute("class","container"),e.innerHTML='\n\n      <div class="container__main">\n          <div class="container__elements">\n          <text-comp variant="election"></text-comp>\n          <button-comp text="Jugar"><button-comp>\n          </div>\n          <div class="container__images">\n            <move-comp variant="welcome"></move-comp>\n          </div>\n        </div>\n      ',t.innerHTML="\n\n      .container{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding: 0 1vw;\n        min-width: 345px;\n        height: 100vh;\n        margin: 0 auto;\n      }\n      \n      .container__main{\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n      }\n      .container__elements{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        row-gap: 9vh;\n        width: 100%;\n        height: 75vh;\n      }\n\n      .container__images{\n          margin-bottom:-3.5vh;\n        }\n\n      ",e.appendChild(t),n.appendChild(e)}}return customElements.get("instruction-page")||customElements.define("instruction-page",e),"<instruction-page></instruction-page>"}},{path:/\/election/,component:function(n){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),r=document.createElement("style"),a=document.createElement("div");t.setAttribute("class","container"),i.setAttribute("class","preload"),o.setAttribute("class","container__timer"),a.setAttribute("class","container__images"),a.innerHTML='\n      <move-comp variant="election"></move-comp>\n      ',r.innerHTML="\n\n          .container{\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;;\n            align-items: center;\n            padding: 0 1vw;\n            min-width: 345px;\n            height: 100vh;\n            margin: 0 auto;\n          }\n          \n          .container__timer{\n            padding-top:15vh;\n            height: 75vh;\n          }\n          \n          .preload {\n            font-family: 'Odibee Sans', cursive;\n            font-size : calc((8vh + 2vw)/1.25);\n            width:  calc(16vh + 8vw);\n            height: calc(16vh + 8vw);\n            border: 3vh solid #eee;\n            border-top: 3vh solid #141414;\n            border-radius: 50%;\n            transition: 1s;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n          }\n          \n      ",function(e,t){i.textContent="3",a.addEventListener("click",(()=>{clearInterval(o)}));var o=setInterval((()=>{i.textContent=t,2==t&&(i.style.borderRight="3vh solid #141414"),1==t&&(i.style.borderBottom="3vh solid #141414"),0==t&&(i.style.borderLeft="3vh solid #141414"),t<0&&(clearInterval(o),n.goTo("/")),t--}),e)}(1e3,3),t.appendChild(o),o.appendChild(i),t.appendChild(a),t.appendChild(r),e.appendChild(t)}}return customElements.get("election-page")||customElements.define("election-page",e),"<election-page></election-page>"}},{path:/\/versus/,component:function(n){class e extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),p=document.createElement("style"),m=o.getState();e.setAttribute("class","container"),t.setAttribute("class","background"),i.setAttribute("class","cardScore");const u="piedra"==m.currentRound.myPlay?a:"papel"==m.currentRound.myPlay?r:s,h="piedra"==m.currentRound.computerPlay?a:"papel"==m.currentRound.computerPlay?r:s;e.innerHTML=`\n        <img class="computerPlay" src=${h}>\n        <img class="myPlay" src=${u}>\n        `,setTimeout((()=>{const n=o.whoWins();"win"==n&&(e.appendChild(t),t.innerHTML=`\n            <img class="win" src=${l}>\n          `,t.style.backgroundColor="rgba(136, 137, 73, 0.9)"),"lose"==n&&(e.appendChild(t),t.innerHTML=`\n            <img class="lose" src=${d}>\n          `,t.style.backgroundColor="rgba(137, 73, 73, 0.9)"),"tie"==n&&(e.appendChild(t),t.innerHTML='\n          <span class="tie">Empate</span>\n          ',t.style.backgroundColor="rgba(50, 30, 90, 0.9)"),i.innerHTML=`\n          <h3>Score</h3>\n          <div class="span-container">\n            <span>Vos: ${m.history.myWin}</span>\n            <span>Máquina: ${m.history.computerWin}</span>\n          <div>\n        `,c.innerHTML='\n        <button-comp text="Volver a jugar"></button-comp>\n        <button-comp color="invert" text="Reiniciar puntaje"></button-comp>\n        ',t.appendChild(i),t.appendChild(c)}),2e3),p.innerHTML="\n\n          .container{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: space-between;\n            font-size : calc( (8vh + 2vw)/2);\n            color: #141414;\n            font-family: 'Odibee Sans', cursive;\n            width: 100vw;\n            height: 100vh;\n            overflow: hidden;\n          }\n\n          h3{\n            text-align:center;\n            margin:0;\n          }\n\n          .tie{\n            color: #FAFAFA;\n          }\n          .win, .lose {\n            height: calc( (35vh + 15vw)/1.9);\n          }\n          .computerPlay {\n            top:0px;\n            transform: rotate(180deg);\n            height:45vh;\n          }\n          .myPlay {\n            bottom:0px;\n            height:45vh;\n          }\n\n          .background{\n            width:100%;\n            height:100vh;\n            z-index:1;\n            display:flex;\n            flex-direction:column;\n            justify-content:space-evenly;\n            align-items:center;\n            position: absolute;\n            top: 0;\n          }\n\n          .cardScore{\n            border: 7px solid #141414;\n            border-radius: 1vh;\n            background-color:#fafafa;\n            padding: 1vh 3vw 2vh;\n          }\n\n          .span-container{\n            display:flex;\n            flex-direction:column;\n            align-items:flex-end;\n            font-family: 'Odibee Sans', cursive;\n          }\n\n      ",e.appendChild(p),n.appendChild(e)}}return customElements.get("round-page")||customElements.define("round-page",e),"<round-page></round-page>"}}];function m(n){function e(t){history.pushState({},"",t),function(t){for(const i of p)i.path.test(t)&&(n.firstChild&&n.firstChild.remove(),n.innerHTML=i.component({goTo:e}))}(t)}c({goTo:e}),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style");"title"==this.getAttribute("variant")&&(e.innerHTML='\n                <h1 class="title">\n                  Piedra <br>\n                  Papel ó <br>\n                  Tijera <br>\n                </h1>\n                ',t.innerHTML="\n\n        .title {\n            color: #009048;\n            font-weight: bold;\n            font-size: calc( (8vh + 2vw)/1.4);\n            font-family: 'Cutive', serif;\n            line-height: 1.25;\n            margin: 0 auto;\n            letter-spacing: 1.5px;\n            width: fit-content;\n          }\n            \n            "),"election"==this.getAttribute("variant")&&(e.innerHTML='\n                <h3 class="election">\n                  Presioná jugar <br>\n                  y elegí: piedra, <br>\n                  papel o tijera <br>\n                  antes de que <br> \n                  pasen los 3 <br>\n                  segundos.\n                </h3>\n                ',t.innerHTML="\n                .election {\n                    font-size : calc( (8vh + 2vw)/2.1);\n                    color: #141414;\n                    font-family: 'Cutive', serif;\n                    text-align: center;\n                    line-height: 1.25;\n                    margin: 0 auto;\n                    width: fit-content;\n                }\n                \n            "),n.appendChild(e),n.appendChild(t)}}customElements.define("text-comp",n)}(),function(n){class e extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style"),r=document.createElement("button");r.setAttribute("class","button"),i.innerHTML="\n\n          .button{\n            width: 100%;\n            min-width: 320px;\n            background-color:#141414;\n            border-radius: 1vh;\n            border: 10px groove #4C4C4C;\n            font-size: calc( (8vh + 2vw)/2.25);\n            color:#Fafafa;\n            font-family: 'Odibee Sans', cursive;\n            align-self: center;\n            padding: 1.25vh 1.25vw;\n            z-index:20;\n            margin: .5vh 0;\n          }\n          .button:hover, .button:active, .button:focus {\n            background-color:#6CB46C;\n            border: 10px groove #009048;\n            transform: translateY(.5vh);\n            transition: .5s;\n\n\n          }\n          \n      ","invert"==this.getAttribute("color")&&(i.innerHTML+="\n        .button{\n          background-color:#Fafafa;\n          border: 10px groove #4C4C4C;\n          color:#141414;\n        }\n        .button:hover, .button:active, .button:focus {\n          background-color:#006CFC;\n          border: 10px groove #001997;\n          color: #Fafafa;\n          transform: translateY(.5vh);\n          transition: .5s;\n\n        "),this.textContent=this.getAttribute("text"),r.addEventListener("click",(()=>{"Empezar"==this.textContent&&n.goTo("/instruction"),"Jugar"==this.textContent&&n.goTo("/election"),"Volver a jugar"==this.textContent&&n.goTo("/election"),"Reiniciar puntaje"==this.textContent&&(o.setState({...o.getState(),history:{computerWin:0,myWin:0}}),localStorage.removeItem("state"),n.goTo("/"))})),r.textContent=this.textContent,e.appendChild(t),e.appendChild(i),t.appendChild(r)}}customElements.define("button-comp",e)}({goTo:e})}!function(){const n=JSON.parse(localStorage.getItem("state"))||o.getState();o.setState({...n});m(document.querySelector(".root"))}();
//# sourceMappingURL=index.6564621f.js.map
