(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const i="44258731-7daca7e4db35e40c882241eb9",c="https://pixabay.com/api/";async function l(t,o=1,s=12){const n=`${c}?key=${i}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`,e=await fetch(n);if(!e.ok)throw new Error("Failed to fetch images");return(await e.json()).hits}let u=new SimpleLightbox(".gallery a");function d(t){const o=document.querySelector(".gallery");o.innerHTML=t.map(s=>f(s)).join(""),u.refresh()}function f(t){return`
    <a href="${t.largeImageURL}" class="gallery__item">
      <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${t.likes}</p>
        <p class="info-item"><b>Views:</b> ${t.views}</p>
        <p class="info-item"><b>Comments:</b> ${t.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </a>
  `}function m(){document.querySelector(".gallery").innerHTML=""}document.querySelector("#search-form").addEventListener("submit",y);async function y(t){t.preventDefault();const o=t.currentTarget.elements.searchQuery.value.trim();if(o===""){iziToast.error({title:"Error",message:"Search field cannot be empty!"});return}m(),p();try{const s=await l(o);if(s.length===0){iziToast.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}d(s)}catch{iziToast.error({title:"Error",message:"Failed to fetch images"})}finally{h()}}function p(){document.querySelector(".loader").classList.remove("hidden")}function h(){document.querySelector(".loader").classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
