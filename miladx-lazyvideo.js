(function() {
    const videos = document.querySelectorAll('video.miladx-lazyvideo');

    function loadVideo(video) {
        if (video.dataset.loaded) {
            return;
        }

        if (video.dataset.src) {
            video.src = video.dataset.src;
            video.removeAttribute('data-src');
        }

        const sources = video.querySelectorAll('source[data-src]');
        sources.forEach(source => {
            source.src = source.dataset.src;
            source.removeAttribute('data-src');
        });

        video.muted = true;
        video.load();
        video.dataset.loaded = "true";
    }

    function playVideo(video) {
        if (video.paused) {
            video.play().catch(error => {});
        }
    }

    function pauseVideo(video) {
        if (!video.paused) {
            video.pause();
        }
    }

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            rootMargin: '200px 0px',
            threshold: 0.25
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadVideo(entry.target);
                    playVideo(entry.target);
                } else {
                    pauseVideo(entry.target);
                }
            });
        }, observerOptions);

        videos.forEach(video => {
            observer.observe(video);
        });
    } else {
        function checkVideosInView() {
            videos.forEach(video => {
                const rect = video.getBoundingClientRect();
                const inView = rect.top < window.innerHeight + 200 && rect.bottom > -200;

                if (inView) {
                    loadVideo(video);
                    playVideo(video);
                } else {
                    pauseVideo(video);
                }
            });
        }

        ['scroll', 'resize', 'orientationchange'].forEach(evt => {
            window.addEventListener(evt, checkVideosInView);
        });
        checkVideosInView();
    }
})();
