# PROOVD collecting pilot
Updated 2026-11-13. State: BUILDING. Decision: test a focused athlete-to-fan pilot.

## Goal
One real jersey, one athlete story, one understandable collecting experience.
Public scan -> digital reveal -> story and evidence -> collect -> account/wallet -> checkout -> collection.
Viewing never grants ownership. The first ten seconds are a design target, not a validated conversion benchmark.

## Verified repository state
index.html includes the holographic card, tilt, flip and QR deep link.
This branch adds a sample-account checkout gate and separates public QR visits from purchases.
The existing demo simulates identity checks, evidence, tags, token creation, payments, delivery, resale and ledger events in browser storage. None is production authentication or settlement.
The sample account is NOT a real embedded wallet or email/Google sign-in.
Existing imagery and story text must be checked against the actual item before a real listing.

## Work ownership
Claude: preserve and polish reveal, card, front/back layout, mobile presentation and reduced-motion behavior.
Codex: claim and wallet state, transaction/ownership rules, integration checks and deployment.
Founder: actual jersey, identifying photos, accurate story and athlete authorization; prospective athlete and collector introductions.
Use separate branches. Exchange commit/PR links. Do not overwrite the whole index.html from an old snapshot.

## This branch
- Public QR visits no longer fabricate purchase, payout or ownership transfer.
- QR reveal identifies a sample record instead of declaring authenticity.
- Demo account step precedes simulated checkout; no credentials collected.
- Payment, delivery-scan and resale handlers reject duplicate or ineligible actions.
- Resale/authentication copy removes universal royalty and counterfeit guarantees.
- Browser storage version bumped so old QR-generated ownership does not survive.

## Next implementation milestones
- [ ] Real embedded wallet integration using an evaluated provider; email/social auth, session recovery, existing wallet handling and server-side ownership checks.
- [ ] Show provider failures and retry states; successful login is not a successful purchase.
- [ ] Choose explicit custody and shipping model. Physical delivery and token transfer are separate events.
- [ ] Server-side purchase confirmation and idempotent settlement; no browser state as authority.
- [ ] Authorized claim independent of public tag URL; never encode a claim secret in public QR.
- [ ] Evidence capture, attachment process, tag validation and replay/tamper handling.
- [ ] Real asset storage and on-chain integration after selecting network and ownership terms.
- [ ] Supported resale checks and settlement; no promise of royalties on external transfers.
- [ ] Record a short backup walkthrough before spending time on AR.
- [ ] Check current landing/deck/checkout economics for consistency; sample splits are illustrative.

## Acceptance checks
- Opening or repeatedly scanning #r/PRV-0001 never purchases, transfers or credits athlete earnings.
- Public visitors can view the story without authentication.
- Collecting requires account/auth and a separate deliberate purchase/claim action.
- No real payment, wallet or authentication is implied by simulated actions.
- Retry/reload does not duplicate charges, transfers or payouts.
- Mobile layout, keyboard access, reduced motion, persistence and reset tested.
- Public record alone does not entitle a visitor to list or sell an item.
- Real release requires backend authorization tests, payment webhook tests and physical-delivery rules.

## Research and implications
- NextView: focus investor demos on one or two memorable moments; skip routine signup and keep a backup.
  https://nextview.vc/blog/5-common-mistakes-founders-make-when-giving-demos-to-investors/
- Mugler/Arianee: sewn-in QR opens a passport; a separate identification code claims it and creates a wallet. Scanning and claiming are distinct.
  https://www.arianee.com/en/case-studies/mugler
- Privy: email/social/passkey embedded-wallet capabilities exist. Provider selection, costs and integration are still pending.
  https://www.privy.io/user-wallets
- Courtyard: vaulted physical collectibles support digital trading; this is not proof that shipped memorabilia can change hands by token alone.
  https://www.nea.com/blog/courtyard-creating-a-world-of-connected-collectibles
  https://drops.courtyard.io/about
- Courtyard advertises zero P2P marketplace fees; PROOVD fees need a distinct value proposition.
  https://help.courtyard.io/en/articles/11955240-a-guide-to-the-courtyard-marketplace
- ERC-2981 communicates royalty information; payments are voluntary under the standard.
  https://eips.ethereum.org/EIPS/eip-2981
- NXP secure NFC/tamper hardware supports tag authentication, not independent proof of game use.
  https://www.nxp.com/docs/en/application-note/AN12196.pdf

## Pilot validation (proposed, not achieved)
Recruit three athletes with actual available items and test priced offers with ten relevant collectors.
Measure purchase commitments, trust objections, fulfillment cost and contribution margin.
Do not count compliments, animations or prototype completion as customer demand.
Defer 3D/AR and a standalone B2B wallet-as-a-service product.

## Deployment note
The custom domain has been served by cloudflare/worker.mjs containing an embedded copy of demo HTML.
Changing index.html alone does not establish that demo.getproovd.com changed.
Before deployment, fetch the latest Worker, preserve the homepage and regenerate only the demo payload from the reviewed HTML. Verify the deployed revision and HTTPS mobile flow.
This branch is not a production deployment.

## Paste to Claude
Continue the holographic reveal and mobile polish in gameonc/proovd-prototype.
Review Codex branch codex/collecting-flow-foundation and this document before editing.
Keep public QR viewing separate from authorized claims: scanning must never purchase or transfer the jersey.
Preserve the demo-account gate and simulation labels. Real wallet/auth/payment integration is still pending.
Use a separate branch and return your PR/commit; do not replace index.html from an older copy.
Prioritize reveal -> story/evidence -> collect -> collection. Defer AR.
