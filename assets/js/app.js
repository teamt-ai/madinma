/**
 * MADINMA COLLECTIONS — APPLE VISION PRO PLATFORM
 * Sticky localnav blur, smooth scroll navigation, and 360 specification modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. STICKY LOCALNAV SCROLL BLUR EFFECT
  // =========================================================================
  const localnav = document.getElementById('localnav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      localnav?.classList.add('scrolled');
    } else {
      localnav?.classList.remove('scrolled');
    }
  }, { passive: true });

  // =========================================================================
  // 2. SPECIFICATIONS & SHOWCASE MODAL (<dialog>)
  // =========================================================================
  const specModal = document.getElementById('spec-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalTagline = document.getElementById('modal-tagline');
  const modalBrands = document.getElementById('modal-brands');
  const modalLongevity = document.getElementById('modal-longevity');
  const modalWaLink = document.getElementById('modal-wa-link');

  const MODAL_DATA = {
    'madinma-perfumes': {
      category: 'Original Designer Fragrance',
      title: 'Perfumes & fragrances',
      tagline: '100% genuine Eau de Parfum and Extrait from the world’s top luxury perfume houses.',
      brands: 'Dior, Chanel, Tom Ford, Creed, YSL, Baccarat Rouge, Lattafa',
      longevity: '18H - 24H+ Sillage'
    },
    'madinma-mists': {
      category: 'Fine Fragrance Mist',
      title: 'Body mist & Body spray',
      tagline: 'Hydrating, all-over scented body mists and energizing daily sprays.',
      brands: 'Victoria\'s Secret, Bath & Body Works, Axe, Dove',
      longevity: '8H - 14H Refreshment'
    },
    'madinma-deodorants': {
      category: 'Antiperspirant Defense',
      title: 'Deodorant & Antisperants',
      tagline: 'Clinical strength 24-48 hour underarm odor and sweat shield. Anti-white marks formula.',
      brands: 'Sure, Dove, Rexona, Nivea, Mitchum, Right Guard',
      longevity: '24H - 48H Dry Shield'
    },
    'madinma-rollon': {
      category: 'Underarm Roll-On',
      title: 'Body roll-on & underarm care',
      tagline: 'Pocket-sized smooth roll-ons for all-day underarm dryness and skin tone evening care.',
      brands: 'Nivea, Dove, Mitchum, FA, Sebamed',
      longevity: '48H Sweat Lock'
    },
    'madinma-moisturizer': {
      category: 'Dermatological Skincare',
      title: 'Body care & moisturizer 🧴',
      tagline: 'Deeply nourishing, dermatologist-recommended body lotions, ceramide moisturizers, and cocoa butters.',
      brands: 'CeraVe, Vaseline Cocoa Radiant, Aveeno, Nivea Rich',
      longevity: '24H All-Day Moisture Lock'
    },
    'madinma-scrubs': {
      category: 'Body Polish & Exfoliation',
      title: 'Body scrubs & Body polishes',
      tagline: 'Buff away dry skin and reveal glowing, silky smooth skin with authentic sugar scrubs.',
      brands: 'Tree Hut Shea Sugar Scrub, Dove Exfoliating Polish',
      longevity: 'Instant Silky Glow'
    },
    'madinma-soaps': {
      category: 'Moisturizing Cleansers',
      title: 'Soap 🧼 and Body washes',
      tagline: 'Creamy lathering shower gels and skin-nourishing beauty bars that leave your skin soft.',
      brands: 'Dove Deep Moisture, Nivea Creme Body Wash, Olay, Dudu Osun',
      longevity: 'All-Day Clean Fragrance'
    },
    'madinma-aftershave': {
      category: 'Men\'s Grooming',
      title: 'After shave and shaving products.',
      tagline: 'Soothe razor burn, prevent bumps, and enjoy ultra-clean smoothness with premium aftershaves.',
      brands: 'Nivea Men Post Shave Balm, Gillette Series Shave Gel',
      longevity: '12H Calmed Skin Defense'
    },
    'madinma-hygiene': {
      category: 'Clinical Antiseptics',
      title: 'Personal hygiene & Antiseptic products',
      tagline: 'Protect your family with 100% authentic antiseptics and intimate hygiene washes.',
      brands: 'Dettol Original, Savlon Antiseptic, Femfresh Daily Wash',
      longevity: '24H Hygienic Protection'
    },
    'madinma-lipcare': {
      category: 'Hydrating Emollient',
      title: 'Lip care products',
      tagline: 'Heal chapped lips, add glossy shine, and lock in deep moisture with authentic lip care.',
      brands: 'Vaseline Lip Therapy, Carmex Classic, Laneige Sleeping Mask',
      longevity: '12H Continuous Lip Comfort'
    },
    'madinma-bags': {
      category: 'Curated Fashion',
      title: 'Luxury bags and thrift bag',
      tagline: 'Premium leather fashion handbags, stylish shoulder totes, and pristine first-grade thrift finds.',
      brands: 'Curated Leather Totes, Vintage Shoulder Bags, Thrift Gems',
      longevity: 'Long-Lasting Daily Elegance'
    },
    'madinma-jewelry': {
      category: 'Waterproof Accessories',
      title: 'Jewelry & Accessories',
      tagline: 'Waterproof, non-tarnish stainless steel gold-toned jewelry, chains, and timeless accents.',
      brands: '18K PVD Gold Chains, Tennis Bracelets, Studs & Sunglasses',
      longevity: 'Years of Tarnish-Free Shine'
    },
    'madinma-shoes': {
      category: 'Boutique Apparel',
      title: 'Shoes & clothing',
      tagline: 'Stylish boutique heels, comfortable daily slides, sneakers, and chic casual wear.',
      brands: 'Stiletto & Block Heels, Slides, Sneakers & Outfits',
      longevity: 'Comfortable Daily Wear'
    },
    'madinma-gifts': {
      category: 'Luxury Hampers',
      title: 'Fragrances, gift set 🎁 and body care set.',
      tagline: 'The ultimate luxury gift for birthdays, weddings, anniversaries, and pampering.',
      brands: 'Designer Perfume Duos, Bath & Body Works Hampers',
      longevity: 'Complete Luxury Scent Layering'
    }
  };

  window.openSpecModal = function(id) {
    const data = MODAL_DATA[id];
    if (!data || !specModal) return;

    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalTagline) modalTagline.textContent = data.tagline;
    if (modalBrands) modalBrands.textContent = data.brands;
    if (modalLongevity) modalLongevity.textContent = data.longevity;
    if (modalWaLink) {
      modalWaLink.href = `https://wa.me/2349032407144?text=Hello%20Madinma%2C%20I%20want%20to%20order%20from%20your%20${encodeURIComponent(data.title)}%20collection.`;
    }

    if (typeof specModal.showModal === 'function') {
      specModal.showModal();
    } else {
      specModal.setAttribute('open', '');
    }
  };

  window.openModal = window.openSpecModal;

  modalClose?.addEventListener('click', () => {
    if (typeof specModal?.close === 'function') {
      specModal.close();
    } else {
      specModal?.removeAttribute('open');
    }
  });

  // Close modal when clicking outside content
  specModal?.addEventListener('click', (e) => {
    const rect = specModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.bottom &&
      rect.left <= e.clientX &&
      e.clientX <= rect.right
    );
    if (!isInDialog) {
      if (typeof specModal.close === 'function') {
        specModal.close();
      } else {
        specModal.removeAttribute('open');
      }
    }
  });

  // =========================================================================
  // 3. APPLE VISION PRO CAROUSEL NAVIGATION
  // =========================================================================
  // =========================================================================
  // TRUE 3D SOLID CUBE CAROUSEL ENGINE (Interactive Touch, Drag & Gestures)
  // Each card occupies a 3D box face with solid sides visible during rotation
  // =========================================================================
  const carouselViewport = document.getElementById('carousel-viewport');
  const carouselTrack = document.getElementById('carousel-track');

  if (carouselViewport && carouselTrack) {
    const items = Array.from(carouselTrack.querySelectorAll('.apple-vision-item'));
    const totalItems = items.length;

    let currentIndex = 0;
    let currentAngle = 0; // Current Y rotation in degrees
    let isDragging = false;
    let startX = 0;
    let startAngle = 0;
    let dragDistance = 0;

    // Convert track to 3D cube scene
    carouselViewport.classList.add('cube-viewport-3d');
    carouselTrack.classList.add('cube-scene-3d');
    carouselTrack.style.width = '100%';
    carouselTrack.style.height = '100%';
    carouselTrack.style.position = 'relative';

    function getRadius() {
      const width = carouselViewport.offsetWidth;
      // Exact geometric apothem for a 4-sided cube: r = width / 2
      return Math.round(width / 2);
    }

    function updateCubeFaces(rotY) {
      const r = getRadius();
      // Apply world rotation to the cube scene
      carouselTrack.style.transform = `translateZ(-${r}px) rotateY(${rotY}deg)`;

      // Map each of the 14 items to 3D cylinder/cube facets
      const stepAngle = 90; // 90 degrees between faces creates a true 4-sided solid cube!
      items.forEach((item, idx) => {
        item.classList.add('cube-face-3d');
        const faceAngle = idx * stepAngle;
        
        // Relative angle from current view
        const relAngle = ((faceAngle + rotY) % 360 + 360) % 360;
        // Only render the front, left, and right faces for maximum sharpness and 3D solidity
        const isVisible = relAngle < 105 || relAngle > 255;
        
        if (isVisible) {
          item.style.display = 'flex';
          item.style.transform = `rotateY(${faceAngle}deg) translateZ(${r}px)`;
          
          // Side lighting shadow for solid 3D mass
          const distFromFront = Math.min(relAngle, 360 - relAngle);
          const shadowOpacity = Math.min(0.55, (distFromFront / 90) * 0.55);
          const box = item.querySelector('.apple-vision-box');
          if (box) {
            box.style.filter = `brightness(${1 - shadowOpacity * 0.5})`;
          }
        } else {
          item.style.display = 'none';
        }
      });
    }

    function snapToFace(targetIndex) {
      currentIndex = ((targetIndex % totalItems) + totalItems) % totalItems;
      carouselTrack.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
      currentAngle = -currentIndex * 90;
      updateCubeFaces(currentAngle);
      setTimeout(() => {
        carouselTrack.style.transition = 'none';
      }, 650);
    }

    // Touch & Pointer Gesture Listeners (Drag / Swipe to Rotate the Cube)
    function onPointerDown(e) {
      isDragging = true;
      startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      startAngle = currentAngle;
      dragDistance = 0;
      carouselTrack.style.transition = 'none';
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      dragDistance = currentX - startX;
      // Convert pixel drag to 3D rotation angle
      const angleDelta = (dragDistance / carouselViewport.offsetWidth) * 90;
      updateCubeFaces(startAngle + angleDelta);
      if (Math.abs(dragDistance) > 8 && e.cancelable) {
        e.preventDefault();
      }
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      const threshold = carouselViewport.offsetWidth * 0.15;
      if (dragDistance < -threshold) {
        // Dragged left -> rotate to next face
        snapToFace(currentIndex + 1);
      } else if (dragDistance > threshold) {
        // Dragged right -> rotate to prev face
        snapToFace(currentIndex - 1);
      } else {
        // Snap back to current
        snapToFace(currentIndex);
      }
    }

    // Bind Touch events
    carouselViewport.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp, { passive: true });

    // Bind Mouse events
    carouselViewport.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Initial positioning
    const cubePrevBtn = document.getElementById('cube-prev-btn');
    const cubeNextBtn = document.getElementById('cube-next-btn');
    if (cubePrevBtn) cubePrevBtn.addEventListener('click', () => snapToFace(currentIndex - 1));
    if (cubeNextBtn) cubeNextBtn.addEventListener('click', () => snapToFace(currentIndex + 1));

    window.addEventListener('resize', () => snapToFace(currentIndex));
    snapToFace(0);
  }

  // =========================================================================
  // 4. ALTERNATING DIRECTIONAL IMAGE SLIDESHOW
  // Box 1, 3, 5, 7...: Next slides in from RIGHT -> outgoing slides out to LEFT
  // Box 2, 4, 6, 8...: Next slides in from LEFT  -> outgoing slides out to RIGHT
    // =========================================================================
  // 4. ALTERNATING DIRECTIONAL IMAGE SLIDESHOW
  // Box 1, 3, 5, 7...: Next slides in from RIGHT -> outgoing to LEFT
  // Box 2, 4, 6, 8...: Next slides in from LEFT  -> outgoing to RIGHT
  // =========================================================================
  function initAppleVisionSlideshow() {
    const boxes = document.querySelectorAll('.apple-vision-box[data-carousel-box]');
    if (!boxes.length) return;

    boxes.forEach((box, boxIdx) => {
      const slides = box.querySelectorAll('.apple-vision-img');
      const dots = box.querySelectorAll('.apple-vision-dot');
      if (slides.length <= 1) return;

      let currentIdx = 0;

      // Box 1 (index 0): Next slides in from RIGHT -> outgoing to LEFT
      // Box 2 (index 1): Next slides in from LEFT  -> outgoing to RIGHT
      // Box 3 (index 2): Next slides in from RIGHT -> outgoing to LEFT
      // Box 4 (index 3): Next slides in from LEFT  -> outgoing to RIGHT
      const isSlideFromRight = (boxIdx % 2 === 0);
      const inClass = isSlideFromRight ? 'anim-slide-in-right' : 'anim-slide-in-left';
      const outClass = isSlideFromRight ? 'anim-slide-out-left' : 'anim-slide-out-right';

      function goToNextSlide() {
        const prevSlide = slides[currentIdx];
        const prevDot = dots[currentIdx];

        // Clean up animation classes from all slides
        slides.forEach((s) => {
          s.classList.remove('anim-slide-in-right', 'anim-slide-out-left', 'anim-slide-in-left', 'anim-slide-out-right');
        });

        // Trigger OUT animation on previous slide
        prevSlide.classList.remove('active');
        prevSlide.classList.add(outClass);
        if (prevDot) prevDot.classList.remove('active');

        // Advance to next slide index
        currentIdx = (currentIdx + 1) % slides.length;

        const nextSlide = slides[currentIdx];
        const nextDot = dots[currentIdx];

        // Trigger IN animation on next slide
        nextSlide.classList.add(inClass, 'active');
        if (nextDot) nextDot.classList.add('active');

        // After 950ms transition completes, cleanly remove temporary animation classes
        setTimeout(() => {
          prevSlide.classList.remove(outClass);
          nextSlide.classList.remove(inClass);
        }, 950);
      }

      // Synchronized 5-second display interval: all boxes slide together at the exact same time
      const boxInterval = 5000;
      let timer = null;

      const startSlideshow = () => {
        if (!timer) {
          timer = setInterval(goToNextSlide, boxInterval);
        }
      };

      // Start synchronized slideshow immediately
      startSlideshow();

      // Pause when tab is hidden to save battery & CPU
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          if (timer) {
            clearInterval(timer);
            timer = null;
          }
        } else {
          startSlideshow();
        }
      });
    });
  }

  // Explicitly initialize slideshow immediately
  initAppleVisionSlideshow();
  initMadinmaWiggle();
  initHeroMottoTyping();
  if (typeof updateWhatsAppTemplate === "function") { updateWhatsAppTemplate(); }
  initElevateScrollAnimation();
  initDirectMessagePage();

  // =========================================================================
  // 5. CHAT ON WHATSAPP WITH COLLECTIONS SELECTION MODAL
  // =========================================================================
  const chatModal = document.getElementById('chat-template-modal');
  const chatCloseBtn = document.getElementById('chat-template-close');
  const chatSubmitBtn = document.getElementById('chat-template-submit-btn');
  const chatPreviewBox = document.getElementById('template-preview-text');
  const chatCustomNote = document.getElementById('chat-custom-note');
  const btnSelectAll = document.getElementById('btn-select-all');
  const btnClearAll = document.getElementById('btn-clear-all');
  const chipCheckboxes = document.querySelectorAll('input[name="inquiry-collection"]');
  const WHATSAPP_PHONE = '2349032407144';

  function updateWhatsAppTemplate() {
    if (!chatSubmitBtn || !chatPreviewBox) return;

    const selected = [];
    chipCheckboxes.forEach((cb) => {
      const parent = cb.closest('.template-chip') || cb.closest('.order-chip') || cb.closest('.order-boutique-card');
      if (cb.checked) {
        selected.push(cb.value);
        if (parent) parent.classList.add('selected');
      } else {
        if (parent) parent.classList.remove('selected');
      }
    });

    const counterEl = document.getElementById('selected-counter');
    if (counterEl) {
      counterEl.textContent = selected.length === 1 ? '1 collection selected' : `${selected.length} collections selected`;
    }

    const note = chatCustomNote ? chatCustomNote.value.trim() : '';

    let message = "Hello Madinma! I would like to know more about you and your store.\n\n";
    if (selected.length > 0) {
      message += "I am interested in inquiring about these collections:\n";
      selected.forEach((item, idx) => {
        message += `• ${item}\n`;
      });
      message += "\n";
    } else {
      message += "I would like to explore all your collections.\n\n";
    }

    if (note) {
      message += `Note / Question: ${note}\n\n`;
    }

    message += "Could you please share your available stock, price list, and delivery details?";

    chatPreviewBox.textContent = message;
    chatSubmitBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  }

  // Order navigation trigger (Full page order suite)
  window.openWhatsAppTemplateModal = function() {
    window.location.href = 'order.html';
  };

  document.querySelectorAll('[data-open-chat-modal="true"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'order.html';
    });
  });

  // Modal interactions
  chatCloseBtn?.addEventListener('click', () => {
    if (typeof chatModal?.close === 'function') {
      chatModal.close();
    } else {
      chatModal?.removeAttribute('open');
    }
  });

  chatModal?.addEventListener('click', (e) => {
    if (e.target === chatModal) {
      if (typeof chatModal.close === 'function') {
        chatModal.close();
      } else {
        chatModal.removeAttribute('open');
      }
    }
  });

  chipCheckboxes.forEach((cb) => {
    cb.addEventListener('change', updateWhatsAppTemplate);
  });

  chatCustomNote?.addEventListener('input', updateWhatsAppTemplate);

  btnSelectAll?.addEventListener('click', () => {
    chipCheckboxes.forEach((cb) => { cb.checked = true; });
    updateWhatsAppTemplate();
  });

  btnClearAll?.addEventListener('click', () => {
    chipCheckboxes.forEach((cb) => { cb.checked = false; });
    updateWhatsAppTemplate();
  });

  updateWhatsAppTemplate();

});


/* ==========================================================================
   MADINMA HERO TITLE INTERACTIVE WIGGLE
   Replays on hover or tap smoothly without layout shifts
   ========================================================================== */
