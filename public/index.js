// Function called if AdBlock is not detected
function adBlockNotDetected() {
    alert('AdBlock is not enabled');
}
// Function called if AdBlock is detected
function adBlockDetected() {
    alert('AdBlock is enabled');
}

// We look at whether BlockAdBlock already exists.
if (typeof blockAdBlock !== 'undefined' || typeof BlockAdBlock !== 'undefined') {
    // If this is the case, it means that something tries to usurp are identity
    // So, considering that it is a detection
    adBlockDetected();
} else {
    // Otherwise, you import the script BlockAdBlock
    var importFAB = document.createElement('script');
    importFAB.onload = function () {
        // If all goes well, we configure BlockAdBlock
        blockAdBlock.onDetected(adBlockDetected)
        blockAdBlock.onNotDetected(adBlockNotDetected);
    };
    importFAB.onerror = function () {
        // If the script does not load (blocked, integrity error, ...)
        // Then a detection is triggered
        adBlockDetected();
    };
    importFAB.integrity = 'sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=';
    importFAB.crossOrigin = 'anonymous';
    importFAB.src = 'https://cdnjs.cloudflare.com/ajax/libs/blockadblock/3.2.1/blockadblock.min.js';
    document.head.appendChild(importFAB);
}