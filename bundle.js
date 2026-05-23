const fs = require('fs');
const path = require('path');

const www = 'www';

// Clean any previous bundle
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(www);

// Read index.html and rewrite asset paths to absolute URLs.
// Videos and images are streamed from the live site instead of bundled
// to keep the .aab under Google Play's 200MB limit.
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/"videos\//g, '"https://game.artrocks.gallery/videos/');
html = html.replace(/"images\//g, '"https://game.artrocks.gallery/images/');
fs.writeFileSync(path.join(www, 'index.html'), html);

console.log('Bundle created in www/ (videos and images streamed from web)');