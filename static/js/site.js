// Small progressive enhancements. Content and links work without JavaScript.
const toggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');
const menu = document.querySelector('#nav-list');
const menuBreakpoint = window.matchMedia('(max-width: 1220px)');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
function closeMenu(returnFocus = false) {
  header?.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Open menu');
  if (returnFocus) toggle?.focus();
}
if (toggle && header && menu) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && header.classList.contains('is-open')) closeMenu(true);
  });
  menu.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('click', e => { if (!header.contains(e.target)) closeMenu(); });
  document.addEventListener('focusin', e => { if (!header.contains(e.target)) closeMenu(); });
  menuBreakpoint.addEventListener('change', () => closeMenu());
}
const revealItems = document.querySelectorAll('[data-reveal], .image-text__bg, .photo-duo img, .photo-grid img, .class-row__text, .class-row__media, .plan, .event, .coach__name, .coach__bio, .section-heading, .contact-block__card, .statement, .discount');
let revealObserver;
if ('IntersectionObserver' in window && !motion.matches) {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
  revealItems.forEach((el, i) => {
    el.setAttribute('data-reveal', '');
    if (el.getBoundingClientRect().top > window.innerHeight * .85) {
      el.classList.add('reveal-pending');
      if (el.matches('.plan,.event,.photo-grid img')) el.style.setProperty('--reveal-delay', `${(i % 3) * 65}ms`);
      revealObserver.observe(el);
    }
  });
  if (!location.hash) document.body.classList.add('hero-ready');
}

const progress = document.querySelector('.reading-progress');
const hero = document.querySelector('.hero');
const heroPhoto = hero?.querySelector('.hero-media') || hero?.querySelector('.hero__bg');
const academy = document.querySelector('.page-home .image-text');
const statement = document.querySelector('.academy-statement');
const duo = document.querySelector('.photo-duo');
const programs = document.querySelector('.programs');
const wideStory = matchMedia('(min-width: 1000px) and (min-height: 650px) and (pointer: fine)');
const clamp = (n, min=0, max=1) => Math.max(min, Math.min(max, n));
let words = [];
const heroMedia=hero?.querySelector('.hero-media');
if(heroMedia){
  const photos=[...heroMedia.querySelectorAll('img')];
  const controls=hero.querySelector('.hero-carousel-controls');
  const dots=[...controls.querySelectorAll('.hero-dot')];
  let active=0,timer,paused=motion.matches,visible=true,hovered=false,focused=false;
  controls.hidden=false;
  const select=index=>{
    active=index;
    photos.forEach((photo,i)=>{photo.classList.toggle('is-current',i===active);photo.setAttribute('aria-hidden',String(i!==active));});
    dots.forEach((dot,i)=>{dot.classList.toggle('is-active',i===active);dot.setAttribute('aria-pressed',String(i===active));});
  };
  const schedule=()=>{
    clearTimeout(timer);
    if(paused||motion.matches||!visible||hovered||focused||document.hidden)return;
    timer=setTimeout(()=>{const next=(active+1)%photos.length;if(photos[next].complete&&photos[next].naturalWidth)select(next);schedule();},6500);
  };
  const setPaused=value=>{
    paused=value;
    schedule();
  };
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>{select(i);setPaused(true);}));
  hero.addEventListener('mouseenter',()=>{hovered=true;schedule();});
  hero.addEventListener('mouseleave',()=>{hovered=false;schedule();});
  hero.addEventListener('focusin',()=>{focused=true;schedule();});
  hero.addEventListener('focusout',e=>{if(!hero.contains(e.relatedTarget)){focused=false;schedule();}});
  document.addEventListener('visibilitychange',schedule);
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.05}).observe(hero);
  motion.addEventListener('change',()=>setPaused(motion.matches||paused));
  select(0);setPaused(paused);
}
if (statement && !motion.matches) {
  // Preserve the exact copy and spaces; spans only control the reading reveal.
  const fragment = document.createDocumentFragment();
  statement.textContent.split(/(\s+)/).forEach(part => {
    if (/^\s+$/.test(part)) fragment.append(document.createTextNode(part));
    else { const span=document.createElement('span');span.className='word';span.textContent=part;words.push(span);fragment.append(span); }
  });
  statement.replaceChildren(fragment);
}
let story = null;
let framePending = false;
function paintScroll() {
  framePending = false;
  const travel = document.documentElement.scrollHeight - innerHeight;
  if (progress) progress.style.transform = `scaleX(${travel > 0 ? clamp(scrollY / travel) : 0})`;
  if (!motion.matches) {
    if (heroPhoto) {
      const rect = hero.getBoundingClientRect();
      if (rect.bottom >= 0) {
        const p = clamp(-rect.top / rect.height);
        heroPhoto.style.transform = `translate3d(0, ${Math.min(p * 90,80)}px, 0) scale(${1.09-p*.055})`;
        hero.style.setProperty('--title-drift', `${p*38}px`);
      }
    }
    if (academy) {
      const rect=academy.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0) {
        const p=clamp((innerHeight*.8-rect.top)/(rect.height*.62));
        const imageP=clamp((innerHeight-rect.top)/(innerHeight*.7));
        academy.style.setProperty('--image-inset', `${(1-imageP)*10}%`);
        academy.style.setProperty('--image-scale', 1+(1-imageP)*.045);
        academy.style.setProperty('--statement-progress', p);
        words.forEach((word,i)=>word.classList.toggle('is-read',i/words.length<=p));
      }
    }
    if (duo) {
      const rect=duo.getBoundingClientRect();
      if(rect.top<innerHeight && rect.bottom>0) duo.style.setProperty('--duo-drift', `${(clamp((innerHeight-rect.top)/(innerHeight+rect.height))-.5)*65}px`);
    }
  }
  if (story?.enabled) {
    const p=clamp((scrollY-story.start)/story.travel);
    story.track.scrollLeft=p*story.max;
    story.update();
  }
}
function requestPaint() { if (!framePending) { framePending = true; requestAnimationFrame(paintScroll); } }
window.addEventListener('scroll', requestPaint, {passive:true});

