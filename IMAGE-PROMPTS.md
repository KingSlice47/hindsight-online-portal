# Image generation prompts (Gemini)

Prompt pack for generating the photography set for the Hindsight Online website.

**Scope:** 13 images that replace every remaining stock photograph on the site.

**Explicitly NOT replaced:**

- Team portraits (`sipho.jpg`, `dineo.jpg`, `dr-seele.jpg`) - real people, real photos
- Association and certification logos (CIBA, SAIT, SAIPA, QuickBooks) - real marks, never generated
- The Google Maps embed on the contact page - real location data

## How to use

1. Paste the block below into Gemini.
2. Ask it to produce the shots **one at a time**, applying the STYLE BLOCK to each.
3. Save each result into `public/images/` using the exact filename from the shot list.
4. Regenerate any shot that breaks a hard constraint. The most common failures are
   legible text creeping into documents and invented content appearing on screens.

Once the files are in place they get resized, compressed and wired up, and the site
stops depending on external Unsplash URLs entirely.

## Where each image lands

| # | Filename | Used on | Crop |
|---|---|---|---|
| 01 | `hero-office.jpg` | Home, hero | 4:3.4 desktop, 16:10 mobile |
| 02 | `bento-bookkeeping.jpg` | Home, "Accounting and bookkeeping" tile | wide, text over lower third |
| 03 | `bento-statements.jpg` | Home, "Financial statements" tile | wide, text over lower third |
| 04 | `story-meeting.jpg` | Home, "Founded in Randburg, 2017" | 5:4 |
| 05 | `svc-accounting.jpg` | Services, Accounting & Bookkeeping | 16:9 |
| 06 | `svc-tax.jpg` | Services, Tax Services | 16:9 |
| 07 | `svc-statements.jpg` | Services, Financial Statement Compilation | 16:9 |
| 08 | `svc-admin.jpg` | Services, Business Administration | 16:9 |
| 09 | `svc-tender.jpg` | Services, Tender Opportunities | 16:9 |
| 10 | `svc-social.jpg` | Services, Social Media Engagement | 16:9 |
| 11 | `svc-mobile.jpg` | Services, Mobile Solutions | 16:9 |
| 12 | `svc-digital.jpg` | Services, Digital Services | 16:9 |
| 13 | `apps-workspace.jpg` | Applications, supporting band | 16:7 |

> Shot 05 replaces an image that currently shows a **US IRS tax form**. That one is a
> priority: foreign tax paperwork on a SARS practice's website reads as a credibility
> problem.

## The prompt

````text
You are art-directing a single photography set for a South African accounting and
compliance firm's website. Generate the images ONE AT A TIME. Apply the STYLE BLOCK
below to every single shot so the whole set looks like one continuous shoot.

════════════════════════════════════════════════════════════════════
STYLE BLOCK  (applies to every image)
════════════════════════════════════════════════════════════════════
Editorial documentary photography, shot on a full-frame camera with 35mm and 50mm
prime lenses at f/2.8 to f/4. Natural window daylight only, soft and directional,
no flash, no studio strobes. Calm, restrained, professional.

COLOUR GRADE (identical across the set): warm neutral. Warm off-white walls, soft
warm greys, deep warm near-black shadows. Gentle contrast, slightly lifted blacks,
no heavy vignette, no teal-and-orange grading, no cold blue cast.

BRAND COLOUR NOTE: allow ONE quiet natural green accent in most frames - a potted
plant, foliage through a window, a green document folder or book spine. Olive and
yellow-green family, muted. It must never dominate the frame and must never look
neon or artificially saturated.

SETTING: contemporary professional offices in Johannesburg, South Africa. Clean and
uncluttered, real and lived-in rather than showroom-perfect. Concrete, warm timber,
matte black metal, glass partitions, simple modern furniture.

PEOPLE: South African, ethnically diverse, aged 25 to 55, dressed in smart business
attire appropriate to a professional accounting practice. Always candid and mid-task,
never posed for the camera. Prefer side profiles, three-quarter angles, over-the-
shoulder framing, or subjects cropped at the shoulders or chest. Hands should either
be cropped out of frame or shown simply resting on a surface or holding one plain
object.

════════════════════════════════════════════════════════════════════
HARD CONSTRAINTS  (these are absolute - a shot that breaks one is unusable)
════════════════════════════════════════════════════════════════════
- NO legible text anywhere in the frame. No signage, no document headings, no book
  titles, no labels, no watermarks. Any paperwork must be angled away, cropped at the
  edge of frame, or thrown out of focus so no word can be read.
- NO readable screens. Every laptop, monitor and phone must be angled away from
  camera, switched off, or defocused. Do NOT invent dashboards, charts, spreadsheets
  or numbers on any screen.
