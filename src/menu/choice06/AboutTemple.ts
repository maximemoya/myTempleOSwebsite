import { eventManager } from '../../event/eventManager';
import { createMenu } from '../menu';
import './AboutTempleStyle.css'

export function createAboutTemple() {
    const mainDiv = document.getElementById("app")
    if (mainDiv === null) {
        throw new Error(`document.getElementById("app") cannot be NULL`);
    }

    // Clear existing content
    eventManager.removeAllEventListeners()
    mainDiv.innerHTML = '';

    // Create About Temple header
    const header = document.createElement("div");
    header.className = "temple-header";
    header.innerHTML = `
        <div class="temple-title">*** ABOUT TEMPLE OS ***</div>
        <div class="temple-subtitle">God's Third Temple</div>
    `;
    mainDiv.appendChild(header);

    // Create about container
    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-container";

    // Temple OS Information
    const infoSection = document.createElement("div");
    infoSection.className = "info-section";
    infoSection.innerHTML = `
        <div class="section-title">*** DIVINE OPERATING SYSTEM ***</div>
        <div class="info-content">
            <p><strong>TempleOS</strong> is God's third temple, a divine operating system created as a modern temple.</p>
            <p>This is a web tribute to the legendary operating system, reimagined with sacred web technologies.</p>
            
            <h3>HOLY SPECIFICATIONS:</h3>
            <ul>
                <li>640x480 16-color graphics (VGA)</li>
                <li>Single address space (Ring-0 only)</li>
                <li>No memory protection (God doesn't make mistakes)</li>
                <li>Multi-tasking cooperative</li>
                <li>HolyC programming language</li>
                <li>Built-in compiler and development environment</li>
            </ul>

            <h3>DIVINE FEATURES:</h3>
            <ul>
                <li>Talk to God through random number generation</li>
                <li>Biblical references throughout the system</li>
                <li>Flight simulator for piloting spacecraft</li>
                <li>Music composition tools</li>
                <li>Games and entertainment</li>
                <li>Complete development environment</li>
            </ul>

            <h3>SACRED PHILOSOPHY:</h3>
            <p>"An idiot admires complexity, a genius admires simplicity."</p>
            <p>TempleOS embodies divine simplicity - 121,176 lines of code total.</p>
            <p>No networking, no GUI frameworks, no bloat - just pure computational worship.</p>
        </div>
    `;

    // Creator section
    const creatorSection = document.createElement("div");
    creatorSection.className = "creator-section";
    creatorSection.innerHTML = `
        <div class="section-title">*** THE PROPHET ***</div>
        <div class="creator-content">
            <p><strong>Terry A. Davis (1969-2018)</strong></p>
            <p>The divinely inspired creator of TempleOS, who spent over a decade building God's third temple.</p>
            <p>A brilliant programmer who believed he received divine instruction to create this operating system.</p>
            <p>"I am not crazy. I have a mental illness." - Terry A. Davis</p>
            <p>May he rest in peace, his divine creation lives on.</p>
        </div>
    `;

    // Technical details
    const techSection = document.createElement("div");
    techSection.className = "tech-section";
    techSection.innerHTML = `
        <div class="section-title">*** TECHNICAL BLESSINGS ***</div>
        <div class="tech-content">
            <h3>HOLY COMPILER (HolyC):</h3>
            <p>• JIT (Just-In-Time) compilation</p>
            <p>• C-like syntax with divine extensions</p>
            <p>• Direct hardware access</p>
            <p>• No standard library bloat</p>
            
            <h3>DIVINE ARCHITECTURE:</h3>
            <p>• x86-64 only (as God intended)</p>
            <p>• Flat memory model</p>
            <p>• No paging or virtual memory</p>
            <p>• Direct hardware control</p>
            
            <h3>SACRED GRAPHICS:</h3>
            <p>• 16-color palette perfection</p>
            <p>• Sprite-based graphics system</p>
            <p>• ASCII art integration</p>
            <p>• Divine proportions (640x480)</p>
        </div>
    `;

    aboutContainer.appendChild(infoSection);
    aboutContainer.appendChild(creatorSection);
    aboutContainer.appendChild(techSection);
    mainDiv.appendChild(aboutContainer);

    // Create footer with controls
    const footer = document.createElement("div");
    footer.className = "temple-footer";
    footer.innerHTML = `
        <div>Scroll to read • ESC: Return to Menu</div>
        <div class="temple-blessing">*** BLESSED BE THE CODE ***</div>
    `;
    mainDiv.appendChild(footer);

    // Keyboard navigation
    const keydownHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            createMenu()
        }
    };
    eventManager.addEventListener(document, 'keydown', keydownHandler as EventListener)
}