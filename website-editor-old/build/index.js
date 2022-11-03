var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server = require("react-dom/server"), import_react = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react2 = require("@remix-run/react");

// app/client/chackra-ui/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/client/chackra-ui/context.ts
var React = __toESM(require("react")), ServerStyleContext = React.createContext(null), ClientStyleContext = React.createContext(null);

// app/entry.server.tsx
var import_node2 = require("@remix-run/node"), import_isbot = __toESM(require("isbot"));

// app/i18n.server.js
var import_remix_i18next = require("remix-i18next"), import_i18next_fs_backend = __toESM(require("i18next-fs-backend")), import_node_path = require("path");

// app/i18nextOptions.js
var i18nextOptions_default = {
  debug: !1,
  fallbackLng: "en",
  supportedLngs: ["en", "es", "it", "pt"],
  defaultNS: "index",
  react: { useSuspense: !1 }
};

// app/cookie.js
var import_node = require("@remix-run/node"), i18nCookie = (0, import_node.createCookie)("i18n", {
  sameSite: "lax",
  path: "/"
});

// app/i18n.server.js
var i18n_server_default = new import_remix_i18next.RemixI18Next({
  detection: {
    cookie: i18nCookie,
    supportedLanguages: i18nextOptions_default.supportedLngs,
    fallbackLanguage: i18nextOptions_default.fallbackLng
  },
  i18next: {
    backend: { loadPath: (0, import_node_path.resolve)("./public/locales/{{lng}}/{{ns}}.json") }
  },
  backend: import_i18next_fs_backend.default
});

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : await handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve2, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve2(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
async function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let lng = await i18n_server_default.getLocale(request), ns = i18n_server_default.getRouteNamespaces(remixContext), cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 122,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: chunks.styles,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 134,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new import_node2.Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Clockdown",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta2
});
var import_react7 = require("@chakra-ui/react");

// app/client/chackra-ui/theme/website/theme.ts
var import_react6 = require("@chakra-ui/react");

// app/client/chackra-ui/theme/website/foundation/typography.ts
var import_react4 = require("@chakra-ui/react"), typography = {
  fontWeights: {
    ...import_react4.theme.fontWeights,
    normal: 500,
    bold: 600
  },
  fonts: {
    ...import_react4.theme.fonts,
    heading: `Michroma, ${import_react4.theme.fonts.heading}`,
    body: `Inter, ${import_react4.theme.fonts.body}`
  },
  fontSizes: {
    ...import_react4.theme.fontSizes
  }
}, typography_default = typography;

// app/client/chackra-ui/theme/website/foundation/colors.ts
var import_react5 = require("@chakra-ui/react"), colors = {
  ...import_react5.theme.colors
}, colors_default = colors;

// app/client/chackra-ui/theme/website/theme.ts
var overrides = {
  ...typography_default,
  colors: colors_default
}, theme = (0, import_react6.extendTheme)(overrides);

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Clockdown",
  description: "Contador regressivo",
  "og:title": "Clockdown",
  "og:description": "clockdown",
  "og:image": "https://clockdown.tech//images/ogimage.png"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.ChakraProvider, {
    theme,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Flex, {
      as: "section",
      bgGradient: [
        "linear(to-t, blue.200, pink.100)",
        "linear(to-r, green.200, blue.200, teal.200, purple.100)"
      ],
      minH: "100vh",
      paddingInline: ["1rem"],
      justifyContent: "center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Flex, {
        maxW: "1140px",
        direction: ["column", "row"],
        gap: "2rem",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Flex, {
            direction: "column",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Text, {
                fontWeight: 700,
                children: "MYXERIA"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 39,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Heading, {
                lineHeight: 1.2,
                textTransform: "uppercase",
                fontSize: ["2xl", "4xl"],
                children: "Banner rotativo mostrando exemplo"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 40,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Button, {
                bg: "blue.500",
                color: "white",
                letterSpacing: "2px",
                textTransform: "uppercase",
                children: "Crie agora seu contador"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 47,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.VStack, {
            w: "100%",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Image, {
              maxW: ["270px"],
              objectFit: "cover",
              src: "./images/mobile-phone-bg.png"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ClockdownApp = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  children: "Hello World"
}, void 0, !1, {
  fileName: "app/routes/app.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this), app_default = ClockdownApp;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e9e9d60e", entry: { module: "/build/entry.client-UU4JNWNM.js", imports: ["/build/_shared/chunk-U5EADJ3Z.js", "/build/_shared/chunk-ELUYPQX6.js", "/build/_shared/chunk-7CHJFARM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UMKNO2IP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-BLZ3ZMQO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JHYN5EJZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-E9E9D60E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
