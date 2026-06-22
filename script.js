/**
 * LuxeCeylon Bespoke Journeys - Premium Interactive Script Engine
 * Integrates Lenis Smooth Scroll, Parallax backgrounds, Intersection Observer reveals,
 * horizontal scrolls, mega menus, local storage review feeds, and sound toggles.
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const soundToggle = document.querySelector(".sound-toggle-btn");
  const soundIconsOff = document.querySelectorAll(".sound-icon-off");
  const soundIconsOn = document.querySelectorAll(".sound-icon-on");
  const bgAudio = document.getElementById("bg-audio");
  const packageForm = document.getElementById("package-form");
  const reviewForm = document.getElementById("review-form");
  const reviewsList = document.getElementById("reviews-list");
  
  const whatsappNumber = "94771234567";
  const reviewStorageKey = "luxeceylon-premium-reviews";

  // ==========================================
  // 1. LENIS SMOOTH SCROLL INITIALIZATION
  // ==========================================
  let lenis;
  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  } catch (e) {
    console.warn("Lenis library not loaded, falling back to standard scroll.", e);
  }

  // ==========================================
  // 1.5. SCROLL-EXPANSION HERO ENGINE
  // ==========================================
  let scrollProgress = 0;
  let mediaFullyExpanded = false;
  let touchStartY = 0;
  let touchStartX = 0;

  // Horizontal scroll containers — touch swipes inside these should NOT be intercepted
  const horizontalScrollSelectors = [".destinations__grid", ".fleet__grid", ".tracks__grid"];
  const isInsideHorizontalScroller = (target) =>
    horizontalScrollSelectors.some(sel => target.closest(sel));
  
  const mainContent = document.getElementById("main-content");
  const heroBg = document.getElementById("hero-bg");
  const heroMediaWrapper = document.getElementById("hero-media-wrapper");
  const heroMedia = document.getElementById("hero-media");
  const heroTitleLeft = document.getElementById("hero-title-left");
  const heroTitleRight = document.getElementById("hero-title-right");

  const updateExpansion = () => {
    const isMobile = window.innerWidth < 768;
    // Mobile: starts smaller so the animation is clearly visible
    const baseW = isMobile ? 220 : 300;
    const baseH = isMobile ? 320 : 400;
    const finalW = window.innerWidth;
    const finalH = window.innerHeight;

    const currentW = baseW + (finalW - baseW) * scrollProgress;
    const currentH = baseH + (finalH - baseH) * scrollProgress;
    const currentRad = (isMobile ? 20 : 16) * (1 - scrollProgress);

    if (heroMediaWrapper && heroMedia) {
      heroMediaWrapper.style.width = `${currentW}px`;
      heroMediaWrapper.style.height = `${currentH}px`;
      heroMedia.style.borderRadius = `${currentRad}px`;
    }

    if (heroBg) {
      heroBg.style.opacity = 1 - scrollProgress;
    }

    const textTranslateX = scrollProgress * (isMobile ? 180 : 150);
    if (heroTitleLeft) heroTitleLeft.style.transform = `translate3d(-${textTranslateX}vw, 0, 0)`;
    if (heroTitleRight) heroTitleRight.style.transform = `translate3d(${textTranslateX}vw, 0, 0)`;

    const metaDate = document.getElementById('hero-media-date');
    const metaScroll = document.getElementById('hero-media-scroll');
    if (metaDate && metaScroll) {
      metaDate.style.transform = `translate3d(-${textTranslateX}vw, 0, 0)`;
      metaScroll.style.transform = `translate3d(${textTranslateX}vw, 0, 0)`;
      const metaOpacity = 1 - scrollProgress;
      metaDate.style.opacity = metaOpacity;
      metaScroll.style.opacity = metaOpacity;
    }

    if (scrollProgress >= 1) {
      mediaFullyExpanded = true;
      if (mainContent) mainContent.classList.add("show-content");
      if (lenis) lenis.start();
    } else {
      mediaFullyExpanded = false;
      if (mainContent) mainContent.classList.remove("show-content");
      if (lenis) lenis.stop();
    }
  };

  // Lock Lenis until fully expanded
  if (lenis) lenis.stop();

  // ==========================================
  // HERO EXPANSION ENGINE — Mobile + Desktop
  // ==========================================
  let velocity = 0;
  let lastTouchY = 0;
  let lastTouchTime = 0;
  let snapRAF = null;
  let touchLocked = false; // true when this touch is committed to hero expansion

  // Ease-out snap to 0 or 1
  const snapTo = (target) => {
    if (snapRAF) cancelAnimationFrame(snapRAF);
    const tick = () => {
      const diff = target - scrollProgress;
      if (Math.abs(diff) < 0.005) {
        scrollProgress = target;
        updateExpansion();
        snapRAF = null;
        return;
      }
      scrollProgress += diff * 0.18; // faster snap
      updateExpansion();
      snapRAF = requestAnimationFrame(tick);
    };
    snapRAF = requestAnimationFrame(tick);
  };

  // ---- Desktop: Mouse Wheel ----
  const handleWheel = (e) => {
    if (snapRAF) { cancelAnimationFrame(snapRAF); snapRAF = null; }
    if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
      scrollProgress = 0.99;
      mediaFullyExpanded = false;
      updateExpansion();
      e.preventDefault();
    } else if (!mediaFullyExpanded) {
      e.preventDefault();
      scrollProgress = Math.min(1, Math.max(0, scrollProgress + e.deltaY * 0.001));
      updateExpansion();
    }
  };

  // ---- Mobile + Tablet: Touch ----
  const handleTouchStart = (e) => {
    if (snapRAF) { cancelAnimationFrame(snapRAF); snapRAF = null; }
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
    lastTouchY = touchStartY;
    lastTouchTime = performance.now();
    velocity = 0;
    touchLocked = false;
  };

  const handleTouchMove = (e) => {
    if (!touchStartY) return;

    const cx = e.touches[0].clientX;
    const cy = e.touches[0].clientY;
    const totalDX = Math.abs(cx - touchStartX);
    const totalDY = Math.abs(cy - touchStartY);

    // Inside a horizontal card grid + swipe is mainly horizontal → skip
    if (isInsideHorizontalScroller(e.target) && totalDX > totalDY && totalDX > 8) return;

    // Commit this touch to hero mode after 8px vertical movement
    if (!touchLocked) {
      if (totalDY >= 8) touchLocked = true;
      else return;
    }

    // Velocity tracking (px/ms, positive = swipe up)
    const now = performance.now();
    const dt = Math.max(now - lastTouchTime, 1);
    velocity = (lastTouchY - cy) / dt;
    lastTouchY = cy;
    lastTouchTime = now;

    // Collapse gesture: swipe down while fully expanded
    if (mediaFullyExpanded && cy - touchStartY > 30 && window.scrollY <= 5) {
      e.preventDefault();
      mediaFullyExpanded = false;
      scrollProgress = 0.99;
      updateExpansion();
      return;
    }

    if (!mediaFullyExpanded) {
      e.preventDefault();
      const totalSwipeUp = touchStartY - cy; // positive = swipe up
      const newProgress = Math.min(1, Math.max(0,
        scrollProgress + totalSwipeUp * 0.009  // 3x more sensitive — each px = more progress
      ));
      scrollProgress = newProgress;
      touchStartY = cy;
      updateExpansion();
    }
  };

  const handleTouchEnd = () => {
    touchStartY = 0;
    if (!touchLocked) return;
    touchLocked = false;

    // If already fully expanded or collapsed, no snap needed
    if (scrollProgress >= 1 || scrollProgress <= 0) return;

    // Snap decision:
    // - Any upward velocity (even slow) → expand
    // - Clearly downward flick → collapse
    // - Otherwise snap to nearest (but threshold is very low = biased toward expand)
    const FLICK_UP = 0.05;    // almost any upward motion triggers expand
    const FLICK_DOWN = 0.25;  // need a deliberate downward flick to collapse
    let target;
    if (velocity > FLICK_UP) target = 1;         // any upward swipe → expand
    else if (velocity < -FLICK_DOWN) target = 0; // strong downward → collapse
    else target = scrollProgress >= 0.1 ? 1 : 0; // even 10% progress → expand

    snapTo(target);
  };

  const handleScroll = () => {
    if (!mediaFullyExpanded) window.scrollTo(0, 0);
  };

  window.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchstart', handleTouchStart, { passive: false });
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd, { passive: true });

  // Start from collapsed state
  updateExpansion();



  // ==========================================
  // 2. STICKY HEADER & FLOATING STATE
  // ==========================================
  const handleHeaderScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  };
  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll(); // Init status check

  // ==========================================
  // 3. MOBILE MENU & HAMBURGER TRANSITION
  // ==========================================
  const toggleMobileNav = () => {
    const isOpen = header.classList.contains("is-open");
    if (isOpen) {
      header.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      mobileNav.setAttribute("aria-hidden", "true");
    } else {
      header.classList.add("is-open");
      document.body.classList.add("menu-open");
      mobileNav.setAttribute("aria-hidden", "false");
    }
  };

  if (navToggle) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });
  }

  // Close mobile drawer when clicking links
  document.querySelectorAll(".mobile-nav__link").forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });

  // Close mobile nav on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991 && header.classList.contains("is-open")) {
      header.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      mobileNav.setAttribute("aria-hidden", "true");
    }
  });

  // ==========================================
  // 4. INTERSECTION OBSERVER REVEAL TEXTS
  // ==========================================
  const revealElements = document.querySelectorAll(".reveal-text");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if observer is not supported
    revealElements.forEach(el => el.classList.add("revealed"));
  }

  // ==========================================
  // 5. PARALLAX VISUAL SCROLL BINDINGS
  // ==========================================
  const parallaxImages = document.querySelectorAll(".parallax-bg");
  
  const handleParallax = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    
    parallaxImages.forEach(img => {
      const card = img.closest(".destination-card");
      if (!card) return;
      
      const cardRect = card.getBoundingClientRect();
      const cardTop = cardRect.top + scrollTop;
      
      // Check if visible
      if (cardRect.bottom > 0 && cardRect.top < viewportHeight) {
        const speed = parseFloat(img.dataset.speed) || 0.1;
        const relativeOffset = (scrollTop - cardTop) * speed;
        
        // Track whether parent is hovered to merge scale transition in JS
        const isHovered = card.matches(":hover");
        const scale = isHovered ? 1.08 : 1.03;
        
        img.style.transform = `translate3d(0, ${relativeOffset}px, 0) scale(${scale})`;
      }
    });
  };
  
  window.addEventListener("scroll", handleParallax);
  
  // Re-run parallax on mouseenter/mouseleave to refresh zoom state smoothly
  document.querySelectorAll(".destination-card").forEach(card => {
    card.addEventListener("mouseenter", handleParallax);
    card.addEventListener("mouseleave", handleParallax);
  });

  // ==========================================
  // 6. STICKY HORIZONTAL SCROLL GALLERY
  // ==========================================
  const horizSection = document.getElementById("activities-showcase");
  const horizTrack = document.getElementById("horizontal-track");
  
  const handleHorizontalScroll = () => {
    if (!horizSection || !horizTrack) return;
    
    if (window.innerWidth > 768) {
      const sectionTop = horizSection.offsetTop;
      const sectionHeight = horizSection.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolledPastSection = window.scrollY - sectionTop;
      
      const totalScrollableDistance = sectionHeight - viewportHeight;
      
      if (scrolledPastSection >= 0 && scrolledPastSection <= totalScrollableDistance) {
        const scrollPercentage = scrolledPastSection / totalScrollableDistance;
        
        const trackWidth = horizTrack.scrollWidth;
        const maxTranslateX = trackWidth - window.innerWidth;
        const translateX = -scrollPercentage * maxTranslateX;
        
        horizTrack.style.transform = `translate3d(${translateX}px, 0, 0)`;
      } else if (scrolledPastSection < 0) {
        horizTrack.style.transform = "translate3d(0px, 0, 0)";
      } else {
        const trackWidth = horizTrack.scrollWidth;
        const maxTranslateX = trackWidth - window.innerWidth;
        horizTrack.style.transform = `translate3d(-${maxTranslateX}px, 0, 0)`;
      }
    } else {
      // Clear transform properties on mobile to allow normal overflow scrolling
      horizTrack.style.transform = "none";
    }
  };
  
  window.addEventListener("scroll", handleHorizontalScroll);
  window.addEventListener("resize", handleHorizontalScroll);
  handleHorizontalScroll();

  // ==========================================
  // 7. PRE-FILL CONCIERGE FROM ITINERARY CARD
  // ==========================================
  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".select-track-btn");
    if (!btn) return;

    const trackName = btn.dataset.track;
    const typeSelect = document.getElementById("package-type");
    const detailsText = document.getElementById("package-message");

    if (typeSelect) {
      typeSelect.value = "Custom Multi-Day Expedition";
    }
    if (detailsText) {
      detailsText.value = `I'm interested in booking the suggested itinerary path: "${trackName}". Please compile rates and options for us.`;
    }

    // Smooth scroll to booking section
    const bookingPanel = document.getElementById("booking-section");
    if (bookingPanel) {
      if (lenis) {
        lenis.scrollTo(bookingPanel);
      } else {
        bookingPanel.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  // ==========================================
  // 8. INTERACTIVE WHATSAPP DISPATCHER
  // ==========================================
  const openWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  };

  if (packageForm) {
    packageForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const statusMsg = document.getElementById("package-status");
      
      const name = document.getElementById("package-name").value.trim();
      const email = document.getElementById("package-email").value.trim();
      const type = document.getElementById("package-type").value;
      const days = document.getElementById("package-days").value.trim();
      const details = document.getElementById("package-message").value.trim();

      if (statusMsg) {
        statusMsg.textContent = "Compiling request parameters and opening secure WhatsApp...";
      }

      const compiledMessage = `LuxeCeylon Bespoke Journeys - Booking Request\n\nGuest Name: ${name}\nEmail Address: ${email}\nTransit Service Class: ${type}\nExpedition Duration: ${days} Days\n\nItinerary/Details:\n${details}`;
      
      setTimeout(() => {
        openWhatsApp(compiledMessage);
        if (statusMsg) {
          statusMsg.textContent = "Dispatched. Please check your open WhatsApp tab.";
        }
        packageForm.reset();
      }, 1000);
    });
  }

  // ==========================================
  // 9. AMBIENT BACKGROUND AUDIO CONTROLS
  // ==========================================
  if (bgAudio && soundToggle) {
    bgAudio.volume = 0.4;

    const setSoundState = (isPlaying) => {
      soundIconsOff.forEach(icon => icon.classList.toggle("hidden", isPlaying));
      soundIconsOn.forEach(icon => icon.classList.toggle("hidden", !isPlaying));
    };

    const toggleSound = (e) => {
      e.stopPropagation();
      if (bgAudio.paused) {
        bgAudio.play()
          .then(() => setSoundState(true))
          .catch(() => {});
      } else {
        bgAudio.pause();
        setSoundState(false);
      }
    };

    soundToggle.addEventListener("click", toggleSound);

    // Soft startup play attempt on active screen interaction
    const playAudio = () => {
      bgAudio.play()
        .then(() => {
          setSoundState(true);
          document.removeEventListener("click", playAudio);
          document.removeEventListener("touchstart", playAudio);
        })
        .catch(() => {});
    };

    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);

    // Visibilty event listeners to respect system focus
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (!bgAudio.paused) {
          bgAudio.pause();
        }
      } else {
        const isPlaying = soundIconsOn.length > 0 && !soundIconsOn[0].classList.contains("hidden");
        if (isPlaying) {
          bgAudio.play().catch(() => {});
        }
      }
    });
  }

  // ==========================================
  // 10. LOCAL STORAGE REVIEWS ENGINE
  // ==========================================
  const getStoredReviews = () => {
    try {
      return JSON.parse(localStorage.getItem(reviewStorageKey) || "[]");
    } catch {
      return [];
    }
  };

  const saveStoredReviews = (reviews) => {
    localStorage.setItem(reviewStorageKey, JSON.stringify(reviews));
  };

  const deleteReview = (reviewId) => {
    const remaining = getStoredReviews().filter((rev) => rev.id !== reviewId);
    saveStoredReviews(remaining);
    rebuildReviewsList();
  };

  const createReviewCard = (review, isCustom = false) => {
    const card = document.createElement("article");
    card.className = "review-card reveal-text revealed";
    if (isCustom) {
      card.dataset.reviewId = review.id;
    }

    const headerBox = document.createElement("div");
    headerBox.className = "review-card__header";

    const stars = document.createElement("span");
    stars.className = "review-card__stars";
    stars.textContent = "★".repeat(Number(review.rating || 5));
    headerBox.appendChild(stars);

    if (isCustom) {
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "btn-delete-review";
      delBtn.textContent = "Delete";
      delBtn.addEventListener("click", () => {
        if (confirm("Delete your travel log?")) {
          deleteReview(review.id);
        }
      });
      headerBox.appendChild(delBtn);
    } else {
      const badge = document.createElement("span");
      badge.className = "review-card__badge";
      badge.textContent = "Verified Guest";
      headerBox.appendChild(badge);
    }

    const text = document.createElement("p");
    text.className = "review-card__text";
    text.textContent = `"${review.message}"`;

    const meta = document.createElement("div");
    meta.className = "review-card__meta";

    const name = document.createElement("strong");
    name.className = "review-card__name";
    name.textContent = review.name;
    
    const country = document.createElement("span");
    country.className = "review-card__country";
    country.textContent = review.country;

    meta.appendChild(name);
    meta.appendChild(country);

    card.appendChild(headerBox);
    card.appendChild(text);
    card.appendChild(meta);

    return card;
  };

  const rebuildReviewsList = () => {
    if (!reviewsList) return;

    // Clear previously appended custom reviews
    reviewsList.querySelectorAll("[data-review-id]").forEach(node => node.remove());

    const stored = getStoredReviews();
    stored.slice().reverse().forEach((review) => {
      reviewsList.prepend(createReviewCard(review, true));
    });
  };

  if (reviewForm) {
    reviewForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const statusMsg = document.getElementById("review-status");

      const name = document.getElementById("review-name").value.trim();
      const country = document.getElementById("review-country").value.trim();
      const rating = document.getElementById("review-rating").value;
      const message = document.getElementById("review-message").value.trim();

      const newReview = {
        id: `review-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
        name,
        country,
        rating,
        message
      };

      const stored = getStoredReviews();
      stored.push(newReview);
      saveStoredReviews(stored);
      rebuildReviewsList();

      // Notify the testimonials slider iframe to refresh
      const testimonialsIframe = document.getElementById("testimonials-iframe");
      if (testimonialsIframe && testimonialsIframe.contentWindow) {
        testimonialsIframe.contentWindow.postMessage({ type: "refresh-reviews" }, "*");
      }

      reviewForm.reset();
      if (statusMsg) {
        statusMsg.textContent = "Thank you! Your guest log was successfully added.";
      }
    });
  }

  // Load reviews on boot
  rebuildReviewsList();

  // ==========================================
  // 10.5. MOBILE VIEW AUTO-SCROLL ENGINE
  // ==========================================
  const initMobileAutoScroll = (gridSelector) => {
    if (window.innerWidth >= 768) return; // Only run on mobile

    const grid = document.querySelector(gridSelector);
    if (!grid) return;

    // Clone children for seamless infinite loop
    const origChildren = Array.from(grid.children);
    origChildren.forEach(child => {
      const clone = child.cloneNode(true);
      clone.querySelectorAll(".reveal-text").forEach(el => el.classList.add("revealed"));
      clone.classList.add("revealed");
      clone.setAttribute("aria-hidden", "true");
      grid.appendChild(clone);
    });

    const SPEED = 0.725; // px per frame (increased by 45%)
    let isPaused = false;
    let pauseTimer = null;
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouchScrollingHorizontally = false;

    const pause = () => {
      isPaused = true;
      if (pauseTimer) clearTimeout(pauseTimer);
    };

    const resume = (delay = 1800) => {
      if (pauseTimer) clearTimeout(pauseTimer);
      pauseTimer = setTimeout(() => { isPaused = false; }, delay);
    };

    // Detect horizontal vs vertical swipe to prevent page scroll conflicts
    grid.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isTouchScrollingHorizontally = false;
      pause();
    }, { passive: true });

    grid.addEventListener("touchmove", (e) => {
      const dx = Math.abs(e.touches[0].clientX - touchStartX);
      const dy = Math.abs(e.touches[0].clientY - touchStartY);
      if (dx > dy && dx > 5) {
        isTouchScrollingHorizontally = true;
      }
    }, { passive: true });

    grid.addEventListener("touchend", () => {
      isTouchScrollingHorizontally = false;
      resume(1800);
    }, { passive: true });

    grid.addEventListener("mouseenter", pause);
    grid.addEventListener("mouseleave", () => resume(500));

    const tick = () => {
      if (!isPaused) {
        grid.scrollLeft += SPEED;
        // Seamless loop: jump back when we've scrolled through the original set
        const halfWidth = grid.scrollWidth / 2;
        if (grid.scrollLeft >= halfWidth) {
          // Instant reset - no smooth animation
          grid.style.scrollBehavior = "auto";
          grid.scrollLeft -= halfWidth;
        }
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  // Initialize auto-scroll for the 4 card grids (mobile only)
  initMobileAutoScroll(".destinations__grid");
  initMobileAutoScroll(".fleet__grid");
  initMobileAutoScroll(".tracks__grid");
  initMobileAutoScroll("#horizontal-track");
});

// ==========================================
// 11. SERVICES & TESTIMONIALS IFRAME AUTO-RESIZE & INTERACTIVE INQUIRY
// ==========================================
window.addEventListener('message', (event) => {
  if (!event.data) return;
  
  // Auto-resize any iframe that sends the resize message to prevent nested scrollbars
  if (event.data.type === 'resize-iframe') {
    try {
      const iframe = event.source.frameElement;
      if (iframe) {
        iframe.style.height = `${event.data.height}px`;
      }
    } catch (e) {
      // Fallback using name identifiers to prevent conflicts
      if (event.data.name === 'services') {
        const servicesIframe = document.getElementById('services-iframe');
        if (servicesIframe) {
          servicesIframe.style.height = `${event.data.height}px`;
        }
      } else if (event.data.name === 'testimonials') {
        const testimonialsIframe = document.getElementById('testimonials-iframe');
        if (testimonialsIframe) {
          testimonialsIframe.style.height = `${event.data.height}px`;
        }
      } else {
        // Fallback for both if name is omitted
        const servicesIframe = document.getElementById('services-iframe');
        if (servicesIframe) {
          servicesIframe.style.height = `${event.data.height}px`;
        }
        const testimonialsIframe = document.getElementById('testimonials-iframe');
        if (testimonialsIframe) {
          testimonialsIframe.style.height = `${event.data.height}px`;
        }
      }
    }
  }
  
  // Select service and auto-scroll to the secure booking deck
  if (event.data.type === 'select-service') {
    const serviceName = event.data.service;
    const serviceDesc = event.data.description;
    const typeSelect = document.getElementById("package-type");
    const detailsText = document.getElementById("package-message");

    if (typeSelect) {
      if (serviceName === "VIP Airport Transfers") {
        typeSelect.value = "VIP Airport Transfer";
      } else if (serviceName === "Multi-Day Expeditions") {
        typeSelect.value = "Custom Multi-Day Expedition";
      } else if (serviceName === "Regional Day Trips") {
        typeSelect.value = "Colonial City & Day Trip";
      } else {
        typeSelect.value = "Bespoke Celebration Chauffeur";
      }
      
      // Trigger change event to ensure any validation or style updates occur
      typeSelect.dispatchEvent(new Event('change'));
    }
    
    if (detailsText) {
      detailsText.value = `I am interested in inquiring about the "${serviceName}" service:\n"${serviceDesc}"\n\nPlease compile rates and custom vehicle configurations for this service.`;
    }

    // Smooth scroll to the booking panel
    const bookingPanel = document.getElementById("booking-section");
    if (bookingPanel) {
      bookingPanel.scrollIntoView({ behavior: "smooth" });
    }
  }
});
