
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/xuxiangjie/Desktop/work-coding-files/testStripe/.cache/dev-404-page.js")),
  "component---src-pages-cancel-js": preferDefault(require("/Users/xuxiangjie/Desktop/work-coding-files/testStripe/src/pages/cancel.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/xuxiangjie/Desktop/work-coding-files/testStripe/src/pages/index.js")),
  "component---src-pages-success-js": preferDefault(require("/Users/xuxiangjie/Desktop/work-coding-files/testStripe/src/pages/success.js"))
}

