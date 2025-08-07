import { eventManager } from "../../event/eventManager";

interface TempleDivineGame {
    render: () => string,
    update: () => void,
    moveUp: () => void,
    moveDown: () => void,
    moveLeft: () => void,
    moveRight: () => void,
    pray: () => void,
    getState: () => TempleGameState,
    reset: () => void
}

interface TempleGameState {
    screen: string[][];
    cursorX: number;
    cursorY: number;
    randomSeed: number;
    holyWords: string[];
    currentMessage: string;
    score: number;
    godMode: boolean;
}

function divineGame(): TempleDivineGame {
    const SCREEN_WIDTH = 80;
    const SCREEN_HEIGHT = 25;

    const holyWords = [
        "GOD", "DIVINE", "HOLY", "SACRED", "BLESSED", "TEMPLE",
        "SPIRIT", "LIGHT", "HEAVEN", "PRAISE", "GLORY", "FAITH"
    ];

    let gameState: TempleGameState = {
        screen: Array(SCREEN_HEIGHT).fill(null).map(() => Array(SCREEN_WIDTH).fill(' ')),
        cursorX: 40,
        cursorY: 12,
        randomSeed: Date.now(),
        holyWords,
        currentMessage: "*** GOD'S DIVINE TEMPLE GAME ***",
        score: 0,
        godMode: false
    };

    // TempleOS-style random number generator
    const holyRandom = (): number => {
        gameState.randomSeed = (gameState.randomSeed * 1103515245 + 12345) & 0x7fffffff;
        return gameState.randomSeed;
    };

    // Clear screen with pattern
    const clearScreen = (): void => {
        for (let y = 0; y < SCREEN_HEIGHT; y++) {
            for (let x = 0; x < SCREEN_WIDTH; x++) {
                if (y === 0 || y === SCREEN_HEIGHT - 1) {
                    gameState.screen[y][x] = '=';
                } else if (x === 0 || x === SCREEN_WIDTH - 1) {
                    gameState.screen[y][x] = '|';
                } else {
                    gameState.screen[y][x] = ' ';
                }
            }
        }
    };

    // Put text at position
    const putText = (x: number, y: number, text: string): void => {
        if (y >= 0 && y < SCREEN_HEIGHT) {
            for (let i = 0; i < text.length && x + i < SCREEN_WIDTH; i++) {
                if (x + i >= 0) {
                    gameState.screen[y][x + i] = text[i];
                }
            }
        }
    };

    // Draw sprite/character
    const putChar = (x: number, y: number, char: string): void => {
        if (x >= 0 && x < SCREEN_WIDTH && y >= 0 && y < SCREEN_HEIGHT) {
            gameState.screen[y][x] = char;
        }
    };

    // Generate divine interference (random events)
    const divineIntervention = (): void => {
        const interventions = [
            "GOD SPEAKS: Press SPACE for blessing",
            "DIVINE VISION: Follow the light",
            "HOLY SPIRIT: You are chosen",
            "MIRACLE: Your score doubles",
            "PROPHECY: Great things await",
            "BLESSING: You gain divine favor"
        ];

        if (holyRandom() % 100 < 15) { // 15% chance
            const message = interventions[holyRandom() % interventions.length];
            gameState.currentMessage = message;

            if (message.includes("MIRACLE")) {
                gameState.score *= 2;
                gameState.godMode = true;
            }
        }
    };

    // Spawn holy symbols randomly
    const spawnHolySymbols = (): void => {
        const symbols = ['✝', '✡', '☪', '🕊', '👁', '⭐', '💫', '🌟'];

        for (let i = 0; i < 5; i++) {
            const x = 2 + (holyRandom() % (SCREEN_WIDTH - 4));
            const y = 2 + (holyRandom() % (SCREEN_HEIGHT - 4));
            const symbol = symbols[holyRandom() % symbols.length];
            putChar(x, y, symbol);
        }
    };

    // Generate biblical verse
    const generateVerse = (): string => {
        const verses = [
            "In the beginning was the Word...",
            "Let there be light...",
            "Be still and know that I am God...",
            "The Lord is my shepherd...",
            "Fear not, for I am with you...",
            "Trust in the Lord with all your heart...",
            "Blessed are the meek...",
            "Love thy neighbor as thyself..."
        ];
        return verses[holyRandom() % verses.length];
    };

    // Main render function
    const render = (): string => {
        clearScreen();

        // Title
        putText(20, 1, "*** GOD'S DIVINE TEMPLE OPERATING SYSTEM ***");
        putText(30, 2, "A HOLY COMPUTING EXPERIENCE");

        // Player cursor
        putChar(gameState.cursorX, gameState.cursorY, gameState.godMode ? '👑' : '@');

        // Spawn divine elements
        spawnHolySymbols();

        // Random holy words floating
        for (let i = 0; i < 3; i++) {
            const word = gameState.holyWords[holyRandom() % gameState.holyWords.length];
            const x = 5 + (holyRandom() % 60);
            const y = 5 + (holyRandom() % 15);
            putText(x, y, word);
        }

        // Status bar
        putText(2, SCREEN_HEIGHT - 3, `SCORE: ${gameState.score} | DIVINE FAVOR: ${gameState.godMode ? 'BLESSED' : 'MORTAL'}`);

        // Current message
        putText(2, SCREEN_HEIGHT - 2, gameState.currentMessage);

        // Convert screen to string
        return gameState.screen.map(row => row.join('')).join('\n');
    };

    // Movement functions
    const movePlayer = (dx: number, dy: number): void => {
        const newX = Math.max(1, Math.min(SCREEN_WIDTH - 2, gameState.cursorX + dx));
        const newY = Math.max(1, Math.min(SCREEN_HEIGHT - 2, gameState.cursorY + dy));

        gameState.cursorX = newX;
        gameState.cursorY = newY;
        gameState.score += 1;

        // Check for holy word collision
        const currentChar = gameState.screen[newY][newX];
        if (currentChar !== ' ' && currentChar !== '=' && currentChar !== '|') {
            gameState.score += 10;
            gameState.currentMessage = `BLESSED! You touched: ${currentChar}`;
        }
    };

    // Game loop function
    const update = (): void => {
        divineIntervention();

        // Random message changes
        if (holyRandom() % 60 === 0) {
            const messages = [
                generateVerse(),
                "THE TEMPLE CALLS TO YOU...",
                "SEEK THE DIVINE TRUTH...",
                "GOD'S WILL BE DONE...",
                "HOLY TEMPLE COMPUTING...",
                "DIVINE RANDOMNESS GUIDES ALL..."
            ];
            gameState.currentMessage = messages[holyRandom() % messages.length];
        }
    };

    // Public API
    const game: TempleDivineGame = {
        render,
        update,
        moveUp: () => movePlayer(0, -1),
        moveDown: () => movePlayer(0, 1),
        moveLeft: () => movePlayer(-1, 0),
        moveRight: () => movePlayer(1, 0),
        pray: () => {
            gameState.score += 50;
            gameState.currentMessage = "🙏 YOUR PRAYER HAS BEEN HEARD 🙏";
            gameState.godMode = !gameState.godMode;
        },
        getState: () => ({ ...gameState }),
        reset: () => {
            gameState.score = 0;
            gameState.cursorX = 40;
            gameState.cursorY = 12;
            gameState.godMode = false;
            gameState.currentMessage = "*** TEMPLE RESET BY DIVINE WILL ***";
        }
    };

    return game;
}

