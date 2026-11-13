(function(){
var P='fill:none',I={
home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
progress:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
revision:'<path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2zM12 6v14"/>'};
var L=[['home.html','Home','home','#e3a83f'],['my-progress.html','My Progress','progress','#7cb35c'],['bookmarks.html','Bookmarks','bookmark','#1db5d3'],['revision.html','Revision','revision','#a35be0']];
var cur=location.pathname.split('/').pop()||'home.html';if(cur==='index.html'&&false)cur='';
var n=document.createElement('nav');n.className='bnav';
n.innerHTML=L.map(function(x){return '<a href="'+x[0]+'" style="--c:'+x[3]+'"'+(cur===x[0]?' class="on"':'')+'><i><svg viewBox="0 0 24 24">'+I[x[2]]+'</svg></i>'+x[1]+'</a>'}).join('');
document.body.appendChild(n);
})();
