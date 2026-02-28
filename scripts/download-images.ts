import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
    { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', name: 'hero-bg.jpg' },
    { url: 'https://images.unsplash.com/photo-1598282361139-651fcb80695d?q=80&w=2670&auto=format&fit=crop', name: 'char-dham.jpg' },
    { url: 'https://images.unsplash.com/photo-1616900115023-ebc3db0debc2?q=80&w=2670&auto=format&fit=crop', name: 'do-dham.jpg' },
    { url: 'https://images.unsplash.com/photo-1658428131346-64accb2dffdd?q=80&w=2574&auto=format&fit=crop', name: 'kedarnath.jpg' },
    { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop', name: 'kumaon.jpg' },
    { url: 'https://images.unsplash.com/photo-1623805315570-5bfaed0b82b1?q=80&w=2670&auto=format&fit=crop', name: 'vrindavan.jpg' },
    { url: 'https://images.unsplash.com/photo-1596765798485-64554b3fd88d?q=80&w=2574&auto=format&fit=crop', name: 'kainchi-dham.jpg' },
    { url: 'https://images.unsplash.com/photo-1505295719323-af6cf2d7ffae?q=80&w=2670&auto=format&fit=crop', name: 'adventure.jpg' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop', name: 'hotel-1.jpg' },
    { url: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=2670&auto=format&fit=crop', name: 'hotel-2.jpg' },
    { url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2670&auto=format&fit=crop', name: 'hotel-3.jpg' },
    { url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2670&auto=format&fit=crop', name: 'plan-trip-bg.jpg' },
];

async function downloadImage(url: string, filepath: string) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
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
        try {
            console.log(`Downloading ${image.name}...`);
            await downloadImage(image.url, path.join(publicDir, image.name));
            console.log(`Success: ${image.name}`);
        } catch (error) {
            console.error(`Failed to download ${image.name}:`, error);
        }
    }
    console.log("All done!");
}

start();
