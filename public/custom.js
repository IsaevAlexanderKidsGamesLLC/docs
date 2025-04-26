document.addEventListener("DOMContentLoaded", async () => {
    if (window.location.pathname.includes("/clickwrap")) {
        try {
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipResponse.json();
            const userAgent = navigator.userAgent;

            const frame = document.getElementById('tally-frame');
            if (frame) {
                let src = frame.getAttribute('data-tally-src');
                src += `&ip_address=${encodeURIComponent(ipData.ip)}&user_agent=${encodeURIComponent(userAgent)}`;
                frame.setAttribute('src', src);
            }
        } catch (error) {
            console.error('Failed to enrich Tally form with IP/User-Agent:', error);
        }
    }
});
