# Ecosystem & Shared Stack Documentation

## Technology Stack Overview

This section documents the recommended tools and their integration across all three organizations.

---

## 1. Content Management System (CMS)

### Evaluation Matrix

| Feature | Sanity | WordPress | Strapi | Notion-as-CMS |
|---------|--------|-----------|--------|---------------|
| **Headless API** | Excellent | Good (with plugins) | Excellent | Good |
| **Learning Curve** | Medium (schema-based) | Low | Medium | Very Low |
| **Schema/Structure** | Strongly typed | Flexible/plugin-based | Fully customizable | Flexible |
| **Free Tier** | Yes (limited) | Yes | Yes (self-hosted) | Yes |
| **Community / Docs** | Growing | Excellent | Growing | Excellent |
| **Real-time Collab** | Yes | Limited | No | Yes |
| **Multitenancy** | Great | Limited | Moderate | Not ideal |
| **API Performance** | Excellent | Good | Good | Moderate |

### Recommendation: **Sanity**

**Why Sanity for this project:**
- **Strongly-typed schema** mirrors data modeling you'd teach in IS 375
- **Portable JSON format** students learn real data structures
- **Great API** for headless front-end (Next.js/Astro)
- **GROQ query language** is a useful learning tool
- **Free tier** supports classroom projects
- **Real-time collaboration** in studio (good for team workflow)
- **Seamless Zapier integration** for automations
- **Can use Sanity CLI** to manage datasets programmatically

**Alternative:** WordPress if teams prefer a traditional CMS with built-in admin UX and hosting.

---

## 2. Automation & Workflow Orchestration

### Evaluation Matrix

| Feature | Zapier | Make (Integromat) | n8n |
|---------|--------|-------------------|-----|
| **Visual Builder** | Excellent | Excellent | Good |
| **Ease of Use** | Very Easy | Very Easy | Medium |
| **Free Tier** | Yes (100/mo) | Yes (limited) | Yes (self-hosted) |
| **Pre-built Integrations** | 5000+ | 1000+ | 300+ |
| **Custom Code** | JavaScript | JavaScript | JavaScript/Node.js |
| **Pricing Scale** | Per task | Per operation | Free/self-hosted |
| **Webhook Support** | Excellent | Excellent | Excellent |
| **Learning Curve** | Very Low | Low | Medium |
| **Ideal For** | SMB, Education | SMB, Enterprise | Developers |

### Recommendation: **Zapier**

**Why Zapier for this project:**
- **Zero-code for 80% of flows** — teams can build workflows without programming
- **Excellent free tier** (100 tasks/month covers classroom demos)
- **Extensive pre-built actions** for Sanity, Discord, HubSpot, Calendly, Google Forms, email
- **Easy to teach** — visual; no custom code required
- **Great documentation** and community support
- **Reliable** for production-like scenarios

**Common Zapier Flows for This Project:**

1. **MyWebClass: Form → CMS**
   - Trigger: Form submission (Google Forms / Typeform)
   - Action: Create Sanity document in "submitted" state
   - Action: Post to Discord #mywebclass-submissions
   - Action: Add to HubSpot as "Design Contributor"

2. **Job Club: Onboarding → Automations**
   - Trigger: Form submission
   - Action: Create Sanity "Member" document
   - Action: Email personalized checklist
   - Action: Generate Discord invite link & post in #jobclub-intros
   - Action: Add/update HubSpot contact

3. **Job Club: Calendly → Follow-up**
   - Trigger: Event booked in Calendly
   - Action: Update HubSpot contact status
   - Action: Post to Discord #jobclub-intros with attendee details
   - Action: Schedule follow-up email (Zapier delay + Gmail)

4. **Town Hall: Event Registration → Workflow**
   - Trigger: Form submission
   - Action: Add to HubSpot mailing list
   - Action: Send confirmation email
   - Action: Post volunteer opportunities to Discord #volunteers
   - (Optionally: Generate Zoom link & send invite)

5. **Town Hall: New Content → Announcement**
   - Trigger: Sanity document published (webhook)
   - Action: Post to Discord #announcements
   - Action: Email subscribers (MailChimp/Brevo)

---

## 3. CRM & Contact Management

### Evaluation Matrix

| Feature | HubSpot | Airtable | Mailchimp |
|---------|---------|----------|-----------|
| **Free Tier** | Excellent | Excellent | Good |
| **Contacts/Records** | Unlimited | 1,200 free | Unlimited emails up to 500 contacts |
| **Custom Fields** | Good | Excellent | Limited |
| **Automation** | Good | Good | Excellent |
| **Email** | Good | Limited | Excellent |
| **Reporting** | Excellent | Good | Good |
| **Learning Curve** | Medium | Low | Low |
| **API** | Excellent | Excellent | Good |
| **Use Case** | Full CRM | Database + workflows | Email marketing |

