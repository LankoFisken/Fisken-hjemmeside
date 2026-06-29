/* ===== FISKEN SØGEFUNKTION (delt på alle sider) =====
   Tilføj på en ny side:
   1) <link rel="stylesheet" href="search.css"> i <head>
   2) <script src="search.js"></script> lige før </body>
   Knappen indsættes automatisk efter ".nav-cta" i headeren, og virker uden videre. */

const SEARCH_PAGES = [
  {title:"Fritidsjob", url:"fritidsjob.html", desc:"Vi hjælper dig med at søge, få og fastholde et fritidsjob.", keywords:"fritidsjob job arbejde cv ansøgning arbejdsgiver løn unge arbejdsplads praktik"},
  {title:"Mentorordning", url:"mentor.html", desc:"En frivillig mentor der støtter dig i overgangen fra ung til voksen.", keywords:"mentor mentorordning voksen støtte relation venskab rollemodel"},
  {title:"Ungerummet", url:"ungerummet.html", desc:"Et gratis værested for unge mellem 13 og 24 år – spil, mad og fællesskab.", keywords:"ungerummet værested ungdomsklub fællesskab spil playstation lektier kalender arrangementer events tilmelding"},
  {title:"Make My Friday", url:"make-my-friday.html", desc:"Fredagsklub med aktiviteter for unge.", keywords:"make my friday fredag fredagsklub aktiviteter"},
  {title:"Opholdstilladelse og statsborgerskab", url:"opholdstilladelse.html", desc:"Hjælp til at navigere opholdstilladelse og statsborgerskab.", keywords:"opholdstilladelse statsborgerskab udlændinge ansøgning ophold pas indfødsret"},
  {title:"Socialfaglig rådgivning", url:"socialfaglig-raadgivning.html", desc:"Gratis og uvildig hjælp til at navigere i det offentlige system.", keywords:"socialfaglig rådgivning kommune system hjælp sagsbehandler jobcenter"},
  {title:"Bliv frivillig", url:"bliv-frivillig.html", desc:"Bliv frivillig og gør en forskel for unge i FISKEN.", keywords:"frivillig frivillighed bliv frivillig engagement hjælpe"},
  {title:"Bliv samarbejdspartner", url:"bliv-samarbejdspartner.html", desc:"Samarbejd med FISKEN som organisation eller skole.", keywords:"samarbejdspartner samarbejde partner skole organisation"},
  {title:"Bliv virksomhedsmedlem", url:"fiskeven.html", desc:"Støt FISKEN som virksomhed og gør en forskel.", keywords:"virksomhedsmedlem fiskeven støt donation virksomhed sponsor erhverv"},
  {title:"Om os", url:"om-os.html", desc:"Læs om FISKENs historie, vision og mission.", keywords:"om os historie vision mission forening 1984"},
  {title:"Find en fisk", url:"find-en-fisk.html", desc:"Find medarbejdere, frivillige og bestyrelsesmedlemmer.", keywords:"find en fisk medarbejder frivillig bestyrelse ansatte team kontaktperson telefon"},
  {title:"Privatlivspolitik", url:"privatlivspolitik.html", desc:"Læs om hvordan FISKEN behandler personoplysninger og dine rettigheder efter GDPR.", keywords:"privatlivspolitik gdpr persondata cookies rettigheder databehandling samtykke"},
  {title:"Oplæg om fritidsjob og uddannelse", url:"oplaeg-fritidsjob-uddannelse.html", desc:"Book et oplæg om fritidsjob og uddannelse til din klasse eller skole.", keywords:"oplæg foredrag uddannelse skole undervisning klasse book"},
  {title:"Oplæg om statsborgerskab og opholdstilladelse", url:"oplaeg-statsborgerskab-opholdstilladelse.html", desc:"Book et oplæg om statsborgerskab og opholdstilladelse.", keywords:"oplæg statsborgerskab opholdstilladelse foredrag book"},
  {title:"Kontakt", url:"index.html#kontakt", desc:"Find adresse, telefon og mail, eller skriv til os.", keywords:"kontakt adresse telefon mail skriv til os åbningstider"},
  {title:"Vær med", url:"index.html#vaermed", desc:"Støt eller engagér dig i FISKEN som frivillig, partner eller virksomhed.", keywords:"vær med støt donér engagement bidrag"}
];

