* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; /* Font khas iOS */
}

body {
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Bingkai HP */
.phone-frame {
    width: 390px;
    height: 844px;
    /* Background gradient mirip gambar */
    background: linear-gradient(180deg, #4e3b9b 0%, #2e4a8f 40%, #1e4a7a 100%);
    border-radius: 55px;
    position: relative;
    overflow: hidden;
    border: 8px solid #333;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0,0,0,0.3);
}

/* Efek Cahaya Abstrak di Background */
.phone-frame::before {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 120%;
    height: 80%;
    background: radial-gradient(ellipse at center, rgba(82, 160, 232, 0.5) 0%, transparent 60%);
    z-index: 0;
}

.dynamic-island {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 35px;
    background-color: #000;
    border-radius: 20px;
    z-index: 100;
}

.status-bar {
    position: absolute;
    top: 20px;
    left: 30px;
    right: 30px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 16px;
    font-weight: 600;
    z-index: 50;
}

.icons {
    display: flex;
    gap: 5px;
    align-items: center;
}

/* --- LAYAR KUNCI --- */
.screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    z-index: 10;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out; /* Animasi geser */
}

.lock-content {
    margin-top: 100px;
    text-align: center;
}

.date { font-size: 18px; font-weight: 600; margin-bottom: -5px; }
.big-time { font-size: 96px; font-weight: 700; letter-spacing: -2px; }

.language-pill {
    margin-top: 10px;
    background: rgba(0, 0, 0, 0.3); /* Diubah jadi hitam transparan */
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 14px;
    display: inline-block;
    backdrop-filter: blur(10px);
}

/* Notifikasi */
.notification {
    position: absolute;
    bottom: 180px;
    width: 90%;
    background: rgba(40, 40, 40, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid rgba(255,255,255,0.05);
}

.notif-icon {
    width: 42px;
    height: 42px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}
.notif-icon img { width: 100%; height: 100%; }

.notif-header { display: flex; justify-content: space-between; margin-bottom: 3px; }
.notif-name { font-weight: 600; font-size: 15px; }
.notif-time { font-size: 13px; color: #ccc; }
.notif-message { font-size: 14px; color: #eee; }

/* Bagian Bawah Layar Kunci */
.lock-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    cursor: pointer; /* Biar mouse berubah jadi tangan, nandain kalo bisa diklik */
}

.bottom-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 40px;
    margin-bottom: 20px;
}

.circle-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
}

.swipe-text { font-size: 14px; margin-bottom: 20px; font-weight: 500; }
.home-indicator { width: 130px; height: 5px; background-color: white; border-radius: 10px; }

/* --- LAYAR PASSWORD --- */
.hidden {
    transform: translateY(100%);
    opacity: 0;
    pointer-events: none; /* Biar gak bisa diklik pas sembunyi */
}

.passcode-screen {
    justify-content: flex-start;
    padding-top: 80px;
}

.lock-icon { margin-bottom: 15px; }
.passcode-screen h2 { font-size: 20px; font-weight: 600; margin-bottom: 5px; }
.hint { font-size: 14px; color: #ddd; margin-bottom: 25px; }

/* Titik Password */
.passcode-dots { display: flex; gap: 15px; margin-bottom: 40px; }
.dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid white;
}
.dot.active { background-color: white; } /* Nanti nyala kalo diklik */

/* Keypad Angka */
.keypad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    width: 80%;
    max-width: 300px;
}

.key {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    color: white;
    font-size: 32px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s;
}

.key:active { background: rgba(255, 255, 255, 0.4); } /* Efek pencet */
.key span { font-size: 10px; letter-spacing: 1px; margin-top: -2px; font-weight: 600; }
.text-key { font-size: 16px; }
.empty { visibility: hidden; }

.emergency {
    position: absolute;
    bottom: 40px;
    left: 30px;
    font-size: 16px;
    font-weight: 500;
}
