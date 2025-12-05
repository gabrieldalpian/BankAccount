# IS 375 Project: Complete Course Structure & Deliverables Index

## 📋 Project Overview

This folder contains a complete course design for **IS 375: Building Three Real-World Organizations Using Integrated Technology Stacks**. Students work in teams of 2 to design and implement three organizations (MyWebClass.org, Job Club, Town Hall) that share infrastructure but serve distinct user bases.

**Course Theme:** "You're building three organizations that could actually run tomorrow. Your job is to design the workflows, choose the tools, and implement just enough of the stack that a real person could use it."

---

## 📁 Folder Structure & Navigation

```
/is375project/
├── README.md ← START HERE (overview & grading rubric)
│
├── /docs/
│   ├── QUICK-REFERENCE.md (checklist, timeline, testing guide)
│   ├── TOOL-COMPARISON.md (CMS, automation, CRM, community)
│   └── AI-INTEGRATION-GUIDE.md (prompts, validation, best practices)
│
├── /ecosystem/
│   └── STACK.md (shared infrastructure, Sanity schemas, Zapier flows)
│
├── /mywebclass/
│   └── MYWEBCLASS-BRIEF.md (complete brief: personas, wireframes, implementation)
│
├── /jobclub/
│   └── JOBCLUB-BRIEF.md (complete brief: personas, wireframes, automation)
│
├── /townhall/
│   └── TOWNHALL-BRIEF.md (complete brief: personas, wireframes, community)
│
└── /templates/
    ├── README.md (template guide)
    ├── sanity-schemas.ts (all CMS schemas)
    ├── /nextjs-starter/ (Next.js boilerplate)
    ├── /forms/ (Google Form templates, HTML forms)
    ├── /zapier-workflows/ (Zapier JSON exports + setup guides)
    ├── /discord-bot/ (simple bot template)
    ├── /ai-prompts/ (prompt library)
    ├── /email-templates/ (confirmation, approval, follow-up)
    └── /database-seed/ (test data, import scripts)
```

---

## 🎯 Quick Start

### For Instructors
1. **Read:** `/README.md` (overview & grading rubric)
2. **Review:** `/docs/QUICK-REFERENCE.md` (timeline, checklist)
3. **Understand:** `/ecosystem/STACK.md` (shared technology choices)
4. **Present:** `/mywebclass/MYWEBCLASS-BRIEF.md`, `/jobclub/JOBCLUB-BRIEF.md`, `/townhall/TOWNHALL-BRIEF.md` (org specifics)

### For Student Teams
1. **Start:** Read `/README.md` to understand assignment
2. **Plan:** Work through `/docs/QUICK-REFERENCE.md` (weeks 1–2 sections)
3. **Discover:** Conduct interviews, create personas, build journey maps
4. **Design:** Create wireframes and brand guide
5. **Build:** Use `/templates/` as starter code
6. **Deploy:** Follow deployment checklist
7. **Present:** Prepare demo and slides

---

## 📚 Document Descriptions

### `/README.md` (Root)
**Main course syllabus and assignment brief**
- Project overview ("three orgs, one stack")
- Team structure (2 people, UX + implementation roles)
- Common requirements (personas, journey maps, brand guides, tool evaluation)
- Grading rubric
- Timeline recommendation

### `/docs/QUICK-REFERENCE.md`
**Practical checklists and implementation guides**
- Pre-project checklist (accounts, tools setup)
- Week-by-week deliverables
- Testing & QA procedures
- Accessibility requirements
- Common pitfalls and solutions
- Rubric for self-assessment

### `/ecosystem/STACK.md`
**Shared technology infrastructure**
- CMS evaluation and recommendation (Sanity)
- Automation evaluation (Zapier)
- CRM evaluation (HubSpot)
- Community platform evaluation (Discord)
- Cross-org workflows and patterns
- Data architecture and schemas
- Deployment checklist

### `/mywebclass/MYWEBCLASS-BRIEF.md`
**Complete MyWebClass.org assignment**
- Stakeholder interview scripts and insights
- 3+ detailed personas (Maya, Mr. Chen, Alex)
- Customer journey map (discovery → exploration → usage → advocacy)
- Information architecture / sitemap
- Brand guide (color, typography, tone)
- Wireframes (described in ASCII, link to Figma)
- CMS schema (DesignStyle, GalleryEntry, Author, Article)
- Submission workflow and moderation
- Zapier flows (form → CMS → Discord)
- AI integration ideas (style descriptions, submission analysis)
- Success metrics and timeline

