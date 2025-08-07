class EventManager {
    private listeners: Array<{
        element: Element | Document | Window;
        type: string;
        listener: EventListenerOrEventListenerObject;
    }> = [];

    addEventListener(element: Element | Document | Window, type: string, listener: EventListenerOrEventListenerObject) {
        element.addEventListener(type, listener);
        this.listeners.push({ element, type, listener });
    }

    removeAllEventListeners() {
        this.listeners.forEach(({ element, type, listener }) => {
            element.removeEventListener(type, listener);
        });
        this.listeners = [];
    }
}

export const eventManager = new EventManager();