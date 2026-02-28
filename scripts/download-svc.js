const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
    { url: 'https://www.tourtraveltourism.com/images/services/restaurants-bars.jpg', name: 'svc-restaurants.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/services/homestay.jpg', name: 'svc-homestay.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/services/cottages.jpg', name: 'svc-cottages.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/services/resorts.jpg', name: 'svc-resorts.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/services/camping.jpg', name: 'svc-camping.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/services/hotel.jpg', name: 'svc-hotel.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/services/activities.jpg', name: 'svc-activities.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/services/taxi.jpg', name: 'svc-taxi.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/services/bike-rental.jpg', name: 'svc-bike.jpg' },
];

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://www.tourtraveltourism.com/'
            }
        }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let loc = res.headers.location;
                if (loc.startsWith('/')) loc = 'https://www.tourtraveltourism.com' + loc;
                downloadImage(loc, filepath).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode === 200) {
                const stream = fs.createWriteStream(filepath);
                res.pipe(stream);
                stream.on('finish', () => { stream.close(); resolve(filepath); });
                stream.on('error', reject);
            } else {
                res.resume();
                reject(new Error('Status: ' + res.statusCode));
            }
        }).on('error', reject);
    });
}

async function start() {
    const dir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    for (const img of images) {
        try {
            console.log('Downloading ' + img.name + '...');
            await downloadImage(img.url, path.join(dir, img.name));
            const s = fs.statSync(path.join(dir, img.name));
            console.log('  OK: ' + (s.size / 1024).toFixed(1) + ' KB');
        } catch (e) {
            console.error('  FAIL: ' + e.message);
        }
    }
    console.log('Done!');
}
start();