const SEARCH_PEOPLE = [
  {title:'Maja Thorsteinsson', url:'find-en-fisk.html#person-maja-thorsteinsson', desc:'Leder hos FISKEN', keywords:'maja thorsteinsson leder medarbejder frivillig kontakt team'},
  {title:'Marcus Aakerlund', url:'find-en-fisk.html#person-marcus-aakerlund', desc:'Socialrådgiver hos FISKEN', keywords:'marcus aakerlund socialrådgiver medarbejder frivillig kontakt team'},
  {title:'Emilie Borup', url:'find-en-fisk.html#person-emilie-borup', desc:'Projektleder, Mentor hos FISKEN', keywords:'emilie borup projektleder, mentor medarbejder frivillig kontakt team'},
  {title:'Céline With Suhard', url:'find-en-fisk.html#person-celine-with-suhard', desc:'Projektleder, Ungerummet hos FISKEN', keywords:'céline with suhard celine projektleder, ungerummet medarbejder frivillig kontakt team'},
  {title:'Pernille Høier', url:'find-en-fisk.html#person-pernille-h-ier', desc:'Virksomhedskonsulent hos FISKEN', keywords:'pernille høier virksomhedskonsulent medarbejder frivillig kontakt team'},
  {title:'Lanko Rahman', url:'find-en-fisk.html#person-lanko-rahman', desc:'Projektleder for digital udvikling hos FISKEN', keywords:'lanko rahman projektleder for digital udvikling medarbejder frivillig kontakt team'},
  {title:'Laura Risum', url:'find-en-fisk.html#person-laura-risum', desc:'Projektmedarbejder, Fritidsjob hos FISKEN', keywords:'laura risum projektmedarbejder, fritidsjob medarbejder frivillig kontakt team'},
  {title:'Azra Basic', url:'find-en-fisk.html#person-azra-basic', desc:'Projektleder, Statsborgerskab & Ophold hos FISKEN', keywords:'azra basic projektleder, statsborgerskab & ophold medarbejder frivillig kontakt team'},
  {title:'Klara Nedergaard', url:'find-en-fisk.html#person-klara-nedergaard', desc:'Projektleder, Fritidsjob hos FISKEN', keywords:'klara nedergaard projektleder, fritidsjob medarbejder frivillig kontakt team'},
  {title:'Zara Thustrup', url:'find-en-fisk.html#person-zara-thustrup', desc:'Projektmedarbejder, Fritidsjob hos FISKEN', keywords:'zara thustrup projektmedarbejder, fritidsjob medarbejder frivillig kontakt team'},
  {title:'Anna Petrina', url:'find-en-fisk.html#person-anna-petrina', desc:'Frivillig, Ungerummet hos FISKEN', keywords:'anna petrina frivillig, ungerummet medarbejder frivillig kontakt team'},
  {title:'Charlotte', url:'find-en-fisk.html#person-charlotte', desc:'Frivillig, Ungerummet hos FISKEN', keywords:'charlotte frivillig, ungerummet medarbejder frivillig kontakt team'},
  {title:'Dea', url:'find-en-fisk.html#person-dea', desc:'Frivillig, Ungerummet hos FISKEN', keywords:'dea frivillig, ungerummet medarbejder frivillig kontakt team'},
  {title:'Erik', url:'find-en-fisk.html#person-erik', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'erik frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Helen', url:'find-en-fisk.html#person-helen', desc:'Frivillig, Ungerummet hos FISKEN', keywords:'helen frivillig, ungerummet medarbejder frivillig kontakt team'},
  {title:'Jacob', url:'find-en-fisk.html#person-jacob', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'jacob frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Jakob', url:'find-en-fisk.html#person-jakob', desc:'Frivillig, Ungerummet hos FISKEN', keywords:'jakob frivillig, ungerummet medarbejder frivillig kontakt team'},
  {title:'Jesper', url:'find-en-fisk.html#person-jesper', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'jesper frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Louise K.', url:'find-en-fisk.html#person-louise-k', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'louise k. frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Mays', url:'find-en-fisk.html#person-mays', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'mays frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Poul', url:'find-en-fisk.html#person-poul', desc:'Frivillig, Fritidsjob hos FISKEN', keywords:'poul frivillig, fritidsjob medarbejder frivillig kontakt team'},
  {title:'Thomas', url:'find-en-fisk.html#person-thomas', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'thomas frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Bo', url:'find-en-fisk.html#person-bo', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'bo frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Susanne', url:'find-en-fisk.html#person-susanne', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'susanne frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Frederikke', url:'find-en-fisk.html#person-frederikke', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'frederikke frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Lars', url:'find-en-fisk.html#person-lars', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'lars frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Kasper', url:'find-en-fisk.html#person-kasper', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'kasper frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Morten', url:'find-en-fisk.html#person-morten', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'morten frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Kim', url:'find-en-fisk.html#person-kim', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'kim frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Terese', url:'find-en-fisk.html#person-terese', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'terese frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Brian', url:'find-en-fisk.html#person-brian', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'brian frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Line', url:'find-en-fisk.html#person-line', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'line frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Cenia L', url:'find-en-fisk.html#person-cenia-l', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'cenia l frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Minea', url:'find-en-fisk.html#person-minea', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'minea frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Katrine', url:'find-en-fisk.html#person-katrine', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'katrine frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Laura', url:'find-en-fisk.html#person-laura', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'laura frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Sofie', url:'find-en-fisk.html#person-sofie', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'sofie frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Kitte', url:'find-en-fisk.html#person-kitte', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'kitte frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Caroline E', url:'find-en-fisk.html#person-caroline-e', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'caroline e frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Simon', url:'find-en-fisk.html#person-simon', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'simon frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Christian', url:'find-en-fisk.html#person-christian', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'christian frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Cecilie', url:'find-en-fisk.html#person-cecilie', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'cecilie frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Lise', url:'find-en-fisk.html#person-lise', desc:'Frivillig, Mentorordning hos FISKEN', keywords:'lise frivillig, mentorordning medarbejder frivillig kontakt team'},
  {title:'Laura V', url:'find-en-fisk.html#person-laura-v', desc:'Frivillig, Ungerummet hos FISKEN', keywords:'laura v frivillig, ungerummet medarbejder frivillig kontakt team'},
  {title:'Ida', url:'find-en-fisk.html#person-ida', desc:'Frivillig, Ungerummet hos FISKEN', keywords:'ida frivillig, ungerummet medarbejder frivillig kontakt team'},
  {title:'Mikkel', url:'find-en-fisk.html#person-mikkel', desc:'Frivillig, Fritidsjob hos FISKEN', keywords:'mikkel frivillig, fritidsjob medarbejder frivillig kontakt team'},
  {title:'Flemming Bert Midtgaard', url:'find-en-fisk.html#person-flemming-bert-midtgaard', desc:'Forperson hos FISKEN', keywords:'flemming bert midtgaard forperson medarbejder frivillig kontakt team bestyrelse'},
  {title:'Badar Shah', url:'find-en-fisk.html#person-badar-shah', desc:'Bestyrelsesmedlem hos FISKEN', keywords:'badar shah bestyrelsesmedlem medarbejder frivillig kontakt team bestyrelse'},
  {title:'Dina Murad', url:'find-en-fisk.html#person-dina-murad', desc:'Bestyrelsesmedlem hos FISKEN', keywords:'dina murad bestyrelsesmedlem medarbejder frivillig kontakt team bestyrelse'},
  {title:'Helle Wallentin', url:'find-en-fisk.html#person-helle-wallentin', desc:'Bestyrelsesmedlem hos FISKEN', keywords:'helle wallentin bestyrelsesmedlem medarbejder frivillig kontakt team bestyrelse'},
  {title:'Helle Hygum Espersen', url:'find-en-fisk.html#person-helle-hygum-espersen', desc:'Bestyrelsesmedlem hos FISKEN', keywords:'helle hygum espersen bestyrelsesmedlem medarbejder frivillig kontakt team bestyrelse'},
  {title:'Steen Lybke Smith', url:'find-en-fisk.html#person-steen-lybke-smith', desc:'Bestyrelsesmedlem hos FISKEN', keywords:'steen lybke smith bestyrelsesmedlem medarbejder frivillig kontakt team bestyrelse'}
];

