/**
 * SommyCake - Modern Artisan Confectionery Web Application
 * Founder: Precious Okeke Chisom
 * Location: Spiritan Close, Mirinwanyi-Asa, Afam Road, Oyigbo, Rivers State, Nigeria
 * 
 * Features:
 * - Mobile Slide-In Navigation Drawer
 * - Sticky Header with Scroll Shadow
 * - Hero Occasion Quick-Selectors
 * - Dynamic Sizing & Serving Guide Clicks
 * - Live Price Calculator (Naira ₦)
 * - Structured WhatsApp Message Generator
 * - Collapsible FAQ Accordion
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Global Brand Configurations ---
  // Official WhatsApp Business Line for SommyCake (Oyigbo, Rivers State, Nigeria)
  const WHATSAPP_PHONE = '2348167886766';

  // --- 2. Dynamic Year in Footer ---
  const yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- 3. Sticky Navigation Header ---
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 4. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Close when clicking outside drawer content
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') &&
          !mobileDrawer.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        closeDrawer();
      }
    });
  }

  // --- 5. Date Picker Validation (Earliest booking is tomorrow) ---
  const dateInput = document.getElementById('deliveryDate');
  if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');

    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // --- 6. Form DOM Elements & Summary Targets ---
  const enquiryForm = document.getElementById('cakeEnquiryForm');
  const occasionSelect = document.getElementById('occasionSelect');
  const sizeSelect = document.getElementById('sizeSelect');
  const flavourSelect = document.getElementById('flavourSelect');
  const phLocationSelect = document.getElementById('phLocationSelect');
  const addonCheckboxes = document.querySelectorAll('input[name="addons"]');
  const dietaryNotes = document.getElementById('dietaryNotes');
  const inscriptionInput = document.getElementById('inscriptionInput');
  const deliveryTimeSlot = document.getElementById('deliveryTimeSlot');

  // Summary Targets
  const sumOccasion = document.getElementById('sumOccasion');
  const sumSize = document.getElementById('sumSize');
  const sumFlavour = document.getElementById('sumFlavour');
  const sumDate = document.getElementById('sumDate');
  const sumLocation = document.getElementById('sumLocation');
  const baseVal = document.getElementById('baseVal');
  const deliveryVal = document.getElementById('deliveryVal');
  const addonsVal = document.getElementById('addonsVal');
  const grandTotalVal = document.getElementById('grandTotalVal');

  function formatNaira(amount) {
    return '₦' + Number(amount).toLocaleString('en-NG');
  }

  // --- 7. Live Dynamic Price Calculator ---
  function calculateOrderSummary() {
    // 1. Base Cake
    const sizeOpt = sizeSelect.options[sizeSelect.selectedIndex];
    const basePrice = parseInt(sizeOpt.getAttribute('data-base') || '0', 10);

    // 2. Delivery Fee in Port Harcourt
    const locOpt = phLocationSelect.options[phLocationSelect.selectedIndex];
    const deliveryFee = parseInt(locOpt.getAttribute('data-fee') || '0', 10);

    // 3. Addons Total
    let addonsSum = 0;
    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        addonsSum += parseInt(cb.getAttribute('data-price') || '0', 10);
      }
    });

    // 4. Flavor Surcharge (e.g. Bailey's Infusion)
    let flavourSurcharge = 0;
    if (flavourSelect.value.includes("Bailey's")) {
      flavourSurcharge = 3000;
    }

    const total = basePrice + flavourSurcharge + deliveryFee + addonsSum;

    // Update Summary Card
    if (sumOccasion) sumOccasion.textContent = occasionSelect.value;
    if (sumSize) sumSize.textContent = sizeOpt.value.split('-')[0].trim();
    if (sumFlavour) sumFlavour.textContent = flavourSelect.value.split('&')[0].trim();
    if (sumDate) sumDate.textContent = dateInput.value || 'Select date';
    if (sumLocation) sumLocation.textContent = locOpt.value.split('(')[0].trim();

    if (baseVal) baseVal.textContent = formatNaira(basePrice + flavourSurcharge);
    if (deliveryVal) deliveryVal.textContent = deliveryFee === 0 ? 'Free / Studio Pickup' : formatNaira(deliveryFee);
    if (addonsVal) addonsVal.textContent = formatNaira(addonsSum);
    if (grandTotalVal) grandTotalVal.textContent = formatNaira(total);

    return {
      basePrice: basePrice + flavourSurcharge,
      deliveryFee,
      addonsSum,
      total
    };
  }

  // Attach live calculation events
  if (sizeSelect) sizeSelect.addEventListener('change', calculateOrderSummary);
  if (flavourSelect) flavourSelect.addEventListener('change', calculateOrderSummary);
  if (occasionSelect) occasionSelect.addEventListener('change', calculateOrderSummary);
  if (phLocationSelect) phLocationSelect.addEventListener('change', calculateOrderSummary);
  if (dateInput) dateInput.addEventListener('change', calculateOrderSummary);
  addonCheckboxes.forEach(cb => cb.addEventListener('change', calculateOrderSummary));

  // Initialize summary on page load
  calculateOrderSummary();

  // --- 8. Occasion Fast-Selector in Hero ---
  const occasionPills = document.querySelectorAll('.occasion-pill-btn');
  occasionPills.forEach(pill => {
    pill.addEventListener('click', () => {
      occasionPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const selectedOccasion = pill.getAttribute('data-occasion');
      if (occasionSelect && selectedOccasion) {
        occasionSelect.value = selectedOccasion;
        calculateOrderSummary();

        // Smooth scroll to the enquiry form
        const enquirySec = document.getElementById('enquiry');
        if (enquirySec) {
          enquirySec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- 9. Occasion Card "Inquire" Button Triggers ---
  const selectOccasionBtns = document.querySelectorAll('.select-occasion-btn');
  selectOccasionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const occasionName = btn.getAttribute('data-occasion');
      if (occasionSelect && occasionName) {
        occasionSelect.value = occasionName;
        calculateOrderSummary();
        const enquirySec = document.getElementById('enquiry');
        if (enquirySec) {
          enquirySec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- 9B. Delivery History "Order Similar Style" Triggers ---
  const reorderBtns = document.querySelectorAll('.reorder-style-btn');
  reorderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const styleName = btn.getAttribute('data-style');
      if (dietaryNotes && styleName) {
        dietaryNotes.value = `I would like to order a cake similar to the delivery showcase design: "${styleName}".`;
        const enquirySec = document.getElementById('enquiry');
        if (enquirySec) {
          enquirySec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- 10. Sizing Guide "Select Size" CTA Triggers ---
  const selectSizeCtas = document.querySelectorAll('.select-size-cta');
  selectSizeCtas.forEach(btn => {
    btn.addEventListener('click', () => {
      const sizeVal = btn.getAttribute('data-size');
      if (sizeSelect && sizeVal) {
        for (let i = 0; i < sizeSelect.options.length; i++) {
          if (sizeSelect.options[i].value === sizeVal) {
            sizeSelect.selectedIndex = i;
            break;
          }
        }
        calculateOrderSummary();
        const enquirySec = document.getElementById('enquiry');
        if (enquirySec) {
          enquirySec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- 11. WhatsApp Form Submission & Generator ---
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const occasion = occasionSelect.value;
      const cakeSize = sizeSelect.options[sizeSelect.selectedIndex].value;
      const flavour = flavourSelect.value;
      const inscription = inscriptionInput.value.trim() || 'No custom inscription';
      const eventDate = dateInput.value;
      const timeSlot = deliveryTimeSlot.value;
      const location = phLocationSelect.options[phLocationSelect.selectedIndex].value;
      const dietary = dietaryNotes.value.trim() || 'None specified';

      // Collect Add-ons
      const selectedAddons = [];
      addonCheckboxes.forEach(cb => {
        if (cb.checked) {
          selectedAddons.push(cb.value);
        }
      });
      const addonsText = selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None';

      // Current Total Calculation
      const figures = calculateOrderSummary();

      // Build structured WhatsApp message tailored to SommyCake
      const waMessage = `🎂 *NEW CAKE ENQUIRY - SOMMYCAKE*
----------------------------------------
👤 *Customer Name:* ${name}
📞 *Phone / WhatsApp:* ${phone}
🎉 *Occasion:* ${occasion}
🍰 *Cake Size/Servings:* ${cakeSize}
🍫 *Preferred Flavour:* ${flavour}
✍️ *Inscription:* "${inscription}"
📅 *Date Needed:* ${eventDate} (${timeSlot})
📍 *Delivery / Pickup:* ${location}
🎁 *Add-ons Selected:* ${addonsText}
🛡️ *Dietary / Design Notes:* ${dietary}
💰 *Estimated Total:* ${formatNaira(figures.total)}
----------------------------------------
_Submitted via SommyCake Official Website_`;

      const encoded = encodeURIComponent(waMessage);
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;

      // Open WhatsApp in new tab/app
      window.open(waUrl, '_blank');
    });
  }

  // --- 12. Frequently Asked Questions Accordion ---
  const faqRows = document.querySelectorAll('.faq-row');
  faqRows.forEach(row => {
    const btn = row.querySelector('.faq-question-btn');
    const panel = row.querySelector('.faq-answer-panel');

    btn.addEventListener('click', () => {
      const isActive = row.classList.contains('active');

      // Close other open panels
      faqRows.forEach(otherRow => {
        otherRow.classList.remove('active');
        const otherPanel = otherRow.querySelector('.faq-answer-panel');
        if (otherPanel) {
          otherPanel.style.maxHeight = null;
        }
      });

      // Toggle clicked panel
      if (!isActive) {
        row.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // --- 12B. Video Showcase Playback & Quick Inquire ---
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
    const video = card.querySelector('.showcase-video');
    const playBtn = card.querySelector('.video-play-overlay');
    const inquireBtn = card.querySelector('.video-inquire-btn');

    if (video && playBtn) {
      playBtn.addEventListener('click', () => {
        if (video.paused) {
          // Pause any other playing showcase videos
          document.querySelectorAll('.showcase-video').forEach(otherVid => {
            if (otherVid !== video) {
              otherVid.pause();
              const otherBtn = otherVid.parentElement.querySelector('.video-play-overlay');
              if (otherBtn) otherBtn.classList.remove('playing');
            }
          });

          video.play().then(() => {
            playBtn.classList.add('playing');
          }).catch(err => {
            console.log('Video playback trigger:', err);
          });
        } else {
          video.pause();
          playBtn.classList.remove('playing');
        }
      });

      video.addEventListener('click', () => {
        if (!video.paused) {
          video.pause();
          playBtn.classList.remove('playing');
        } else {
          video.play();
          playBtn.classList.add('playing');
        }
      });

      video.addEventListener('pause', () => {
        playBtn.classList.remove('playing');
      });

      video.addEventListener('ended', () => {
        playBtn.classList.remove('playing');
      });
    }

    if (inquireBtn) {
      inquireBtn.addEventListener('click', () => {
        const videoTitle = inquireBtn.getAttribute('data-video-title');
        if (dietaryNotes && videoTitle) {
          dietaryNotes.value = `I am inquiring about the cake design seen in your video showcase: "${videoTitle}".`;
          const enquirySec = document.getElementById('enquiry');
          if (enquirySec) {
            enquirySec.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  });

  // --- 13. Smooth Internal Anchor Link Scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

});
