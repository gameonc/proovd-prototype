# PROOVD visual and experience audit
Date: 2026-11-13
Status: Audit complete. Findings and corrections below are not deployed changes.

## Verdict
Keep the black, bone and gold palette, jersey imagery, clear price-split visualization and holographic card. The strongest moment is the scan-to-card reveal. The public experience is not ready to be treated as a polished, self-guided investor demo: the narrative changes roles unexpectedly, the public QR invents purchase/ownership state, and several claims run ahead of what the simulation demonstrates.

This review includes defects in the Codex tag-first preview as well as the public demo. The preview is a better transaction model, but it is not a finished visual release.

## What was actually inspected
- https://getproovd.com/ — browser screenshots of hero, explanation, founder, audience, early-access and FAQ sections; opened purchase FAQ. Full-page mobile capture at 390 x 844.
- https://www.getproovd.com/ — followed redirect to https://getproovd.com/, final HTTP 200.
- https://demo.getproovd.com/ — desktop walkthrough in its phone frame: intro, scan/reveal, card reverse, athlete/collector switch, empty drop, seeded drop, story playback, checkout, delivery, scan, ownership record, resale and athlete earnings. Fresh mobile opening capture at 390 x 844.
- Public QR entry — restarted the demo, then opened its #r/PRV-0001 route, closed the card and inspected the resulting ownership history. Also read the HTML served by the live demo to confirm the route's behavior.
- https://proovd-tag-first-preview.clalanne.workers.dev/ — visual walkthrough of athlete verification, four evidence thumbnails, story field, tag binding, proposed terms, record creation, collector drop, sample account, checkout, delivery, tag check, explicit acceptance, record, resale review, hold/resolution, shipment, delivery, buyer acceptance and payout. Fresh mobile opening capture at 390 x 844.
- PR #5 silent homepage loop: downloaded the referenced 25.4-second 1080 x 1080 video, inspected frames across its sequence and its final title card. Music/audio quality was not evaluated.

Limits: this is a visual and behavior audit, not a physical NFC, production wallet, payment, identity or security certification. Mobile screenshots are not a completed physical iPhone/Safari interaction test. No real purchases or messages were sent.

## Current version mismatch
| Surface | Observed state |
| --- | --- |
| Public homepage | Earlier serif PROOVD wordmark, static vintage jersey hero, no inline product video |
| Public demo | Scan-first hologram live; older payment, scan-transfer and instant-resale behavior still live |
| Tag-first preview / PR #4 | Sample account and acceptance-gated transfer/payout; controlled resale and disputes |
| PR #5 | Video handoff document only; not a deployed homepage |
| Approved Twin O's identity | Not applied to the inspected homepage, demo UI, pictured tags or video end card |

Publishing a GitHub branch is not the same as updating the Cloudflare-served page. Assemble and verify one release that preserves Claude's reveal and the corrected tag-first state model.

## Fix before the next self-guided investor demo

### 1. Public QR fabricates a purchase and ownership transfer — critical
Reproduction: Restart at demo.getproovd.com, open #r/PRV-0001, select View the full record. The record says Collector #1 bought for $750, without checkout. The live source's handleHash also credits $525 primary earnings.

Correction: public scans only read an existing sample record. Purchase, delivery, acceptance and payout must be separate explicit events. Integrate the corrected read-only QR behavior already present in PR #4. Do not explain this as a real asset theft vulnerability: current state is a local simulation, but it demonstrates the wrong product behavior.

Acceptance: fresh visitor and existing owner can repeatedly open the QR without new purchases, owners, ledger entries or earnings.

### 2. The reveal leads backwards into setup — high
Observed: Scan the tag -> hologram says signed/authentic -> See how PROOVD makes this possible -> Welcome back, Cady / Not tokenized. Switching to Collector app then says the drop is not live and asks the visitor to tokenize first. The preview inherits this intro routing.

Correction: the default journey should be Scan -> Digital twin -> Item story/evidence -> Explore collecting. Seed one coherent sample record before the reveal. Put the athlete publishing workflow behind a separate Show athlete setup control. Preserve an existing saved order when opening the public record.

Acceptance: the item does not change from an existing twin into an uncreated item unless the visitor deliberately starts an athlete-setup scenario.

