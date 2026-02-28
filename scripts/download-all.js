const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const images = [
    // Char Dham Yatra section
    { url: 'https://www.tourtraveltourism.com/images/packages/char-dham-yatra.jpg', name: 'char-dham.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/packages/do-dham-yatra.jpg', name: 'do-dham.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/packages/kedarnath-yatra.jpg', name: 'kedarnath.jpg' },

    // Popular Tour Packages
    { url: 'https://www.tourtraveltourism.com/img/packages/kumaon-darshan.jpg', name: 'kumaon.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/vrindavan-tour.jpg', name: 'vrindavan.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/kainchi-dham.jpg', name: 'kainchi-dham.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/vaishno-devi-tour.jpg', name: 'vaishno-devi.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/weekend-tour.jpg', name: 'weekend.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/adventure-tour.jpg', name: 'adventure.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/family-tour.jpg', name: 'family.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/lake-tour.jpg', name: 'lake.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/ranikhet-binsar.jpg', name: 'ranikhet.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/kashmir-tour.jpg', name: 'kashmir.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/mussoorie-tour.jpg', name: 'mussoorie.jpg' },
    { url: 'https://www.tourtraveltourism.com/img/packages/chopta-tour.jpg', name: 'chopta.jpg' },

    // Hotels
    { url: 'https://www.tourtraveltourism.com/images/hotel/stay-kedarnath.jpg', name: 'hotel-1.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/hotel/stay-char-dham.jpg', name: 'hotel-2.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/hotel/stay-badrinath.jpg', name: 'hotel-3.jpg' },

    // Hero and backgrounds
    { url: 'https://www.tourtraveltourism.com/images/land-of-gods-uttarakhand.jpg', name: 'hero-bg.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/plan-your-trip.png', name: 'plan-trip-bg.png' },

    // Logo
    { url: 'https://www.tourtraveltourism.com/images/logo.png', name: 'logo.png' },
];

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://www.tourtraveltourism.com/'
            }
        };
        client.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let redirectUrl = res.headers.location;
                if (redirectUrl.startsWith('/')) {
                    const urlObj = new URL(url);
                    redirectUrl = urlObj.protocol + '//' + urlObj.host + redirectUrl;
                }
                downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode === 200) {
                const stream = fs.createWriteStream(filepath);
                res.pipe(stream);
                stream.on('finish', () => {
                    stream.close();
                    resolve(filepath);
                });
                stream.on('error', reject);
            } else {
                res.resume();
                reject(new Error(`Status Code: ${res.statusCode} for ${url}`));
            }
        }).on('error', reject);
    });
}

async function start() {
    const publicDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    let success = 0;
    let failed = 0;

    for (const image of images) {
        try {
            console.log(`Downloading ${image.name}...`);
            await downloadImage(image.url, path.join(publicDir, image.name));
            const stats = fs.statSync(path.join(publicDir, image.name));
            console.log(`  OK: ${image.name} (${(stats.size / 1024).toFixed(1)} KB)`);
            success++;
        } catch (error) {
            console.error(`  FAIL: ${image.name} - ${error.message}`);
            failed++;
        }
    }
    console.log(`\nDone! ${success} succeeded, ${failed} failed.`);
}

start();
