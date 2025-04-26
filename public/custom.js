document.addEventListener("DOMContentLoaded", async () => {
    if (window.location.pathname.includes("/clickwrap")) {
        try {
            const ipResponse = await fetch('https://api64.ipify.org?format=json');
            const ipData = await ipResponse.json();
            const userAgent = navigator.userAgent;

            const frame = document.querySelector('iframe[title="Developer Agreement Acceptance Form"]');
            if (frame) {
                let src = frame.getAttribute('src');
                src = src.split('&ip_address=')[0];
                src += `&ip_address=${encodeURIComponent(ipData.ip)}&user_agent=${encodeURIComponent(userAgent)}`;
                frame.setAttribute('src', src);
            }
        } catch (error) {
            console.error('Failed to enrich Tally form with IP/User-Agent:', error);
        }
    }
});