function initMadinmaWiggle() {
  const title = document.querySelector('.hero-giant-title');
  if (!title) return;

  const letters = title.querySelectorAll('.wiggle-letter');
  if (!letters.length) return;

  let isWiggling = false;

  function triggerWiggle() {
    if (isWiggling) return;
    isWiggling = true;

    letters.forEach((letter) => {
      letter.classList.remove('is-wiggling');
      void letter.offsetWidth; // Force DOM reflow to restart CSS animation
      letter.classList.add('is-wiggling');
    });

    // Reset lock after animation finishes
    setTimeout(() => {
      isWiggling = false;
    }, 1700);
  }

  // Trigger on hover or touch
  title.addEventListener('mouseenter', triggerWiggle);
  title.addEventListener('touchstart', triggerWiggle, { passive: true });
}


/* ==========================================================================
   HERO MOTTO TYPEWRITER ANIMATION
   Types out after the Madinma title completes its letter-shaking entrance
   Preserves <strong> tag chromatic gradients and prevents layout shifts
   ========================================================================== */
function initHeroMottoTyping() {
  const motto = document.querySelector('.hero-giant-motto');
  if (!motto) return;

  // Text tokens structured with markup flags
  const segments = [
    { text: "The home for the best in ", isStrong: false },
    { text: "original perfumes", isStrong: true },
    { text: ", ", isStrong: false },
    { text: "concentrated oils", isStrong: true },
    { text: ", ", isStrong: false },
    { text: "fine mists", isStrong: true },
    { text: ", and ", isStrong: false },
    { text: "everyday luxury", isStrong: true },
    { text: ".", isStrong: false }
  ];

  // Lock natural container height to completely eliminate page layout shifts
  const naturalHeight = motto.offsetHeight;
  if (naturalHeight > 0) {
    motto.style.minHeight = naturalHeight + 'px';
  }

  // Insert target wrapper and live cursor
  motto.innerHTML = '<span class="typing-target"></span><span class="typewriter-cursor" aria-hidden="true"></span>';
  motto.style.opacity = '1';

  const target = motto.querySelector('.typing-target');
  const cursor = motto.querySelector('.typewriter-cursor');

  // Recalculate minHeight on window resize for perfect responsiveness
  window.addEventListener('resize', () => {
    motto.style.minHeight = 'auto';
    motto.style.minHeight = motto.offsetHeight + 'px';
  }, { passive: true });

  // Delay typing until Madinma letters finish their initial body shake (~1900ms)
  setTimeout(() => {
    let segIdx = 0;
    let charIdx = 0;
    let activeEl = null;

    function typeChar() {
      if (segIdx >= segments.length) {
        // Typing finished! Allow cursor to blink a bit then fade smoothly
        setTimeout(() => {
          if (cursor) cursor.classList.add('cursor-fade-out');
        }, 2200);
        return;
      }

      const seg = segments[segIdx];

      if (charIdx === 0) {
        if (seg.isStrong) {
          activeEl = document.createElement('strong');
          target.appendChild(activeEl);
        } else {
          activeEl = document.createElement('span');
          target.appendChild(activeEl);
        }
      }

      activeEl.textContent += seg.text[charIdx];
      charIdx++;

      if (charIdx >= seg.text.length) {
        segIdx++;
        charIdx = 0;
      }

      // Natural typing cadence: quick on letters, slight pauses at commas
      let delay = 24;
      const justTyped = seg.text[charIdx - 1];
      if (justTyped === ',') delay = 160;
      else if (justTyped === ' ') delay = 32;

      setTimeout(typeChar, delay);
    }

    typeChar();
  }, 1900);
}


