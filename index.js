import{a as b,S as w,i}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="https://pixabay.com/api/",v="55927319-d2860dd64df6f91fa3e520f31";async function u(s,t){return(await b.get(S,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(s){const t=s.map(o=>`
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
</li>`).join("");f.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){f.innerHTML=""}function p(){m.classList.remove("is-hidden")}function g(){m.classList.add("is-hidden")}function P(){y.classList.remove("is-hidden")}function L(){y.classList.add("is-hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let n=1,a="",l=0;B.addEventListener("submit",O);$.addEventListener("click",x);async function O(s){if(s.preventDefault(),a=s.currentTarget.elements["search-text"].value.trim(),!!a){n=1,M(),L(),p();try{const t=await u(a,n);if(l=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits),l>15&&P()}catch{i.error({message:"Something went wrong!"})}finally{g()}}}async function x(){n+=1,p();try{const s=await u(a,n);h(s.hits);const t=Math.ceil(l/15);n>=t&&(L(),i.info({message:"We're sorry, but you've reached the end of search results."}));const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}catch{i.error({message:"Something went wrong!"})}finally{g()}}
//# sourceMappingURL=index.js.map
