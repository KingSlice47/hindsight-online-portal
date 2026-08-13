# Rebuilding this site in Lovable

A staged prompt pack for recreating the Hindsight Online website in Lovable.

Lovable builds **React + TypeScript + Vite + Tailwind + shadcn/ui**, not Astro, so
these prompts are written for that stack rather than copied from the current codebase.
Everything else (brand, palette, content, layout system, constraints) is carried over
exactly.

## How to use

Paste **Prompt 1** as the very first message in a new Lovable project. It sets up the
design system, and everything after it depends on those tokens existing. Then work
through prompts 2 to 8 in order, one message at a time, checking the preview between
each. Prompt 9 is a QA sweep to run at the end.

Do not paste them all at once. Lovable produces noticeably better results from a strong
foundation prompt followed by focused additions than from one enormous instruction.

---

## Prompt 1: design system and foundation

````text
Build a marketing website for "Hindsight Online", a technology-driven accounting,
tax and business administration firm in Randburg, South Africa, serving small and
medium businesses. It was founded in 2017. Hindsight Consulting is its parent company.
The audience is SME owners choosing an accounting partner, so the site must read as
credible and precise rather than flashy.

Start with the design system only. Do not build any pages yet.

STACK
- React + TypeScript + Vite + Tailwind + shadcn/ui
- Install @fontsource-variable/geist and @fontsource-variable/geist-mono and import
  them globally. Geist is the sans face for everything; Geist Mono is used ONLY for
  numerals, prices, statistics and small metadata.
- Install @phosphor-icons/react. Phosphor is the only icon family for content icons,
  at a consistent weight. Do not use emoji anywhere, and do not use text characters
  like a checkmark glyph as icons. Lucide may remain only where shadcn components
  depend on it internally.

COLOUR SYSTEM
These are brand colours sampled from the company logo, and the usage rules come from
measured WCAG contrast. Follow the rules exactly, because two of these colours are
unusable in the obvious way.

  Lime   #AAC134   the primary brand colour
  Moss   #6A992D   secondary brand green
  Ink    #13120E   warm near-black, from the logo wordmark

  Lime on white measures 2.01:1, which FAILS. Lime must never be used for text on a
  light background and never as a button with white text.
  Ink on lime measures 9.27:1. So lime is a BUTTON FILL with ink-coloured text. This
  is the primary button in both themes.
  Moss on white measures 3.36:1, so it is not usable for body text. For light-mode
  links, icons and small accents use the deepened moss #446619, which measures 6.19:1.
  On a dark background lime measures 9.34:1, so in dark mode lime carries text directly.

