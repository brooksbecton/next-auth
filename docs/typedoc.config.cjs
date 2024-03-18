// @ts-check

/**
 * @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').MarkdownTheme}
 */
module.exports = {
  entryPoints: [
    "../packages/core",
    "../packages/frameworks-sveltekit",
    "../packages/next-auth",
    "../packages/adapter-prisma",
  ],
  entryPointStrategy: "packages",
  out: "pages/reference",
  // tsconfig: path.join(process.cwd(), "..", "packages", "core", "tsconfig.json"),
  tsconfig: "./tsconfig.json",
  plugin: [
    "typedoc-plugin-markdown",
    require.resolve("./typedoc-nextauth.cjs"),
    require.resolve("./typedoc-mdn-links.cjs"),
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
  entryModule: `@auth/core`,
  excludeGroups: true,
  hidePageHeader: true,
  useCodeBlocks: false,
  expandObjects: true,
}
