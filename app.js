gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
    ScrolTrigger.create({
        trigger: section,
        start:'top top',
        pin: true,
        pinSpacing: false
    });
});