const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
    { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', name: 'hero-bg.jpg' },
    { url: 'https://images.pexels.com/photos/10041258/pexels-photo-10041258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'char-dham.jpg' },
    { url: 'https://images.pexels.com/photos/6307371/pexels-photo-6307371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'do-dham.jpg' },
    { url: 'https://images.pexels.com/photos/5614131/pexels-photo-5614131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'kedarnath.jpg' },
    { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop', name: 'kumaon.jpg' },
    { url: 'https://images.pexels.com/photos/8082987/pexels-photo-8082987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'vrindavan.jpg' },
    { url: 'https://images.pexels.com/photos/1365428/pexels-photo-1365428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'kainchi-dham.jpg' },
    { url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2670&auto=format&fit=crop', name: 'adventure.jpg' },
    { url: 'https://plus.unsplash.com/premium_photo-1675745311090-bd9168b9f71c?q=80&w=2670&auto=format&fit=crop', name: 'hotel-1.jpg' },
    { url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'hotel-2.jpg' },
    { url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2670&auto=format&fit=crop', name: 'hotel-3.jpg' },
    { url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2670&auto=format&fit=crop', name: 'plan-trip-bg.jpg' },
];

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        };
        https.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // follow redirect
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
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
        // Skip already downloaded files to be fast
        if (fs.existsSync(path.join(publicDir, image.name))) {
            const stats = fs.statSync(path.join(publicDir, image.name));
            if (stats.size > 1000) {
                console.log(`Skipping ${image.name} - already exists.`);
                continue;
            }
        }

        try {
            console.log(`Downloading ${image.name}...`);
            await downloadImage(image.url, path.join(publicDir, image.name));
            console.log(`Success: ${image.name}`);
        } catch (error) {
            console.error(`Failed to download ${image.name}:`, error.message);
        }
    }
    console.log("All done!");
}

start();
