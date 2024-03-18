// @ts-check
const fs = require("node:fs")
const path = require("node:path")

/**
 * @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').MarkdownTheme}
 */
module.exports = {
  entryPoints: ["src/index.tsx", "src/adapters.ts", "src/middleware.ts", "src/jwt.ts", "src/next.ts", "src/react.tsx", "webauthn.ts"],
  entryPointStrategy: "expand",
  tsconfig: "./tsconfig.json",
  plugin: [
    "typedoc-plugin-markdown",
    require.resolve("./../../docs/typedoc-nextauth.cjs"),
    require.resolve("./../../docs/typedoc-mdn-links.cjs"),
  ],
  hideInPageTOC: true,
  disableSources: true,
  hideBreadcrumbs: true,
  excludeNotDocumented: true,
  excludeExternals: true,
  excludeInternal: true,
  excludePrivate: true,
  excludeProtected: true,
  cleanOutputDir: true,
  gitRevision: "main",
  githubPages: false,
  hideGenerator: true,
  readme: "none",
  mergeReadme: true,
  sort: ["kind", "static-first", "required-first", "alphabetical"],
  kindSortOrder: [
    "Function",
    "TypeAlias",
    "Interface",
    "Reference",
    "Project",
    "Module",
    "Namespace",
    "Class",
    "Constructor",
    "Property",
    "Variable",
    "Accessor",
    "Method",
    "Parameter",
    "TypeParameter",
    "TypeLiteral",
    "CallSignature",
    "ConstructorSignature",
    "IndexSignature",
    "GetSignature",
    "SetSignature",
  ],
  theme: "nextauth",

  outputFileStrategy: "modules",
  entryModule: "next-auth",
  entryFileName: "src/index.tsx",
  excludeGroups: true,
  hidePageHeader: true,
  useCodeBlocks: false,
  expandObjects: true,
  publicPath: "/reference/next-auth",
}
