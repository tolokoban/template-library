import React from "react"
import { ViewInputText, ViewPanel } from "@tolokoban/ui"

import { addNumbers, averageNumbers } from "my-lib"

export default function Page() {
    const [input, setInput] = React.useState("3.14, 1.618, 2.711")
    const [avg, setAvg] = React.useState(0)
    const [sum, setSum] = React.useState(0)
    React.useEffect(() => {
        const numbers: number[] = input
            .split(",")
            .map((item) => parseFloat(item.trim()))
            .filter((num) => !Number.isNaN(num))
        setSum(addNumbers(numbers))
        setAvg(averageNumbers(numbers))
    }, [input])
    return (
        <ViewPanel
            display="grid"
            placeItems="center"
            color="primary-1"
            fullsize
        >
            <ViewPanel
                display="flex"
                flexDirection="column"
                gap="M"
                padding="M"
                alignItems="stretch"
                color="primary-5"
            >
                <ViewInputText
                    value={input}
                    onChange={setInput}
                    label="Numbers separated by commas"
                />
                <ViewPanel
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <div>{avg.toFixed(3)}</div>
                    <div>{sum.toFixed(3)}</div>
                </ViewPanel>
            </ViewPanel>
        </ViewPanel>
    )
}
