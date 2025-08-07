import { eventManager } from '../../event/eventManager';
import '../MenuStyle.css'

interface FileItem {
    name: string;
    type: 'file' | 'folder';
    size?: number;
    modified?: Date;
}

export function createFileManager() {
    const mainDiv = document.getElementById("app");
    if (mainDiv === null) {
        throw new Error(`document.getElementById("app") cannot be NULL`);
    }

    // Clear existing content
    eventManager.removeAllEventListeners();
    mainDiv.innerHTML = '';

    // Create Temple OS style header
    const header = document.createElement("div");
    header.className = "temple-header";
    header.innerHTML = `
        <div class="temple-title">*** HOLY FILE MANAGER ***</div>
        <div class="temple-subtitle">Navigate the Sacred File System</div>
    `;
    mainDiv.appendChild(header);

    // Create file manager container
    const fileManagerContainer = document.createElement("div");
    fileManagerContainer.className = "file-manager-container";
    fileManagerContainer.style.cssText = `
        background: #000080;
        border: 2px solid #FFFF00;
        margin: 20px;
        padding: 15px;
        height: 70vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    `;
    mainDiv.appendChild(fileManagerContainer);

    // Create path bar
    const pathBar = document.createElement("div");
    pathBar.id = "pathBar";
    pathBar.style.cssText = `
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        background: #000060;
        border: 1px solid #FFFF00;
        padding: 8px;
        margin-bottom: 10px;
        font-weight: bold;
    `;
    pathBar.textContent = "Path: C:\\SACRED\\";
    fileManagerContainer.appendChild(pathBar);

    // Create toolbar
    const toolbar = document.createElement("div");
    toolbar.style.cssText = `
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        flex-wrap: wrap;
    `;

    const toolbarButtons = [
        { text: "CREATE [F2]", action: createFile },
        { text: "DELETE [F3]", action: deleteFile },
        { text: "RENAME [F4]", action: renameFile },
        { text: "REFRESH [F5]", action: refreshFiles },
        { text: "BACK [ESC]", action: goBack }
    ];

    toolbarButtons.forEach(button => {
        const btn = document.createElement("button");
        btn.textContent = button.text;
        btn.style.cssText = `
            background: #000080;
            color: #FFFF00;
            border: 1px solid #FFFF00;
            font-family: 'Courier New', monospace;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 12px;
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
        toolbar.appendChild(btn);
    });
    fileManagerContainer.appendChild(toolbar);

    // Create file list container
    const fileListContainer = document.createElement("div");
    fileListContainer.id = "fileListContainer";
    fileListContainer.style.cssText = `
        flex: 1;
        background: #000060;
        border: 1px solid #FFFF00;
        overflow-y: auto;
        font-family: 'Courier New', monospace;
        color: #FFFF00;
    `;
    fileManagerContainer.appendChild(fileListContainer);

    // Create status bar
    const statusBar = document.createElement("div");
    statusBar.id = "statusBar";
    statusBar.style.cssText = `
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        margin-top: 10px;
        padding: 5px;
        background: #000060;
        border: 1px solid #FFFF00;
        font-size: 12px;
    `;
    statusBar.textContent = "Ready - Navigate with arrow keys or click";
    fileManagerContainer.appendChild(statusBar);

    // Mock file system data
    let currentFiles: FileItem[] = [
        { name: "..", type: "folder" },
        { name: "HOLY", type: "folder" },
        { name: "SACRED", type: "folder" },
        { name: "BLESSED", type: "folder" },
        { name: "GOD.TXT", type: "file", size: 777, modified: new Date() },
        { name: "TEMPLE.C", type: "file", size: 3333, modified: new Date() },
        { name: "DIVINE.H", type: "file", size: 666, modified: new Date() },
        { name: "PRAYER.DOC", type: "file", size: 1234, modified: new Date() },
        { name: "MIRACLE.EXE", type: "file", size: 7777, modified: new Date() }
    ];

    let selectedIndex = -1;

    function renderFileList() {
        fileListContainer.innerHTML = '';

        // Create header
        const header = document.createElement("div");
        header.style.cssText = `
            display: flex;
            background: #000040;
            color: #FFFF00;
            font-weight: bold;
            padding: 5px;
            border-bottom: 1px solid #FFFF00;
        `;
        header.innerHTML = `
            <span style="flex: 3;">NAME</span>
            <span style="flex: 1;">TYPE</span>
            <span style="flex: 1;">SIZE</span>
            <span style="flex: 2;">MODIFIED</span>
        `;
        fileListContainer.appendChild(header);

        // Create file items
        currentFiles.forEach((file, index) => {
            const fileItem = document.createElement("div");
            fileItem.className = "file-item";
            fileItem.style.cssText = `
                display: flex;
                padding: 3px 5px;
                cursor: pointer;
                ${index === selectedIndex ? 'background: #FFFF00; color: #000080;' : ''}
            `;

            const icon = file.type === 'folder' ? '[DIR]' : '[FILE]';
            const size = file.type === 'folder' ? '<DIR>' : (file.size ? `${file.size}B` : '');
            const modified = file.modified ? file.modified.toLocaleDateString() : '';

            fileItem.innerHTML = `
                <span style="flex: 3;">${icon} ${file.name}</span>
                <span style="flex: 1;">${file.type.toUpperCase()}</span>
                <span style="flex: 1;">${size}</span>
                <span style="flex: 2;">${modified}</span>
            `;

            fileItem.addEventListener('click', () => {
                selectedIndex = index;
                renderFileList();
                updateStatus(`Selected: ${file.name}`);
            });

            fileItem.addEventListener('dblclick', () => {
                if (file.type === 'folder') {
                    navigateToFolder(file.name);
                } else {
                    openFile(file.name);
                }
            });

            fileListContainer.appendChild(fileItem);
        });
    }

    function navigateToFolder(folderName: string) {
        if (folderName === "..") {
            updateStatus("Navigated to parent directory");
        } else {
            updateStatus(`Entered folder: ${folderName}`);
        }
        // In a real implementation, this would change the current directory
        // For now, we'll just show a message
        selectedIndex = -1;
        renderFileList();
    }

    function openFile(fileName: string) {
        updateStatus(`Opening file: ${fileName}`);
        // Simulate file opening
        setTimeout(() => {
            alert(`Holy file "${fileName}" has been blessed and opened!`);
        }, 500);
    }

    function createFile() {
        const fileName = prompt("Enter the name of the holy file to create:");
        if (fileName) {
            const newFile: FileItem = {
                name: fileName,
                type: 'file',
                size: 0,
                modified: new Date()
            };
            currentFiles.push(newFile);
            renderFileList();
            updateStatus(`Holy file "${fileName}" created successfully!`);
        }
    }

    function deleteFile() {
        if (selectedIndex === -1 || selectedIndex === 0) {
            updateStatus("ERROR: No file selected or cannot delete parent directory");
            return;
        }

        const file = currentFiles[selectedIndex];
        if (confirm(`Are you sure you want to delete "${file.name}"?`)) {
            currentFiles.splice(selectedIndex, 1);
            selectedIndex = -1;
            renderFileList();
            updateStatus(`File "${file.name}" has been sent to digital heaven`);
        }
    }

    function renameFile() {
        if (selectedIndex === -1 || selectedIndex === 0) {
            updateStatus("ERROR: No file selected or cannot rename parent directory");
            return;
        }

        const file = currentFiles[selectedIndex];
        const newName = prompt(`Enter new name for "${file.name}":`, file.name);
        if (newName && newName !== file.name) {
            file.name = newName;
            renderFileList();
            updateStatus(`File renamed to "${newName}"`);
        }
    }

    function refreshFiles() {
        renderFileList();
        updateStatus("File list refreshed by divine intervention");
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
                status.textContent = "Ready - Navigate with arrow keys or click";
            }, 3000);
        }
    }

    // Add keyboard navigation
    const keydownHandler = (event: KeyboardEvent) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (selectedIndex > 0) {
                selectedIndex--;
                renderFileList();
            }
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (selectedIndex < currentFiles.length - 1) {
                selectedIndex++;
                renderFileList();
            }
        } else if (event.key === 'Enter') {
            event.preventDefault();
            if (selectedIndex !== -1) {
                const file = currentFiles[selectedIndex];
                if (file.type === 'folder') {
                    navigateToFolder(file.name);
                } else {
                    openFile(file.name);
                }
            }
        } else if (event.key === 'F2') {
            event.preventDefault();
            createFile();
        } else if (event.key === 'F3') {
            event.preventDefault();
            deleteFile();
        } else if (event.key === 'F4') {
            event.preventDefault();
            renameFile();
        } else if (event.key === 'F5') {
            event.preventDefault();
            refreshFiles();
        } else if (event.key === 'Escape') {
            event.preventDefault();
            goBack();
        }
    };

    eventManager.addEventListener(document, 'keydown', keydownHandler as EventListener);

    // Initial render
    renderFileList();
    updateStatus("Holy File Manager initialized - May your files be blessed");
}