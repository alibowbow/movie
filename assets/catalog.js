(() => {
  const movies=window.MOVIES;
  if(!Array.isArray(movies)||!movies.length)return;
  const cards=document.getElementById('cards');
  const fragment=document.createDocumentFragment();
  const node=(tag,cls,text)=>{const el=document.createElement(tag);el.className=cls;if(text)el.textContent=text;return el;};
  movies.forEach((movie,index)=>{
    const card=node('article','movie-card');card.style.animationDelay=`${Math.min(index*.1,.5)+.15}s`;
    const link=node('a','movie-link');link.href=movie.href;
    const preview=node('div','preview'),img=node('img','');img.src=movie.image;img.alt=movie.imageAlt;img.width=1440;img.height=810;if(index)img.loading='lazy';else img.fetchPriority='high';
    const watch=node('span','watch','▶  감상하기');preview.append(img,node('span','preview-label',`${String(index+1).padStart(2,'0')} / ${index?'THE COLLECTION':'FEATURED FILM'}`),watch,node('span','duration',movie.duration));
    const content=node('div','card-content'),meta=node('div','card-meta');meta.append(node('span','',movie.genre),node('span','',movie.year));
    const heading=node('div','card-heading'),arrow=node('span','card-arrow','↗');arrow.setAttribute('aria-hidden','true');heading.append(node('h3','',movie.title),arrow);
    const description=node('p','','');movie.description.split('\n').forEach((line,i)=>{if(i)description.append(document.createElement('br'));description.append(document.createTextNode(line));});
    const foot=node('div','card-foot');foot.append(node('span','',`${movie.koreanTitle} · ${movie.note}`),node('span','',movie.audio));
    content.append(meta,heading,description,foot);link.append(preview,content);card.append(link);fragment.append(card);
  });
  cards.replaceChildren(fragment);document.getElementById('count').textContent=String(movies.length).padStart(2,'0');
})();