### Recommendation: **HubSpot** (primary) + **Airtable** (optional secondary)

**Why HubSpot:**
- **Free CRM** tier handles all project contact needs
- **Contacts, deals, tasks** align with real sales/operations workflows
- **Excellent Zapier integration** — easily update contacts from forms
- **Email tracking** for follow-ups
- **Deal pipelines** can model "membership status" or "event registration"
- **Great for teaching** — industry-standard CRM concepts

**Why Airtable** (optional complement):
- **More flexible data model** if you need custom fields beyond HubSpot
- **Visual database** easier for non-technical team members
- **Can feed into Zapier** just like HubSpot
- **Good for prototyping** before committing to schema

**HubSpot Contact Properties for This Project:**

```
=== Shared Across All Orgs ===
- Email
- First Name
- Last Name
- Role (student / instructor / mentor / volunteer)
- Organization (mywebclass / jobclub / townhall)
- Tags (e.g., "design-contributor", "onboarded", "event-registered")
- Source (web form / Discord / referral)
- Last Activity Date
- Lifecycle Stage (lead / subscriber / customer / evangelist)

=== MyWebClass-Specific ===
- Design Styles of Interest (multi-select: Swiss, Bauhaus, Flat, etc.)
- Submission Date
- Submission Status (submitted / under review / approved / rejected)

=== Job Club-Specific ===
- Career Goal
- LinkedIn URL
- GitHub URL
- Personal Site URL
- Onboarding Checklist Complete (yes/no)
- Calendly Booking Scheduled (yes/no)
- Mentorship Status (assigned mentor: user ID or name)

=== Town Hall-Specific ===
- Neighborhood
- Tech Literacy Level (1–5)
- Events Attended (multi-select)
- Volunteer Status (interested / active / inactive)
```

---

## 4. Community Platform

### Evaluation Matrix

| Feature | Discord | Slack | Mighty Networks | Circle |
|---------|---------|-------|-----------------|--------|
| **Free Tier** | Unlimited | Limited (90 day history) | Free (limited) | Paid |
| **Ease of Setup** | Very Easy | Easy | Medium | Medium |
| **Bots & Automation** | Excellent | Excellent | Good | Good |
| **Mobile App** | Excellent | Excellent | Excellent | Excellent |
| **Community Feel** | Excellent | Professional | Social | Social |
| **Cost to Scale** | Free | Paid | Free/Paid | Paid |
| **Accessibility** | Good | Excellent | Good | Good |

### Recommendation: **Discord**

**Why Discord:**
- **Completely free** for unlimited members and full history
- **Excellent bot ecosystem** — bots for Zapier, GitHub, Sanity webhooks, RSS feeds, scheduling
- **Perfect for education** — young adults already familiar with it
- **Threads** organize conversations well
- **Roles & permissions** map to org-specific access (curator, mentor, volunteer, etc.)
- **Webhooks** allow Zapier to post updates directly

**Discord Channel Structure (Shared Server):**

```
MYWEBCLASS
├── #announcements
├── #general
├── #submissions-review (private: curators only)
├── #gallery-showcase
├── #design-styles-info
└── #feedback

JOBCLUB
├── #announcements
├── #general
├── #introductions
├── #events
├── #career-resources
├── #wins (celebrate job offers, projects)
├── #mentors (private: mentors only)
└── #feedback

TOWNHALL
├── #announcements
├── #general
├── #events
├── #ai-questions
├── #volunteers (private: volunteer signup area)
├── #organizers (private: core team)
└── #feedback

SHARED
├── #off-topic
├── #tech-help
└── #meta (process, announcements)
```

**Discord Bots to Use:**
- **Zapier** — POST messages when workflows complete
- **Scheduled messages** — Recurring standups, reminders
- **Welcomer bot** — Auto-assign roles on join (if using auto-invite)
- **GitHub bot** — Post repo updates (optional for technical teams)

---

## 5. Frontend & Hosting

### Frontend Recommendations

**Option A: Next.js** (Recommended)
- React-based, full-stack capable
- Built-in API routes (can add custom middleware)
- Great Sanity integration (via `@sanity/next-sanity` and `next-sanity`)
- SSG / ISR for performance
- Vercel deployment (seamless)
- Best for: Teams comfortable with React

**Option B: Astro**
- Content-focused, fast by default
- Great Sanity support
- Static HTML option or hybrid SSR
- Less learning curve than Next.js
- Netlify or Vercel deployment
- Best for: Content-heavy sites, simpler teams

### Hosting

