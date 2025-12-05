# MyWebClass.org – Design Styles as Living Websites

## Project Brief

**Concept:** A living gallery showcasing web pages, each demonstrating an authentic design style (Swiss, Bauhaus, Flat, Brutalist, Neumorphism, etc.). Students and designers submit examples; instructors curate them. Every style has an educational "profile page" with history, characteristics, and best practices.

**Goals:**
- Become a reference for design students, teachers, and curious developers
- Demonstrate how design principles translate to code
- Build a sustainable submission → curation → publishing workflow
- Model content management and moderation in real-world scenarios

---

## 1. Discovery & User Research

### Stakeholder Interviews Script (Simulated)

#### Interview 1: High School AP Computer Science Teacher
**Goal:** Understand how teachers use design resources in curriculum

**Questions:**
1. When preparing lessons on web design, how do you currently find good examples?
2. What makes an example "teachable" vs. just pretty?
3. How long do you spend prepping a single slide deck lesson?
4. Would you want students to submit their own work to a gallery?
5. What's your biggest pain point with existing design resources?

**Sample Insights:**
- Teachers need copy-paste-able code examples
- Diversity of styles is important (can't just use Bootstrap templates)
- Would love to showcase student work; unclear how to manage submissions

---

#### Interview 2: NJIT Design Student
**Goal:** Understand designer perspective, submission motivation

**Questions:**
1. When learning about design styles, where do you find inspiration?
2. Do you create personal projects? Do you share them?
3. What would motivate you to submit work to a gallery?
4. How do you evaluate if your work matches a style authentically?
5. Do you want feedback on submissions?

**Sample Insights:**
- Portfolio-building is a strong motivator
- Worried about "not being good enough"
- Wants recognition/credit for work

---

#### Interview 3: Self-Taught Web Developer
**Goal:** Understand DIY learner perspective

**Questions:**
1. How did you learn web design?
2. Do you refer back to style examples when building projects?
3. Would you submit work to showcase your learning?
4. What would make an example truly useful for learning?
5. Do you care about the design theory, or just the code?

**Sample Insights:**
- Prefers "annotated code" with explanation
- Wants to see both good and bad examples
- Motivated by community recognition

---

### Personas

#### Persona 1: Maya – Design Student
- **Age:** 21, junior at design school
- **Tech literacy:** Medium (knows HTML/CSS, learning JavaScript)
- **Goal:** Build portfolio, learn authentic design principles
- **Pain points:** 
  - Overwhelmed by design terminology and "rules"
  - Wants examples but doesn't know where to find them
  - Worried her submissions won't be "good enough"
- **Motivation:** Portfolio, peer recognition, learning
- **Behavior:** Spends 2-3 hours/week on personal projects; actively on design social media (Dribbble, Behance)

#### Persona 2: Mr. Chen – High School Teacher
- **Age:** 55, teaching for 20 years
- **Tech literacy:** Medium (comfortable with common platforms, not highly technical)
- **Goal:** Make CS/design accessible to diverse students; find good teaching examples
- **Pain points:**
  - Limited time to curate resources
  - Wants to showcase student work; unclear how to manage it
  - Needs permission/attribution handled cleanly
- **Motivation:** Student engagement, classroom quality, ease of use
- **Behavior:** Prepares lessons in advance; relies on a few trusted resource sites

#### Persona 3: Alex – Self-Taught Full-Stack Dev
- **Age:** 28, 3 years coding experience, looking to strengthen design skills
- **Tech literacy:** High (comfortable reading and modifying code)
- **Goal:** Improve design portfolio; understand principles behind good UX/UI
- **Pain points:**
  - Too much design theory, not enough coded examples
  - Wants to see both what works and what doesn't
  - Motivated by building real projects, not just tutorials
- **Motivation:** Skill development, portfolio showcase, community respect
- **Behavior:** Blogs occasionally; prefers open-source, collaborative learning

---

## 2. Strategy & Planning

### Customer Journey Map: "HS Teacher Wants Examples for a Slide Deck"

```
STAGE 1: DISCOVERY
├─ Touchpoint: Search engine, colleague recommendation, social media
├─ Task: Find a resource with multiple design style examples
├─ Pain point: Too many results; unclear quality
├─ Opportunity: Strong SEO, clear value proposition on homepage
└─ Action: Lands on MyWebClass.org homepage

STAGE 2: EXPLORATION
├─ Touchpoint: Gallery landing page
├─ Task: Quickly scan available styles, see quality of work
├─ Pain point: Needs to understand what's on offer without long read
├─ Opportunity: Visual filter chips, style descriptions, high-quality screenshots
└─ Action: Clicks on "Swiss Design" to see examples

STAGE 3: EVALUATION
├─ Touchpoint: Style profile + gallery entries
├─ Task: Understand Swiss design + see real implementations
├─ Pain point: Wants both theory and code; limited time
├─ Opportunity: "TL;DR" summary, do/don't list, linked code repos
└─ Action: Selects 3 best examples, downloads screenshots

STAGE 4: USAGE
├─ Touchpoint: Classroom presentation
├─ Task: Present design style and live demos
├─ Pain point: Need working links, hope they don't break
├─ Opportunity: QR codes to live demos, alternative static screenshots
└─ Action: Students visit MyWebClass.org, inspired to submit own work

STAGE 5: ADVOCACY
├─ Touchpoint: Recommends to colleagues, students
├─ Task: Share link with others
├─ Pain point: Might forget details
├─ Opportunity: Easy share button, email template
└─ Action: Teachers return for new content, students submit work
```

---

### Information Architecture (Sitemap)

```
MyWebClass.org
├── / (Homepage)
│   ├── Hero: "Design Styles Explained Through Code"
│   ├── Quick value: "X styles, X entries, X educators using this"
│   ├── CTA: "Explore Gallery" / "Submit Your Work"
│   └── Featured: 3–5 highlighted gallery entries
│
├── /gallery (Gallery Landing)
│   ├── Style filter chips (Swiss, Bauhaus, Flat, Brutalist, Neumorphism, etc.)
│   ├── Search bar
│   ├── Sort options (newest, most viewed, popular)
│   └── Grid of 12+ gallery entries (cards with thumbnail, style, author, description)
│
├── /gallery/[style-slug] (Style Detail Pages)
│   ├── Header: Style name, icon/visual
│   ├── "What is [Style]?" section
│   │   ├── Brief history & timeline
│   │   ├── Key characteristics (grid, type, color, layout)
│   │   └── "Key Takeaways" bullet points
│   ├── "Do's & Don'ts" comparison
│   ├── "See [Style] in Practice" gallery subset (filtered)
│   ├── "Learn More" links (Wikipedia, design articles, etc.)
│   └── "Submit Your Own" CTA
│
├── /gallery/[entry-slug] (Gallery Entry Detail)
│   ├── Title, author, submission date
│   ├── Live preview (embedded iframe or screenshot + link)
│   ├── GitHub link
│   ├── Author info card
│   ├── "Why This Is [Style]" explanation
│   ├── Code walkthrough (if available)
│   ├── Related entries (same style or related)
│   └── Comments/feedback section
│
├── /submit (Submission Form Page)
│   ├── Explanation of submission process
│   ├── Form (see below)
│   └── FAQ: "What makes a good submission?"
│
├── /learning (Learning Hub)
│   ├── Articles / guides
│   │   ├── "Design Styles 101: A Beginner's Guide"
│   │   ├── "CSS Techniques for [Style]"
│   │   ├── "Typography & Grid in Swiss Design"
│   │   └── etc.
│   └── Video tutorials (optional)
│
├── /about
│   ├── Mission & vision
│   ├── How it works (curation process)
│   ├── Contributors
│   └── Contact / feedback
│
└── /curator (Private: Curator Dashboard)
    ├── Submissions queue (under review)
    ├── Approve / reject / ask for changes
    ├── Edit published entries
    └── Analytics dashboard
```

---

### CMS Schema (Sanity)

**Core Collections:**

1. **DesignStyle**
   - `name` (string) — e.g., "Swiss Design"
   - `slug` (slug) — e.g., "swiss-design"
   - `icon` (image) — small visual identifier
   - `shortDescription` (text) — one-liner
   - `history` (rich text block array) — timeline, origins
   - `keyCharacteristics` (array of strings) — grid, typography, color, etc.
   - `examples` (array of URLs to external references)
   - `doList` (array of strings) — "Do use grid-based layouts"
   - `dontList` (array of strings) — "Don't use ornamental effects"
   - `canonicalEntry` (reference to GalleryEntry) — "best example" on this site
   - `status` (string: draft / published)
   - `createdBy` (reference to Author)
   - `createdAt` (datetime)

2. **GalleryEntry**
   - `title` (string) — e.g., "Swiss Minimal Portfolio"
   - `slug` (slug)
   - `author` (reference to Author)
   - `style` (reference to DesignStyle)
   - `shortDescription` (text) — one or two sentences
   - `explanation` (rich text) — "Why is this Swiss?" detailed breakdown
   - `demoUrl` (URL) — live demo link
   - `gitRepoUrl` (URL) — GitHub link (optional)
   - `screenshot` (image) — thumbnail for gallery
   - `fullPageScreenshot` (image) — optional full-page view
   - `codeWalkthrough` (array of rich text blocks) — optional annotated code
   - `submittedBy` (reference to Author)
   - `submittedAt` (datetime)
   - `status` (string: submitted / under-review / approved / rejected)
   - `approvedBy` (reference to Author)
   - `approvedAt` (datetime)
   - `rejectionReason` (text) — if rejected
   - `tags` (array of strings) — e.g., ["responsive", "dark-mode", "animation"]
   - `viewCount` (number) — tracking popularity

3. **Author**
   - `name` (string)
   - `email` (email)
   - `bio` (text)
   - `profileUrl` (URL) — portfolio or social link
   - `role` (string: student / instructor / external)
   - `organization` (string: NJIT / other school / independent)
   - `createdAt` (datetime)

4. **Article** (Learning Hub content)
   - `title` (string)
   - `slug` (slug)
   - `author` (reference to Author)
   - `content` (rich text block array)
   - `relatedStyles` (array of references to DesignStyle)
   - `relatedEntries` (array of references to GalleryEntry)
   - `readingTime` (number) — auto-calculated
   - `publishedAt` (datetime)
   - `status` (string: draft / ready / published)

---

## 3. Design & Branding

### Brand Guide: MyWebClass.org

#### Logo & Visual Identity
- **Concept:** Intersection of design principle and code/tech
  - Possibility: Grid-based abstract mark (echoes Swiss grid) with code brackets
  - Alt: Overlapping circles representing "multiple styles as one platform"
- **Wordmark:** "MyWebClass" in clean sans-serif (can vary the treatment per style page)

#### Color Palette
- **Primary:** `#1F2937` (dark gray/charcoal) — trustworthy, tech-forward
- **Secondary:** `#0EA5E9` (sky blue) — approachable, learning-oriented
- **Accent:** `#10B981` (emerald) — growth, community
- **Neutral:** `#F3F4F6` (light gray) — backgrounds, text

#### Typography
- **Heading font:** "Inter" or "Poppins" (modern sans-serif, good on screen)
  - Weights: 600 (bold), 700 (extra bold)
- **Body font:** "Inter" (clean, readable, excellent for code/design discussions)
  - Weight: 400 (regular), 600 (semibold)
- **Monospace (code blocks):** "JetBrains Mono" or "Monaco"

#### Tone of Voice
- **Friendly & Educational:** "Let's explore design together"
- **Authoritative but approachable:** Explain concepts clearly, no jargon without explanation
- **Inclusive:** Celebrate all skill levels; encouraging tone in submission messaging
- **Example:** "Your design style exploration hub — learn what makes Swiss design Swiss, then submit your own examples."

#### Visual Examples
- **Button style:** Rounded corners (8px), full-width on mobile, subtle shadow on hover
- **Card style:** Clean white/light background, border-left in accent color per style, rounded corners
- **Form inputs:** Light gray background, blue border on focus, clear placeholder text
- **Gallery entry card:** Image top, title + author below, style tag bottom-left

---

### Wireframes (Described in ASCII for accessibility)

#### Homepage
```
┌─────────────────────────────────────┐
│         MyWebClass.org              │
│  Design Styles Explained Through    │
│          Code & Examples            │
│                                     │
│  [Explore Gallery]  [Submit Work]   │
└─────────────────────────────────────┘

┌─ Featured Styles ──────────────────┐
│ ┌────┐  ┌────┐  ┌────┐             │
│ │Swiss│  │Bau-│  │Flat│            │
│ │Dsn  │  │haus│  │Dsn │            │
│ └────┘  └────┘  └────┘             │
└────────────────────────────────────┘

┌─ Recent Submissions ───────────────┐
│ Card  │ Card  │ Card  │            │
│ Card  │ Card  │ Card  │            │
└────────────────────────────────────┘

┌─ About / Stats ────────────────────┐
│ X Styles  |  X Entries  |  X Users  │
│ Dedicated to design education      │
└────────────────────────────────────┘
```

#### Gallery Listing
```
┌─────────────────────────────────────┐
│  Gallery    [Swiss] [Bauhaus] [Flat]│
│  [Search________]  Sort: [Newest v] │
└─────────────────────────────────────┘

┌─ Entry ┐ ┌─ Entry ┐ ┌─ Entry ┐
│ Image  │ │ Image  │ │ Image  │
│ Title  │ │ Title  │ │ Title  │
│ Swiss  │ │Bauhaus │ │ Flat   │
│ [View] │ │ [View] │ │ [View] │
└────────┘ └────────┘ └────────┘

┌─ Entry ┐ ┌─ Entry ┐ ┌─ Entry ┐
│ ...    │ │ ...    │ │ ...    │
└────────┘ └────────┘ └────────┘

[Load More]
```

#### Style Detail Page
```
┌────────────────────────────────────┐
│         Swiss Design               │
│    History | Characteristics       │
├────────────────────────────────────┤
│ "Swiss style (1950s–1970s) ...     │
│ Key: grid-based, sans-serif        │
│ Do:     [bullet 1]  [bullet 2]     │
│ Don't:  [bullet 1]  [bullet 2]     │
└────────────────────────────────────┘

┌─ Examples in Practice ─────────────┐
│ Card | Card | Card |               │
│ [Explore entries]                  │
└────────────────────────────────────┘

┌─ Learn More ──────────────────────┐
│ [Article] [Article] [Wikipedia]   │
└────────────────────────────────────┘

┌─ Submit Your Own Swiss Design ────┐
│         [Submit Form]              │
└────────────────────────────────────┘
```

#### Submission Form Page
```
┌─────────────────────────────────────┐
│        Submit Your Work             │
│                                     │
│ Tell us about your design entry     │
├─────────────────────────────────────┤
│ Name *                              │
│ [________________________]           │
│                                     │
│ Email *                             │
│ [________________________]           │
│                                     │
│ Role *                              │
│ ◉ Student  ◯ Instructor ◯ Other    │
│                                     │
│ Design Style *                      │
│ [Select Style______________▼]      │
│                                     │
│ Short Description *                 │
│ [_____________________              │
│  _____________________              │
│  _____________________]              │
│                                     │
│ Live Demo URL *                     │
│ [________________________]           │
│                                     │
│ GitHub Repo URL                     │
│ [________________________]           │
│                                     │
│ Screenshot                          │
│ [Upload] or [Drag & drop]          │
│                                     │
│ Figma Link (optional)               │
│ [________________________]           │
│                                     │
│ [Cancel]  [Submit]                 │
└─────────────────────────────────────┘
```

---

## 4. Implementation

### Submission Workflow

**States:** submitted → under-review → approved (or rejected)

1. **User submits form** (Google Forms, Typeform, or custom Next.js form)
   - All fields validated client + server side
   - Screenshot/assets uploaded to Vercel storage or Cloudinary

2. **Zapier trigger fires:**
   - Create Sanity document (`status: "submitted"`)
   - Post to Discord #mywebclass-submissions with summary
   - Send confirmation email to submitter

3. **Curator reviews** (in Sanity Studio):
   - Views submission, screenshots, live demo
   - Checks if style classification is accurate
   - Decides: approve, ask for changes, or reject

4. **On approval:**
   - Curator changes status to "approved" in Sanity
   - Zapier webhook fires (or manual action triggers email)
   - Send approval email to submitter with gallery link
   - Post to Discord #gallery-showcase announcing new entry

5. **Gallery auto-displays:**
   - Frontend queries Sanity for entries with `status: "approved"`
   - Entry appears in gallery, filterable by style

---

### Automated Zapier Flows

#### Flow 1: Form Submission → Sanity + Discord
```
Trigger: Google Forms / Typeform submission
  ↓
Action 1: Create Sanity document
  - Collection: GalleryEntry
  - Set: status = "submitted", submittedAt = now()
  - Map form fields to Sanity fields
  ↓
Action 2: Post to Discord
  - Channel: #mywebclass-submissions
  - Message: "📬 New submission: [Title] by [Author] ([Style])"
  - Include link to Sanity review dashboard
  ↓
Action 3: Send confirmation email
  - To: submitter email
  - Template: "Thanks for submitting! We'll review within 48 hours."
  ↓
Action 4: Add to HubSpot (optional)
  - Create contact: name, email
  - Tag: "design-contributor"
  - Source: "mywebclass-submission"
```

#### Flow 2: Approval → Notification
```
Trigger: Sanity document status changes to "approved"
  ↓
Action 1: Send approval email
  - To: submitter email
  - Include: gallery link, share tips, encourage second submission
  ↓
Action 2: Post to Discord
  - Channel: #gallery-showcase
  - Message: "🎨 New entry approved! [Title] demonstrating [Style]"
  - Include screenshot & link
  ↓
Action 3: Update HubSpot
  - Contact: mark as "published-on-gallery"
  - Activity: "Gallery entry approved"
```

#### Flow 3: New Learning Article Published → Social Broadcast
```
Trigger: Sanity document (Article) published
  ↓
Action 1: Post to Discord
  - Channel: #announcements
  - Message: "📚 New learning guide: [Article Title]"
  ↓
Action 2: Email subscribers (optional)
  - Use Zapier delay to send next morning
  - Subject: "[Article Title] – Perfect for design students"
```

---

### Frontend Implementation (Next.js Example)

**Key pages to build:**

1. `pages/index.tsx` — Homepage with featured styles/entries
2. `pages/gallery.tsx` — Gallery listing with filters
3. `pages/gallery/[slug].tsx` — Style detail pages (dynamic)
4. `pages/entry/[slug].tsx` — Individual entry detail pages
5. `pages/submit.tsx` — Submission form
6. `pages/learning/index.tsx` — Learning hub landing
7. `pages/learning/[slug].tsx` — Individual article pages

**Sanity queries (GROQ):**
```groq
// Get all approved styles
*[_type == "designStyle" && status == "published"] | order(_createdAt desc)

// Get gallery entries by style
*[_type == "galleryEntry" && status == "approved" && style._ref == $styleId] | order(approvedAt desc)

// Get featured entries (e.g., top 6 most viewed)
*[_type == "galleryEntry" && status == "approved"] | order(viewCount desc) [0...6]
```

---

## 5. AI Integration

### AI Prompt Examples

#### Prompt 1: Generate Style Description
```
You are a web design educator explaining design styles to students. 
I need a clear, engaging description of [STYLE NAME] that includes:
1. Historical origin (when, where, who influenced it)
2. Key visual characteristics (grid use, typography, color approach)
3. Three to five "do" tips
4. Three to five "don't" tips
5. A modern web example (hypothetical or real)

Keep language simple (high school reading level). 
Format as markdown with headers.
```

**Expected output:** 500–800 words explaining Swiss design, Bauhaus, etc.

#### Prompt 2: Analyze Submission for Style Authenticity
```
A user submitted this entry to our design gallery:
Title: [TITLE]
Description: [USER DESCRIPTION]
Style: [CLAIMED STYLE]
URL: [DEMO URL]

Based on the description, analyze whether this genuinely demonstrates [STYLE] design. 
Consider: grid usage, typography choices, color palette, layout principles.

Respond:
1. "This IS authentic [STYLE]" or "This is NOT clearly [STYLE]" (verdict)
2. Specific observations about why (2–3 sentences)
3. Suggestions for improvement (if not authentic)
4. One specific element that exemplifies the style well (if authentic)
```

**Usage:** Auto-review submissions as a first pass for curators

#### Prompt 3: Generate CSS Snippet for a Style
```
Generate a complete HTML/CSS example for a simple landing page that authentically demonstrates [STYLE] design.

Requirements:
- Clean, semantic HTML (no unnecessary divs)
- Vanilla CSS (no frameworks)
- Responsive grid layout (2 columns on mobile, 3 on desktop)
- Accessible color contrast (WCAG AA)
- Web-safe fonts or Google Fonts

Include comments explaining design choices (e.g., "// Swiss style: strict grid-based layout").
Keep it under 300 lines total.

Format: HTML and CSS in a single code block, ready to copy-paste.
```

**Usage:** Generate starter boilerplate for learning articles or gallery examples

---

### AI-Powered Features (Team Implementation Ideas)

1. **Auto-tagging submissions**
   - Send submission data to AI, ask for relevant tags (e.g., "responsive", "dark-mode")
   - Use tags for filtering/searching

2. **Generate "style profiles" on demand**
   - One-click PDF export of style characteristics + do/don't list
   - Teachers can customize and print for classrooms

3. **Analyze gallery entry code quality**
   - AI reviews code structure, CSS organization, accessibility
   - Suggest improvements or highlight good practices

4. **Generate related content recommendations**
   - "You submitted a Swiss entry; here are related articles you might find useful"

---

## 6. Success Metrics

- **Submissions per month** (target: 3–5 in first 3 months)
- **Unique visitors** (target: 50–100/month)
- **Gallery entries approved** (target: 12+ by end of semester)
- **Student participation rate** (e.g., "X% of design students submitted")
- **Teacher feedback** (NPS or simple survey)
- **Content engagement** (avg. time on style detail pages, clicks to code)

---

## 7. Rough Timeline (6-Week Project)

**Week 1:** Discovery (interviews, personas, journey map)  
**Week 2:** Strategy & design (brand guide, wireframes, tool evaluation)  
**Week 3:** Sanity setup, schema, basic Next.js pages  
**Week 4:** Forms, Zapier workflows, Discord integration  
**Week 5:** Learning content creation, styling, responsive design  
**Week 6:** Testing, refinement, launch preparation, demo  

---

## Checklist

- [ ] Stakeholder interviews documented
- [ ] 3+ personas created with depth
- [ ] Customer journey map completed
- [ ] Brand guide with visual examples
- [ ] Wireframes for 5+ key pages
- [ ] Sanity schemas deployed
- [ ] Form submission working end-to-end
- [ ] At least 3 design styles with profiles
- [ ] At least 6 gallery entries (approved)
- [ ] 2–3 learning articles published
- [ ] Zapier workflows tested
- [ ] Discord channel setup with at least 2 integrations
- [ ] Frontend deployed to Vercel/Netlify
- [ ] AI examples documented with prompts
- [ ] README in GitHub repo with setup instructions
