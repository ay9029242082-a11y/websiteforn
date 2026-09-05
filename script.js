const config = { brand: 'Exhivion Exhibitions', whatsapp: '918779357752', email: 'exhivion@gmail.com', phone: '+91 87793 57752', address: 'Mumbai, Maharashtra, India', eventDate: 'Upcoming Date', eventLocation: 'Location', director: 'Nagesh Gantayat' };

    // Backend API stub
    const enquiryApi = { contact: async data => ({ ok: true, data }), quote: async data => ({ ok: true, data }), space: async data => ({ ok: true, data }), ticket: async data => ({ ok: true, data }), design: async data => ({ ok: true, data }) };



    const hambBtn = document.getElementById('hambBtn');
    const menu = document.getElementById('menu');
    const menuIcon = hambBtn.innerHTML;
    function closeMenu() {
      menu.classList.remove('open');
      document.body.classList.remove('menuOpen');
      hambBtn.classList.remove('menuClose');
      hambBtn.setAttribute('aria-label', 'Open navigation');
      hambBtn.setAttribute('aria-expanded', 'false');
      hambBtn.innerHTML = menuIcon;
    }
    hambBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.classList.contains('open')) { closeMenu(); return }
      menu.classList.add('open');
      document.body.classList.add('menuOpen');
      hambBtn.classList.add('menuClose');
      hambBtn.setAttribute('aria-label', 'Close navigation');
      hambBtn.setAttribute('aria-expanded', 'true');
      hambBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="6" y1="18" x2="18" y2="6"></line></svg>';
    });
    menu.querySelectorAll('a, button').forEach(el => el.addEventListener('click', closeMenu));
    document.addEventListener('click', event => {
      if (menu.classList.contains('open') && !menu.contains(event.target) && !hambBtn.contains(event.target)) closeMenu();
    });

    const whatsappEl = document.getElementById('whatsapp');
    if (whatsappEl) whatsappEl.href = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent('Hello Exhivion, I would like to get a quote and details for an exhibition stall.')}`;
    const phoneEl = document.getElementById('phone');
    if (phoneEl) phoneEl.textContent = config.phone;
    const emailEl = document.getElementById('email');
    if (emailEl) { emailEl.textContent = config.email; emailEl.href = 'mailto:' + config.email; }
    const mapsEl2 = document.getElementById('maps');
    if (mapsEl2) mapsEl2.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address)}`;

    const eventDateEl = document.getElementById('eventDate');
    if (eventDateEl) eventDateEl.textContent = config.eventDate;
    const eventLocationEl = document.getElementById('eventLocation');
    if (eventLocationEl) eventLocationEl.textContent = config.eventLocation;
    const eventDate2El = document.getElementById('eventDate2');
    if (eventDate2El) eventDate2El.textContent = config.eventDate;
    const eventLocation2El = document.getElementById('eventLocation2');
    if (eventLocation2El) eventLocation2El.textContent = config.eventLocation;

    document.querySelectorAll('.contactForm').forEach(form => form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!this.checkValidity()) return;
      const name = this.querySelector('[name="name"]')?.value?.trim() || '';
      const ph = this.querySelector('[name="phone"]')?.value?.trim() || '';
      const em = this.querySelector('[name="email"]')?.value?.trim() || '';
      const msg = this.querySelector('textarea')?.value?.trim() || '';

      const subject = `New Booking & Contact Enquiry - ${name || 'Client'}`;
      const bodyLines = [
        `NEW BOOKING & CONTACT ENQUIRY`,
        `----------------------------------------`,
        `Name: ${name}`,
        `Phone: ${ph}`,
        `Email: ${em}`,
        ``,
        `Message / Booking Request:`,
        `${msg}`,
        `----------------------------------------`,
        `Sent via ${config.brand} Website`
      ];
      const mailtoUrl = `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
      window.location.href = mailtoUrl;

      const notice = this.querySelector('.notice');
      if (notice) {
        notice.textContent = `Thank you! Opening your email app to send your enquiry to ${config.email}...`;
        notice.classList.add('show');
      }
      this.reset();
    }));

    const services = [
      { title: 'Exhibition Design and Planning', image: 'assets/project-banga-solar.jpg', copy: 'Our team works closely with clients to conceptualize and design stunning exhibition spaces that effectively communicate brand identity and engage the audience.' },
      { title: 'Custom Booth Fabrication', image: 'assets/project-phoenix-booth.jpg', copy: 'Stand out from the crowd with tailor-made booth designs that reflect your brand personality. Our skilled craftsmen bring designs to life with precision and care.' }
    ];

    const serviceCardsEl = document.getElementById('serviceCards');
    if (serviceCardsEl) {
      serviceCardsEl.innerHTML = services.map(x => `<article class="service"><div class="serviceImage" style="background-image:url('${x.image}')"></div><h3>${x.title}</h3><p>${x.copy}</p></article>`).join('');
    }

    const projects = [
      ['Banga Solar 3D Exhibition Stall', 'assets/project-banga-solar.jpg', '3D DESIGN'],
      ['Phoenix Exhibition Pavilion', 'assets/project-phoenix-booth.jpg', 'FABRICATION'],
      ['Lime Green Modern Branding Stall', 'assets/project-green-pavilion.jpg', 'STALL BRANDING'],
      ['Teal Corporate Experience Pavilion', 'assets/project-teal-corporate.png', 'EXHIBITION STALLS'],
      ['Modern Information Desk Stall', 'assets/project-modern-desk.jpg', 'CUSTOM BOOTHS'],
      ['Curved LED Panoramic Pavilion', 'assets/project-curved-pavilion.jpg', '3D DESIGN'],
      ['Modular Angular Exhibition Stand', 'assets/project-angular-stand.jpg', 'MODULAR STALLS']
    ];

    function projectHtml(arr) {
      return arr.map((p) => `<button class="project" onclick="openProject(${projects.indexOf(p)})" aria-label="View Exhibition Stall"><img src="${p[1]}" alt="Exhibition Stall Design" loading="lazy"></button>`).join('');
    }

    function renderGallery() {
      const galleryEl = document.getElementById('gallery');
      if (galleryEl) galleryEl.innerHTML = projectHtml(projects);
    }
    renderGallery();

    const portfolioCarouselImage = document.getElementById('portfolioCarouselImage');
    const portfolioDots = document.getElementById('portfolioDots');
    let featuredProject = 0;
    function renderPortfolio() {
      if (!portfolioCarouselImage || !portfolioDots) return;
      const project = projects[featuredProject];
      portfolioCarouselImage.style.backgroundImage = `url('${project[1]}')`;
      portfolioCarouselImage.setAttribute('role', 'img');
      portfolioCarouselImage.setAttribute('aria-label', project[0]);
      portfolioDots.innerHTML = projects.map((project, index) => `<button class="${index === featuredProject ? 'active' : ''}" onclick="selectPortfolio(${index})" aria-label="Show ${project[0]}"></button>`).join('');
    }
    function movePortfolio(direction) {
      featuredProject = (featuredProject + direction + projects.length) % projects.length;
      renderPortfolio();
    }
    function selectPortfolio(index) {
      featuredProject = index;
      renderPortfolio();
    }
    renderPortfolio();

    let current = 0;
    const lightboxEl = document.getElementById('lightbox');
    function openProject(i) { current = i; renderLight(); if (lightboxEl) lightboxEl.classList.add('open'); }
    function moveProject(n) { current = (current + n + projects.length) % projects.length; renderLight(); }
    function renderLight() {
      const lightTitleEl = document.getElementById('lightTitle');
      const lightImgEl = document.getElementById('lightImg');
      const counterEl = document.getElementById('counter');
      if (lightTitleEl) lightTitleEl.textContent = projects[current][0];
      if (lightImgEl) lightImgEl.style.backgroundImage = `url('${projects[current][1]}')`;
      if (counterEl) counterEl.textContent = `${current + 1} / ${projects.length}`;
    }

    let heroDirection = 'left';
    const heroPlaylist = ['assets/hero-intro.mp4', 'assets/hero-exhibition.mp4'];
    let currentHeroVideo = 0;
    const heroVideoEl = document.getElementById('heroVideo');
    if (heroVideoEl) {
      heroVideoEl.addEventListener('ended', () => {
        currentHeroVideo = (currentHeroVideo + 1) % heroPlaylist.length;
        heroVideoEl.src = heroPlaylist[currentHeroVideo];
        heroVideoEl.load();
        playHeroTransition();
        heroVideoEl.play().catch(() => { });
      });
    }
    function playHeroTransition() {
      if (!heroVideoEl) return;
      heroVideoEl.classList.remove('slide-left', 'slide-right', 'slide-top');
      void heroVideoEl.offsetWidth;
      heroVideoEl.classList.add(`slide-${heroDirection}`);
    }
    document.querySelectorAll('[data-direction]').forEach(button => button.addEventListener('click', () => {
      heroDirection = button.dataset.direction;
      document.querySelectorAll('[data-direction]').forEach(x => x.classList.toggle('active', x === button));
      playHeroTransition();
    }));

    const directions = ['from-left', 'from-right', 'from-top', 'from-bottom'];
    document.querySelectorAll('.section,.stats,.cta,.footer').forEach((el, i) => {
      el.classList.add('reveal', directions[i % directions.length]);
    });
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('shown'); revealObserver.unobserve(entry.target) }
    }), { threshold: 0, rootMargin: '300px 0px 50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const serviceObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible', 'in-view');
        }
      });
    }, { threshold: 0.05, rootMargin: '50px 0px 50px 0px' });
    document.querySelectorAll('.service').forEach(el => serviceObserver.observe(el));

    let currentModalType = 'quote';
    const modalTypes = {
      quote: { title: 'Get a Quote', copy: 'Fill out the details below to receive your quote via email.', submit: 'Send Quote Request ✉️', fields: ['Name', 'Company', 'Phone', 'Email', 'Exhibition / Event', 'City', 'Stall Size', 'Stall Type', 'Budget Range', 'Event Date', 'Message'] },
      space: { title: 'Book Your Space', copy: 'Reserve your space and send your requirements directly to our team via email.', submit: 'Send Space Booking ✉️', fields: ['Name', 'Company', 'Phone', 'Email', 'Exhibition', 'Event Date', 'Location', 'Stall Size', 'Requirements', 'Message'] },
      ticket: { title: 'Book Your Ticket', copy: 'Complete your details to reserve your ticket via email.', submit: 'Send Ticket Booking ✉️', fields: ['Name', 'Email', 'Phone', 'Event', 'Number of Tickets', 'Preferred Date'] },
      design: { title: 'Request 3D Design', copy: 'Brief our visualization team and send your design details via email.', submit: 'Send Design Request ✉️', fields: ['Name', 'Company', 'Email', 'Phone', 'Exhibition / Event', 'City', 'Stall Size', 'Stall Type', 'Required Design Style', 'Budget', 'Design Requirements', 'Upload Reference', 'Message'] }
    };



    document.addEventListener('click', e => {
      const m = e.target.closest('[data-modal]');
      if (m) openModal(m.dataset.modal);
      const homeSection = e.target.closest('.homeSectionLink');
      if (homeSection) {
        e.preventDefault();
        showHomeSection(homeSection.dataset.section);
        return;
      }
      const l = e.target.closest('.pageLink');
      if (l) {
        e.preventDefault();
        showPage(l.dataset.page || l.getAttribute('href').slice(1));
      }
    });

    function openModal(type) {
      currentModalType = type;
      let d = modalTypes[type] || modalTypes.quote;
      const modalTitleEl = document.getElementById('modalTitle');
      const modalCopyEl = document.getElementById('modalCopy');
      const submitLabelEl = document.getElementById('submitLabel');
      const modalFieldsEl = document.getElementById('modalFields');
      const modalEl = document.getElementById('modal');

      if (modalTitleEl) modalTitleEl.textContent = d.title;
      if (modalCopyEl) modalCopyEl.textContent = d.copy;
      if (submitLabelEl) submitLabelEl.textContent = d.submit;
      if (modalFieldsEl) {
        modalFieldsEl.innerHTML = d.fields.map(f => {
          let fieldName = f.toLowerCase().replace(/[^a-z0-9]/g, '_');
          if (f === 'Message' || f === 'Requirements' || f === 'Design Requirements') {
            return `<textarea required class="field full" name="${fieldName}" data-label="${f}" placeholder="${f}"></textarea>`;
          }
          if (f === 'Upload Reference') {
            return `<input class="field full" type="file" name="${fieldName}" data-label="${f}" aria-label="Upload Reference">`;
          }
          let isFull = ['Exhibition / Event', 'Budget Range', 'Event Date', 'Preferred Date'].includes(f);
          let typeAttr = f === 'Email' ? 'email' : f === 'Phone' ? 'tel' : 'text';
          return `<input class="field ${isFull ? 'full' : ''}" name="${fieldName}" data-label="${f}" required placeholder="${f}" type="${typeAttr}">`;
        }).join('');
      }
      if (modalEl) modalEl.classList.add('open');
    }
    function closeModal() {
      const modalEl = document.getElementById('modal');
      if (modalEl) modalEl.classList.remove('open');
    }

    function showPage(id, updateUrl = true) {
      document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
      document.getElementById(id)?.classList.add('active');
      if (updateUrl && location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
      scrollTo({ top: 0, behavior: 'smooth' });
    }

    function loadPageFromUrl() {
      const id = location.hash.slice(1);
      if (id && document.getElementById(id)?.classList.contains('page')) showPage(id, false);
    }
    function showHomeSection(sectionId) {
      document.querySelectorAll('.page').forEach(page => page.classList.toggle('active', page.id === 'home'));
      if (location.hash !== '#home') history.pushState(null, '', '#home');
      requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    loadPageFromUrl();
    addEventListener('popstate', loadPageFromUrl);
    addEventListener('hashchange', loadPageFromUrl);

    document.querySelectorAll('.formSubmit').forEach(f => f.addEventListener('submit', async e => {
      e.preventDefault();
      if (!f.checkValidity()) return;
      let button = f.querySelector('button[type="submit"],button');
      let original = button.textContent;
      button.textContent = 'Opening Email App…';
      button.disabled = true;

      let kind = currentModalType || 'quote';
      let d = modalTypes[kind] || modalTypes.quote;
      let title = d.title;

      let senderName = '';
      let clientDetails = [];
      let eventDetails = [];
      let messageContent = '';

      let inputs = f.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        let label = input.dataset.label || input.placeholder || input.name || 'Field';
        let val = input.value ? input.value.trim() : '';
        if (input.type === 'file') return;
        if (!val) return;

        let labelLower = label.toLowerCase();
        if (labelLower === 'name' || input.name === 'name') senderName = val;

        if (['name', 'phone', 'email', 'company'].some(k => labelLower.includes(k))) {
          clientDetails.push(`• ${label}: ${val}`);
        } else if (['message', 'requirements', 'design requirements'].some(k => labelLower.includes(k))) {
          messageContent = val;
        } else {
          eventDetails.push(`• ${label}: ${val}`);
        }
      });

      let bodyLines = [
        `NEW ${title.toUpperCase()} BOOKING REQUEST`,
        `========================================`
      ];
      if (clientDetails.length) {
        bodyLines.push(`\nCLIENT INFORMATION:`);
        bodyLines.push(...clientDetails);
      }
      if (eventDetails.length) {
        bodyLines.push(`\nEXHIBITION & EVENT DETAILS:`);
        bodyLines.push(...eventDetails);
      }
      if (messageContent) {
        bodyLines.push(`\nREQUIREMENTS / MESSAGE:`);
        bodyLines.push(messageContent);
      }
      bodyLines.push(`\n========================================`);
      bodyLines.push(`Sent via ${config.brand} Website`);

      let subject = `${title} Request - ${senderName || 'Client'}`;
      let mailtoUrl = `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
      window.location.href = mailtoUrl;

      button.textContent = original;
      button.disabled = false;
      let notice = f.querySelector('.notice');
      if (notice) {
        notice.textContent = `Thank you! Opening your email app to send booking request to ${config.email}...`;
        notice.classList.add('show');
      }
      f.reset();
    }));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeMenu(); closeModal(); lightbox.classList.remove('open') }
      if (lightbox.classList.contains('open') && e.key === 'ArrowRight') moveProject(1);
      if (lightbox.classList.contains('open') && e.key === 'ArrowLeft') moveProject(-1);
    });

    const topBtn = document.getElementById('topBtn');
    topBtn.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
    addEventListener('scroll', () => topBtn.classList.toggle('visible', scrollY > 600));

    const observer = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-target]').forEach(el => {
          let n = +el.dataset.target, plus = el.textContent.includes('+');
          let start = 0, step = () => {
            start += Math.ceil(n / 138);
            el.textContent = (Math.min(start, n) >= 1000 ? (Math.min(start, n) / 1000).toFixed(1) + 'K' : Math.min(start, n)) + (plus ? '+' : '');
            if (start < n) requestAnimationFrame(step);
          };
          step();
        });
        observer.unobserve(e.target);
      }
    }), { threshold: 0.1, rootMargin: '50px 0px 50px 0px' });
    observer.observe(document.querySelector('.stats'));

    const whyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          whyObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.why').forEach(el => whyObserver.observe(el));
