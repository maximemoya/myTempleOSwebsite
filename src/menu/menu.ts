import { eventManager } from '../event/eventManager';
import { createHolyCompiler } from './choice01/HolyCompiler';
import { createTextEditor } from './choice02/TextEditor';
import { createDivineGame } from './choice03/DivineGame';
import { createFileManager } from './choice04/FileManager';
import { createAboutTemple } from './choice06/AboutTemple';
import './MenuStyle.css'

interface MenuItem {
    id: string;
    title: string;
    description: string;
    action: () => void;
}

export function createMenu() {
    const mainDiv = document.getElementById("app")
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
        <div class="temple-title">*** TEMPLE OS MENU SYSTEM ***</div>
        <img src="https://i.ytimg.com/vi/65OtzDAa9DA/maxresdefault.jpg" alt="Temple OS Logo" class="temple-image">
        <div class="temple-subtitle">Choose Your Divine Command</div>
    `;
    mainDiv.appendChild(header);

    // Create menu container
    const menuContainer = document.createElement("div");
    menuContainer.className = "temple-menu";
    mainDiv.appendChild(menuContainer);

    // Define menu items
    const menuItems: MenuItem[] = [
        {
            id: "compiler",
            title: "HOLY COMPILER",
            description: "Compile sacred code with divine optimization",
            action: () => createHolyCompiler()
        },
        {
            id: "editor",
            title: "TEXT EDITOR",
            description: "Edit files with blessed precision",
            action: () => createTextEditor()
        },
        {
            id: "games",
            title: "DIVINE GAME",
            description: "Play game crafted by divine inspiration",
            action: () => createDivineGame()
        },
        {
            id: "files",
            title: "FILE MANAGER",
            description: "Navigate the sacred file system",
            action: () => createFileManager()
        },
        {
            id: "terminal",
            title: "HOLY TERMINAL",
            description: "Execute commands with divine authority",
            action: () => alert("work in progress...")
        },
        {
            id: "about",
            title: "ABOUT TEMPLE",
            description: "Learn about the divine operating system",
            action: () => createAboutTemple()
        }
    ];

    // Create menu items
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement("div");
        menuItem.className = "temple-menu-item";
        menuItem.innerHTML = `
            <span class="menu-number">[${index + 1}]</span>
            <span class="menu-title">${item.title}</span>
            <span class="menu-description">${item.description}</span>
        `;

        menuItem.addEventListener('click', item.action);
        menuItem.addEventListener('mouseenter', () => {
            menuItem.classList.add('highlighted');
        });
        menuItem.addEventListener('mouseleave', () => {
            menuItem.classList.remove('highlighted');
        });

        menuContainer.appendChild(menuItem);
    });

    // Create footer
    const footer = document.createElement("div");
    footer.className = "temple-footer";
    footer.innerHTML = `
        <div>Press [1-6] or click to select • ESC to exit</div>
        <div class="temple-blessing">*** GOD'S THIRD TEMPLE ***</div>
    `;
    mainDiv.appendChild(footer);

    // Add keyboard navigation
    const keydownHandler = (event: KeyboardEvent) => {
        const key = event.key;
        if (key >= '1' && key <= '6') {
            const index = parseInt(key) - 1;
            if (menuItems[index]) {
                menuItems[index].action();
            }
        } else if (key === 'Escape') {
            console.log("Exiting menu...");
        }
    };
    eventManager.addEventListener(document, 'keydown', keydownHandler as EventListener)

}