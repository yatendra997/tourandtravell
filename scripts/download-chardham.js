const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const images = [
    { url: 'https://www.tourtraveltourism.com/images/packages/char-dham-yatra.jpg', name: 'char-dham.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/packages/do-dham-yatra.jpg', name: 'do-dham.jpg' },
    { url: 'https://www.tourtraveltourism.com/images/packages/kedarnath-yatra.jpg', name: 'kedarnath.jpg' },
];

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        };
        client.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
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
                reject(new Error(`Status Code: ${res.statusCode}`));
            }
        }).on('error', reject);
    });
}

async function start() {
    const publicDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    for (const image of images) {
        try {
            console.log(`Downloading ${image.name} from original site...`);
            await downloadImage(image.url, path.join(publicDir, image.name));
            const stats = fs.statSync(path.join(publicDir, image.name));
            console.log(`Success: ${image.name} (${(stats.size / 1024).toFixed(1)} KB)`);
        } catch (error) {
            console.error(`Failed: ${image.name} - ${error.message}`);
        }
    }
    console.log("Done!");
}

start();
