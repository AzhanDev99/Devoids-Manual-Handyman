// ================================================
// GSAP COMPLETE ANIMATIONS FILE
// Optimized for Performance & Mobile Responsive
// ================================================

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// ================================================
// PERFORMANCE OPTIMIZATION SETTINGS
// ================================================
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Mobile detection
const isMobile = window.innerWidth < 768;

// ================================================
// HEADER ANIMATION (ALL PAGES)
// ================================================
function initHeaderAnimation() {
  const header = document.querySelector("header");
  if (!header) return;

  // Header slide down
  gsap.from(header, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
  });

  // Logo animation
  gsap.from(".headerLogo", {
    scale: 0,
    rotation: -360,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.3,
  });

  // Menu links stagger
  gsap.from(".headerMenuLink", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.5,
  });

  // Contact button
  gsap.from(".headerContactBtn", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.7,
  });


  if (window.innerWidth < 768) return;

  // Scroll shrink effect
  ScrollTrigger.create({
    trigger: "body",
    start: "100px top",
    onEnter: () => gsap.to(header, { padding: "0.5rem 2rem", duration: 0.3 }),
    onLeaveBack: () => gsap.to(header, { padding: "1rem 2rem", duration: 0.3 }),
  });
}

// ================================================
// HOME PAGE ANIMATIONS
// ================================================

