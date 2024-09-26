import React from "react"
import { createRoot } from "react-dom/client"
import { ModalProvider, Theme } from "@tolokoban/ui"

import App from "./app"

import "./index.css"

function start() {
    Theme.apply()
    const container = get("root")
    const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <ModalProvider>
                <App />
            </ModalProvider>
        </React.StrictMode>
    )
    // Remove splash screen.
    removeSplashScreen()
}

function get(id: string): HTMLElement {
    const elem = document.getElementById(id)
    if (!elem) throw Error(`No element with id "${id}"!`)

    return elem
}

function removeSplashScreen() {
    console.log("removeSplashScreen")
    const SPLASH_VANISHING_DELAY = 900
    const splash = get("tgd-logo")
    splash.classList.add("vanish")
    window.setTimeout(() => {
        const parent = splash.parentNode
        if (!parent) return

        parent.removeChild(splash)
    }, SPLASH_VANISHING_DELAY)
}

void start()
