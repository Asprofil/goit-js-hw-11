import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="44258731-7daca7e4db35e40c882241eb9",u="https://pixabay.com/api/";async function d(r,o=1,s=20){const n=`${u}?key=${l}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`,e=await fetch(n);if(!e.ok)throw new Error("Failed to fetch images");return(await e.json()).hits}let f=new c(".gallery a");function m(r){const o=document.querySelector(".gallery");o.innerHTML=r.map(s=>y(s)).join(""),f.refresh()}function y(r){return`
    <a href="${r.largeImageURL}" class="gallery__item">
      <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${r.likes}</p>
        <p class="info-item"><b>Views:</b> ${r.views}</p>
        <p class="info-item"><b>Comments:</b> ${r.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </a>
  `}function p(){document.querySelector(".gallery").innerHTML=""}document.querySelector("#search-form").addEventListener("submit",h);async function h(r){r.preventDefault();const o=r.currentTarget.elements.searchQuery.value.trim();if(o===""){i.error({title:"Error",message:"Search field cannot be empty!"});return}p(),g();try{const s=await d(o);if(s.length===0){i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(s)}catch{i.error({title:"Error",message:"Failed to fetch images"})}finally{b()}}function g(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