// HOME - SECTION 1 (Hero Section)
function initHomeSection1() {
  // Heading from left
  gsap.from(".homeHeroHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".homeHeroHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Paragraph from bottom
  gsap.from(".homeHeroPara", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homeHeroPara",
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  });

  // Reviews image - width animation
  gsap.from(".homeHeroReviews", {
    width: 0,
    opacity: 0,
    transformOrigin: "right",
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".homeHeroReviews",
      toggleActions: "play none none reverse",
    },
  });

  // Subject image from bottom
  gsap.from(".homeHeroSubject", {
    scale: 0,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 1,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: ".sectionHomewrapper",
      toggleActions: "play none none reverse",
    },
  });

  // Chips with bounce
  gsap.from(".homeHeroChip1", {
    scale: 0,
    rotation: -180,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".homeHeroChip1",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeHeroChip2", {
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 0.8,

    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".homeHeroChip2",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Polygon from right
  gsap.from(".homeHeroPolygon", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homeHeroPolygon",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Button animation
  gsap.from(".homeHeroBtn", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".homeHeroBtn",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
}

// HOME - SECTION 2 (About Section)
function initHomeSection2() {
  // About heading pop up
  gsap.from(".homeAboutChip", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".homeAboutChip",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeAboutHeading", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".homeAboutHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Paragraph animation
  gsap.from(".homeAboutPara", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homeAboutPara",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Gallery cards - different positions
  gsap.from(".homeGalleryCard1", {
    x: -100,
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeGalleryCard1",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeGalleryCard2", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeGalleryCard2",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeGalleryCard3", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeGalleryCard3",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeGalleryCard4", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeGalleryCard4",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeGalleryCard5", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeGalleryCard5",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeGalleryCard6", {
    x: 100,
    y: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeGalleryCard6",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
}

// HOME - SECTION 3 (We Proudly Serve)
function initHomeSection3() {
  // Heading from bottom
  gsap.from(".homeProudHeading", {
    y: 50,
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeProudHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Paragraph animation
  gsap.from(".homeProudPara", {
    y: 30,
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homeProudPara",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Need help heading from left
  gsap.from(".homeProudNeedHelp", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homeProudNeedHelp",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Contact button from right
  gsap.from(".homeProudContactBtn", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homeProudContactBtn",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Clouds parallax
  gsap.from(".homeProudCloud1", {
    x: 300,
    ease: "none",
    scrollTrigger: {
      trigger: ".homeProudCloud1",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.from(".homeProudCloud2", {
    x: -300,
    ease: "none",
    scrollTrigger: {
      trigger: ".homeProudCloud2",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  // Background image parallax
  gsap.from(".homeProudBgImage", {
    y: -200,
    scale: 3,
    ease: "none",
    scrollTrigger: {
      trigger: ".homeProudBgImage",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
  });
}

// HOME - SECTION 4 (Why Choose)
function initHomeSection4() {
  // Heading from right
  gsap.from(".homeWhyHeading", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".homeWhyHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Cards animations
  const whyCards = [
    ".homeWhyCard1",
    ".homeWhyCard2",
    ".homeWhyCard3",
    ".homeWhyCard4",
    ".homeWhyCard5",
    ".homeWhyCard6",
    ".homeWhyCard7",
    ".homeWhyCard8",
  ];

  whyCards.forEach((card, index) => {
    const directions = [
      { x: -100, y: -50 },
      { x: 100, y: -50 },
      { x: -100, y: 50 },
      { x: 100, y: 50 },
      { x: -50, y: 100 },
      { x: 50, y: 100 },
      { x: -100, y: -100 },
      { x: 100, y: -100 },
    ];

    gsap.from(card, {
      x: directions[index].x,
      y: directions[index].y,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Inner text animation
    gsap.from(`${card} h1`, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2 + index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(`${card} p`, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.3 + index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Banner animations
  gsap.from(".homeWhyBannerImg", {
    scale: 0,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeWhyBannerImg",
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeWhyBannerText", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".homeWhyBannerText",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
}

// HOME - SECTION 5 (Recent Projects)
function initHomeSection5() {
  // Heading from left
  gsap.from(".homeProjectsHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".homeProjectsHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Button pop animation (repeating)
  gsap.to(".homeProjectsBtn", {
    scale: 1.1,
    duration: 0.5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 4.5,
  });

  // Carousel cards
  gsap.from(".homeProjectCard", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeProjectCard",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
}

// HOME - SECTION 6 (Reviews)
function initHomeSection6() {
  // Heading from left
  gsap.from(".homeReviewHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".homeReviewHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Rating width animation
  gsap.from(".homeReviewRating", {
    width: 0,
    opacity: 0,
    transformOrigin: "right",
    duration: 1,
    delay: 0.2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".homeReviewRating",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeReviewText", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homeReviewText",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Review cards with flip effect
  gsap.from(".homeReviewCard1", {
    rotationY: -90,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeReviewCard1",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeReviewCard2", {
    rotationY: 90,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeReviewCard2",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".homeReviewCard3", {
    rotationY: -90,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".homeReviewCard3",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
}

// HOME - FOOTER
function initHomeFooter() {
  gsap.from(".homeFooter", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homeFooter",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
}

// ================================================
// ABOUT PAGE ANIMATIONS
// ================================================

function initAboutSection1() {
  gsap.from(".aboutHeroHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".sectionAboutWrapper",
      start: "top 80%",
    },
  });

  gsap.from(".aboutHeroPara", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".sectionAboutWrapper",
      start: "top 80%",
    },
  });

  gsap.from(".aboutHeroBtn", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".sectionAboutWrapper",
      start: "top 80%",
    },
  });

  gsap.from(".aboutHeroSubject", {
    scale: 0,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 1,
    delay: 0.3,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: ".sectionAboutWrapper",
      start: "top 80%",
    },
  });

  gsap.from(".aboutHeroChip1", {
    scale: 0,
    rotation: -180,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".sectionAboutWrapper",
      start: "top 80%",
    },
  });

  gsap.from(".aboutHeroChip2", {
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 0.8,
    delay: 0.7,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".sectionAboutWrapper",
      start: "top 80%",
    },
  });

  gsap.from(".aboutHeroPolygon", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".sectionAboutWrapper",
      start: "top 80%",
    },
  });
}

function initAboutSection2() {
  gsap.from(".aboutWhyHeading", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".aboutWhyHeading",
      start: "top 80%",
    },
  });

  const aboutCards = [
    ".aboutWhyCard1",
    ".aboutWhyCard2",
    ".aboutWhyCard3",
    ".aboutWhyCard4",
    ".aboutWhyCard5",
    ".aboutWhyCard6",
    ".aboutWhyCard7",
    ".aboutWhyCard8",
  ];

  aboutCards.forEach((card, i) => {
    gsap.from(card, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });

    gsap.from(`${card} h1`, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2 + i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });

    gsap.from(`${card} p`, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.3 + i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });
  });

  gsap.from(".aboutBannerImg", {
    scale: 0,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".aboutBannerImg",
      start: "top 80%",
    },
  });

  gsap.from(".aboutBannerText", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".aboutBannerText",
      start: "top 80%",
    },
  });
}

function initAboutSection3() {
  gsap.from(".aboutGalleryChip", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".aboutGalleryChip",
      start: "top 80%",
    },
  });

  gsap.from(".aboutGalleryHeading", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".aboutGalleryHeading",
      start: "top 80%",
    },
  });

  gsap.from(".aboutGalleryPara", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".aboutGalleryPara",
      start: "top 80%",
    },
  });

  const galleryCards = [
    ".aboutGalleryCard1",
    ".aboutGalleryCard2",
    ".aboutGalleryCard3",
    ".aboutGalleryCard4",
    ".aboutGalleryCard5",
    ".aboutGalleryCard6",
  ];

  galleryCards.forEach((card, i) => {
    gsap.from(card, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.15,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });
  });
}

function initAboutFooter() {
  gsap.from(".aboutFooter", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".aboutFooter",
      start: "top 90%",
    },
  });
}

// ================================================
// SERVICES PAGE ANIMATIONS
// ================================================

function initServicesSection1() {
  gsap.from(".servicesHeroHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".servicesHeroHeading",
      start: "top 80%",
    },
  });

  gsap.from(".servicesHeroImage", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".servicesHeroImage",
      start: "top 80%",
    },
  });
}

function initServicesSection2() {
  gsap.from(".servicesText1", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".servicesText1",
      start: "top 80%",
    },
  });

  gsap.from(".servicesAbsoluteImg", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".servicesAbsoluteImg",
      start: "top 80%",
    },
  });

  gsap.from(".servicesRightContent", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".servicesRightContent",
      start: "top 80%",
    },
  });

  gsap.from(".servicesBox", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".servicesBox",
      start: "top 85%",
    },
  });
}

