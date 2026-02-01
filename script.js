// Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
const charArray = chars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Comprehensive list of file extensions
const fileExtensions = {
    // Documents - Supported
    'PDF': { supported: true, category: 'Documents' },
    'DOC': { supported: true, category: 'Documents' },
    'DOCX': { supported: true, category: 'Documents' },
    'TXT': { supported: true, category: 'Documents' },
    'RTF': { supported: true, category: 'Documents' },
    'ODT': { supported: true, category: 'Documents' },
    
    // Spreadsheets - Supported
    'XLS': { supported: true, category: 'Spreadsheets' },
    'XLSX': { supported: true, category: 'Spreadsheets' },
    'CSV': { supported: true, category: 'Spreadsheets' },
    'ODS': { supported: true, category: 'Spreadsheets' },
    
    // Presentations - Supported
    'PPT': { supported: true, category: 'Presentations' },
    'PPTX': { supported: true, category: 'Presentations' },
    'ODP': { supported: true, category: 'Presentations' },
    
    // Images - Supported
    'JPG': { supported: true, category: 'Images' },
    'JPEG': { supported: true, category: 'Images' },
    'PNG': { supported: true, category: 'Images' },
    'GIF': { supported: true, category: 'Images' },
    'BMP': { supported: true, category: 'Images' },
    'SVG': { supported: true, category: 'Images' },
    'WEBP': { supported: true, category: 'Images' },
    'ICO': { supported: true, category: 'Images' },
    
    // Video - Supported
    'MP4': { supported: true, category: 'Video' },
    'AVI': { supported: true, category: 'Video' },
    'MKV': { supported: true, category: 'Video' },
    'MOV': { supported: true, category: 'Video' },
    'WMV': { supported: true, category: 'Video' },
    'FLV': { supported: true, category: 'Video' },
    'WEBM': { supported: true, category: 'Video' },
    
    // Audio - Supported
    'MP3': { supported: true, category: 'Audio' },
    'WAV': { supported: true, category: 'Audio' },
    'OGG': { supported: true, category: 'Audio' },
    'M4A': { supported: true, category: 'Audio' },
    'FLAC': { supported: true, category: 'Audio' },
    'AAC': { supported: true, category: 'Audio' },
    'WMA': { supported: true, category: 'Audio' },
    
    // Archives - Supported
    'ZIP': { supported: true, category: 'Archives' },
    'RAR': { supported: true, category: 'Archives' },
    '7Z': { supported: true, category: 'Archives' },
    'TAR': { supported: true, category: 'Archives' },
    'GZ': { supported: true, category: 'Archives' },
    
    // Code/Programming - Not supported yet
    'HTML': { supported: false, category: 'Code' },
    'CSS': { supported: false, category: 'Code' },
    'JS': { supported: false, category: 'Code' },
    'JSON': { supported: false, category: 'Code' },
    'XML': { supported: false, category: 'Code' },
    'JAVA': { supported: false, category: 'Code' },
    'PY': { supported: false, category: 'Code' },
    'CPP': { supported: false, category: 'Code' },
    'C': { supported: false, category: 'Code' },
    'H': { supported: false, category: 'Code' },
    'CS': { supported: false, category: 'Code' },
    'PHP': { supported: false, category: 'Code' },
    'RB': { supported: false, category: 'Code' },
    'GO': { supported: false, category: 'Code' },
    'SWIFT': { supported: false, category: 'Code' },
    'KT': { supported: false, category: 'Code' },
    'RS': { supported: false, category: 'Code' },
    'TS': { supported: false, category: 'Code' },
    'JSX': { supported: false, category: 'Code' },
    'TSX': { supported: false, category: 'Code' },
    'VUE': { supported: false, category: 'Code' },
    'SCSS': { supported: false, category: 'Code' },
    'SASS': { supported: false, category: 'Code' },
    'LESS': { supported: false, category: 'Code' },
    
    // Database - Not supported yet
    'SQL': { supported: false, category: 'Database' },
    'DB': { supported: false, category: 'Database' },
    'MDB': { supported: false, category: 'Database' },
    'ACCDB': { supported: false, category: 'Database' },
    'DBF': { supported: false, category: 'Database' },
    'SQLITE': { supported: false, category: 'Database' },
    
    // Executables - Not supported yet
    'EXE': { supported: false, category: 'Executables' },
    'MSI': { supported: false, category: 'Executables' },
    'APK': { supported: false, category: 'Executables' },
    'APP': { supported: false, category: 'Executables' },
    'DMG': { supported: false, category: 'Executables' },
    'DEB': { supported: false, category: 'Executables' },
    'RPM': { supported: false, category: 'Executables' },
    'JAR': { supported: false, category: 'Executables' },
    'BAT': { supported: false, category: 'Executables' },
    'SH': { supported: false, category: 'Executables' },
    'BIN': { supported: false, category: 'Executables' },
    
    // 3D/CAD - Not supported yet
    'OBJ': { supported: false, category: '3D/CAD' },
    'FBX': { supported: false, category: '3D/CAD' },
    'STL': { supported: false, category: '3D/CAD' },
    'BLEND': { supported: false, category: '3D/CAD' },
    'MAX': { supported: false, category: '3D/CAD' },
    'DWG': { supported: false, category: '3D/CAD' },
    'DXF': { supported: false, category: '3D/CAD' },
    'SKP': { supported: false, category: '3D/CAD' },
    
    // Fonts - Not supported yet
    'TTF': { supported: false, category: 'Fonts' },
    'OTF': { supported: false, category: 'Fonts' },
    'WOFF': { supported: false, category: 'Fonts' },
    'WOFF2': { supported: false, category: 'Fonts' },
    'EOT': { supported: false, category: 'Fonts' },
    
    // E-Books - Not supported yet
    'EPUB': { supported: false, category: 'E-Books' },
    'MOBI': { supported: false, category: 'E-Books' },
    'AZW': { supported: false, category: 'E-Books' },
    'AZW3': { supported: false, category: 'E-Books' },
    'FB2': { supported: false, category: 'E-Books' },
    
    // Vector Graphics - Not supported yet
    'AI': { supported: false, category: 'Vector Graphics' },
    'EPS': { supported: false, category: 'Vector Graphics' },
    'CDR': { supported: false, category: 'Vector Graphics' },
    
    // Adobe - Not supported yet
    'PSD': { supported: false, category: 'Adobe' },
    'INDD': { supported: false, category: 'Adobe' },
    
    // System Files - Not supported yet
    'DLL': { supported: false, category: 'System Files' },
    'SYS': { supported: false, category: 'System Files' },
    'LOG': { supported: false, category: 'System Files' },
    'TMP': { supported: false, category: 'System Files' },
    'BAK': { supported: false, category: 'System Files' },
    
    // Disc Images - Not supported yet
    'ISO': { supported: false, category: 'Disc Images' },
    'IMG': { supported: false, category: 'Disc Images' },
    'VHD': { supported: false, category: 'Disc Images' },
    'VMDK': { supported: false, category: 'Disc Images' },
    
    // Certificates/Keys - Not supported yet
    'PEM': { supported: false, category: 'Certificates' },
    'CRT': { supported: false, category: 'Certificates' },
    'CER': { supported: false, category: 'Certificates' },
    'KEY': { supported: false, category: 'Certificates' },
    'P12': { supported: false, category: 'Certificates' },
    'PFX': { supported: false, category: 'Certificates' },
    
    // Data Exchange - Not supported yet
    'YAML': { supported: false, category: 'Data Exchange' },
    'YML': { supported: false, category: 'Data Exchange' },
    'TOML': { supported: false, category: 'Data Exchange' },
    'INI': { supported: false, category: 'Data Exchange' },
    'CONF': { supported: false, category: 'Data Exchange' },
    
    // Markup/Templates - Not supported yet
    'MD': { supported: false, category: 'Markup' },
    'MARKDOWN': { supported: false, category: 'Markup' },
    'TEX': { supported: false, category: 'Markup' },
    'LATEX': { supported: false, category: 'Markup' },
    
    // Video Project - Not supported yet
    'PRPROJ': { supported: false, category: 'Video Projects' },
    'AEP': { supported: false, category: 'Video Projects' },
    'FCPX': { supported: false, category: 'Video Projects' },
    
    // Audio Project - Not supported yet
    'AUP': { supported: false, category: 'Audio Projects' },
    'REAPEAKS': { supported: false, category: 'Audio Projects' },
    
    // Game Files - Not supported yet
    'UNITY': { supported: false, category: 'Game Files' },
    'UNITYPACKAGE': { supported: false, category: 'Game Files' },
    'PAK': { supported: false, category: 'Game Files' },
    'WAD': { supported: false, category: 'Game Files' },
    
    // Scientific - Not supported yet
    'MAT': { supported: false, category: 'Scientific' },
    'HDF5': { supported: false, category: 'Scientific' },
    'NC': { supported: false, category: 'Scientific' },
    'FITS': { supported: false, category: 'Scientific' },
    
    // Backup - Not supported yet
    'BKP': { supported: false, category: 'Backup' },
    'BACKUP': { supported: false, category: 'Backup' },
    
    // Torrent - Not supported yet
    'TORRENT': { supported: false, category: 'Torrent' },
    
    // Email - Not supported yet
    'EML': { supported: false, category: 'Email' },
    'MSG': { supported: false, category: 'Email' },
    'PST': { supported: false, category: 'Email' },
    'OST': { supported: false, category: 'Email' },
    
    // Calendar - Not supported yet
    'ICS': { supported: false, category: 'Calendar' },
    'VCS': { supported: false, category: 'Calendar' },
    
    // Contact - Not supported yet
    'VCF': { supported: false, category: 'Contact' },
    
    // Subtitles - Not supported yet
    'SRT': { supported: false, category: 'Subtitles' },
    'SUB': { supported: false, category: 'Subtitles' },
    'ASS': { supported: false, category: 'Subtitles' },
    'SSA': { supported: false, category: 'Subtitles' },
    
    // GIS - Not supported yet
    'KML': { supported: false, category: 'GIS' },
    'KMZ': { supported: false, category: 'GIS' },
    'GPX': { supported: false, category: 'GIS' },
    'SHP': { supported: false, category: 'GIS' },
    
    // Other Common - Not supported yet
    'DAT': { supported: false, category: 'Other' },
    'PROPERTIES': { supported: false, category: 'Other' },
    'CLASS': { supported: false, category: 'Other' },
    'O': { supported: false, category: 'Other' },
    'SO': { supported: false, category: 'Other' },
    'DYLIB': { supported: false, category: 'Other' },
};

