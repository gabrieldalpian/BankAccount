# IS 375 Project: Quick Reference & Checklists

## Project Overview

**One Stack, Three Organizations:**
- **MyWebClass.org** — Design styles gallery + learning hub
- **Job Club** — AI careers onboarding + community
- **Town Hall** — Newark AI community nonprofit

**Shared Infrastructure:**
- CMS: Sanity
- Automation: Zapier
- CRM: HubSpot
- Community: Discord
- Frontend: Next.js / Astro
- Hosting: Vercel / Netlify

---

## Pre-Project Checklist

### Team Setup
- [ ] Form team of 2 people
- [ ] Assign roles: one UX/strategy lead, one implementation lead (both touch everything)
- [ ] Choose which org(s) to build
- [ ] Schedule weekly standup meetings
- [ ] Set up GitHub repo for code + documentation

### Accounts & Tools (Free Tier)
- [ ] Sanity account (free project) — https://sanity.io
- [ ] HubSpot account (free CRM tier) — https://www.hubspot.com
- [ ] Zapier account (100 tasks/month free) — https://zapier.com
- [ ] Discord server (free) — https://discord.com
- [ ] Vercel account (free hosting) — https://vercel.com
- [ ] GitHub account (free repo) — https://github.com
- [ ] Google account (for Forms, Calendar, Workspace)
- [ ] (Optional) Figma — https://figma.com

---

## Discovery Phase (Week 1)

### Deliverables
- [ ] 3–5 stakeholder interviews (documented script + insights)
- [ ] 3–5 detailed personas with pain points and motivations
- [ ] Customer journey map (minimum 5 stages)
- [ ] Competitive analysis (2–3 similar sites/services)
- [ ] Research summary document

### Questions to Answer
1. **Who is the user?** (Be specific; create personas)
2. **What problem are we solving?** (Explicit from user research)
3. **How will users discover us?** (Marketing, word-of-mouth, partnerships)
4. **What's the primary action** we want users to take?
5. **How will we measure success?** (Metrics, KPIs)

### Tools
- **Google Meet / Zoom** — for interviews
- **Miro / Mural** — for collaborative journey mapping
- **Figma** — for persona templates
- **Google Docs** — for research summary

---

## Strategy Phase (Week 2)

### Deliverables
- [ ] Tool evaluation matrix (CMS, automation, CRM, community)
  - Feature checklist for each tool
  - Pricing analysis
  - Learning curve assessment
  - Final recommendation with rationale
- [ ] Information architecture / sitemap (visual diagram)
- [ ] Brand guide
  - Logo concept (sketch or AI-generated)
  - Color palette (5–7 colors with hex codes)
  - Typography (2–3 fonts with weights and use cases)
  - Tone of voice (3–5 key principles with examples)
  - Visual guidelines (buttons, cards, spacing)
- [ ] Wireframes (5–8 key pages/flows)
  - Low or mid-fidelity acceptable
  - Annotate key interactions and automations
  - Mobile + desktop versions

### Tool Comparison Template
```
| Feature           | Tool A | Tool B | Tool C |
|-------------------|--------|--------|--------|
| Cost (free tier)  | ✅     | ✅     | ❌     |
| Setup time        | 30min  | 1hour  | 3hour  |
| Learning curve    | Low    | Low    | High   |
| Integration score | 8/10   | 7/10   | 9/10   |
| Recommendation    | ✅     |        |        |
```

### Tools
- **Figma** — wireframes, brand guide
- **Google Sheets** — tool evaluation matrix
- **Notion** — organization hub
- **AI (ChatGPT/Cursor)** — generate brand voice options, persona drafts

---

## Design Phase (Week 2–3)

### Deliverables
- [ ] Professional wireframes (5–8 pages minimum)
  - Homepage / landing
  - Key user flows (submit, register, browse, etc.)
  - Admin/curator dashboard
  - Mobile responsive layouts
- [ ] Brand guide (visual + written)
  - Logo usage guidelines
  - Color palette with accessibility notes
  - Typography scale
  - Component library sketches (buttons, forms, cards)
  - Tone examples
- [ ] Design system / tokens file
  - Colors (hex, RGB)
  - Typography (font families, sizes, weights)
  - Spacing scale (8px increments recommended)
  - Shadows, border-radius, etc.

