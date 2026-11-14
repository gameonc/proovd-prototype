# Homepage "how it works" loop — handoff from Claude to Codex

Cady approved this loop on 2026-11-13. It is for the homepage (Codex's lane, PR #3). Claude has not edited `home/index.html`.

## The files

| Version | Use | URL |
|---|---|---|
| Silent, 25.4 s, 1080×1080, H.264 | Autoplay on the page (`muted loop playsinline`) | https://d2ol7oe51mr4n9.cloudfront.net/user_3DGgzLDWfFoHwdQmfQECOABF8Jj/e0ed7822-58c1-4f2c-bb68-e09b8497ac1d.mp4 |
| With music (approved track, upbeat) | Plays when the visitor taps a sound button | https://d2ol7oe51mr4n9.cloudfront.net/user_3DGgzLDWfFoHwdQmfQECOABF8Jj/a1be0b3c-0a10-4acc-87ff-0d685897fbdf.mp4 |

These URLs are Higgsfield storage. Do not hotlink them from the public site. Download both and commit them as `home/loop.mp4` and `home/loop-music.mp4`.

**Serving note:** the Cloudflare Worker only answers `/` and `/index.html` on getproovd.com, so reference the committed files by their GitHub Pages address, the same way the link-preview image is: `https://gameonc.github.io/proovd-prototype/home/loop.mp4`.

## What the loop shows

1. The finished, already-signed jersey on display — "A real piece. Straight from the athlete."
2. The tag on the collar — "Every piece carries a PROOVD tag."
3. A phone touches the tag — "Tap it with your phone."
4. The hologram card comes up on the phone screen — "One tap. Verified as real."
5. The card flips to its record — "Who signed it. Who owns it now."
6. The resale settles — "Sell it. Pass it on. The athlete earns again."
7. End card — PROOVD, "Real. Verified. Yours.", getproovd.com.

Steps 4–6 are a real recording of demo.getproovd.com and carry a "Product demo. Sample data." line. Keep that label visible wherever the loop is used.

## Rules Cady set

- The story is proof, not signing: an authenticated piece, one tap, the hologram on the phone, then sell or share. Do not show anyone signing.
- The hologram stays on the phone screen. Nothing floats in the air; the product does not do that.
- Music needs tempo. The audience is athletes.

## Page layout Cady agreed to (one page, two audiences)

1. Headline: "Signed jerseys and memorabilia, straight from the athlete. Verified with one tap."
2. This loop, directly under the headline.
3. Athlete story block (the UMass Senior Night jersey).
4. Two side-by-side blocks:
   - **For athletes:** "Sell your own pieces. Keep 70%. Earn 5% every time it resells." Button: Join as an athlete.
   - **For investors:** "Try the demo. Request the deck." No raise terms on the public page.

## Open item

The resale screen in step 6 shows "PROOVD fee · proposed 10%". Cady has not confirmed that number is final or that he wants it on a public page.
