import{i,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=document.getElementById("search-form"),m=document.getElementById("search-input"),c=document.getElementById("gallery"),l=document.getElementById("loader"),p="44426411-2b9aaab226d67ab5863731517";u.addEventListener("submit",async n=>{n.preventDefault();const o=m.value.trim();if(!o){i.error({title:"Error",message:"Search query cannot be empty!"});return}c.innerHTML="",l.style.display="block";try{const s=await(await fetch(`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`)).json();s.hits.length===0?i.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):f(s.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later!"})}finally{l.style.display="none"}});function f(n){const o=n.map(t=>`
            <a href="${t.largeImageURL}" class="gallery-item">
                <img src="${t.webformatURL}" alt="${t.tags}" />
                <div class="info">
                    <p><b>Likes:</b> ${t.likes}</p>
                    <p><b>Views:</b> ${t.views}</p>
                    <p><b>Comments:</b> ${t.comments}</p>
                    <p><b>Downloads:</b> ${t.downloads}</p>
                </div>
            </a>
        `).join("");c.innerHTML=o,new d(".gallery a").refresh()}
//# sourceMappingURL=commonHelpers.js.map