### 3. Authentication language overstates what the demo does — high
Public screens say one scan answers whether the item is real, show chip signature validity and NIL permission on file, and say no re-authentication is needed after resale. The preview improves most record labels but its intro still uses an Authentic title, and its created-record card still uses VERIFIED with generated block/hash values.

Correction: use Demo record / Sample verification on simulated screens. Describe which evidence supports a real claim once it exists. Separate athlete attestation, tag check, item comparison and game-use evidence. Keep sample status visible within the hologram itself, where the ordinary phone header disappears. Hide technical hashes/blocks under Record details and label their sample nature.

Acceptance: a screenshot of any isolated card or verification screen cannot reasonably be mistaken for completed real authentication.

### 4. Public resale skips the physical handoff — high
Observed: List for $1,200 -> Matching a buyer -> Settled automatically / jersey changed hands. There is no shipment, condition check or buyer acceptance in the public path.

Correction: integrate PR #4 review, shipment, delivery, acceptance and hold behavior. Keep the investor demonstration brief with labeled simulated events, but show why possession and recorded ownership update at different moments. Use eligible PROOVD resales instead of every resale for the proposed athlete royalty.

Acceptance: payout and recorded owner do not change while shipment or acceptance is pending, or while a dispute is open.

### 5. Proof is difficult to inspect — high
The athlete screen has four small front/back/signature/tag thumbnails. Collector pages advertise four evidence photos but do not provide a useful full-size evidence gallery. Play story cycles text over an arena image; it is not an athlete audio/video recording. The acceptance screen says compare the item with its record but offers no direct comparison/gallery or primary-purchase problem path.

Correction:
- Add a collector evidence gallery with full-size front, back, signature and tag views.
- Use one consistent item asset across physical listing and digital twin; the hologram currently presents an alternate-looking jersey render.
- Use real jersey photography and Cady's recording when available. Keep concept assets unmistakably labeled until then.
- Rename current Play story to Read the sample story, or add the real recording with captions.
- At acceptance, show Compare item photos, Accept item and Report a problem. After the scan, change the heading from Scan the tag to Review your item.

Acceptance: the collector can inspect the evidence used to accept or question the item without switching into the athlete's admin workflow.

## Visual and conversion corrections

| Priority | What does not work | Specific correction |
| --- | --- | --- |
| High | Homepage atmosphere is stronger than its explanation. The physical jersey and its digital twin are never shown together. | Put a paired jersey + phone/card scene and a short product explanation directly in the hero. State that fans collect physical memorabilia linked to an athlete story and digital record. |
| High | On the 390px capture, the demo CTA begins around y740, after a large image and abstract headline. | Bring the proposition and primary demo action above the image fold. Test 360 x 740 and 390 x 844 with browser chrome. Preserve the strong image, but give it less vertical space. |
| High | The preview's sticky primary-button treatment obscures nearby content. Captures show clipped secondary links, checkout disclosure text and the problem/pause action under the sticky surface. | Build a dedicated action footer with reserved content padding. Keep secondary actions outside its overlay. Include the item price beside Buy now so the price cannot disappear below it. |
| High | During several later desktop states, the top of the phone/header is outside the captured view; the demo status then disappears. | Investigate the scroll/centering interaction and keep the phone header and modal close control reachable. Test transitions after lower-page CTA clicks. Cause was not established in this audit. |
| Medium | Founder block contains CL initials and generic biography, with no real athlete image. | Use Cady's approved portrait/playing image and concise, verified career credentials. Bring his connection to the pilot item closer to the product example. Do not imply team partnerships. |
| Medium | Repeated poetic sections make the mobile homepage long without adding product proof. | Condense to hero/product loop, how collecting works, real athlete story, audience actions and a short FAQ. |
| Medium | Early access is a mailto action, not a signup system. | Either label the CTA Email us consistently, or build a real email capture with role selection and genuine success/error feedback. Do not display a fake joined/waitlist count. |
| Medium | Fans, athletes and investors do not each get a clear next action. | Primary: Explore demo. Fans: First-drop updates. Athletes: Bring your memorabilia. Investors: Request deck. No public raise terms required. |
| Medium | Old serif wordmark remains across every inspected surface, including the video and photographed concept tag. | Apply the approved Twin O's asset consistently to header, card, tag artwork, social avatar, favicon, end card and link preview. Keep editorial serif headlines if desired. |
| Medium | Handoff screens are repeated text tables with no item thumbnail, progress indicator or active-role label. | Retain a small jersey thumbnail and add Review -> Ship -> Delivered -> Accepted progress. Label the simulated actor: reviewer, seller, carrier or buyer. |
| Medium | On hold, Physical location changes to Review required, which is a status rather than a location. | Keep last known physical location and show dispute status separately. |
| Medium | Price-setting screen says EACH SALE for a 70/30 primary split, while resale uses a different allocation. | Rename to Primary sale example. Mark all proposed economics consistently. |
| Low | Some external-arrow glyphs appear as empty boxes in the audit browser, although they render in the mobile capture. | Replace text arrow glyphs with consistent inline SVG icons; verify in Chrome and Safari. |
| Low | Technical record log, hashes and block numbers compete with collector meaning. | Keep them available as optional details; prioritize athlete, item evidence, holder and physical handoff. |