// Modal functionality
const modal = document.getElementById('help-modal');
const btn = document.getElementById('help-button');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
    populateExtensions();
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Populate extensions in modal
function populateExtensions() {
    const container = document.getElementById('extensions-list');
    container.innerHTML = '';
    
    // Group extensions by category
    const categories = {};
    Object.entries(fileExtensions).forEach(([ext, data]) => {
        if (!categories[data.category]) {
            categories[data.category] = [];
        }
        categories[data.category].push({ ext, supported: data.supported });
    });
    
    // Create HTML for each category
    Object.entries(categories).forEach(([category, exts]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.style.gridColumn = '1 / -1';
        categoryDiv.style.marginTop = '20px';
        categoryDiv.innerHTML = `<h3 style="color: #00ff00; border-bottom: 2px solid #00ff00; padding-bottom: 10px;">${category}</h3>`;
        container.appendChild(categoryDiv);
        
        exts.forEach(({ ext, supported }) => {
            const item = document.createElement('div');
            item.className = 'extension-item';
            item.innerHTML = `
                <span class="extension-name">.${ext}</span>
                <span class="extension-status ${supported ? 'supported' : ''}">${supported ? 'Supported' : 'Not supported yet'}</span>
            `;
            container.appendChild(item);
        });
    });
}