Define CSS custom properties for both themes and drive every component from them.
Neutrals must be warm (biased toward the logo's warm off-white), never cool grey.

  Light theme:
    background #F7F7F4, sunken #EEEEE8, surface #FDFDFB, surface-2 #F1F1EA
    ink #13120E, muted #4F5347, faint #6F7367
    line #E4E4DD, line-strong #D3D4C9
    accent (text/links/icons) #446619, accent-soft #EEF2DD, accent-line #D5DFA9

  Dark theme:
    background #0F120C, sunken #0A0C07, surface #161A12, surface-2 #1C2017
    ink #E9EDE4, muted #9BA396, faint #7D8577
    line #262B20, line-strong #343A2C
    accent #AAC134, accent-soft #1E240F, accent-line #3A441C

  Constant in both themes: fill #AAC134, on-fill #13120E.

Never use pure #000000 or pure #FFFFFF anywhere.
Use exactly one accent family across the entire site. Do not introduce a second
accent colour on any page or in any section.

DARK MODE
Support light, dark, and system. Persist an explicit choice in localStorage and apply
it before first paint so the theme never flashes on load. Add a small icon-only theme
toggle in the header. Every colour must come from the token set, so no component may
define a colour only inside a dark-mode block.

SHAPE RULE (apply everywhere, no exceptions)
  interactive controls -> fully rounded pill
  cards, panels, images -> 14px radius
  form inputs -> 10px radius

TYPE SCALE
  Display headline: clamp(2.35rem, 5vw, 3.5rem), tight tracking, line-height 1.06
  Section headline: clamp(1.9rem, 3.6vw, 2.9rem)
  Body: 1rem, line-height 1.6, max-width 65 characters
  Lead paragraph: slightly larger, muted colour, max-width 46 characters
  Headings use font-weight 600 and negative letter-spacing. Never use a serif face.

MOTION
Restrained. Reveal-on-scroll with a small stagger, hover lift on interactive cards,
and a 1px press translate on buttons. Use IntersectionObserver only. Never attach a
scroll event listener. Everything must collapse to static under
prefers-reduced-motion. Content must remain visible if JavaScript fails, so the
hidden-before-reveal state may only apply once JS has confirmed it is running.

LAYOUT
Max content width 1200px, gutters clamp(1.25rem, 4vw, 2.5rem). Use CSS grid with gap
rather than flexbox percentage maths. Every multi-column layout must declare its
single-column fallback below 768px. Never use h-screen; use min-h-[100dvh].

Set this up as reusable tokens, a Button component with primary and secondary
variants, and a container/section layout primitive. Show me the tokens when done.
````

---

## Prompt 2: layout shell

````text
Now build the site shell.

HEADER
Sticky, maximum 80px tall, single line at desktop. Left: the company logo image
(I will supply the file; use a placeholder for now) at about 54px tall. Centre: nav
links Home, Products, Applications, Pricing, Contact, pointing at /, /products,
/applications, /pricing, /contact. The active link gets a 2px accent underline.
Right: the theme toggle and one primary button labelled exactly "Talk to us".

Below 900px the nav links collapse into a hamburger menu that opens a full-width
panel. Close the panel automatically if the viewport grows past the breakpoint.

The header background is a translucent blur over the page background, and it gains a
bottom hairline only once the page has scrolled away from the top. Detect that with an
IntersectionObserver sentinel, never a scroll listener.

FOOTER
Three columns collapsing to one below 780px. Column 1: logo, a one-line description
("Tech-driven financial and compliance solutions for South African SMEs since 2017.
Part of the Hindsight Consulting group."), and the postal address:
  Unit 1, Randpark Building
  20 Dover Street, Ferndale
  Randburg, South Africa
Column 2: Contact heading with accounts@hindsightonline.co.za and 010 500 8919 as
mailto and tel links, then a Pages heading listing Products, Applications, Pricing,
Contact. Column 3: Follow heading with LinkedIn, Facebook and Instagram links opening
in a new tab with rel="noopener noreferrer".
Bottom bar: "© 2017 - <current year> Hindsight Consulting (Pty) Ltd. All rights
reserved." on the left and "Registered in South Africa" on the right.

FLOATING CONTACT BAR
A slim pill-shaped bar fixed near the bottom centre, max 660px wide. It reads
"Questions about your books, tax or compliance?" with a "Talk to us" button and a
dismiss button. It appears only once the first section has scrolled out of view, hides
again when the footer comes into view, and stays dismissed for the session once
closed. Use IntersectionObserver for both triggers. Hide the text and keep just the
button below 620px.

ACCESSIBILITY
Add a skip-to-content link that becomes visible on focus. Give every interactive
element a visible focus ring in the accent colour.

CTA LABEL RULE, applies to the entire site from here on: every call to action that
leads to the contact page uses the exact words "Talk to us". Never introduce
"Get started", "Contact us today", "Get in touch" or "Let's talk" alongside it. One
label per intent, site wide.
````

---

## Prompt 3: home page

````text
Build the home page with these eight sections, in this order. Every section must use a
DIFFERENT layout structure. Do not repeat a layout pattern anywhere on this page, and
do not use three equal side-by-side feature cards.

1. HERO - asymmetric split, text column slightly wider than the image column.
   Headline: "Accounting and compliance, handled."
   Sub-paragraph: "Cloud-based accounting, tax and business administration for South
   African SMEs. Registered, compliant, and run from Randburg since 2017."
   Buttons: primary "Explore our services" linking to /products, secondary
   "Talk to us" linking to /contact.
   Right column: a photograph in a 14px-radius frame.
   The headline must hold to a MAXIMUM of two lines at desktop, and the buttons must
   be visible without scrolling. Cap the hero top padding so the content does not
   float down the viewport. The hero contains only these four elements: headline,
   sub-paragraph, buttons, image. Do not add an eyebrow label, a trust strip, a
   version badge, a scroll cue, or a small tagline under the buttons.

2. CREDENTIALS - a thin full-width band directly under the hero, with the small label
   "Registered with and certified by" and then a row of four credential marks: SAIPA,
   CIBA, SAIT, QuickBooks ProAdvisor. Logos only, at consistent optical size on
   uniform tiles. Do NOT print a category or description under any logo.

3. SERVICES - a bento grid of exactly four cells in a six-column grid: a wide cell
   (span 4) with a background photograph and a dark scrim, then a narrow cell (span 2)
   tinted with accent-soft, then a narrow plain cell (span 2), then a second wide
   photographic cell (span 4). Four items, four cells, no empty tiles.
   Section headline: "Accounting, tax and compliance in one place"
   Body: "The work most SMEs would rather not do in-house, run on QuickBooks Online
   and Draftworx by people who answer the phone."
   Cells:
     - Accounting and bookkeeping: "Monthly statements, transaction recording and bank
       reconciliations, kept current rather than caught up at year end."
     - Tax and SARS: "VAT, PAYE, income tax returns and eFiling support."
     - Business administration: "CIPC, COIDA, NCR and FSCA registrations and
       submissions."
     - Financial statements: "Annual financial statements and management accounts
       compiled in Draftworx, ready for your bank, funder or auditor."

4. STORY - a two-column split with a photograph on the left and text on the right, on
   a sunken background.
   Headline: "Founded in Randburg, 2017"
   Body: "Hindsight Online is a technology-driven accounting and business
   administration firm, and part of the Hindsight Consulting group. We deliver
   tailored financial and compliance solutions to small and medium-sized enterprises,
   and to clients of our parent company, including Tsogang Brands."
   Then three icon-and-text points: "Cloud-based by default" (QuickBooks Online and
   Draftworx, so your records are current and reachable from anywhere),
   "Compliance first" (regulatory deadlines tracked and filed on time, with the
   paperwork to show for it), "One point of contact" (you deal with the same people
   every month, not a ticket queue).

5. TEAM - three people in a row, but with staggered vertical offsets so it does not
   read as three identical cards. Tall portrait images with a 14px radius, greyscale
   by default and full colour on hover. Collapse to a single column below 820px with
   the offsets removed.
   Headline: "The people on your account"
   Body: "A small, experienced team. You will know who is doing your work and how to
   reach them."
     - Sipho Mampe, Chairman / Director: "Brings extensive expertise in financial
       strategy and compliance. Sipho oversees operations and fosters relationships
       with Hindsight Consulting and its clients."
     - Dineo Rametsi, Accountant: "A skilled leader in financial management, Dineo
       drives client account oversight and provides strategic direction to ensure
       operational excellence."
     - Dr Palesa Seele, Non-Executive Director: "An esteemed academic and researcher
       with a passion for innovation and technology. A Fellow of Black Woman in
       Science."

6. PARTNERS - a horizontal scroll-snap rail of four cards, on a sunken background.
   Headline: "Who we work with"
     - Hindsight Consulting: our parent company, and the group we deliver accounting
       and administration services within.
     - Tsogang Brands: strategic partnership for comprehensive business solutions.
     - Afrilink Telecoms: technology partner for digital solutions and web services.
     - Afrilink Corporation: holding company with a diverse portfolio of services
       across the SADC region.

7. NUMBERS - a plain four-column typographic band with hairlines above and below. No
   card containers. Numerals in Geist Mono, large, tight tracking, counting up when
   scrolled into view (and static under reduced motion). Two columns below 720px.
     9 Years in practice | 500+ Clients served | 6 Industries served |
     4 Professional bodies

8. CLOSING CTA - a full-width lime panel with 14px radius and ink-coloured text.
   Headline: "One platform for accounting, HR and admin"
   Body: "Our digital platform brings accounting, HR and business management together,
   built for South African SMEs."
   Buttons: primary "Talk to us", secondary "View pricing".
   Restate both button variants against the lime background so their text contrast
   still passes. The primary becomes ink-filled with lime text.

Use AT MOST ONE small uppercase eyebrow label across this entire page. Prefer zero.
The headline alone is enough to introduce a section.
````

---

## Prompt 4: services page (route /products)

````text
Build the services page at /products. Five sections, five different layouts.

1. A type-only hero: headline "Our Services", one short sub-paragraph of no more than
   20 words, and a hairline beneath.

2. Two featured services as full-width horizontal cards, image on the left at about
   44% width, content on the right.

3. The remaining six services in a two-column card grid. Each card: a 16:9 image, a
   title, one sentence, a list of four features each with a Phosphor check icon, and a
   text link reading "Talk to us".

The eight services, in order (first two are the featured pair):
  - Accounting & Bookkeeping: comprehensive financial record keeping and accounting
    services tailored for SMEs. Features: monthly financial statements, transaction
    recording, bank reconciliations, financial reporting.
  - Tax Services: complete tax compliance including VAT, PAYE, income tax and SARS
    eFiling. Features: VAT submissions, PAYE processing, income tax returns, SARS
    eFiling support.
  - Financial Statement Compilation: professional financial statement preparation
    using Draftworx. Features: annual financial statements, management accounts,
    compliance reporting, audit preparation.
  - Business Administration: complete business compliance including CIPC, COIDA, NCR
    and FSCA registrations. Features: company registrations, compliance monitoring,
    regulatory submissions, licence applications.
  - Tender Opportunities: identification and management of tender opportunities
    through eTenders portal access. Features: tender identification, proposal
    assistance, compliance checking, submission support.
  - Social Media Engagement: professional social media management across LinkedIn,
    Facebook and Instagram. Features: content creation, community management, brand
    engagement, analytics reporting.
  - Mobile Solutions: mobile-first applications for accounting and HR management on
    the go. Features: mobile accounting, HR management, real-time updates, cloud
    synchronisation.
  - Digital Services via Afrilink Telecoms: complete digital solutions including web
    development, hosting and email. Features: website development, domain and hosting,
    email solutions, technical support.

4. A statistics band in the same plain typographic style as the home page.
5. The shared closing CTA panel.

Every image needs width, height, lazy loading and descriptive alt text.
````

---

## Prompt 5: applications page

````text
Build the applications page at /applications. Four sections.

1. A type-only hero: "Our Applications" with a short sub-paragraph.

2. A bento of exactly four cells: the live product as a full-width lead tile tinted
   with accent-soft, then three tiles below. Each tile has a Phosphor icon, a title,
   one sentence, its features as small pill-shaped tags, and a status badge.

   Status badges are typed, and the styling MUST match the wording. A live product gets
   a filled lime badge with ink text. Anything not yet available gets a plain outlined
   badge. Do not give a "Coming soon" item the styling of an available one.

     - Web Based Accounting App. "Manage your finances on the go with our comprehensive
       accounting solution." Features: real-time expense tracking, invoice generation,
       bank reconciliation, financial reporting. Status: Available now.
     - HR Management System. "Streamline your human resources processes with our
       integrated HR platform." Features: employee onboarding, payroll management,
       leave management, performance tracking. Status: Coming soon.
     - Business Intelligence Dashboard. "Make data-driven decisions with our analytics
       and reporting tools." Features: real-time dashboards, custom reports,
       performance metrics, trend analysis. Status: Coming soon.
     - Integration Platform. "Connect all your business tools with our integration
       platform." Features: API connections, data synchronisation, automated workflows,
       third-party integrations. Status: In development.

3. A wide letterbox photographic band.
4. The shared closing CTA panel.

Do NOT build fake product screenshots out of divs. No mock dashboards, no invented
charts, no fabricated task lists, no simulated app windows. Use a real photograph or
no image at all.
````

---

## Prompt 6: pricing page

````text
Build the pricing page at /pricing. Five sections.

1. A type-only hero: "Pricing Made Simple" with a short sub-paragraph.

2. Three plan cards, middle one emphasised with an accent border and a small
   "Most popular" badge. Prices in Geist Mono with tabular figures so the three tiers
   align optically. Single column below 900px.
     - Starter, R1,500/month: basic bookkeeping, monthly financial statements, VAT
       submissions, email support.
     - Professional, R2,500/month: complete bookkeeping, monthly financial statements,
       VAT and PAYE submissions, income tax returns, business registration support,
       phone and email support.
     - Enterprise, R4,000/month: full accounting services, financial statement
       compilation, complete tax compliance, business administration, tender
       opportunities, priority support, dedicated account manager.
   All three plan buttons read "Talk to us" and link to /contact.

3. Add-on services as a single bordered container of stacked rows, name and
   description on the left and price right-aligned in mono. Put a divider BETWEEN rows
   only. Do not box every row individually.
     - Social Media Management, R800/month: professional social media presence across
       all platforms.
     - Website Development, from R5,000: custom website design and development.
     - Mobile Apps, R500/month: access to our mobile accounting and HR applications.

4. Frequently asked questions as a native accordion using the details element or the
   shadcn Accordion, one item per question, keyboard operable.
     - What's included in all plans? All plans include basic bookkeeping, monthly
       financial statements and email support. Higher tiers add more comprehensive
       services.
     - Can I upgrade my plan? Yes, you can upgrade or downgrade at any time. Changes
       take effect at the next billing cycle.
     - Do you offer custom solutions? Yes. We can tailor our services to your specific
       requirements. Contact us for a custom quote.
     - What payment methods do you accept? Bank transfers, debit orders and credit
       card payments.

5. The shared closing CTA panel.
````

---

## Prompt 7: contact page

````text
Build the contact page at /contact. Three sections.

1. A type-only hero: "Get In Touch" with a short sub-paragraph.

2. A two-column split, details on the left at 0.85fr and the form on the right at
   1.15fr, collapsing to one column below 900px.

   Left column, each item with a Phosphor icon:
     - Our office: Unit 1, Randpark Building, 20 Dover Street, Ferndale, Randburg,
       South Africa
     - Email us: accounts@hindsightonline.co.za
     - Call us: 010 500 8919
   Then business hours as a definition list with the times in mono, right-aligned:
   Monday to Friday 8:00 to 17:00, Saturday 9:00 to 13:00, Sunday closed.

   Right column, a form card with fields Full name, Email address, Subject and
   Message. The field names in the markup must be exactly: name, email, subject,
   message. Include a hidden honeypot field named exactly "honeypot".

   Form rules:
     - Labels ABOVE inputs, never placeholder-as-label.
     - Validation errors appear inline BELOW the offending field, in a colour that
       passes contrast in both themes.
     - Submission status appears in an inline aria-live region inside the form, not
       as a floating toast.
     - While submitting, disable the button and set aria-busy.
     - Inputs, placeholders, focus rings and helper text must all pass WCAG AA against
       the card background. Do not leave inputs at browser defaults.

3. A location section with the Google Maps embed for 20 Dover Street, Ferndale,
   Randburg, in a 14px-radius frame with a reserved aspect ratio so it does not shift
   layout while loading. Below it, three short notes: address, on-site visitor
   parking, and accessibility by taxi and bus routes.

BACKEND
Wire the form to a Supabase edge function that validates the fields server-side,
silently accepts and discards any submission where the honeypot is filled, and
forwards the message by email via Resend to accounts@hindsightonline.co.za with the
sender's address set as reply-to. Return clear JSON errors that the form surfaces
inline. Store the Resend API key as a secret, never in client code.
````

---

## Prompt 8: images and metadata

````text
Final content pass.

IMAGES
Every image needs explicit width and height attributes, lazy loading below the fold,
and descriptive alt text. The hero image loads eagerly with high fetch priority.
Do not use hand-drawn decorative SVG illustrations, and do not build fake UI out of
divs. Use real photographs throughout.

METADATA
Per page, set a unique title and meta description, a canonical URL, Open Graph title,
description, type, url, site name and image, and a twitter:card of
summary_large_image. Site name is "Hindsight Online". Add the favicon set and a web
manifest. Add theme-color meta tags for light (#F7F7F4) and dark (#0F120C).

Page titles:
  Home:         Hindsight Online | Financial & Compliance Solutions for South African SMEs
  Products:     Our Services | Hindsight Online
  Applications: Applications | Hindsight Online
  Pricing:      Pricing | Hindsight Online
  Contact:      Contact Us | Hindsight Online
````

---

## Prompt 9: quality sweep

````text
Run a quality pass across the whole site and fix everything you find. Report what you
changed.

  1. No em-dash or en-dash characters anywhere in visible text. Use hyphens.
  2. No emoji, and no text glyphs standing in for icons. Phosphor icons only.
  3. At most one small uppercase eyebrow label per three sections on any page.
  4. One CTA label per intent site wide. Every contact CTA reads "Talk to us".
  5. No two sections on the same page share a layout structure.
  6. No three-equal-column feature card rows anywhere.
  7. Grids contain exactly as many cells as there are items. No empty tiles.
  8. Every hero headline holds to two lines at desktop with its buttons visible
     without scrolling.
  9. No button label wraps to two lines at desktop.
 10. Navigation is one line at desktop and no taller than 80px.
 11. Every image has alt text plus width and height.
 12. Every form input passes WCAG AA, with labels above and errors below.
 13. Button text passes contrast against its own background. Check the lime panel
     especially.
 14. Both themes render correctly on every page, with no colour defined only inside a
     dark-mode block.
 15. All animation collapses under prefers-reduced-motion.
 16. No scroll event listeners. IntersectionObserver only.
 17. No horizontal overflow at 390px wide.
 18. Radius rule holds: pill controls, 14px containers, 10px inputs.
 19. Exactly one accent family across the whole site.
 20. No console errors or warnings.
````

---

## Things to fix by hand afterwards

Carrying over from the audit of the current site, these are content decisions that no
prompt should invent:

- **The statistics.** `500+ clients`, `98% satisfaction`, `100% SARS compliant` and
  `24/7 access` are unverified marketing claims. Keep them, cut them, or replace them
  with figures you can evidence. `9 years` is simply 2017 to now and is safe.
- **The copyright entity.** The footer names Hindsight Consulting (Pty) Ltd. Confirm
  which entity should appear now that Hindsight Online is the operating company.
- **The SAIPA logo.** No asset exists. Supply the real file rather than letting any
  tool generate an approximation of another organisation's mark.
- **Photography.** Use the set described in `IMAGE-PROMPTS.md` rather than stock
  library images, and never let a generated image contain legible text or an invented
  dashboard.

## Known differences from the Astro build

| Current site | Lovable rebuild |
|---|---|
| Astro, static output, zero JS by default | React SPA, client-rendered |
| Cloudflare Pages Function + Resend | Supabase edge function + Resend |
| Plain CSS custom properties | Tailwind theme tokens plus CSS variables |
| Hand-built components | shadcn/ui primitives, restyled away from defaults |
| Astro Icon with Phosphor | @phosphor-icons/react |

The React version will ship noticeably more JavaScript than the Astro build for the
same pages, which matters for Core Web Vitals on the slower mobile connections a lot
of South African SME visitors will be on. Worth weighing before committing to it.