- **Vercel** (recommended for Next.js / Astro)
  - Free tier covers classroom projects
  - Deploy from GitHub, instant previews
  - Environment variables for CMS API keys
- **Netlify**
  - Also free, similar features
  - Great if using Astro
- **GitHub Pages** (if static-only)

### Example Next.js Project Structure

```
mywebclass-next/
├── pages/
│   ├── index.tsx (homepage)
│   ├── gallery.tsx (gallery listing)
│   ├── styles/[slug].tsx (style detail page)
│   ├── submit.tsx (submission form)
│   └── api/
│       ├── submit-form.ts (form handler → Sanity)
│       └── preview.ts (preview mode for drafts)
├── components/
│   ├── GalleryCard.tsx
│   ├── StyleFilter.tsx
│   └── ...
├── lib/
│   ├── sanity.ts (Sanity client setup)
│   └── queries.ts (GROQ queries)
├── styles/
│   └── globals.css
├── public/
│   └── images/
└── package.json
```

---

## 6. Cross-Organization Workflows

### Shared Patterns

#### Pattern 1: Form → CMS → Discord → Email
Used by: MyWebClass submissions, Job Club onboarding, Town Hall registration

```
1. User fills form (Google Forms / Typeform / custom form)
2. Zapier trigger fires
3. Zapier creates Sanity document (with status = "pending")
4. Zapier posts to Discord for curator/organizer awareness
5. Zapier sends confirmation email to user
6. (Optional) Zapier adds to HubSpot
7. When curator approves in Sanity, webhook fires
8. Zapier sends approval email & posts to Discord #announcements
```

#### Pattern 2: Calendar Event → Multi-Channel Update
Used by: Job Club Calendly bookings, Town Hall event registrations

```
1. User books event (Calendly / Google Calendar)
2. Zapier creates HubSpot deal/contact update
3. Zapier posts to Discord with event details
4. Zapier sends email with calendar invite to attendees
5. Post-event: Zapier sends follow-up email with recording/summary
```

#### Pattern 3: CMS Content Publishing → Social Broadcast
Used by: Town Hall blog posts, MyWebClass learning articles

```
1. Editor publishes content in Sanity
2. Sanity webhook fires
3. Zapier posts to Discord #announcements
4. Zapier posts to email subscribers (via Brevo/MailChimp)
5. Zapier optionally creates HubSpot activity
```

---

## 7. Data Architecture & Cross-Org Relationships

### Sanity Schemas Shared Across Orgs

```typescript
// Shared base schema
export const Author = {
  name: 'author',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'email', type: 'email' },
    { name: 'role', type: 'string', options: { list: ['student', 'instructor', 'mentor', 'volunteer'] } },
    { name: 'org', type: 'string', options: { list: ['mywebclass', 'jobclub', 'townhall'] } },
    { name: 'hubspotContactId', type: 'string' },
  ],
};

// MyWebClass specific
export const DesignStyle = {
  name: 'designStyle',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', source: 'name' },
    { name: 'description', type: 'text' },
    { name: 'history', type: 'array', of: [{ type: 'block' }] },
    { name: 'keyCharacteristics', type: 'array', of: [{ type: 'string' }] },
    { name: 'canonicalDemo', type: 'reference', to: [{ type: 'galleryEntry' }] },
  ],
};

export const GalleryEntry = {
  name: 'galleryEntry',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', source: 'title' },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'style', type: 'reference', to: [{ type: 'designStyle' }] },
    { name: 'description', type: 'text' },
    { name: 'demoUrl', type: 'url' },
    { name: 'gitRepoUrl', type: 'url' },
    { name: 'screenshot', type: 'image' },
    { name: 'status', type: 'string', options: { list: ['submitted', 'under review', 'approved', 'rejected'] } },
    { name: 'submittedAt', type: 'datetime' },
    { name: 'approvedAt', type: 'datetime' },
  ],
};

// Job Club specific
export const JobClubMember = {
  name: 'jobClubMember',
  type: 'document',
  fields: [
    { name: 'profile', type: 'reference', to: [{ type: 'author' }] },
    { name: 'major', type: 'string' },
    { name: 'gradYear', type: 'number' },
    { name: 'careerGoal', type: 'string', options: { list: ['consulting', 'startup', 'SWE', 'data', 'other'] } },
    { name: 'linkedinUrl', type: 'url' },
    { name: 'githubUrl', type: 'url' },
    { name: 'personalSiteUrl', type: 'url' },
    { name: 'onboardingComplete', type: 'boolean' },
    { name: 'mentorAssigned', type: 'reference', to: [{ type: 'author' }] },
    { name: 'joinedAt', type: 'datetime' },
  ],
};

export const JobClubEvent = {
  name: 'jobClubEvent',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', source: 'title' },
    { name: 'description', type: 'text' },
    { name: 'eventType', type: 'string', options: { list: ['standup', 'workshop', 'networking', 'mentorship'] } },
    { name: 'startTime', type: 'datetime' },
    { name: 'endTime', type: 'datetime' },
    { name: 'location', type: 'string' }, // "Online / Discord" or physical address
    { name: 'calendarUrl', type: 'url' }, // Google Calendar or Calendly link
    { name: 'recordingUrl', type: 'url' },
  ],
};

// Town Hall specific
export const TownHallEvent = {
  name: 'townHallEvent',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', source: 'title' },
    { name: 'description', type: 'text' },
    { name: 'learningOutcomes', type: 'array', of: [{ type: 'string' }] },
    { name: 'startTime', type: 'datetime' },
    { name: 'endTime', type: 'datetime' },
    { name: 'location', type: 'string' }, // "NJIT Campus - Room X" or "Zoom"
    { name: 'registrationUrl', type: 'url' },
    { name: 'recordingUrl', type: 'url' },
    { name: 'registeredCount', type: 'number' },
  ],
};

export const TownHallContent = {
  name: 'townHallContent',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', source: 'title' },
    { name: 'contentType', type: 'string', options: { list: ['blog-post', 'video-summary', 'guide'] } },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    { name: 'videoUrl', type: 'url' },
    { name: 'readingTime', type: 'number' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'status', type: 'string', options: { list: ['draft', 'ready', 'published'] } },
  ],
};
```

