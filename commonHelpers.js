(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const i="44258731-7daca7e4db35e40c882241eb9",c="https://pixabay.com/api/";async function l(e){const o=`${c}?key=${i}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,s=await fetch(o);if(!s.ok)throw new Error("Failed to fetch images");return(await s.json()).hits}let u=new SimpleLightbox(".gallery a");function d(e){const o=document.querySelector(".gallery");o.innerHTML=e.map(s=>f(s)).join(""),u.refresh()}function f(e){return`
    <a href="${e.largeImageURL}" class="gallery__item">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${e.likes}</p>
        <p class="info-item"><b>Views:</b> ${e.views}</p>
        <p class="info-item"><b>Comments:</b> ${e.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </a>
  `}function m(){document.querySelector(".gallery").innerHTML=""}document.querySelector("#search-form").addEventListener("submit",p);async function p(e){e.preventDefault();const o=e.currentTarget.elements.searchQuery.value.trim();if(o===""){iziToast.error({title:"Error",message:"Search field cannot be empty!"});return}m(),y();try{const s=await l(o);if(s.length===0){iziToast.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}d(s)}catch{iziToast.error({title:"Error",message:"Failed to fetch images"})}finally{g()}}function y(){document.querySelector(".loader").classList.remove("hidden")}function g(){document.querySelector(".loader").classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