// Usage example for HTML integration
function initTempleGameHTML(): string {
    return `
    <div id="temple-game" style="font-family: 'Courier New', monospace; background: #000080; color: #FFFF00; padding: 20px;">
      <pre id="game-screen" style="font-size: 12px; line-height: 1.2;"></pre>
      <div style="margin-top: 10px; color: #FFFFFF;">
        <p>HOLY CONTROLS:</p>
        <p>[Z-Q-S-D] MOVE | [SPACE] PRAY | [R] RESET | [ESC] BACK</p>
        <p style="color: #FF6666;">*** BLESSED BE THE RANDOM SEED ***</p>
      </div>
    </div>
  `;
}

export function createDivineGame() {
    const game = divineGame();
    const mainDiv = document.getElementById('app');
    if (mainDiv === null) {
        throw new Error(`document.getElementById("app") cannot be NULL`);
    }

    // Clear existing content
    eventManager.removeAllEventListeners()
    mainDiv.innerHTML = '';

    const gameMainDiv = document.createElement("div");
    gameMainDiv.innerHTML = initTempleGameHTML()

    const gameInsideDiv = document.createElement("div");
    gameMainDiv.appendChild(gameInsideDiv)

    mainDiv.appendChild(gameMainDiv);

    function updateScreen() {
        game.update();
        if (gameInsideDiv === null) {
            throw new Error(`document.getElementById("app") cannot be NULL`);
        }
        gameInsideDiv.textContent = game.render();
    }

    function goBack() {
        // Import and call the menu function
        import('../menu').then(({ createMenu }) => {
            clearInterval(intervalID)
            createMenu();
        });
    }

    // Game loop
    const intervalID = setInterval(updateScreen, 500);

    // Controls
    const keydownHandler = (event: KeyboardEvent) => {
        switch (event.key.toLowerCase()) {
            case 'z':
                game.moveUp();
                break;
            case 's':
                game.moveDown();
                break;
            case 'q':
                game.moveLeft();
                break;
            case 'd':
                game.moveRight();
                break;
            case ' ':
                event.preventDefault();
                game.pray();
                break;
            case 'r':
                game.reset();
                break;
            case 'escape':
                goBack();
                break;
        }
        updateScreen();
    };
    eventManager.addEventListener(document, 'keydown', keydownHandler as EventListener)

    // Initial render
    updateScreen();
}