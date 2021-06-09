let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&t.push(e)}function n(t){pokemonRepository.loadDetails(t).then(function(){let e=$(".modal-body"),n=$(".modal-title");n.empty(),e.empty();let o=$("<h1>"+t.name+"</h1>"),i=$('<img class="modal-img" style="width:50%">');i.attr("src",t.imageUrl);let a=$("<p>Height: "+t.height+"</p>"),l=document.createElement("span"),r="Types: ";t.types.forEach(function(t){r+=t.type.name+" "}),l.innerHTML=r,n.append(o),e.append(i),e.append(a),e.append(l),$("#pokemonModal").modal("toggle")})}return{add:e,getAll:function(){return t},addListItem:function(t){let e=document.querySelector(".list-group"),o=document.createElement("li");o.classList.add("list-group-item","list-group-item-action");let i=document.createElement("button");i.innerText=t.name,i.classList.add("btn","btn-block"),i.setAttribute("data-target","#pokemonModal","data-toggle","modal"),e.appendChild(o),o.appendChild(i),i.addEventListener("click",function(){n(t)})},loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:function(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=[...e.types]}).catch(function(t){console.error(t)})},showDetails:n}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});
