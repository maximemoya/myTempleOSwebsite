import { eventManager } from '../../event/eventManager';
import { createMenu } from '../menu';
import './HolyCompilerStyle.css'

interface CompilerOutput {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    timestamp: string;
}

export function createHolyCompiler() {
    const mainDiv = document.getElementById("app")
    if (mainDiv === null) {
        throw new Error(`document.getElementById("app") cannot be NULL`);
    }

    // Clear existing content
    eventManager.removeAllEventListeners()
    mainDiv.innerHTML = '';

    // Create Holy Compiler header
    const header = document.createElement("div");
    header.className = "temple-header";
    header.innerHTML = `
        <div class="temple-title">*** HOLY COMPILER v3.33 ***</div>
        <div class="temple-subtitle">Compile with Divine Optimization</div>
    `;
    mainDiv.appendChild(header);

    // Create compiler interface
    const compilerContainer = document.createElement("div");
    compilerContainer.className = "compiler-container";

    // Code input area
    const codeSection = document.createElement("div");
    codeSection.className = "code-section";
    codeSection.innerHTML = `
    <div class="section-title">SACRED CODE INPUT:</div>
    <textarea id="codeInput" class="code-input" rows="15" cols="80" placeholder="Enter your divine code here...
Example:
#include &lt;stdio.h&gt;
int main() {
    printf(&quot;God's blessing upon this code!\\n&quot;);
    return 0;
}"></textarea>
`;

    // Compiler options
    const optionsSection = document.createElement("div");
    optionsSection.className = "options-section";
    optionsSection.innerHTML = `
        <div class="section-title">DIVINE COMPILATION OPTIONS:</div>
        <div class="option-row">
            <label><input type="checkbox" id="optimizeOption" checked> Divine Optimization (-O3)</label>
            <label><input type="checkbox" id="debugOption"> Debug Symbols (-g)</label>
        </div>
        <div class="option-row">
            <label><input type="checkbox" id="warningsOption" checked> Holy Warnings (-Wall)</label>
            <label><input type="checkbox" id="blessingsOption" checked> Add God's Blessings</label>
        </div>
    `;

    // Compile button
    const compileSection = document.createElement("div");
    compileSection.className = "compile-section";
    compileSection.innerHTML = `
        <button id="compileBtn" class="holy-compile-btn">*** INVOKE HOLY COMPILATION ***</button>
    `;

    // Output area
    const outputSection = document.createElement("div");
    outputSection.className = "output-section";
    outputSection.innerHTML = `
        <div class="section-title">COMPILATION RESULTS:</div>
        <div id="compilerOutput" class="compiler-output"></div>
    `;

    compilerContainer.appendChild(codeSection);
    compilerContainer.appendChild(optionsSection);
    compilerContainer.appendChild(compileSection);
    compilerContainer.appendChild(outputSection);
    mainDiv.appendChild(compilerContainer);

    // Create footer with controls
    const footer = document.createElement("div");
    footer.className = "temple-footer";
    footer.innerHTML = `
        <div>F5: Compile • F6: Clear • ESC: Return to Menu</div>
        <div class="temple-blessing">*** BLESSED BE THE CODE ***</div>
    `;
    mainDiv.appendChild(footer);

    // Get DOM elements
    const codeInput = document.getElementById("codeInput") as HTMLTextAreaElement;
    const compileBtn = document.getElementById("compileBtn") as HTMLButtonElement;
    const compilerOutput = document.getElementById("compilerOutput") as HTMLDivElement;

    // Compilation function
    function compileCode() {
        const code = codeInput.value.trim();
        const optimizeOption = (document.getElementById("optimizeOption") as HTMLInputElement).checked;
        const debugOption = (document.getElementById("debugOption") as HTMLInputElement).checked;
        const warningsOption = (document.getElementById("warningsOption") as HTMLInputElement).checked;
        const blessingsOption = (document.getElementById("blessingsOption") as HTMLInputElement).checked;

        if (!code) {
            addOutput('error', 'ERROR: No sacred code provided for compilation!');
            return;
        }

        // Clear previous output
        compilerOutput.innerHTML = '';

        // Simulate compilation process
        addOutput('info', 'Invoking Holy Compiler...');
        addOutput('info', `Compilation flags: ${getCompilationFlags(optimizeOption, debugOption, warningsOption)}`);

        setTimeout(() => {
            // Mock compilation analysis
            if (code.toLowerCase().includes('printf') || code.toLowerCase().includes('console.log')) {
                addOutput('success', 'Holy output statements detected - BLESSED!');
            }

            if (code.includes('#include') || code.includes('import')) {
                addOutput('success', 'Sacred libraries included properly');
            }

            if (warningsOption && code.includes('int main')) {
                addOutput('warning', 'Warning: Remember to praise God in your main function');
            }

            if (blessingsOption) {
                addOutput('info', 'Adding divine blessings to compiled output...');
            }

            // Final compilation result
            const hasErrors = Math.random() < 0.2; // 20% chance of "error"

            if (hasErrors) {
                addOutput('error', 'COMPILATION FAILED: The code lacks divine inspiration!');
                addOutput('error', 'Suggestion: Add more prayers and try again');
            } else {
                addOutput('success', '*** COMPILATION SUCCESSFUL ***');
                addOutput('success', 'Executable blessed and ready for divine execution');
                addOutput('info', `Output file: blessed_program.exe (${Math.floor(Math.random() * 1000) + 100}KB)`);

                if (blessingsOption) {
                    addOutput('info', 'Divine optimizations applied - your code is now 33% holier');
                }
            }
        }, 1500);
    }

    function addOutput(type: CompilerOutput['type'], message: string) {
        const timestamp = new Date().toLocaleTimeString();
        const outputLine = document.createElement('div');
        outputLine.className = `output-line output-${type}`;

        const timeSpan = document.createElement('span');
        timeSpan.className = 'timestamp';
        timeSpan.textContent = `[${timestamp}] `;

        const messageSpan = document.createElement('span');
        messageSpan.textContent = message;

        outputLine.appendChild(timeSpan);
        outputLine.appendChild(messageSpan);
        compilerOutput.appendChild(outputLine);

        // Auto-scroll to bottom
        compilerOutput.scrollTop = compilerOutput.scrollHeight;
    }

    function getCompilationFlags(optimize: boolean, debug: boolean, warnings: boolean): string {
        const flags = [];
        if (optimize) flags.push('-O3');
        if (debug) flags.push('-g');
        if (warnings) flags.push('-Wall');
        flags.push('--divine-blessing');
        return flags.join(' ');
    }

    function clearAll() {
        codeInput.value = '';
        compilerOutput.innerHTML = '';
        addOutput('info', 'Holy Compiler reset - ready for new divine code');
    }

    // Event listeners
    compileBtn.addEventListener('click', compileCode);

    // Keyboard shortcuts
    const keydownHandler = (event: KeyboardEvent) => {
        if (event.key === 'F5') {
            event.preventDefault();
            compileCode();
        } else if (event.key === 'F6') {
            event.preventDefault();
            clearAll();
        } else if (event.key === 'Escape') {
            // Return to menu (you'll need to import and call createMenu)
            createMenu()
        }
    };
    eventManager.addEventListener(document, 'keydown', keydownHandler as EventListener)

    // Initial message
    addOutput('info', 'Holy Compiler initialized - May God bless your code');
}