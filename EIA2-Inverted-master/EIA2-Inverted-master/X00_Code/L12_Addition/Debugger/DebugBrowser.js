var L12_DebugBrowser;
(function (L12_DebugBrowser) {
    console.log("Debugging browser application in VSCode!");
    debugger;
    var params = new URLSearchParams(location.search);
    console.log(params.get("message"));
})(L12_DebugBrowser || (L12_DebugBrowser = {}));
//# sourceMappingURL=DebugBrowser.js.map