import { eventManager } from '../../event/eventManager';

export function createTextEditor() {
    const mainDiv = document.getElementById("app");
    if (mainDiv === null) {
        throw new Error(`document.getElementById("app") cannot be NULL`);
    }

    // Clear existing content
    eventManager.removeAllEventListeners()
    mainDiv.innerHTML = '';

    // Create Temple OS style header
    const header = document.createElement("div");
    header.className = "temple-header";
    header.innerHTML = `
        <div class="temple-title">*** HOLY TEXT EDITOR ***</div>
        <div class="temple-subtitle">Edit Sacred Texts with Divine Precision</div>
    `;
    mainDiv.appendChild(header);

    // Create editor container
    const editorContainer = document.createElement("div");
    editorContainer.className = "temple-editor-container";
    editorContainer.style.cssText = `
        background: #000080;
        border: 2px solid #FFFF00;
        margin: 20px;
        padding: 10px;
        height: 70vh;
        display: flex;
        flex-direction: column;
    `;
    mainDiv.appendChild(editorContainer);

    // Create file name input
    const fileNameContainer = document.createElement("div");
    fileNameContainer.style.cssText = `
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    `;
    fileNameContainer.innerHTML = `
        <span style="margin-right: 10px;">File: </span>
        <input type="text" id="fileName" placeholder="untitled.txt" style="
            background: #000080;
            color: #FFFF00;
            border: 1px solid #FFFF00;
            font-family: 'Courier New', monospace;
            padding: 2px 5px;
            flex: 1;
        ">
    `;
    editorContainer.appendChild(fileNameContainer);

    // Create text area
    const textArea = document.createElement("textarea");
    textArea.id = "holyTextArea";
    textArea.style.cssText = `
        flex: 1;
        background: #000080;
        color: #FFFF00;
        border: 1px solid #FFFF00;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        padding: 10px;
        resize: none;
        outline: none;
    `;
    textArea.placeholder = "Begin typing your sacred text here...";
    editorContainer.appendChild(textArea);

    // Create button container
    const buttonContainer = document.createElement("div");
    buttonContainer.style.cssText = `
        display: flex;
        gap: 10px;
        margin-top: 10px;
        flex-wrap: wrap;
    `;
    editorContainer.appendChild(buttonContainer);

    // Create buttons
    const buttons = [
        { text: "SAVE [F2]", action: saveFile },
        { text: "LOAD [F3]", action: loadFile },
        { text: "NEW [F4]", action: newFile },
        { text: "CLEAR [F5]", action: clearFile },
        { text: "BACK [ESC]", action: goBack }
    ];

    buttons.forEach(button => {
        const btn = document.createElement("button");
        btn.textContent = button.text;
        btn.style.cssText = `
            background: #000080;
            color: #FFFF00;
            border: 2px solid #FFFF00;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            padding: 5px 10px;
            cursor: pointer;
        `;
        btn.addEventListener('click', button.action);
        btn.addEventListener('mouseenter', () => {
            btn.style.background = '#FFFF00';
            btn.style.color = '#000080';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = '#000080';
            btn.style.color = '#FFFF00';
        });
        buttonContainer.appendChild(btn);
    });

    // Create status bar
    const statusBar = document.createElement("div");
    statusBar.id = "statusBar";
    statusBar.style.cssText = `
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        margin-top: 10px;
        font-size: 12px;
        text-align: center;
    `;
    statusBar.textContent = "Ready - Type to begin editing";
    editorContainer.appendChild(statusBar);

    // Function implementations
    function saveFile() {
        const fileName = (document.getElementById("fileName") as HTMLInputElement).value || "untitled.txt";
        const content = textArea.value;

        // Create blob and download
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);

        updateStatus(`File "${fileName}" saved successfully!`);
    }

    function loadFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.txt,.js,.ts,.html,.css,.json,.md';
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    textArea.value = e.target?.result as string;
                    (document.getElementById("fileName") as HTMLInputElement).value = file.name;
                    updateStatus(`File "${file.name}" loaded successfully!`);
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }

    function newFile() {
        if (confirm("Are you sure you want to make new file ?")) {
            textArea.value = '';
            (document.getElementById("fileName") as HTMLInputElement).value = 'untitled.txt';
            updateStatus("New file created");
        }
    }

    function clearFile() {
        if (confirm("Are you sure you want to clear all text ?")) {
            textArea.value = '';
            updateStatus("Text cleared");
        }
    }

    function goBack() {
        // Import and call the menu function
        import('../menu').then(({ createMenu }) => {
            createMenu();
        });
    }

    function updateStatus(message: string) {
        const status = document.getElementById("statusBar");
        if (status) {
            status.textContent = message;
            setTimeout(() => {
                status.textContent = "Ready - Type to begin editing";
            }, 3000);
        }
    }

    // Add keyboard shortcuts
    const keydownHandler = (event: KeyboardEvent) => {
        if (event.key === 'F2') {
            event.preventDefault();
            saveFile();
        } else if (event.key === 'F3') {
            event.preventDefault();
            loadFile();
        } else if (event.key === 'F4') {
            event.preventDefault();
            newFile();
        } else if (event.key === 'F5') {
            event.preventDefault();
            clearFile();
        } else if (event.key === 'Escape') {
            event.preventDefault();
            goBack();
        }
    };
    eventManager.addEventListener(document, 'keydown', keydownHandler as EventListener)

    // Focus on text area
    textArea.focus();
}