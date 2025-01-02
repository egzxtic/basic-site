// UI/UX BY EGZOTIC
// UI/UX BY EGZOTIC
// UI/UX BY EGZOTIC

function updateCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCurrentTime, 1000);
updateCurrentTime();

let pageViewsData = JSON.parse(localStorage.getItem('pageViewsData')) || { views: 0 };
pageViewsData.views += 1;
localStorage.setItem('pageViewsData', JSON.stringify(pageViewsData));
document.getElementById('views').innerHTML = `<i class="fas fa-eye"></i> ${pageViewsData.views}`;