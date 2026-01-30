setTimeout(()=>{
document.getElementById('splash').style.display='none';
document.querySelector('.app').classList.remove('hidden');
},900);

document.getElementById('shareBtn').onclick=async()=>{
const data={title:'Pura Gracia Radio',text:'Escucha Pura Gracia Radio en vivo',url:'https://samcloud.spacial.com/w/135533/'};
if(navigator.share){navigator.share(data)}
else{navigator.clipboard.writeText(data.url);alert('Enlace copiado')}
};
