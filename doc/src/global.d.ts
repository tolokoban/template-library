declare module "*.svg" {
    // Loaded as URL.
    const content: string
    export default content
}

declare module "*.png" {
    const value: string
    export = value
}

declare module "*.jpg" {
    const value: string
    export = value
}

declare module "*.jpeg" {
    const value: string
    export = value
}

declare module "*.gif" {
    const value: string
    export = value
}

declare module "*.webp" {
    const value: string
    export = value
}

declare module "*.module.css" {
    const content: { [key: string]: string }
    export default content
}

declare module "*.css" {
    // Loaded as URL.
    const content: string
    export default content
}
