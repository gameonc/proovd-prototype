# PROOVD public website: impact audit and build brief
Date: 2026-11-13
Owner: Codex. Claude owns the interactive demo and holographic card.
Status: Audit complete; recommendations and copy below are proposed, not deployed.

## Evidence and limits
Inspected live homepage copy and rendered screenshots at 1440x1000 and 390x844.
Compared current rendered homepages of The Realest and Courtyard.
These are category/product references, NOT verified historical pre-seed website examples.
Early-stage guidance comes from YC Practical Design: Pitching and NextView demo guidance. Neither establishes that a visual treatment raises money.
No visitor analytics, conversion experiments or representative user tests were available.

## Verdict
Keep the deck-aligned black, bone and gold and editorial serif typography.
The homepage makes a good atmosphere but does not yet demonstrate the product's defining relationship: physical memorabilia + athlete story + tokenized digital record.
The strongest improvement is a concrete product scene and clearer buying proposition, rather than additional decorative effects.

## Findings, in order
1. Hero message: “Real items. Athlete stories. A record that travels.” is evocative but leaves the transaction and tokenization abstract.
   Action: name memorabilia and show physical item plus digital collectible together.
2. Hero image: the generated number-25 jersey establishes sports and premium mood. It does not show the athlete/fan connection or the tokenized record.
   Action: keep as explicitly labeled concept artwork until actual item photography is available. Pair it with a product record preview, not a fabricated certificate.
3. Mobile: at 390x844, header is about 80px; hero image/title consumes about another 520px. Primary demo button begins near y740. It fits in this viewport but requires visitors to process a large image before the explanation/action.
   Action: move plain-language proposition and demo action earlier; test 360x740 and 390x844. Keep art visually strong without dominating the complete first screen.
4. Product understanding: visitors get abstract explanation but no immediate inline demonstration of what tokenization adds.
   Action: paired item/record presentation with visible labels for physical item, athlete story, item details and ownership history. Use illustrative status.
5. Founder proof: current lower-page text says professional basketball player, with initials instead of a portrait.
   Action: bring a concise founder introduction closer to product proof; use approved portrait/career image when available. Verify exact credentials before publishing. No team logos implying partnerships.
6. Fan proposition: “Request early access” is generic and leads to mailto.
   Action: explain first-drop updates and give collectors and athletes separate paths. Keep mailto honest until a real consent-aware signup backend exists.
7. Trust: long early-access/privacy prose takes attention while authenticity methodology remains abstract.
   Action: concise status line; clear sample evidence panel; describe what each future listing will show. Do not claim a tag or token independently proves game use.
8. Share/search readiness: homepage has title/description/canonical metadata, but retrieved metadata lacks a large social-preview image. Prior live check found sitemap.xml missing.
   Action: create approved social image, add sitemap and verify preview retrieval. These do not guarantee indexing or solve every AI reader's network failure.

## Proposed hero copy
Eyebrow: ATHLETE-LED MEMORABILIA. PHYSICAL + DIGITAL.
Headline: Collect the jersey. Keep the connection.
Body: PROOVD is building a marketplace where fans can buy athlete memorabilia paired with a tokenized digital record—bringing the item, its story and ownership history together.
Primary CTA: Explore the demo
Secondary CTA: Get first-drop updates
Status: Preview the experience. Purchases are not live yet.

Art direction: show an oversized jersey alongside a smaller digital collectible, sharing the same item identifier. A thin visual connection can suggest the relationship. The record must visibly say “Demo collectible.” Keep gold restrained; avoid unrelated neon/crypto imagery. Motion should illustrate the physical-to-digital relationship and honor reduced motion.

## Homepage sequence and ready-to-use copy
1. Hero: above.
2. Product example: “One item. A story you can revisit.”
   “See how a physical jersey connects to its athlete, supporting evidence and digital collection record.”
   Labels: Physical jersey / Athlete story / Item record / Ownership history.
   Button: Open the example.
   Actual evidence and recordings pending; label concept assets.
3. How it works: “From the athlete to your collection.”
   Discover: “Explore the athlete, the item and the moment behind it.”
   Collect: “Our planned marketplace pairs your physical collectible with a digital record.”
   Stay connected: “Revisit its story and recorded ownership history from your collection.”
4. Explain tokenization: “The jersey is physical. Its record is digital.”
   “Tokenization creates a digital token linked to an item record. PROOVD is being built to connect that record with the athlete's story and ownership history. Each listing will explain the physical item, evidence and rights included.”
5. Athlete benefit: “Your career has a story. Give fans a piece of it.”
   “We're building a way for athletes to offer memorabilia, tell the story behind it and participate in supported marketplace resales.”
   Button: Bring your memorabilia.
6. Founder: “Built by an athlete who knows what the jersey means.”
   “Founded by Cady Lalanne, professional basketball player. PROOVD begins with the people behind the moments fans remember.”
   Add real portrait/video and approved biographical detail when supplied.
7. Conversion: “Be there for the first drop.”
   Collector CTA: Email me about first drops (mailto until actual signup exists).
   Athlete CTA: I have a story to share.
8. Concise FAQ: Can I buy today? What comes with the item? What does the digital record prove? How will collecting work? How do athletes participate?

## Reference lessons
The Realest: specific hero collectible, visible buy/bid action, item photography and named collections. Borrow specificity; do not invent PROOVD inventory or partner logos.
https://therealest.com/
https://therealest.com/about
Courtyard: product categories, clear collecting actions and visible items. Borrow action clarity; do not copy pack-ripping/gambling-like mechanics or suggest equal traction.
https://drops.courtyard.io/
YC: explain company, audience and how the promise is delivered.
https://www.ycombinator.com/blog/practical-design-pitching
https://www.ycombinator.com/blog/how-to-pitch-your-company
NextView: one or two clear product moments and reliable demo backup.
https://nextview.vc/blog/5-common-mistakes-founders-make-when-giving-demos-to-investors/

## Implementation ownership and acceptance
Codex: public homepage, copy, physical/digital product scene, mobile layout, honest CTAs, accessibility, metadata and public-site verification.
Claude: demo card/reveal and demo audit. Exchange PRs; no overlapping wholesale edits to index.html.
Preserve the homepage/demo deployment separation: live Worker embeds both payloads. Do not deploy an old demo while revising homepage.

Before release:
- Users can describe what they will buy and what the digital record adds after a short view.
- First-screen demo CTA visible at 360x740 and 390x844; no horizontal overflow.
- Visual connection between physical item and digital record is understandable without animation.
- All links and email actions work; no fake signup success.
- No fabricated inventory, game-use evidence, partnerships, traction or universal royalties.
- No production wallet/purchase claim until integrated.
- Keyboard, contrast and reduced-motion checks.
- Verify live HTTPS apex/www, demo navigation, social metadata and sitemap.

Founder assets needed: actual jersey front/back/detail photos, approved portrait or playing image, accurate item story and optional 20–30 second recording. These improve proof but do not block copy/layout work.