### `/jobclub/JOBCLUB-BRIEF.md`
**Complete Job Club assignment**
- Stakeholder interviews (student, mentor, employer perspectives)
- 3+ personas (Asha, Marcus, Priya)
- Customer journey (7 stages: awareness → sustained community)
- Information architecture / sitemap
- Brand guide (colors, typography, "builders" tone)
- Wireframes (landing, onboarding form, events, member directory)
- CMS schema (Member, Event, Achievement, Opportunity)
- Onboarding workflow (7-day checklist)
- Zapier flows (form → Discord → HubSpot → email)
- Event management and Calendly integration
- AI integration (personalized checklists, LinkedIn review, cold outreach drafts)
- Success metrics and timeline

### `/townhall/TOWNHALL-BRIEF.md`
**Complete Town Hall assignment**
- Stakeholder interviews (small business owner, organizer, resident)
- 3+ personas (Patricia, James, Marcus)
- Customer journey (awareness → attendance → engagement → advocacy)
- Information architecture / sitemap
- Brand guide (accessibility-focused, trustworthy tone)
- Wireframes (landing, event registration, blog post)
- CMS schema (Event, BlogPost, Attendee, Resource)
- Event workflow and registration
- Zapier flows (registration → confirmation → post-event follow-up)
- Content hub (plain-language blog, guides, glossary)
- AI integration (event summaries, accessible content, persona generation)
- Success metrics and timeline

### `/templates/README.md`
**Guide to all implementation templates**
- Quick start for each org
- File structure overview
- Deployment checklist
- Support & resources links

### `/templates/sanity-schemas.ts`
**Ready-to-use Sanity schema definitions**
- Shared schemas: Author, Person
- MyWebClass schemas: DesignStyle, GalleryEntry, LearningArticle
- Job Club schemas: Member, Event, Achievement
- Town Hall schemas: Event, BlogPost, Attendee, Resource
- All with field types, validation, preview configuration

### `/templates/nextjs-starter/`
**Next.js boilerplate project**
- Folder structure (pages, components, lib, styles)
- Sanity client setup example
- GROQ query templates
- Environment variable template
- Component examples (cards, forms, layouts)
- Styling setup (Tailwind or CSS Modules)

### `/templates/forms/`
**Form templates for each org**
- Google Forms setup guides
- HTML/CSS form templates
- Form validation rules
- Error messaging conventions

### `/templates/zapier-workflows/`
**Zapier automation templates**
- JSON exports (import directly to Zapier)
- Step-by-step setup guides
- Webhook payload examples
- Workflow diagrams

### `/templates/discord-bot/`
**Simple Discord bot template**
- Bot.js starter code
- Command structure example
- Environment setup
- Deployment options (Heroku, Replit)

### `/templates/ai-prompts/`
**AI prompt library**
- Organization-specific prompts
- Prompt best practices
- Example inputs and outputs
- Validation guidelines

### `/templates/email-templates/`
**Email templates for all workflows**
- Confirmation emails
- Approval/rejection emails
- Event follow-ups
- Weekly digests
- CSS for email rendering

---

## 🎓 Teaching Tips

### For Structuring Weeks 1–2 (Discovery & Strategy)
- **Day 1:** Introduce assignment, discuss the "one stack, three orgs" concept
- **Days 2–3:** Conduct stakeholder interviews (simulate if needed; record insights)
- **Day 4:** Workshop: "Creating Personas" — draw personas collaboratively on whiteboards
- **Day 5:** Create customer journey maps using Miro or Figma
- **Week 2:** Tool evaluation, brand brainstorming, wireframing

### For Structuring Weeks 3–5 (Implementation)
- **Day 1 (Week 3):** Sanity setup, schema review, first document created
- **Day 2–3:** Zapier workflows, form testing
- **Day 4–5:** Next.js pages built, first integration tested
- **Week 4–5:** Content creation, frontend polish, accessibility audit

### For Week 6 (Presentation)
- **Day 1–2:** Internal demos (teams show each other, get feedback)
- **Day 3–4:** Final polish, recording backup video
- **Day 5:** Live presentations (6–8 min per team)

### Red Flags to Watch For
- **Teams haven't done user research** → They'll build for themselves, not users
- **Overly ambitious scope** → Guide them to MVP
- **No accessibility consideration** → Emphasize WCAG 2.1 AA from day 1
- **Forgetting to test end-to-end** → Require form → automation test before week 5
- **AI used without validation** → Check that they're reviewing/refining output

### Common Questions from Students

**Q: "Can we just copy an existing template?"**
A: No — the value is in the *design process*. Discovery, personas, journey maps are non-negotiable.

**Q: "Do we have to use Sanity?"**
A: No, but it's recommended. You can substitute WordPress or Notion-as-CMS if preferred (document your choice).

**Q: "Can we build all three orgs?"**
A: Ideally, yes — that's the full project. But for a shorter course, teams can focus on 1–2.