## Video handoff audit
The opening jersey -> collar tag -> phone tap is clear and useful. Keep the hologram on the phone, the real demo capture and the sample-data label.

Corrections before embedding:
1. Replace the old end-card wordmark with Twin O's.
2. Change One tap. Verified as real to One tap. Open its story and record, unless a specific real verification claim is supported.
3. Re-record the resale segment after integration: current footage shows the older instant-settlement flow and proposed 10% fee.
4. Enlarge the phone capture. In the square composition it occupies roughly two-fifths of the width; shown at mobile width, record and fee text becomes tiny. Use a closer crop or full-width product footage with larger captions.
5. Keep a readable demo/concept label throughout, including generated item scenes; do not rely on the small disclaimer in later scenes.
6. Add a poster, pause control and reduced-motion behavior; autoplay muted only. Music version should require a visitor action.
7. Host stable approved files as part of the release. Do not publish an unverified GitHub Pages video URL before the file exists and serves successfully.

## Recommended visitor sequence
1. Homepage: physical jersey + same digital twin; concise collecting proposition; Explore demo.
2. Scan demo: tap -> reveal, no signup wall before the reveal.
3. Item: athlete story, evidence gallery, what the collector receives, sample price.
4. Collect: sample account -> simulated purchase -> delivery -> comparison/acceptance.
5. Collection: physical location, recorded holder, story and history.
6. Resell: review -> shipping -> buyer acceptance -> athlete payout.
7. Optional athlete view: how the item and evidence were created.

For investor mode, allow a clearly labeled guided walkthrough to advance simulated events quickly. Do not silently turn scans into purchases to shorten the experience.

## Release order
1. Merge the current reveal with the corrected QR, account, acceptance and resale state model in a single reviewable release.
2. Fix intro routing, sticky-action overlaps, labels and the evidence/story affordances.
3. Update homepage hero, mobile hierarchy, founder presence and Twin O's usage.
4. Update the video to match that exact demo.
5. Deploy and test the public URLs; source-branch state is not proof of deployment.

## Release acceptance checklist
- Fresh public QR scan creates zero purchases, ownership transfers or payouts.
- Intro reveal leads to the same sample item and coherent existing record.
- Public, buyer and athlete entry points are clear and do not contradict each other.
- Every screen and isolated hologram visibly identifies simulated records/checks.
- Evidence can be inspected from the collector and acceptance screens.
- Primary acceptance has a visible problem/report option.
- Pending and disputed transfers preserve owner and unpaid resale amount.
- No fixed/sticky CTA covers copy, price, secondary actions or bottom navigation.
- Header/close controls remain reachable after all transitions.
- Fresh and resumed sessions behave coherently; Restart resets the intended sample only.
- Homepage demo CTA is visible at the target mobile sizes; no horizontal clipping.
- Video, screenshots, logo, website and live demo tell the same story.
- Apex and www work; homepage routes to the intended demo version.
- Real-device Safari/touch/tilt, keyboard focus, reduced motion and cross-browser checks are still required before calling the release fully tested.

## What changed in this audit
Documentation only. No homepage, public demo or preview production code was deployed during this audit. All transactions performed were local demo simulations.
