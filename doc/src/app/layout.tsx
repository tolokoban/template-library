import { Theme, ViewStrip, ViewPanel, ModalProvider } from "@tolokoban/ui"

import { name, version } from "../package-info"
import { isRouteEqualTo, makeGoto } from "./routes"
import { RoutePath } from "./types"

import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            <ViewStrip
                className={Style.layout}
                fullsize
                color="primary-1"
                orientation="row"
                template="*1"
            >
                <aside>
                    <button
                        className={classFor("/")}
                        type="button"
                        onClick={makeGoto("/")}
                    >
                        Show case
                    </button>
                    <button
                        className={classFor("/api")}
                        type="button"
                        onClick={makeGoto("/api")}
                    >
                        Reference
                    </button>
                    <div>
                        {name} v{version}
                    </div>
                </aside>
                <main>
                    <ViewPanel color="neutral-1" padding="S">
                        {children}
                    </ViewPanel>
                </main>
            </ViewStrip>
        </ModalProvider>
    )
}

function classFor(route: RoutePath) {
    return Theme.classNames.join(isRouteEqualTo(route) && Style.active)
}