### Design Principles
- **Accessibility first** — WCAG 2.1 AA standard
- **Mobile-first** — design for small screens first
- **Clarity over beauty** — prioritize user understanding
- **Inclusive language** — jargon-free, plain language

### Tools
- **Figma** — design and prototype
- **Whimsical / Lucidchart** — sitemaps and flows
- **Color contrast checker** — WebAIM or Figma plugin
- **Accessibility auditor** — axe DevTools

---

## Implementation Phase (Weeks 3–5)

### Week 3: Backend Setup
- [ ] Sanity project created
- [ ] Schemas designed and deployed (copy from `/templates/sanity-schemas.ts`)
- [ ] Test collections created with sample data
- [ ] Sanity Studio accessible at your-project.sanity.studio

### Week 4: Automation & Forms
- [ ] Google Forms created for:
  - Submissions (MyWebClass)
  - Onboarding (Job Club)
  - Event registration (Town Hall)
- [ ] Zapier workflows built and tested:
  - Form submission → Sanity document creation
  - Zapier → Discord notification
  - Zapier → HubSpot contact creation
  - (Optional) Post-event automation
- [ ] Email templates drafted:
  - Confirmation emails
  - Approval/rejection emails
  - Follow-up emails

### Week 5: Frontend
- [ ] Next.js project initialized
- [ ] GitHub Pages / Vercel connected
- [ ] Key pages built and styled:
  - Homepage (hero, value prop, CTA)
  - Listing pages (gallery, events, blog)
  - Detail pages (style profile, event detail, post)
  - Form pages
- [ ] Sanity client configured (`lib/sanity.ts`)
- [ ] GROQ queries written and tested
- [ ] Responsive design verified (mobile, tablet, desktop)
- [ ] Accessibility audit (keyboard nav, color contrast, screen reader)

### Frontend Folder Structure
```
nextjs-app/
├── pages/
│   ├── index.tsx (homepage)
│   ├── [dynamic-route]/[slug].tsx
│   └── api/
│       └── form-handler.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   └── Form.tsx
├── lib/
│   ├── sanity.ts (client setup)
│   └── queries.ts (GROQ queries)
├── styles/
│   ├── globals.css
│   └── theme.ts
├── public/
│   └── images/
├── .env.local (DO NOT COMMIT)
├── next.config.js
└── package.json
```

### Deployment Checklist
- [ ] Environment variables configured (`.env.local`)
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors or warnings
- [ ] Forms submitted successfully
- [ ] Zapier workflows triggered
- [ ] Emails sent and received
- [ ] Discord messages posted
- [ ] HubSpot contacts created
- [ ] Deployed to Vercel/Netlify

---

## AI Integration (Throughout)

### Discovery & Strategy
- [ ] AI used for persona drafting (then refined manually)
- [ ] AI used for journey map ideation
- [ ] AI used for brand voice options (then selected and refined)
- [ ] Interview scripts generated by AI (then customized)

### Implementation
- [ ] AI-generated style descriptions (then fact-checked)
- [ ] AI-generated form validation messages
- [ ] AI-generated email templates (then customized)
- [ ] AI-generated CSS boilerplate (then refined)

### Prompting Best Practices
- **Be specific:** "Generate a plain-language description for Newark residents (tech literacy: beginner) about an AI town hall"
- **Provide context:** Include org mission, tone of voice, target audience
- **Request format:** Specify output format (markdown, HTML, JSON, etc.)
- **Validate output:** Always review AI output; don't use as-is
- **Document process:** Show your prompt + output in project documentation

### AI Prompt Template
```
[CONTEXT]
I'm working on [PROJECT] and need [DELIVERABLE].
Target audience: [WHO]
Context: [SITUATION]
Tone: [VOICE]

[INSTRUCTIONS]
Please generate [WHAT] that:
- [REQUIREMENT 1]
- [REQUIREMENT 2]
- [REQUIREMENT 3]

Format: [DESIRED OUTPUT FORMAT]
Length: [WORD/LINE COUNT]

[OPTIONAL: EXAMPLE INPUT OR REFERENCE]
```

---

## Content Creation

### MyWebClass.org
- [ ] 3–4 design style profiles created
  - History + characteristics
  - Do's and Don'ts
