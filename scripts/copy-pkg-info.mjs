/**
 * Copy from one package.json to others,
 * the name, version, description and homepage.
 */

import FS from "fs"
import Path from "path"

const [, prg, source, ...targets] = process.argv
if (
    typeof source !== "string" ||
    !Array.isArray(targets) ||
    targets.length === 0
) {
    console.log("")
    console.log("Usage: ", prg, "./source ./dest1 ./dest2 ...")
    console.log("")
    process.exit(1)
}

const src = Path.resolve(source, "package.json")
const pkgSrc = JSON.parse(FS.readFileSync(src).toString())
const { name, version, description, homepage } = pkgSrc
console.log(`${name} v${version}: ${description}`)
for (const target of targets) {
    const dst = Path.resolve(target, "package.json")
    const pkgDst = JSON.parse(FS.readFileSync(dst).toString())
    pkgDst.name = name
    pkgDst.version = version
    pkgDst.description = description
    pkgDst.homepage = homepage
    FS.writeFileSync(dst, JSON.stringify(pkgDst, null, "    "))
    const infoPath = Path.resolve(target, "src/package-info.ts")
    FS.writeFileSync(
        infoPath,
        [
            `export const name = ${JSON.stringify(name)}`,
            `export const version = ${JSON.stringify(version)}`,
            `export const description = ${JSON.stringify(description)}`,
            `export const homepage = ${JSON.stringify(homepage)}`,
        ].join("\n")
    )
}

const rxHomepage = new RegExp(`^https://[^/.]+\.github\.io/${name}$`)
if (!rxHomepage.test(homepage)) {
    console.error("ERROR! package.homepage seems wrong:")
    console.error("   ", homepage)
}