- NO logos or brand marks of any kind, on anything.
- NO tax forms, government paperwork, currency, flags or anything that identifies a
  specific country's tax system. This firm files with SARS in South Africa, and
  foreign paperwork in frame would be actively wrong.
- NO stock-photo clichés: no high-fives, no thumbs up, no handshakes to camera, no
  pointing at charts, no cheering, no group laughing around a laptop, no sticky-note
  brainstorm walls.
- NO looking into the lens and smiling.
- NO purple, violet, magenta or electric-blue gradients. No neon. No glow effects,
  lens flares, light leaks or large bokeh orbs.
- NO text, captions, borders, frames, collages or split panels in the output image.
- NO 3D renders, illustration, or obvious CGI. Photographic realism only.

OUTPUT: minimum 1600px on the long edge, sharp, natural grain. Exact aspect ratio as
specified per shot.

════════════════════════════════════════════════════════════════════
SHOT LIST  (13 images)
════════════════════════════════════════════════════════════════════

--- HOMEPAGE ---

01 | hero-office | 4:3
Wide architectural interior of a quiet modern office: glass-partitioned meeting rooms,
polished concrete floor receding into the frame, full-height window with soft daylight,
one or two plants. Empty of people, or a single distant out-of-focus figure. Calm,
spacious, confident. Keep the visual interest in the centre of the frame - the edges
get cropped on smaller screens.

02 | bento-bookkeeping | 16:9
Over-the-shoulder view of a person working at a laptop at a clean desk, cropped at the
shoulders so the face is not visible. A notebook and a plain coffee cup beside them.
Screen angled well away from camera. IMPORTANT: keep the bottom third of the frame
visually calm and uncluttered - website text sits over it.

03 | bento-statements | 16:9
Close, slightly overhead: a person's hands squaring a neat stack of printed reports on
a warm timber table, a pen and closed laptop nearby. Paper angled sharply away so no
text is readable. Shallow depth of field. IMPORTANT: keep the bottom third of the
frame visually calm - website text sits over it.

04 | story-meeting | 5:4
Two colleagues seated side by side at a table, mid-conversation, reviewing a document
together. Candid, faces turned toward each other and away from camera. Warm window
light from the left. Natural, unforced, quietly collaborative.

--- SERVICES PAGE (all 16:9) ---

05 | svc-accounting | 16:9
A working desk viewed at a low angle: an open plain notebook, a simple calculator, the
edge of a laptop, a person's hands mid-task at the frame edge. Orderly, focused. No
figures or writing legible anywhere.

06 | svc-tax | 16:9
A person at a desk organising documents into a folder, seen from the side and cropped
at the chest. A muted green document folder provides the colour note. Careful,
methodical mood. No form or heading readable.

07 | svc-statements | 16:9
A bound printed report resting closed on a clean table beside reading glasses and a
pen, soft daylight raking across the cover. Shallow depth of field. Cover completely
blank - no title, no text.

08 | svc-admin | 16:9
A wall of neat modern filing drawers in a bright office corridor, with a person in
soft focus filing a document at the frame edge. Orderly and institutional without
feeling bureaucratic or dated.

09 | svc-tender | 16:9
A person seated at a boardroom table reviewing a thick bound proposal document, pen in
hand, seen in three-quarter profile. Large window behind, city daylight. Considered,
deliberate.

10 | svc-social | 16:9
A hand holding a smartphone above a bright uncluttered desk beside a closed laptop and
a small plant. Phone screen dark and angled away. Light, contemporary, airy.

11 | svc-mobile | 16:9
A professional standing near a large office window using a phone, laptop bag over the
shoulder, cropped at the chest. Backlit by soft daylight. A sense of working between
places.

12 | svc-digital | 16:9
A modern workspace detail: a monitor turned away from camera on a clean desk, tidy
cable management, a person's hands resting on a laptop at the frame edge. Technical
but calm. Absolutely not a server room and not a stock "hacker" scene.

--- APPLICATIONS PAGE ---

13 | apps-workspace | 16:7 (wide letterbox)
A calm workspace beside a floor-to-ceiling window: a closed laptop, a plain notebook, a
plant, warm daylight, a soft city view outside. No people. Quiet and spacious, with
generous empty area on the left side of the frame.
````

## Why the constraints are written that way

The two rules doing the most work are **no legible text** and **no invented screen
content**. Garbled lettering and fabricated dashboards are the fastest way for a
visitor to recognise generated imagery, and this is an accounting firm where paperwork
and screens are the natural subject matter. Every document and display in the shot
list is therefore angled, cropped or defocused by design.

Shots **02** and **03** need a calm bottom third because the site renders headline and
body copy directly over those images behind a scrim. If a subject lands low in the
frame, regenerate that shot.

All slots use CSS `object-fit: cover`, so small aspect-ratio mismatches are safe.
Keeping subjects near the centre matters more than hitting the ratio exactly.
