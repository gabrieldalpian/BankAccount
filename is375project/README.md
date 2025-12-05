# IS 375 Project: One Stack, Three Organizations

## Overview

This project requires teams of 2 to design and implement three distinct organizations sharing a unified technology stack. The goal is to create platforms that could genuinely run tomorrow—combining professional UX/design practices with real automation, community engagement, and AI integration.

## The Three Organizations

### 1. **MyWebClass.org** – Design Styles as Living Websites
A living gallery of web pages, each demonstrating a design style (Swiss, Bauhaus, Flat, Brutalist, Neumorphism, etc.). Students and educators submit examples; instructors curate them. Educational content explains each style and best practices.

**Key Deliverables:**
- Personas: Design student, HS teacher, self-taught developer
- Customer journey: "HS teacher wants examples for a slide deck"
- Brand guide (meta-style for MyWebClass itself)
- Wireframes (low/mid-fidelity)
- CMS schema: Style, GalleryEntry, Author, Article
- Submission form → moderation workflow → auto-gallery population
- AI integration: Generate style explanations, analyze submissions

---

### 2. **Job Club** – AI Careers & Consulting Onboarding Machine
A membership club that onboards NJIT students into AI consulting/startup roles. Automates career stack setup (LinkedIn, GitHub, personal site, Calendly) and provides ongoing support through Discord, events, and mentorship.