/* ==========================================================================
   SCROLL-TRIGGERED UPWARD ELEVATION STRETCH
   Triggers an Apple-grade upward stretch animation when user scrolls to
   'Elevate your presence today.'
   ========================================================================== */
function initElevateScrollAnimation() {
  const title = document.querySelector('.buy-bar-title');
  if (!title) return;

  // Prime the title for elevation reveal
  title.classList.add('js-elevate-ready');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        title.classList.add('is-elevating');
        observer.unobserve(title); // Run smoothly once when revealed
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '0px 0px -40px 0px'
  });

  observer.observe(title);
}


/* ==========================================================================
   DIRECT MESSAGE PAGE INTERACTION LOGIC (order.html)
   ========================================================================== */
function initDirectMessagePage() {
  const messageInput = document.getElementById('order-message-input');
  const previewText = document.getElementById('bubble-preview-text');
  const sendBtn = document.getElementById('order-send-whatsapp-btn');
  const promptChips = document.querySelectorAll('.quick-prompt-chip');
  const WHATSAPP_PHONE = '2349032407144';

  if (!messageInput || !sendBtn) return;

  const defaultGreeting = "Hello Madinma! I would like to make an inquiry.";

  function syncWhatsAppMessage() {
    const rawVal = messageInput.value.trim();
    const finalMsg = rawVal || defaultGreeting;

    if (previewText) {
      previewText.textContent = finalMsg;
    }

    sendBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(finalMsg)}`;
  }

  // Live input sync
  messageInput.addEventListener('input', syncWhatsAppMessage);
  messageInput.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      sendBtn.click();
    }
  });

  // Quick starter chips
  promptChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) {
        messageInput.value = prompt;
        syncWhatsAppMessage();
        messageInput.focus();
      }
    });
  });

  // Initial sync on page load
  syncWhatsAppMessage();
}
