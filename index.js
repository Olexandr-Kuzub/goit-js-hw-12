import{a as w,S,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",P="55927319-d2860dd64df6f91fa3e520f31";async function u(s,t){return(await w.get(v,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),q=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s){const t=s.map(o=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
    <img
      class="gallery-image"
      src="${o.webformatURL}"
      alt="${o.tags}"
    />
  </a>
  <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${o.likes}
            </p>

            <p class="info-item">
              <b>Views</b>
              ${o.views}
            </p>

            <p class="info-item">
              <b>Comments</b>
              ${o.comments}
            </p>

            <p class="info-item">
              <b>Downloads</b>
              ${o.downloads}
            </p>
          </div>
</li>`).join("");f.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){f.innerHTML=""}function p(){m.classList.remove("is-hidden")}function g(){m.classList.add("is-hidden")}function b(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let n=1,i="",l=0;B.addEventListener("submit",O);$.addEventListener("click",x);async function O(s){if(s.preventDefault(),i=s.currentTarget.elements["search-text"].value.trim(),!!i){n=1,M(),L(),p();try{const t=await u(i,n);if(l=t.totalHits,t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(t.hits),Math.ceil(l/15)>1?b():a.info({message:"We're sorry, but you've reached the end of search results."})}catch{a.error({message:"Something went wrong!"})}finally{g()}}}async function x(){n+=1,L(),p();try{const s=await u(i,n);y(s.hits);const t=Math.ceil(l/15);n>=t?a.info({message:"We're sorry, but you've reached the end of search results."}):b();const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}catch{a.error({message:"Something went wrong!"})}finally{g()}}
//# sourceMappingURL=index.js.map