- [ ] 3+ gallery entries (demo links, screenshots)
- [ ] 2–3 learning articles (plain language, linked to styles)

### Job Club
- [ ] Landing page copy
- [ ] Onboarding email sequence (5–7 emails)
- [ ] Resource templates:
  - LinkedIn profile guide
  - GitHub README starter
  - Personal site recommendations
  - Cold outreach email template
- [ ] 5+ upcoming "fake but plausible" events seeded

### Town Hall
- [ ] Landing page copy (accessible, welcoming)
- [ ] Event descriptions (plain language, "What You'll Learn" bullets)
- [ ] 3+ blog posts (beginner-friendly, ~500 words each)
- [ ] Glossary (10+ AI terms, simple explanations)
- [ ] Post-event email template
- [ ] Newsletter signup copy

---

## Testing & QA (Week 5)

### Functional Testing
- [ ] Form submissions create Sanity documents ✓
- [ ] Zapier workflows trigger without errors ✓
- [ ] Discord bot posts messages ✓
- [ ] HubSpot receives contact data ✓
- [ ] Email sends and arrives ✓
- [ ] Links all work (no 404s) ✓

### User Experience Testing
- [ ] Landing page clearly explains what this is ✓
- [ ] CTAs are obvious (buttons, links) ✓
- [ ] Forms are easy to complete ✓
- [ ] Results page shows confirmation ✓
- [ ] Mobile view is readable and functional ✓

### Accessibility Testing
- [ ] WCAG 2.1 AA color contrast throughout ✓
- [ ] Keyboard navigation works (Tab, Enter) ✓
- [ ] Form labels clearly associated ✓
- [ ] Images have alt text ✓
- [ ] Screen reader-friendly ✓

### Performance
- [ ] Page loads in < 3 seconds ✓
- [ ] No console errors ✓
- [ ] Images optimized (< 200KB each) ✓
- [ ] CSS/JS minified ✓

### Tools
- **WebAIM Contrast Checker** — color contrast
- **axe DevTools** — accessibility audit
- **Lighthouse** — Vercel dashboard
- **Zapier Logs** — workflow debugging
- **Browser DevTools** — responsive design, console errors

---

## Documentation

### Code Documentation
- [ ] README.md with setup instructions
- [ ] Comments in complex functions
- [ ] Environment variable documentation
- [ ] Deployment guide

### Project Documentation
- [ ] Research findings summary
- [ ] Tool comparison matrix
- [ ] Brand guide (shared + org-specific)
- [ ] User personas (with photos/visuals)
- [ ] Customer journey maps
- [ ] Wireframes (linked to Figma)
- [ ] Sitemap / IA diagram
- [ ] AI prompts used + outputs
- [ ] Zapier workflow diagrams (screenshot)

### Delivery Structure
```
/project/
├── docs/ (all project docs)
│   ├── RESEARCH.md (findings, personas, journeys)
│   ├── BRAND.md (colors, typography, tone)
│   ├── TOOL-EVALUATION.md
│   └── ARCHITECTURE-DIAGRAM.md
├── org-name/
│   ├── wireframes.pdf (or Figma link)
│   ├── implementation-guide.md
│   └── cms-schema.json
├── code/ (all source code)
│   ├── frontend/
│   ├── sanity-schemas/
│   ├── zapier-flows/
│   └── README.md
└── deployment/
    ├── deployment-checklist.md
    ├── env-vars.example
    └── troubleshooting.md
```

---

## Presentation & Demo (Week 6)

### What to Show
1. **Problem & Solution** (60 seconds)
   - What did you discover in research?
   - What are you solving for?

2. **User Journey** (90 seconds)
   - Walk through customer journey map
   - Show key touchpoints

3. **Design** (90 seconds)
   - Brand guide overview
   - Key wireframes / design decisions

4. **Live Demo** (3–5 minutes)
   - Form submission
   - Zapier trigger
   - Discord notification
   - Database entry
   - Live website (show gallery, events, blog, etc.)

5. **AI Integration** (60 seconds)
   - Show prompts and outputs
   - Explain validation process

6. **Metrics & Success** (60 seconds)
   - How will you measure success?
   - Early metrics (if launched)