if (programs) {
  const stage=programs.querySelector('.program-stage');
  const track=programs.querySelector('.program-track');
  const controls=programs.querySelector('.program-controls');
  const prev=programs.querySelector('.program-prev');
  const next=programs.querySelector('.program-next');
  const bar=programs.querySelector('.program-progress span');
  const cards=[...track.querySelectorAll('.program-card')];
  programs.classList.add('is-enhanced');
  controls.hidden=false;
  const offsets=()=>cards.map(card=>card.offsetLeft-cards[0].offsetLeft);
  const update=()=>{
    const max=track.scrollWidth-track.clientWidth;
    prev.disabled=track.scrollLeft<=2;
    next.disabled=track.scrollLeft>=max-2;
    bar.style.transform=`scaleX(${max>0?clamp((track.scrollLeft+track.clientWidth)/track.scrollWidth):1})`;
  };
  story={enabled:false,track,max:0,start:0,travel:0,update};
  const moveTo=left=>{
    const max=track.scrollWidth-track.clientWidth;
    if(story.enabled) window.scrollTo({top:story.start+clamp(left/Math.max(1,max))*story.travel,behavior:motion.matches?'instant':'smooth'});
    else track.scrollTo({left:clamp(left,0,max),behavior:motion.matches?'instant':'smooth'});
  };
  const step=direction=>{
    const values=offsets();
    const current=track.scrollLeft;
    const target=direction>0 ? values.find(left=>left>current+4)??track.scrollWidth : values.filter(left=>left<current-4).at(-1)??0;
    moveTo(target);
  };
  prev.addEventListener('click',()=>step(-1));
  next.addEventListener('click',()=>step(1));
  track.addEventListener('scroll',update,{passive:true});
  track.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();step(e.key==='ArrowRight'?1:-1);}
  });
  // Keyboard focus follows the matching scroll chapter without hiding links.
  track.addEventListener('focusin',e=>{
    const card=e.target.closest('.program-card');
    if(story.enabled&&card) moveTo(card.offsetLeft-cards[0].offsetLeft);
  });
  story.measure=()=>{
    story.enabled=wideStory.matches&&!motion.matches;
    const top=header?.getBoundingClientRect().height||90;
    programs.classList.toggle('is-scroll-story',story.enabled);
    programs.style.setProperty('--story-top',`${top}px`);
    programs.style.setProperty('--stage-height',`${innerHeight-top}px`);
    story.max=track.scrollWidth-track.clientWidth;
    story.travel=story.max*.85;
    programs.style.height=story.enabled?`${innerHeight-top+story.travel}px`:'';
    story.start=programs.getBoundingClientRect().top+scrollY-top;
    update();requestPaint();
  };
  story.measure();
  wideStory.addEventListener('change',story.measure);
}

