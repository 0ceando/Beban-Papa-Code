// Fungsi untuk memperbarui jam secara real-time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    document.getElementById('status-time').innerText = timeString;
    document.getElementById('big-time').innerText = timeString;
}

// Panggil fungsi setiap detik
setInterval(updateTime, 1000);
updateTime(); // Panggil langsung saat halaman dimuat