---

## 8. Security & Privacy Considerations

### API Keys & Environment Variables

```bash
# .env.local (NEVER commit this)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxxxx  # Read/write token for server-side operations
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

ZAPIER_WEBHOOK_SECRET=xxxxx  # Verify Zapier POST requests
DISCORD_BOT_TOKEN=xxxxx
HUBSPOT_API_KEY=xxxxx

# .env.*.local for different stages (development, preview, production)
```

### Data Privacy

1. **Personally Identifiable Information (PII)**
   - Store names, emails in HubSpot, not in public Sanity datasets
   - Use GDPR-compliant email sends (Zapier + Brevo handles consent)

2. **Role-Based Access (Sanity Studio)**
   - **Curators:** Can publish/reject submissions
   - **Organizers:** Can manage content, see registrations
   - **Members:** View-only on community content

3. **Email Consent**
   - Never email without opt-in
   - Provide unsubscribe option
   - Use Zapier's email integrations which handle compliance

---

## 9. Deployment Checklist

### Pre-Launch

- [ ] Sanity project created and schemas deployed
- [ ] GitHub repos initialized and shared with team members
- [ ] Vercel/Netlify project created, connected to GitHub
- [ ] HubSpot account setup, API key saved in environment
- [ ] Zapier workflows created and tested
- [ ] Discord server created with channels and roles
- [ ] Email templates drafted (confirmation, approval, follow-up)
- [ ] Seed data created (test submissions, events, content)
- [ ] Forms tested end-to-end (submit → Zapier → CMS → Discord)

### Launch

- [ ] Production environment variables configured
- [ ] Sanity token restricted to necessary scopes
- [ ] DNS/domain configured (if custom domain)
- [ ] 404 and error pages working
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Load testing on high-traffic scenarios
- [ ] Backup strategy for Sanity data (automatic)

### Post-Launch

- [ ] Monitor Zapier logs for errors
- [ ] Set up analytics (Google Analytics, Vercel insights)
- [ ] Weekly team check-in on submissions/registrations
- [ ] Plan content calendar for first month
- [ ] Gather user feedback

---

## 10. Helpful Resources

### Sanity
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity for Next.js](https://www.sanity.io/guides/nextjs-cms-guide)
- GROQ query cheat sheet

### Zapier
- [Zapier Sanity integration](https://zapier.com/apps/sanity/integrations)
- [Zapier Discord integration](https://zapier.com/apps/discord/integrations)
- [Zapier HubSpot integration](https://zapier.com/apps/hubspot/integrations)

### Frontend
- [Next.js Docs](https://nextjs.org/docs)
- [Astro Docs](https://docs.astro.build)
- [Vercel Deployment](https://vercel.com/docs)

### Community
- **Sanity Slack** — Great for questions
- **Zapier Community** — Workflow examples
- **Discord.js** — If building custom bots

---

## Next Steps for Teams

1. **Day 1:** Review this stack, decide on any alternatives
2. **Day 2:** Set up Sanity, HubSpot, Discord accounts
3. **Day 3:** Create Zapier workflows for primary use case
4. **Day 4+:** Build frontend, test end-to-end, iterate on UX

Good luck! 🚀
