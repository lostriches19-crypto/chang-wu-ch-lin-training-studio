# Chang Wu Ch-Lin Training Studio

A buildless, responsive training app for desktop, iPad, iPhone, and Android devices. Open `index.html` or serve this directory as a static website.

## Training

The original routine is preserved exactly: 22 intervals, ten 15-second Horse Stance holds and twelve 30-second intervals, totaling 510 seconds (8:30). Progression creates a separate routine with 15, 20, 30, 40, 50 or 60-second Horse Stance holds. The original is never edited.

Features include Instructor Mode, optional speech and audio cues, circuits, transitions, recovery, a custom Workout Builder, and a Training Journal with CSV export.

The timer pauses when the app is hidden or a long interruption is detected. Keep it visible during practice and tap Resume after returning. Screen wake lock is requested when available. Sessions that use Skip, Back or Go are not automatically counted as fully completed; record actual practice manually in the journal.

## Privacy

No personal journal entries are included in this repository. Journal entries and custom workouts are stored only in the current browser's local storage. There is no analytics, cloud synchronization, login or journal upload. Other people using the same browser profile can access its entries. Export your journal before clearing browser data or changing devices. Keep exported CSV files private and out of this repository. Safari and the Home Screen app may have separate storage.

## GitHub Pages

In Settings → Pages, choose Deploy from a branch, `main`, and `/ (root)`, then Save. The published site address is:

https://lostriches19-crypto.github.io/chang-wu-ch-lin-training-studio/

`.nojekyll` keeps deployment static. No build dependencies or secrets are required.

## iPhone and iPad Home Screen

1. Open the published website in Safari.
2. Tap Share, then Add to Home Screen (use View More if needed).
3. If offered, enable Open as Web App.
4. Name it Training Studio and tap Add.

Launch it from the new icon. Start a timer by tapping Start to enable audio. After the first online visit, wait for “Ready for offline use” before disconnecting. After Home Screen installation, launch the icon online once and check that status there too.

Apple instructions: https://support.apple.com/guide/ipad/bookmark-a-website-ipadc602b75b/ipados

## Android Home Screen

Open the published website in Chrome. Use the menu → Install app / Install and create shortcut / Add to Home screen (wording varies), and follow the prompts. Launch the icon online once and wait for “Ready for offline use”.

Google instructions: https://support.google.com/chrome/answer/9658361

## Offline access and updates

A service worker caches only the app shell: HTML, manifest and icons. The timer, progression, builder and journal can work without internet after setup. Speech depends on installed device voices; audio cues remain available where supported. No journal data is uploaded or included in the shared app cache.

Offline availability is not an absolute guarantee. First use requires internet. Clearing browser/site data, private browsing restrictions, device storage eviction, or unsupported browser settings can remove or prevent the offline copy. Keep the local HTML download as an additional backup, and export journal CSVs separately. Local file opening does not install a service worker.

Reconnect periodically for updates. Close all app tabs and Home Screen windows, then reopen to activate an installed update. Updates never forcibly reload an active training session. Maintainers must bump the cache version in `sw.js` when changing any cached app file.

## Review and validation

Both supplied HTML files were identical. The original routine's source was compared exactly against the updated application. Logic checks cover completion, duplicate logging, navigation without false completion, background pauses, interruptions, multi-circuit timing, progression, builder saving and journal saving. JavaScript syntax validation passed. Browser and device verification results are reported separately; actual iPad hardware testing remains recommended.

Changes also improve form labels, touch target sizes, small-screen layout, stored-data validation, workout-name handling, and spreadsheet formula protection in exported CSV text.
