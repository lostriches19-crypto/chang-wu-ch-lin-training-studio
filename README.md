# Chang Wu Ch-Lin Training Studio

A buildless, responsive training app for desktop and iPad. Open `index.html` or serve this directory as a static website.

## Training

The original routine is preserved exactly: 22 intervals, ten 15-second Horse Stance holds and twelve 30-second intervals, totaling 510 seconds (8:30). Progression creates a separate routine with 15, 20, 30, 40, 50 or 60-second Horse Stance holds. The original is never edited.

Features include Instructor Mode, optional speech and audio cues, circuits, transitions, recovery, a custom Workout Builder, and a Training Journal with CSV export.

The timer pauses when the app is hidden or a long interruption is detected. Keep it visible during practice and tap Resume after returning. Screen wake lock is requested when available. Sessions that use Skip, Back or Go are not automatically counted as fully completed; record actual practice manually in the journal.

## Privacy

No personal journal entries are included in this repository. Journal entries and custom workouts are stored only in the current browser's local storage. There is no analytics, cloud synchronization, login or journal upload. Other people using the same browser profile can access its entries. Export your journal before clearing browser data or changing devices. Keep exported CSV files private and out of this repository. Safari and the Home Screen app may have separate storage.

## GitHub Pages

In Settings → Pages, choose Deploy from a branch, `main`, and `/ (root)`, then Save. The site address is intended to be:

https://lostriches19-crypto.github.io/chang-wu-ch-lin-training-studio/

`.nojekyll` keeps deployment static. No build dependencies or secrets are required.

## iPad Home Screen

1. Open the published website in Safari.
2. Tap Share, then Add to Home Screen (use View More if needed).
3. If offered, enable Open as Web App.
4. Name it Training Studio and tap Add.

Launch it from the new icon. Start a timer by tapping Start to enable audio. Internet access is required to load the app; offline installation/caching is not implemented.

Apple instructions: https://support.apple.com/guide/ipad/bookmark-a-website-ipadc602b75b/ipados

## Review and validation

Both supplied HTML files were identical. The original routine's source was compared exactly against the updated application. Logic checks cover completion, duplicate logging, navigation without false completion, background pauses, interruptions, multi-circuit timing, progression, builder saving and journal saving. JavaScript syntax validation passed. Browser and device verification results are reported separately; actual iPad hardware testing remains recommended.

Changes also improve form labels, touch target sizes, small-screen layout, stored-data validation, workout-name handling, and spreadsheet formula protection in exported CSV text.

