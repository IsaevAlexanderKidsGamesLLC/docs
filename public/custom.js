document.addEventListener("DOMContentLoaded", async () => {
    // Проверяем, что мы на нужной странице, например, по URL
    if (window.location.pathname.includes("/clickwrap")) {
        try {
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipResponse.json();
            const userAgent = navigator.userAgent;

            const frame = document.querySelector('iframe[title="Developer Agreement Acceptance Form"]');
            if (frame) {
                let src = frame.getAttribute('src');

                // Убираем старые параметры, если вдруг остались
                src = src.split('&ip_address=')[0];

                // Дописываем IP и UA
                src += `&ip_address=${encodeURIComponent(ipData.ip)}&user_agent=${encodeURIComponent(userAgent)}`;

                frame.setAttribute('src', src);
            }
        } catch (error) {
            console.error('Failed to enrich Tally form with IP/User-Agent:', error);
        }
    }
});
