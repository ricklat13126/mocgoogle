/* Video Theater Frame buttons — Share and Copy Link for the .vidbar under
   each video. Pure JavaScript, no libraries. Free to use.
   Live on mocgoogle.com/watch.html and /shelves.html since 2026-11-24.
   Include once per page, just before </body>, or load as an external file.
   Works with the markup in video-theater-frame.css. */

document.querySelectorAll('.vidbar button').forEach(function(b){b.addEventListener('click',function(){var url=b.getAttribute('data-share')||b.getAttribute('data-copy');if(b.hasAttribute('data-share')&&navigator.share){navigator.share({url:url}).catch(function(){});return;}function ok(){var t=b.textContent;b.textContent='Copied!';setTimeout(function(){b.textContent=t;},1500);}if(navigator.clipboard){navigator.clipboard.writeText(url).then(ok,ok);}else{var ta=document.createElement('textarea');ta.value=url;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);ok();}});});
