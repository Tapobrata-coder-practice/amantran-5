// Initialize ScrollReveal with Faster Settings
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',   // Reduced from 60px (Less travel distance = feels faster)
    duration: 1000,     // Reduced from 1500ms (Animation completes in 1 second)
    delay: 100,         // Reduced from 200ms (Starts almost immediately)
    easing: 'ease-in-out', // Smooth acceleration
    reset: false        // Animations happen only once (Standard for professional sites)
});

// Apply reveal classes to elements
// Interval controls how fast items appear one after another (e.g., the gallery images)
sr.reveal('.reveal-bottom', { interval: 150 });
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right' });
sr.reveal('.section-title', { origin: 'top', distance: '20px' });

// Console check
console.log("Amantran Website Loaded - Fast Motion Enabled");