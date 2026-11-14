# PROOVD tag-first pilot
Decision recorded November 13, 2026. State: BUILDING.

The pilot sells athlete-sourced physical memorabilia with an associated digital collection record. The collector keeps the jersey. Supported resale includes physical delivery. Optional vaulting is deferred; there is no promise of instant physical ownership transfers while an item stays in a seller's home.

## Implemented in this prototype
Built on Claude's `claude/merge-collecting-flow` integration (65357333c02eb6030fdefe6db0cd0a12c421b6b2), retaining the holographic reveal.
- Public scan is read-only with respect to purchase, ownership and earnings.
- Demo account -> simulated order reservation -> simulated delivery -> sample tag check -> explicit buyer acceptance -> collection and illustrative athlete payout.
- Resale request -> item/authority review -> approved for shipping -> in transit -> delivered awaiting acceptance -> accepted and settled.
- A dispute pauses progress at any active resale stage. Simulated reviewer resolution resumes the prior stage, without settling automatically.
- Cancellation before shipment leaves the item with its current holder and credits no resale payout.
- Reload retains progress. Reset clears the demo. Old state uses a different key.
- Repeated completion attempts do not credit a second payout.

These are browser simulations, not production security. Buyer, seller, reviewer and delivery actions are simulated by the same presenter. Browser storage is not an authoritative ownership ledger. No live wallet, payment, shipment, authentication, tag provisioning or blockchain connection has been created.

## First real item: intake checklist
Use pilot/item-template.json. Leave unknowns blank; do not substitute the demo's generated pictures or scripted story as evidence.
1. Founder selects one physical jersey and confirms permission to offer it.
2. Record athlete identity, ownership attestation, actual item description and any relevant usage/event claim.
3. Capture front/back, labels, signature if present, wear and distinguishing details. Store original files with capture dates; obtain permission for public story media.
4. Record a short athlete video describing this exact item. Independently corroborate game-use claims where feasible; separate testimony from photo-matching results.
5. Inspect the item, approve its description, document tag attachment and provision secure NFC with a backend verifier. A plain NFC URL is acceptable for a labeled demo only. Public QR contains a record URL, never a claim credential.
6. Create the item record, evidence versions and digest references. Keep private identity documents, shipping addresses and secret keys out of public metadata and GitHub.
7. Agree the actual price, athlete/platform split, shipping, insurance, payment fees, buyer terms and delivery/return/dispute process before accepting money. Current demo percentages are illustrative.
8. Run a controlled end-to-end sale only after the production gates below are met.

## Production event rules
| Event | Required authority/evidence | Result |
| --- | --- | --- |
| Open record | Public record identifier | Read-only display |
| Create order | Authenticated buyer; available item; payment provider confirmation | Reserve item; no settled payout |
| Delivery event | Verified carrier or authorized operations event | Await inspection/acceptance |
| Accept initial item | Correct buyer; delivery; item/tag checks; no dispute | Finalize record transfer and settlement according to terms |
| Request resale | Recorded holder; no active sale | Review request |
| Approve item | Authorized reviewer; seller authority; current item evidence | Shipping authorized |
| Dispatch/deliver | Authorized shipping events tied to the order | Update custody status only |
| Open dispute | Authorized buyer/reviewer; active handoff | Hold transfer and settlement |
| Resolve dispute | Authorized reviewer with reason and evidence | Resume prior stage; no automatic payment |
| Accept resale | Correct buyer; passed review; delivery; no dispute | Atomic supported record transfer/settlement |

Production must use server-validated transitions and idempotency keys, verified provider webhooks, distinct role permissions, audited operator decisions, transaction locks against duplicate listings, and a settlement reconciliation process. An external token transfer alone cannot silently update the physical item holder; define and enforce supported transfer behavior before choosing contracts.

## Evidence and token design
Permanent item ID; public descriptive metadata; evidence hashes/references with version history; athlete attestation; explicit custody and supported-transfer status. Store media outside the contract with durable storage and integrity checks. A hash detects changes; it does not prove that an original claim was true. Corrections append to history. An ownership record is not a universal legal-title guarantee.

Do not burn the tag-first provenance record when the fan receives the jersey. Vault redemption is a separate future model requiring separate state and terms.

## Production gates still open
- Embedded-wallet provider/account, authentication and recovery.
- Payment provider, delayed settlement, refunds and disputes; no DIY holding customer funds.
- Secure tag vendor/form factor, attachment trials, key provisioning and backend verification.
- Actual item evidence, custody/shipping partner and insurance.
- Network/contract design, evidence storage, role authorization and independent security review.
- Reviewed buyer/seller terms and clear disclosures of what each sale conveys.

## Validation
`node tests/state-transitions.cjs` runs dependency-free checks against the actual inline handlers: unauthorized actions, delivery/acceptance gates, duplicate completion, cancellation, disputes at all four stages, and public QR visits before/during sales.
`node tests/collecting.cjs` is the browser journey suite. Install Playwright normally and optionally set CHROMIUM_PATH. It covers mobile/desktop, reload, resets and overflow. The current execution environment blocked Chromium process socket creation, so a browser pass must not be inferred from the passing state tests.

## Research underlying the decision
https://drops.courtyard.io/about
https://help.courtyard.io/en/articles/11006165-vault-your-cards
https://www.nxp.com/docs/en/application-note/AN12196.pdf
https://eips.ethereum.org/EIPS/eip-721

Courtyard's public help center currently says new vault submissions are paused. Its current fees and availability must be checked rather than copied from historical descriptions.

## Integration
This implementation extends PR #2; it does not replace Claude's visual work. The public website audit is PR #3. Updating index.html does not update demo.getproovd.com: the production Cloudflare Worker embeds a separate HTML payload. Deploy only the reviewed combined revision and preserve the current homepage. A separate preview may be used to review this pilot without changing production.

## Preview verification
Preview: https://proovd-tag-first-preview.clalanne.workers.dev/
Manually exercised in the cloud browser: public record, sample account, purchase, delivery, tag check, explicit acceptance, resale review, dispute/reload/resolution, shipping, delivery, buyer acceptance and final payout breakdown. That browser pass supplements the handler tests; the automated multi-viewport suite still has not run in this environment.