const gallery=document.querySelector('.gallery-reel');
if(gallery){
  const track=gallery.querySelector('.photo-grid');
  const photos=[...track.querySelectorAll('img')];
  const controls=gallery.querySelector('.gallery-controls');
  const prev=gallery.querySelector('.gallery-prev');
  const next=gallery.querySelector('.gallery-next');
  controls.hidden=false;
  track.tabIndex=0;track.setAttribute('role','region');track.setAttribute('aria-label','Training photographs; swipe or use arrow keys to explore');
  photos.forEach(photo=>{photo.draggable=false;photo.classList.remove('reveal-pending');revealObserver?.unobserve(photo);});
  const positions=()=>photos.map(photo=>photo.offsetLeft-photos[0].offsetLeft);
  const update=()=>{
    const max=track.scrollWidth-track.clientWidth;
    prev.disabled=track.scrollLeft<=2;next.disabled=track.scrollLeft>=max-2;
  };
  const step=dir=>{
    const values=positions(),current=track.scrollLeft;
    const target=dir>0?values.find(left=>left>current+4)??track.scrollWidth:values.filter(left=>left<current-4).at(-1)??0;
    track.scrollTo({left:target,behavior:motion.matches?'instant':'smooth'});
  };
  prev.addEventListener('click',()=>step(-1));next.addEventListener('click',()=>step(1));
  track.addEventListener('scroll',update,{passive:true});
  track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();step(e.key==='ArrowRight'?1:-1);}});
  let drag=null;
  track.addEventListener('pointerdown',e=>{
    if(e.pointerType!=='mouse'||e.button!==0)return;
    drag={x:e.clientX,left:track.scrollLeft,id:e.pointerId};
    track.setPointerCapture(e.pointerId);track.classList.add('is-dragging');
  });
  track.addEventListener('pointermove',e=>{if(drag)track.scrollLeft=drag.left-(e.clientX-drag.x);});
  const endDrag=()=>{
    if(!drag)return;
    if(track.hasPointerCapture(drag.id))track.releasePointerCapture(drag.id);
    drag=null;track.classList.remove('is-dragging');update();
  };
  track.addEventListener('pointerup',endDrag);track.addEventListener('pointercancel',endDrag);track.addEventListener('lostpointercapture',endDrag);
  window.addEventListener('resize',update,{passive:true});update();
}

window.addEventListener('resize',()=>{story?.measure();requestPaint();},{passive:true});
window.addEventListener('load',()=>{story?.measure();requestPaint();},{once:true});
document.fonts?.ready.then(()=>{story?.measure();requestPaint();});
motion.addEventListener('change',()=>{
  if(motion.matches){
    revealObserver?.disconnect();
    revealItems.forEach(el=>el.classList.remove('reveal-pending'));
    document.body.classList.remove('hero-ready');
    if(heroPhoto)heroPhoto.style.transform='';
    hero?.style.removeProperty('--title-drift');
    academy?.style.removeProperty('--statement-progress');
    words.forEach(word=>word.classList.add('is-read'));
    duo?.style.removeProperty('--duo-drift');
  }
  story?.measure();requestPaint();
});
paintScroll();