**Key Deliverables:**
- Personas: Sophomore (zero experience), Senior (switching fields), Grad student
- Customer journey: "Student discovers club → onboards → lands first opportunity"
- Brand guide (optimistic, practical builders' tone)
- Wireframes
- Onboarding form with skill self-assessment
- Automated checklist & email guides
- Events page with integration to Calendly
- AI assistant for LinkedIn review, GitHub README, outreach drafts
- Discord bot with career planning templates

---

### 3. **Town Hall** – Newark AI Community Nonprofit
Free AI training, town halls, and educational content for Newark residents (mixed tech literacy). Builds community via Discord and provides accessible plain-language content.

**Key Deliverables:**
- Personas: Low-tech literacy, concerned parent/small business owner, local educator
- Customer journey: "Resident sees flyer → registers → attends → stays engaged"
- Brand guide (trust, accessibility, inclusion)
- Wireframes
- Event system: creation, listing, registration, confirmation
- Blog/vlog content model in CMS
- Post-event automation: follow-up emails with recordings/summaries
- AI integration: Transcript summarization, workshop outline generation, accessible copy

---

## Shared Technology Stack

### Content Management
- **Primary recommendation:** Sanity (strongly-typed schema, modular content, good API)
- **Alternative:** WordPress (traditional, community-rich) or Notion-as-CMS (lightweight)

### Automation & Workflows
- **Primary recommendation:** Zapier (visual workflows, many integrations, teaching-friendly)
- **Alternative:** Make (formerly Integromat) or n8n (open-source, self-hosted)

### CRM / Contact Management
- **Primary recommendation:** HubSpot (free tier covers most needs, excellent for education)
- **Alternative:** Airtable (flexible, visual) or Mailchimp (email-focused)

### Community Platform
- **Primary recommendation:** Discord (free, rich features, bots)
- **Alternative:** Slack (enterprise, paid tier for history)

### Frontend & Hosting
- **Recommended:** Next.js or Astro (both headless-CMS-friendly) deployed to Vercel/Netlify

---

## Common Requirements Across All Three Orgs

### Professional Discovery & UX Process
1. **Stakeholder Interviews** (simulated okay)
   - Script them out; document insights
   - At least 3–5 interviews per org, even if role-played

2. **Personas** (3–5 each, detailed)
   - Goals, pain points, tech literacy, motivations
   - Use AI to draft; refine with research

3. **Customer Journey Maps**
   - Key touchpoints: discovery, onboarding, engagement, retention
   - Identify pain points and opportunities for automation

4. **Information Architecture / Sitemap**
   - Page hierarchy, navigation structure
   - URL patterns and content relationships

5. **Low- / Mid-Fidelity Wireframes**
   - Landing page, key workflows, CMS content pages
   - Annotate key interactions and automations

6. **Brand Guide**
   - Logo concept (hand-drawn or AI-assisted)
   - Color palette (minimum 3–5 colors with reasoning)
   - Typography (primary, secondary fonts and sizes)
   - Tone of voice & key messaging
   - Visual examples (homepage hero, buttons, modals)

### Tool Evaluation
For each category, compare **at least 2 options**, document:
- Feature checklist
- Pricing & sustainability
- Learning curve for teams
- Integration with other tools
- Rationale for final choice

**Categories to evaluate:**
- CMS
- Automation platform
- CRM / contact management
- Community platform
- Optional: Analytics, email, forms

### AI Usage
Teams must use AI beyond just code generation:
- **Process:** Interview scripts, persona drafts, journey maps, brand voice exploration
- **Content:** Style descriptions, blog outlines, email templates
- **Validation:** Prompt AI to review submissions, generate style analyses
- **Boilerplate:** CSS snippets, form templates, data models
- **Document how AI is used and how you validate/refine its output**

---

## Team Structure

**Teams of 2:**
- One member leans toward **UX/strategy** (user research, wireframes, brand, workflows)
- One member leans toward **implementation** (CMS setup, form builders, automation, coding)
- **Both must touch everything** — collaboration is essential

---

## Deliverables Format

Each organization should have:
```
/[org-name]/
  ├── 01-discovery/
  │   ├── stakeholder-interviews.md
  │   ├── personas.md
  │   └── research-findings.md
  ├── 02-strategy/
  │   ├── customer-journeys.md
  │   ├── ia-sitemap.md
  │   └── tool-evaluation.md
  ├── 03-design/
  │   ├── brand-guide.md
  │   ├── wireframes.pdf (or Figma link)
  │   └── design-tokens.md
  ├── 04-implementation/
  │   ├── cms-schema.json
  │   ├── forms-config.md
  │   ├── automation-flows.md
  │   ├── code/ (if frontend code)
  │   └── README.md
  └── 05-ai-integration/
      ├── ai-prompts.md
      ├── example-outputs/
      └── usage-guidelines.md
```

---

## Grading Rubric (Suggested)

| Category | Excellent | Good | Developing |
|----------|-----------|------|-----------|
| **Discovery & UX** | Thorough research, validated personas, clear journey maps | Basic personas and flows, some research | Minimal user research, generic personas |
| **Strategy & Planning** | Clear workflows, well-reasoned tool choices, sitemap | Coherent workflows, acceptable tools | Unclear workflows, arbitrary tool selection |
| **Design** | Professional brand guide, polished wireframes, clear IA | Acceptable brand guide, decent wireframes | Minimal design documentation |
| **Implementation** | Functional CMS + form + automation, clean code | Partial implementation, works but rough | Incomplete or non-functional |
| **AI Integration** | Thoughtful use of AI for process & code, documented | Some AI use, limited documentation | Minimal or undocumented AI use |
| **Presentation** | Clear narrative, all docs organized and linked | Mostly clear, some organization issues | Disorganized, hard to follow |

---

## Getting Started

1. **Form teams** (2 people each)
2. **Assign roles:** Who's leading UX? Who's leading implementation?
3. **Choose your org** (or all three if a larger team)
4. **Begin with discovery:** Interviews, persona workshops, competitive analysis
5. **Use AI thoughtfully:** Generate drafts, then refine with human judgment
6. **Build tool evaluation matrix** (CMS, automation, CRM, community)
7. **Iterate on wireframes** and workflows with feedback
8. **Implement** CMS schemas, forms, and automations
9. **Document everything** in the structure above
10. **Present & demo** live workflows (even if "stub" data)

---

## Example Shared Infrastructure

Teams can optionally share a single **Discord server** with separate channels:
- `#general`
- `#mywebclass-submissions`
- `#mywebclass-gallery`
- `#jobclub-intros`
- `#jobclub-events`
- `#townhall-announcements`
- `#townhall-events`
- `#volunteers`

Similarly, a shared **Sanity project** with separate datasets or namespaced collections:
- `mywebclass.styles`, `mywebclass.galleries`, `mywebclass.articles`
- `jobclub.events`, `jobclub.members`
- `townhall.events`, `townhall.content`

This reinforces the "one stack, three orgs" theme.

---

## Constraints & Requirements

✅ **Must have:**
- [ ] 3–5 personas per org with realistic pain points
- [ ] Customer journey map for primary use case
- [ ] Brand guide with visual identity
- [ ] Low/mid-fidelity wireframes (at least 5 key pages/flows)
- [ ] CMS schema or data model documented
- [ ] At least one form + automation flow (Zapier/Make/n8n)
- [ ] All tool choices justified (comparison doc)
- [ ] AI used intentionally (documented with examples)
- [ ] Functional demo or prototype (even if minimal data)
- [ ] All deliverables organized per the structure above

✅ **Should have:**
- [ ] Real or role-played stakeholder interviews (3–5 per org)
- [ ] Competitive analysis or market research
- [ ] Sitemap or IA diagram
- [ ] Design tokens (colors, typography, spacing)
- [ ] Multiple automation flows per org
- [ ] AI examples with input prompts and outputs
- [ ] Code repository with clear README
- [ ] Figma or similar for collaborative design

✅ **Nice to have:**
- [ ] Discord bot with slash commands
- [ ] Event calendar (Google/Outlook integration)
- [ ] Email templates for common workflows
- [ ] Analytics or success metrics defined
- [ ] Accessibility audit (WCAG 2.1 AA checklist)
- [ ] Mobile wireframes or responsive design notes

---

## Next Steps

→ See individual org folders: `/mywebclass/`, `/jobclub/`, `/townhall/`  
→ See templates: `/templates/` for CMS schema examples, form templates, Zapier flow snippets  
→ See ecosystem docs: `/ecosystem/` for cross-org workflows and tool comparisons
