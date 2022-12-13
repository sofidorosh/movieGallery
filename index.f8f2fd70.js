function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequired7c6=a),a.register("kyEFX",(function(e,n){var i,o;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.f8f2fd70.js","frxiO":"placeholder.2262f4e0.png"}'));var s;s=new URL(a("kyEFX").resolve("frxiO"),import.meta.url).toString();const r=document.querySelector(".movie-list"),l=document.querySelector(".pagination-list"),c=document.querySelector(".pagination"),u=document.querySelector("body").getBoundingClientRect(),d=document.querySelector(".information"),p=document.querySelector(".backdrop"),m=document.querySelector(".close-button");function b(){[...document.querySelectorAll(".pagination-button")].map((t=>{if(t.classList.contains("active")){const e=Number(t.textContent)-1;g(e).then((({results:t})=>{$(t)})).catch((t=>console.log(t))),E(l),k(e),v(e),A(e)}}))}function f(){[...document.querySelectorAll(".pagination-button")].map((t=>{if(t.classList.contains("active")){const e=Number(t.textContent)+1;g(e).then((({results:t})=>{$(t)})).catch((t=>console.log(t))),E(l),k(e),v(e),A(e)}}))}function v(t){const e=c.firstElementChild,n=c.lastElementChild;1===t?(e.disabled="true",n.hasAttribute("disabled")&&n.removeAttribute("disabled")):20===t?(n.disabled="true",e.hasAttribute("disabled")&&e.removeAttribute("disabled")):(e.hasAttribute("disabled")&&(console.log(e.hasAttribute("disabled")),e.removeAttribute("disabled")),n.hasAttribute("disabled")&&n.removeAttribute("disabled"))}async function g(t=1){const e=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=bfcd7a06a5bb09fb5aafe756d2f60f73&page=${t}`);if(!e.ok)throw new Error(e.status);return await e.json()}r.addEventListener("click",(function(t){let e=0;t.target.closest("li")&&(e=t.target.closest("li").dataset.id);E(d),async function(t){const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=bfcd7a06a5bb09fb5aafe756d2f60f73`);if(!e.ok)throw new Error(e.status);return await e.json()}(e).then((t=>function({genres:t,original_title:e,overview:n,popularity:i,poster_path:o,title:a,vote_average:s,vote_count:r}){const l=`<img ${w(o)} alt="Movie poster"  />\n    <div class="movie-details">\n      <h3 class="movie-heading">${a}</h3>\n      <ul class="movie-list-info">\n        <li class="movie-list-info__item">\n          <p class="movie-testimonial">Vote / Votes</p>\n          <p class="movie-mark">\n            <span class="rating">${y(s)}</span><span class="delimeter">/</span\n            ><span class="quantity">${r}</span>\n          </p>\n        </li>\n        <li class="movie-list-info__item">\n          <p class="movie-testimonial">Popularity</p>\n          <p class="movie-mark">${y(i)}</p>\n        </li>\n        <li class="movie-list-info__item">\n          <p class="movie-testimonial">Original Title</p>\n          <p class="movie-mark movie-mark--original-title">${e}</p>\n        </li>\n        <li class="movie-list-info__item">\n          <p class="movie-testimonial">Genre</p>\n          <p class="movie-mark">${t.map((t=>t.name)).join(", ")}</p>\n        </li>\n      </ul>\n      <p class="about">About</p>\n      <p class="about-descr">${n}</p>\n      <div class="button-wrapper button-wrapper--modal">\n        <button class="button modal-button" type="button">\n          Add to watched\n        </button>\n        <button\n          class="button queue modal-button modal-button-queue"\n          type="button"\n        >\n          Add to queue\n        </button>\n      </div>\n    </div>`;d.innerHTML=l}(t))).catch((t=>console.log(t))),p.classList.remove("is-hidden"),window.addEventListener("keydown",S)})),m.addEventListener("click",q),p.addEventListener("click",(function(t){t.currentTarget===t.target&&q()})),g().then((({results:t})=>{$(t),k(1),v(1),A(1),l.addEventListener("click",L);const e=document.querySelector(".arrow-left"),n=document.querySelector(".arrow-right");e.addEventListener("click",b),n.addEventListener("click",f)})).catch((t=>console.log(t)));const h={12:"Adventure",14:"Fantasy",16:"Animation",18:"Drama",27:"Horror",28:"Action",35:"Comedy",36:"History",37:"Western",53:"Thriller",80:"Crime",99:"Documentary",878:"Sci-Fi",9648:"Mystery",10402:"Music",10749:"Romance",10751:"Family",10752:"War",10770:"TV Movie"};function y(t){return t.toFixed(1)}function w(t){return t?`src="https://image.tmdb.org/t/p/w500${t}"`:`src="${e(s)}"`}function $(t){const e=t.map((({id:t,poster_path:e,title:n,genre_ids:i,release_date:o,vote_average:a})=>{return`<li class="movie-list__item" data-id="${t}">\n            <img class="movie-image" ${w(e)} alt="Movie poster" loading="lazy" />\n            <div class="movie-descr">\n              <h2 class="movie-title">${n||"Unknown"}</h2>\n              <p class="movie-info">${r=i,r.map((t=>h[t])).slice(0,3).join(", ")||"Other"} | ${s=o,new Date(s).getFullYear()||"Unknown"}<span class="vote-average">${y(a)}</span></p>\n            </div>\n        </li>`;var s,r})).join("");r.innerHTML=e}function _(t){return t.map((t=>`<li class="pagination-item">\n          <button class="pagination-button" type="button">${t}</button>\n        </li>`)).join("")}function k(t){let e=[],n="",i=0;const o='<li class="pagination-item"><button class="pagination-button" type="button">...</button></li>',a='<li class="pagination-item"><button class="pagination-button" type="button">1</button></li>',s='<li class="pagination-item"><button class="pagination-button" type="button">20</button></li>';if(t>=1&&t<=3){i=5;for(let t=1;t<=i;t+=1)e.push(t);if(u.width<768){n=`${_(e)}`}else{n=`${_(e)} ${o} ${s}`}}else if(t>3&&t<18){i=t+2;for(let n=t-2;n<=i;n+=1)e.push(n);if(u.width<768){n=`${_(e)}`}else{n=`${a} ${o} ${_(e)} ${o} ${s}`}}else if(t>=18){for(let t=16;t<=20;t+=1)e.push(t);if(u.width<768){n=`${_(e)}`}else{n=`${a} ${o} ${_(e)}`}}l.innerHTML=n}function A(t){[...document.querySelectorAll(".pagination-button")].map((e=>{e.classList.contains("active")&&e.classList.remove("active"),Number(e.textContent)===t&&e.classList.add("active")}))}function E(t){t.innerHTML=""}function L(t){if("BUTTON"===t.target.nodeName&&t.target.textContent){const e=Number(t.target.textContent);E(r),g(e).then((({results:t})=>{$(t)})).catch((t=>console.log(t))),E(l),k(e),v(e),A(e)}}function q(){p.classList.add("is-hidden")}function S(t){"Escape"===t.code&&q()}
//# sourceMappingURL=index.f8f2fd70.js.map