### Presentation Slides Outline
1. Title slide (org name, team names)
2. Problem & research insights
3. Personas (pick 1–2 to highlight)
4. Customer journey map
5. Competitive landscape
6. Tool choices (brief)
7. Brand guide (colors, typography, tone)
8. Key wireframes (3–4 slides)
9. Tech architecture (diagram)
10. Live demo walkthrough
11. AI usage examples
12. Success metrics & next steps

### Demo Contingency
- **If live demo fails:** Pre-record video walkthrough; show video
- **Have backup:** Screenshots of each step
- **Test everything beforehand:** Especially form → automation

---

## Common Pitfalls & How to Avoid

| Pitfall | How to Avoid |
|---------|-------------|
| **No user research** | Do interviews, even simulated; don't assume |
| **Tool analysis paralysis** | Make quick decision (flip a coin if needed); iterate later |
| **Over-designing** | Build MVP first; design can iterate |
| **Forgetting mobile** | Test on actual phone; not just browser resize |
| **No accessibility** | Run Lighthouse + axe at start; fix early |
| **Forgetting to test Zapier** | Test form → email → Sanity flow before launch |
| **Deploying without backup** | Keep Vercel/Netlify history; rollback if needed |
| **AI as final answer** | Always validate AI output; don't trust blindly |
| **Scope creep** | Define MVP clearly; save "nice to haves" for later |
| **No documentation** | Document as you go; it's easier than end |

---

## Resources & Links

### Documentation
- **Sanity:** https://www.sanity.io/docs
- **Next.js:** https://nextjs.org/docs
- **Zapier:** https://zapier.com/help
- **HubSpot:** https://knowledge.hubspot.com
- **Discord.js:** https://discord.js.org/docs

### Learning
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Accessibility Audit Tool:** https://www.deque.com/axe/devtools/
- **Color Contrast:** https://webaim.org/resources/contrastchecker/
- **Web Design Patterns:** https://mobbin.com (free tier)

### Community
- **Sanity Community Slack:** https://slack.sanity.io/
- **Zapier Community:** https://community.zapier.com/
- **Web Standards:** https://www.webstandards.org/

---

## Timeline Summary

| Week | Phase | Key Deliverables |
|------|-------|------------------|
| 1 | Discovery | Interviews, personas, journey maps |
| 2 | Strategy | Tool evaluation, wireframes, brand guide |
| 3 | Sanity Setup | Schemas deployed, test data |
| 4 | Automation | Zapier workflows, forms, emails |
| 5 | Frontend | Next.js pages, integration, styling |
| 6 | Testing & Polish | QA, accessibility, presentation prep |

---

## Scoring Rubric (Self-Assessment)

**Discovery & UX (25%)**
- [ ] 3+ stakeholder interviews (10 pts)
- [ ] 3+ detailed personas (5 pts)
- [ ] Clear customer journey (5 pts)
- [ ] Research findings documented (5 pts)

**Strategy & Design (25%)**
- [ ] Tool evaluation with 2+ options (5 pts)
- [ ] Professional brand guide (5 pts)
- [ ] 5+ quality wireframes (10 pts)
- [ ] Information architecture (5 pts)

**Implementation (30%)**
- [ ] Sanity schemas deployed (5 pts)
- [ ] Working form → CMS → Discord flow (10 pts)
- [ ] Frontend deployed and styled (10 pts)
- [ ] 3+ content items (events, blog, styles, etc.) (5 pts)

**AI Integration (10%)**
- [ ] AI used thoughtfully (not just code) (5 pts)
- [ ] Process & validation documented (5 pts)

**Presentation (10%)**
- [ ] Clear storytelling (5 pts)
- [ ] Live demo works (5 pts)

**Total: 100 points**

---

## Next Steps After Launch

1. **Gather User Feedback** (survey or interviews)
2. **Monitor Metrics** (traffic, signups, engagement)
3. **Iterate Based on Data** (prioritize high-impact improvements)
4. **Plan Content Calendar** (3–6 months ahead)
5. **Build Partnerships** (schools, nonprofits, community centers)
6. **Recruit Contributors** (volunteers, content creators)
7. **Scale Infrastructure** (move to paid tier if needed)

---

**Good luck! You've got this. 🚀**
