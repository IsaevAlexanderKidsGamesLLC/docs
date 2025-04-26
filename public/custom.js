document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('message', function (event) {
        if (typeof event.data === 'object' && event.data?.height && event.data?.tallyIframe) {
            const iframe = document.querySelector('iframe[src*="tally.so"]');
            if (iframe) {
                iframe.style.height = event.data.height + 'px';
            }
        }
    });
});
