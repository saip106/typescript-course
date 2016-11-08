Object.defineProperty(window, "foo", { value: "1.0", isConfigurable: true});

parseInt(document.getElementById("foobar"));