const SEARCH_INDEX = SEARCH_PAGES.concat(SEARCH_PEOPLE);

(function(){
  function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(new RegExp('[̀-ͯ]','g'),'');}
  function escHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

  function buildSearchUI(){
    // Knap: indsættes efter første ".nav-cta" i headeren (findes på alle sider)
    const navCta = document.querySelector('header .nav-cta');
    if (navCta && !document.getElementById('searchBtn')){
      const btn = document.createElement('button');
      btn.className = 'search-btn';
      btn.id = 'searchBtn';
      btn.setAttribute('aria-label','Søg');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
      navCta.insertAdjacentElement('afterend', btn);
    }

    if (!document.getElementById('searchOverlay')){
      const overlay = document.createElement('div');
      overlay.className = 'search-overlay';
      overlay.id = 'searchOverlay';
      overlay.innerHTML = `
        <div class="search-panel">
          <div class="search-input-row">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            <input type="text" id="searchInput" autocomplete="off" placeholder="Søg efter fritidsjob, mentor, medarbejdere …">
            <button class="search-close" id="searchClose" aria-label="Luk søgning">✕</button>
          </div>
          <div class="search-results" id="searchResults"></div>
        </div>`;
      document.body.appendChild(overlay);
    }
  }

  function init(){
    buildSearchUI();
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchClose = document.getElementById('searchClose');
    if (!searchBtn || !searchOverlay) return;
    let searchActiveIndex = -1;

    function openSearch(){
      searchOverlay.classList.add('open');
      searchInput.value='';
      renderSearchResults('');
      setTimeout(()=>searchInput.focus(),10);
      document.body.style.overflow='hidden';
    }
    function closeSearch(){
      searchOverlay.classList.remove('open');
      document.body.style.overflow='';
    }

    function renderSearchResults(query){
      const q = norm(query.trim());
      searchActiveIndex = -1;
      if (!q){
        searchResults.innerHTML = '<div class="search-hint"><span><kbd>↑</kbd><kbd>↓</kbd> naviger</span><span><kbd>Enter</kbd> vælg</span><span><kbd>Esc</kbd> luk</span></div>';
        return;
      }
      const scored = SEARCH_INDEX.map(item=>{
        const title = norm(item.title), desc = norm(item.desc), kw = norm(item.keywords);
        let score = 0;
        if (title.startsWith(q)) score += 100;
        else if (title.includes(q)) score += 60;
        if (kw.split(/\s+/).some(w=>w.startsWith(q))) score += 40;
        else if (kw.includes(q)) score += 20;
        if (desc.includes(q)) score += 10;
        return {item, score};
      }).filter(r=>r.score>0).sort((a,b)=>b.score-a.score).slice(0,8);

      if (!scored.length){
        searchResults.innerHTML = `<div class="search-empty">Ingen resultater for "${escHtml(query)}" – prøv et andet søgeord.</div>`;
        return;
      }
      searchResults.innerHTML = scored.map((r,i)=>{
        const re = new RegExp('('+query.trim().replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');
        const titleHl = escHtml(r.item.title).replace(re,'<mark>$1</mark>');
        return `<a class="search-result${i===0?' is-active':''}" href="${r.item.url}" data-idx="${i}"><div class="sr-title">${titleHl}</div><div class="sr-desc">${escHtml(r.item.desc)}</div></a>`;
      }).join('');
      searchActiveIndex = 0;
    }

    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', e=>{ if (e.target===searchOverlay) closeSearch(); });
    searchInput.addEventListener('input', e=>renderSearchResults(e.target.value));

    document.addEventListener('keydown', e=>{
      if (e.key==='/' && document.activeElement.tagName!=='INPUT' && document.activeElement.tagName!=='TEXTAREA'){
        e.preventDefault(); openSearch(); return;
      }
      if (!searchOverlay.classList.contains('open')) return;
      const items = [...searchResults.querySelectorAll('.search-result')];
      if (e.key==='Escape'){ closeSearch(); }
      else if (e.key==='ArrowDown'){
        e.preventDefault();
        if (!items.length) return;
        searchActiveIndex = (searchActiveIndex+1)%items.length;
        items.forEach((el,i)=>el.classList.toggle('is-active', i===searchActiveIndex));
        items[searchActiveIndex].scrollIntoView({block:'nearest'});
      } else if (e.key==='ArrowUp'){
        e.preventDefault();
        if (!items.length) return;
        searchActiveIndex = (searchActiveIndex-1+items.length)%items.length;
        items.forEach((el,i)=>el.classList.toggle('is-active', i===searchActiveIndex));
        items[searchActiveIndex].scrollIntoView({block:'nearest'});
      } else if (e.key==='Enter'){
        if (items.length && searchActiveIndex>=0){
          e.preventDefault();
          window.location.href = items[searchActiveIndex].getAttribute('href');
        }
      }
    });
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