**Q: "How detailed should the wireframes be?"**
A: Low–mid-fidelity is fine. The goal is to show flow and layout, not pixel-perfect design.

**Q: "What if our Zapier workflow fails?"**
A: Document the error, show what you tried, and have a manual workaround. Debugging is part of the learning.

---

## 🏆 Suggested Grading Breakdown

| Category | Points | Notes |
|----------|--------|-------|
| **Discovery & Research** | 20 | Interviews, personas, journey maps |
| **Strategy & Tool Choices** | 15 | Brand guide, tool evaluation, sitemap |
| **Design & Wireframes** | 15 | Quality, completeness, accessibility notes |
| **Implementation & Code** | 25 | Sanity schemas, forms, Zapier, frontend |
| **AI Integration** | 10 | Thoughtful use, documentation, validation |
| **Testing & QA** | 10 | Functional tests, accessibility, edge cases |
| **Presentation & Demo** | 5 | Clarity, live demo works |
| **Documentation** | Extra credit | +5 for comprehensive README & deployment guide |
| **TOTAL** | 100 | |

---

## 🔧 Setup for Instructors

### Before Course Starts
1. Review all briefs (`/mywebclass/`, `/jobclub/`, `/townhall/`)
2. Test templates (`/templates/sanity-schemas.ts`, `/templates/nextjs-starter/`)
3. Create example Sanity project (show students how to set up)
4. Prepare Zapier template exports (optional; students can build from scratch)
5. Create Discord server for course (shared for all three orgs)
6. Prepare slide deck covering:
   - Project overview
   - Team expectations
   - Discovery methodology
   - Tool introductions (Sanity, Zapier, HubSpot)
   - Demo of working example (optional)

### Week 1 Assignments
- [ ] Read assignment brief for chosen org
- [ ] Conduct 3–5 stakeholder interviews (script provided in briefs)
- [ ] Create 3–5 personas with pain points
- [ ] Draft customer journey map (5+ stages)

### Week 2 Assignments
- [ ] Compare 2+ tools for CMS, automation, CRM, community (matrix in STACK.md)
- [ ] Create brand guide (colors, typography, tone)
- [ ] Wireframe 5–8 key pages/flows
- [ ] Document information architecture / sitemap

### Week 3–5 Assignments
- [ ] Set up Sanity project, deploy schemas
- [ ] Build Google Forms for submissions/registration
- [ ] Create Zapier workflows and test end-to-end
- [ ] Build Next.js frontend, deploy to Vercel
- [ ] Create initial content (blog posts, events, style profiles)
- [ ] Run accessibility audit (WCAG 2.1 AA)

### Week 6 Assignment
- [ ] Prepare 8-minute presentation (problem, solution, demo)
- [ ] Record backup video (in case live demo fails)
- [ ] Submit final documentation package

---

## 🎯 Learning Outcomes

By completing this project, students will:

1. **Conduct professional UX research** — interviews, personas, journey maps
2. **Evaluate technology tools** — CMS, automation, CRM, community platforms
3. **Design user-centered systems** — wireframes, brand guides, information architecture
4. **Build full-stack applications** — CMS, forms, automation, frontend
5. **Implement enterprise workflows** — moderation, event registration, onboarding
6. **Use AI responsibly** — generation, validation, documentation
7. **Deploy production-ready code** — accessibility, testing, performance
8. **Manage team projects** — collaboration, version control, communication

---

## 📞 Support & Resources

### For Setup & Technical Help
- **Sanity:** https://www.sanity.io/docs, https://slack.sanity.io/
- **Next.js:** https://nextjs.org/docs, https://github.com/vercel/next.js/discussions
- **Zapier:** https://zapier.com/help, https://community.zapier.com/
- **Discord.js:** https://discord.js.org/docs

### For Design & UX
- **WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref/
- **Accessibility Checklist:** https://www.a11yproject.com/checklist/
- **Color Contrast:** https://webaim.org/resources/contrastchecker/

### For Teaching
- **This course design:** `/README.md`, `/docs/QUICK-REFERENCE.md`
- **Tool alternatives:** `/ecosystem/STACK.md` (tool evaluation matrix)
- **Assignment briefs:** `/mywebclass/`, `/jobclub/`, `/townhall/`

---

## 📝 License & Attribution

This course design is provided as-is for educational use. Feel free to adapt it for your needs. Attribution appreciated but not required.

---

## 🚀 Good Luck!

This is a comprehensive, real-world project that teaches students the full product development lifecycle: from discovery to deployment. The focus on teams, user research, tool evaluation, and AI integration prepares them for modern software development roles.

**Let's build something real.** 🎉
