# Paste for Safari

A browser extension for Safari that makes sure that cut, copy, and paste are enabled.

## Notes

This is pretty rough and does work. The vast majority of the files in here are boilerplate needed for either the WebExtension standard or the macOS/iOS application that the extension must be bundled inside of.

`Shared (Extension)/Resources/` is the actual extension. `content.js` is what gets injected into the page.

In Safari, you need to enable "Allow Unsigned Extensions" in the Develop menu. You must do this *every time* Safari starts.

To test, first run `bin/test-server` in Terminal. Then, go to http://localhost:8000 and try the various test cases. You have to do this because `<all_urls>` in Safari doesn't actually match all URLs; Safari doesn't allow extensions to run against file: URLs.