function initServiceSectionNew() {
  // Heading from bottom
  gsap.from(".serviceProudHeading", {
    y: 50,
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".serviceProudHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Paragraph animation
  gsap.from(".serviceProudPara", {
    y: 30,
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".serviceProudPara",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Need help heading from left
  gsap.from(".serviceProudNeedHelp", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".serviceProudNeedHelp",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Contact button from right
  gsap.from(".serviceProudContactBtn", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".serviceProudContactBtn",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Clouds parallax
  gsap.from(".serviceProudCloud1", {
    x: 300,
    ease: "none",
    scrollTrigger: {
      trigger: ".serviceProudCloud1",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.from(".serviceProudCloud2", {
    x: -300,
    ease: "none",
    scrollTrigger: {
      trigger: ".serviceProudCloud2",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

}


function initServicesSection3() {
  gsap.from(".servicesCard", {
    rotationY: 90,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".servicesCard",
      start: "top 80%",
    },
  });

  gsap.from(".servicesBannerHeading", {
    y: 50,
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".servicesBannerHeading",
      start: "top 80%",
    },
  });

  gsap.from(".servicesBannerTextLeft", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".servicesBannerTextLeft",
      start: "top 80%",
    },
  });

  gsap.from(".servicesBannerImgRight", {
    scale: 0,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".servicesBannerImgRight",
      start: "top 80%",
    },
  });

  gsap.from(".servicesReviewCard", {
    rotationY: -90,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".servicesReviewCard",
      start: "top 80%",
    },
  });
}

function initServicesFooter() {
  gsap.from(".servicesFooter", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".servicesFooter",
      start: "top 90%",
    },
  });
}

// ================================================
// GALLERY PAGE ANIMATIONS
// ================================================

function initGallerySection1() {
  gsap.from(".galleryHeroHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".galleryMainWrapper",
      start: "top 80%",
    },
  });
  gsap.from(".galleryHeroSubject", {
    scale: 0,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 1,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: ".galleryMainWrapper",
      start: "top 80%",
    },
  });
  gsap.from(".galleryHeroChip1", {
    scale: 0,
    rotation: -180,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".galleryMainWrapper",
      start: "top 80%",
    },
  });
  gsap.from(".galleryHeroChip2", {
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".galleryMainWrapper",
      start: "top 80%",
    },
  });
  gsap.from(".galleryHeroPolygon", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".galleryMainWrapper",
      start: "top 80%",
    },
  });
}
function initGallerySection2() {
  gsap.from(".galleryMainHeading", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".galleryMainHeading",
      start: "top 80%",
    },
  });
  gsap.from(".galleryImageCard", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".galleryImageCard",
      start: "top 85%",
    },
  });
}
function initGallerySection3() {
  gsap.from(".galleryBannerImg", {
    scale: 0,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".galleryBannerImg",
      start: "top 80%",
    },
  });
  gsap.from(".galleryBannerText", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".galleryBannerText",
      start: "top 80%",
    },
  });
}
function initGalleryFooter() {
  gsap.from(".galleryFooter", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".galleryFooter",
      start: "top 90%",
    },
  });
}
// ================================================
// WHY CHOOSE US PAGE ANIMATIONS
// ================================================
function initWhySection1() {
  gsap.from(".whyHeroHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".whyHeroHeading",
      start: "top 80%",
    },
  });
  gsap.from(".whyHeroPoints", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".whyHeroPoints",
      start: "top 80%",
    },
  });
  gsap.from(".whyHeroBtn", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".whyHeroBtn",
      start: "top 80%",
    },
  });
  gsap.from(".whyHeroImage", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".whyHeroImage",
      start: "top 80%",
    },
  });
  gsap.from(".whyHeroPolygon", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".whyHeroPolygon",
      start: "top 80%",
    },
  });
  gsap.from(".whyHeroChip1", {
    scale: 0,
    rotation: -180,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".whyHeroChip1",
      start: "top 80%",
    },
  });
  gsap.from(".whyHeroChip2", {
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".whyHeroChip2",
      start: "top 80%",
    },
  });
}
function initWhySection2() {
  gsap.from(".whySection2Heading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".whySection2Heading",
      start: "top 80%",
    },
  });
  const whyCards = [
    ".whyCard1",
    ".whyCard2",
    ".whyCard3",
    ".whyCard4",
    ".whyCard5",
    ".whyCard6",
    ".whyCard7",
    ".whyCard8",
  ];
  whyCards.forEach((card, i) => {
    gsap.from(card, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });
    gsap.from(`${card} h1`, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2 + i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });

    gsap.from(`${card} p`, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.3 + i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });
  });
}
function initWhySection3() {
  gsap.from(".whySection3Text", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".whySection3Text",
      start: "top 80%",
    },
  });
  gsap.from(".whySection3Heading", {
    y: 50,
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".whySection3Heading",
      start: "top 80%",
    },
  });
  gsap.from(".whySection3NeedHelp", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".whySection3NeedHelp",
      start: "top 80%",
    },
  });
  gsap.from(".whySection3ContactBtn", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".whySection3ContactBtn",
      start: "top 80%",
    },
  });
  gsap.to(".whyBgParallax", {
    y: 200,
    scale: 2,
    ease: "none",
    scrollTrigger: {
      trigger: ".whyBgParallax",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
  });
  gsap.to(".whyCloud1", {
    y: -100,
    x: 200,
    ease: "none",
    scrollTrigger: {
      trigger: ".whyCloud1",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(".whyCloud2", {
    y: -100,
    x: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".whyCloud2",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
}
function initWhySection4() {
  gsap.from(".whyReviewHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".whyReviewHeading",
      start: "top 80%",
    },
  });
  gsap.from(".whyReviewCard", {
    rotationY: -90,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".whyReviewCard",
      start: "top 80%",
    },
  });
}
function initWhyFooter() {
  gsap.from(".whyFooter", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".whyFooter",
      start: "top 90%",
    },
  });
}
// ================================================
// CONTACT PAGE ANIMATIONS
// ================================================
function initContactSection1() {
  gsap.from(".contactHeading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contactHeading",
      start: "top 80%",
    },
  });
  gsap.from(".contactPara", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contactPara",
      start: "top 80%",
    },
  });
  gsap.from(".contactBtn", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".contactBtn",
      start: "top 80%",
    },
  });
  gsap.from(".contactForm", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".contactForm",
      start: "top 80%",
    },
  });
  gsap.from(".contactFormTitle", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".contactFormTitle",
      start: "top 80%",
    },
  });
  gsap.from(".contactFormInput", {
    x: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contactFormInput",
      start: "top 80%",
    },
  });
  gsap.from(".contactFormButton", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".contactFormButton",
      start: "top 80%",
    },
  });
}
function initContactFooter() {
  gsap.from(".contactFooter", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contactFooter",
      start: "top 90%",
    },
  });
}
// ================================================
// PAGE DETECTION & INITIALIZATION
// ================================================
function detectPageAndInit() {
  const path = window.location.pathname;
  const page = path.split("/").pop().split(".")[0] || "home";
  // Always init header
  initHeaderAnimation();
  // Initialize based on page
  if (page === "home" || page === "" || path === "/") {
    initHomeSection1();
    initHomeSection2();
    initHomeSection3();
    initHomeSection4();
    initHomeSection5();
    initHomeSection6();
    initHomeFooter();
  } else if (page === "about") {
    initAboutSection1();
    initAboutSection2();
    initAboutSection3();
    initAboutFooter();
  } else if (page === "service") {
    initServicesSection1();
    initServicesSection2();
    initServiceSectionNew();
    initServicesSection3();
    initServicesFooter();
  } else if (page === "gallery") {
    initGallerySection1();
    initGallerySection2();
    initGallerySection3();
    initGalleryFooter();
  } else if (page === "whychooseus") {
    initWhySection1();
    initWhySection2();
    initWhySection3();
    initWhySection4();
    initWhyFooter();
  } else if (page === "contact") {
    initContactSection1();
    initContactFooter();
  }
}
// ================================================
// GLOBAL INITIALIZATION
// ================================================
window.addEventListener("load", () => {
  detectPageAndInit();
  // Refresh ScrollTrigger after page load
  ScrollTrigger.refresh();
});
// Handle window resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
console.log("🚀 GSAP Animations Loaded Successfully!");


const menuOpenBtn = document.getElementById("menuOpenBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const menu = document.getElementById("menu");

// OPEN MENU
menuOpenBtn.addEventListener("click", () => {
  menu.classList.remove("-translate-y-full");
  menu.classList.add("translate-y-0");
});

// CLOSE MENU
menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("translate-y-0");
  menu.classList.add("-translate-y-full");
});
