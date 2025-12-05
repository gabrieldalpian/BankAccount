# Job Club – AI Careers & Consulting Onboarding Machine

## Project Brief

**Concept:** A student-run club that onboards NJIT students into AI consulting, startup building, and tech careers. The club provides structure, community support, and a "career stack" (LinkedIn, GitHub, personal site, Calendly, Discord). New members complete an automated onboarding workflow; ongoing support comes through events, mentorship, and Discord community.

**Goals:**
- Systematize the pathway from "interested in AI" to "doing first consulting gig / launching project"
- Build peer-led community with mentorship structure
- Make career development feel concrete, not abstract
- Celebrate progress publicly (wins channel, monthly showcases)

---

## 1. Discovery & User Research

### Stakeholder Interviews Script (Simulated)

#### Interview 1: NJIT Student (Sophomore, Tech-Curious)
**Goal:** Understand beginner perspective, barriers to entry

**Questions:**
1. How did you get interested in AI?
2. What's holding you back from starting a consulting side gig or AI project?
3. What does your current "career stack" look like? (LinkedIn, GitHub, portfolio?)
4. If someone gave you a step-by-step onboarding, what would that include?
5. What role would mentorship play for you?

**Sample Insights:**
- Overwhelmed by where to start
- Doesn't know what to put on LinkedIn/GitHub
- Wants accountability partner or mentor
- Motivated by seeing others succeed

---

#### Interview 2: Job Club Mentor (Senior Student / Alumni)
**Goal:** Understand mentor motivation, support needs

**Questions:**
1. Why do you volunteer to mentor?
2. What do new members struggle with most?
3. How do you currently communicate with mentees?
4. What would make your mentoring more effective?
5. How do you measure success with a mentee?

**Sample Insights:**
- Mentors want structure/playbook, not just ad-hoc conversations
- Often unclear who needs help; hard to track progress
- Would love automation for routine tasks (onboarding emails, calendar invites)
- Success = mentee ships first project or lands gig

---

#### Interview 3: Startup / Consulting Partner (Potential Client)
**Goal:** Understand employer/partner needs

**Questions:**
1. What are you looking for in junior consultants or project collaborators?
2. How do you evaluate candidates?
3. What's the biggest red flag in a junior's portfolio?
4. Would you work with a "Job Club cohort" as a unit or prefer individuals?
5. What training/prep would make juniors more hire-able?

**Sample Insights:**
- Portfolio + GitHub speak louder than GPA
- Communication skills matter as much as technical depth
- Prefer people who can articulate what they've built and learned
- Open to structured partnerships with clubs/programs

---

### Personas

#### Persona 1: Asha – Sophomore, Zero AI Experience
- **Age:** 20, major: undecided, leans CS
- **Tech literacy:** Medium (completed intro CS; no projects yet)
- **Goal:** Figure out if AI is for me; do something practical before senior year
- **Pain points:**
  - No portfolio; doesn't know what to build
  - LinkedIn is bare ("just my name"); GitHub empty
  - Worried she's "behind" compared to peers
  - Doesn't know any working professionals in AI
- **Motivation:** Peer encouragement, seeing others do it, quick wins (ship something small)
- **Behavior:** Scrolls CS Twitter; prefers collaborative projects; wants clear roadmap

#### Persona 2: Marcus – Senior, Switching from Business to AI
- **Age:** 22, major: business → pivoting to AI/startup focus
- **Tech literacy:** Medium (knows Python basics from recent bootcamp)
- **Goal:** Land internship or start freelance consulting before graduation
- **Pain points:**
  - Imposter syndrome (feels behind native CS students)
  - LinkedIn profile is old/business-focused; doesn't know how to rebrand
  - Needs real-world advice, not just tutorials
  - Tight timeline (graduating in 6 months)
- **Motivation:** Concrete outcomes (job offer, client, shipped project); mentorship
- **Behavior:** DMs alumni for advice; prefers 1-on-1 coaching; action-oriented

#### Persona 3: Priya – Grad Student, Already Technical
- **Age:** 25, MS Computer Science, 2 years industry experience
- **Tech literacy:** High (Python, some ML, cloud platforms)
- **Goal:** Start consulting side business; build network in AI space
- **Pain points:**
  - Doesn't know how to price consulting services
  - Struggles with business/marketing, not technical stuff
  - Wants to connect with other builders at NJIT
  - Thinking about leaving industry to co-found startup
- **Motivation:** Revenue, network, intellectual stimulation, co-founder search
- **Behavior:** Active on LinkedIn; goes to tech meetups; reads startup blogs

---

## 2. Strategy & Planning

### Customer Journey Map: "Student Discovers Club → Onboards → Lands Opportunity"

```
STAGE 1: AWARENESS
├─ Touchpoint: Friend recommendation, club fair, LinkedIn post, email
├─ Task: Learn what Job Club is, whether it's for me
├─ Pain point: Unclear commitment level, time investment
├─ Opportunity: Clear value prop, testimonials, low-friction entry
└─ Action: Visits landing page, signs up for info session

STAGE 2: INTEREST & EVALUATION
├─ Touchpoint: Onboarding info session (Zoom or in-person)
├─ Task: Understand club structure, expectations, see if I belong
├─ Pain point: Worried about "not being ready"
├─ Opportunity: Explicit "all skill levels welcome"; peer story from similar person
└─ Action: Decides to join; fills out onboarding form

STAGE 3: ONBOARDING
├─ Touchpoint: Automated onboarding email sequence + form
├─ Task: Set up LinkedIn, GitHub, personal site; join Discord; schedule mentor call
├─ Pain point: Feels like a lot of setup; might not know where to start
├─ Opportunity: Step-by-step guides, templates, Discord bot with !help commands
└─ Action: Completes checklist items; attends first mentor call

STAGE 4: EARLY ENGAGEMENT
├─ Touchpoint: Weekly standup, Discord conversations, mentor meetings
├─ Task: Start small project, share progress, get feedback
├─ Pain point: Easy to disappear if no momentum; unclear what to work on
├─ Opportunity: Accountability from peers; suggested project ideas; public celebration
└─ Action: Posts first update in #wins channel; gets encouragement

STAGE 5: GROWTH & OPPORTUNITY
├─ Touchpoint: Monthly workshop (e.g., "Cold outreach for consulting"), mentorship
├─ Task: Build skills, network, identify first opportunity
├─ Pain point: Still nervous about reaching out to potential clients
├─ Opportunity: Mentor intros, workshop on pitching, group mock calls
└─ Action: Mentor introduces to first potential client

STAGE 6: ACHIEVEMENT
├─ Touchpoint: First freelance gig / project launch / internship offer
├─ Task: Celebrate and share learning
├─ Pain point: Want to memorialize the journey, help others replicate
├─ Opportunity: Monthly showcase, case study write-up, mentee for next cohort
└─ Action: Presents at Job Club event; becomes mentor or returns for spotlight session

STAGE 7: ADVOCACY
├─ Touchpoint: Recommends club to friends, shares publicly
├─ Task: Give back to community
├─ Pain point: Non-issue if success was meaningful
├─ Opportunity: Alumni network, continued access to resources, speaking opportunities
└─ Action: Stays engaged long-term; recruits others
```

---

### Information Architecture (Sitemap)

```
JobClub.ai (or jobclub.njit.edu)
├── / (Landing/Homepage)
│   ├── Hero: "Get Paid to Build AI"
│   ├── Problem-Agitate-Solve: "How to go from interested to consulting in 3 months"
│   ├── Member testimonials (video clips)
│   ├── Quick stats: "X members, Y landed gigs"
│   ├── CTA: "Join Our Next Cohort" / "Learn More"
│   └── FAQ: Process, commitment, who can join
│
├── /about
│   ├── Mission & values
│   ├── How it works (flow diagram)
│   ├── Leadership team + mentors
│   └── Track record / success stories
│
├── /events
│   ├── Upcoming events list
│   │   ├── Weekly standup (every Tuesday)
│   │   ├── Monthly workshop (pitch, LinkedIn, cold outreach)
│   │   ├── Mentor speed dating (new members meet mentors)
│   │   └── Quarterly showcase (members present projects/clients)
│   ├── Calendar view (add to Google/Outlook)
│   ├── Past event recordings & summaries
│   └── Register for event (Google Form → Zapier → Discord)
│
├── /onboard (Join Process)
│   ├── Eligibility check
│   ├── Onboarding form (name, major, grad year, career goal, LinkedIn/GitHub URLs)
│   ├── Confirmation: "Check your email for next steps"
│   └── Auto-email with checklist (GitHub, LinkedIn, personal site, Discord join)
│
├── /resources
│   ├── Guides & templates
│   │   ├── "LinkedIn Profile Template for AI Consultants"
│   │   ├── "GitHub README Best Practices"
│   │   ├── "Personal Site Generator (Notion / Webflow template)"
│   │   ├── "Pitch Deck Template"
│   │   ├── "Cold Outreach Email Template"
│   │   └── "AI Project Ideas (Beginner to Intermediate)"
│   ├── Reading list (blog posts, articles)
│   ├── Tool recommendations (Calendly, Zapier, Airtable)
│   └── Pricing guide (how to charge for consulting)
│
├── /directory (Members, Mentors)
│   ├── Search by skill (Python, web dev, ML, etc.)
│   ├── Filter by graduation year
│   ├── View profiles (name, bio, GitHub, LinkedIn, interests)
│   ├── Filter: "Looking for co-founder", "Open for mentorship"
│   └── Connect (click → Discord DM or email)
│
├── /wins
│   ├── Recent achievements feed (scrollable timeline)
│   ├── Categories: "Landed gig", "Shipped project", "Got internship", "Revenue milestone"
│   ├── "Submit Your Win" form
│   └── Celebration reaction (emoji reactions)
│
├── /careers (Job Board, optional)
│   ├── Opportunities posted by mentors/partners
│   ├── Freelance gigs, internships, partnerships
│   ├── "Apply" button (job seeker submits; Job Club admin notifies poster)
│   └── Success stories ("How I landed this gig")
│
└── /admin (Private: Organizer Dashboard)
    ├── Member management (onboarded, active, on-leave)
    ├── Event management (create, track attendance)
    ├── Mentor assignments
    ├── Analytics (retention, time to first gig, avg. rate)
    └── Zapier workflow logs (onboarding automations)
```

---

### CMS Schema (Sanity)

**Core Collections:**

1. **JobClubMember**
   - `name` (string)
   - `email` (email)
   - `role` (string: member / mentor / admin)
   - `major` (string)
   - `graduationYear` (number)
   - `careerGoal` (string: consulting / startup / SWE / data / other)
   - `linkedinUrl` (URL)
   - `githubUrl` (URL)
   - `personalSiteUrl` (URL)
   - `bio` (text)
   - `skills` (array of strings: Python, ML, Web Dev, etc.)
   - `lookingFor` (array of strings: co-founder, mentor, collaborator, client)
   - `onboardingComplete` (boolean)
   - `onboardingChecklist` (array of booleans: linkedin-setup, github-setup, personal-site, discord-join, mentor-call)
   - `mentorAssigned` (reference to JobClubMember)
   - `joinedAt` (datetime)
   - `firstGigDate` (datetime, optional)
   - `hubspotContactId` (string)
   - `discordUserId` (string)
   - `status` (string: active / on-leave / alumni)

2. **JobClubEvent**
   - `title` (string)
   - `slug` (slug)
   - `description` (rich text)
   - `eventType` (string: standup / workshop / networking / showcase)
   - `startTime` (datetime)
   - `endTime` (datetime)
   - `location` (string: "Discord" / "NJIT - Tiernan Hall, Room 102" / "Online - Zoom")
   - `isRecurring` (boolean)
   - `calendarUrl` (URL) — Google Calendar or Calendly link
   - `registrationUrl` (URL) — Google Form or custom form
   - `recordingUrl` (URL)
   - `maxAttendees` (number, optional)
   - `registeredCount` (number)
   - `attendeeList` (array of references to JobClubMember)
   - `speaker` (reference to JobClubMember or external)
   - `materials` (array of file references: slides, resources)
   - `summary` (text) — post-event recap
   - `status` (string: draft / published / past)

3. **Achievement** (for #wins channel)
   - `member` (reference to JobClubMember)
   - `achievementType` (string: gig-landed / project-shipped / internship / revenue / certification)
   - `title` (string) — e.g., "Landed first consulting client"
   - `description` (text) — story / reflection
   - `amount` (number, optional) — for revenue milestones
   - `links` (array of URLs) — project link, portfolio, etc.
   - `postedAt` (datetime)
   - `reactions` (object: emoji → count)

4. **Resource** (for /resources)
   - `title` (string)
   - `slug` (slug)
   - `resourceType` (string: guide / template / tool / reading)
   - `description` (text)
   - `content` (rich text / file)
   - `targetAudience` (string: beginner / intermediate / advanced)
   - `relatedSkills` (array of strings)
   - `externalLink` (URL)
   - `publishedAt` (datetime)
   - `author` (reference to JobClubMember)

5. **Opportunity** (Job Board)
   - `title` (string)
   - `slug` (slug)
   - `description` (rich text)
   - `opportunityType` (string: freelance-gig / internship / co-founder-search / partnership)
   - `skillsRequired` (array of strings)
   - `experienceLevel` (string: beginner-friendly / intermediate / advanced)
   - `compensation` (string or number range)
   - `timeCommitment` (string: part-time / full-time / one-off)
   - `contactEmail` (email)
   - `contactName` (string)
   - `postedAt` (datetime)
   - `deadline` (datetime)
   - `applications` (array of references to JobClubMember)
   - `status` (string: open / closed / filled)

---

## 3. Design & Branding

### Brand Guide: Job Club

#### Logo & Visual Identity
- **Concept:** Rocket + upward trend + collaborative hands
  - Simple, recognizable mark
  - Conveys growth, action, teamwork
- **Wordmark:** "Job Club" in bold modern sans-serif (e.g., "Poppins", "Space Grotesk")

#### Color Palette
- **Primary:** `#FF6B35` (vibrant orange) — energy, ambition, startup vibe
- **Secondary:** `#004E89` (deep blue) — trust, professionalism
- **Accent:** `#F7B801` (gold) — celebration, wins, achievement
- **Neutral:** `#1A1A1A` (near-black) — text, `#F5F5F5` (off-white) — backgrounds

#### Typography
- **Heading font:** "Space Grotesk" or "Inter" (modern, confident)
  - Weights: 600 (bold), 700 (extra bold)
- **Body font:** "Inter" (readable, professional)
  - Weight: 400 (regular), 600 (semibold)
- **Monospace:** "Fira Code" or "Monaco" (for code snippets, template examples)

#### Tone of Voice
- **Energetic & Motivational:** "You've got this. Here's the path."
- **Practical & No-BS:** Direct advice, actionable steps, cut through hype
- **Inclusive:** "All skill levels welcome. Mentorship is real."
- **Example copy:** "Go from learning to earning. Join a community that ships."

#### Visual Examples
- **Hero section:** Big, bold headline over gradient (orange to blue)
- **Achievement card:** Gold left border, celebration emoji, member photo
- **Event card:** Calendar icon, clear time/location, CTA to register
- **Member card:** Photo, name, skills badges, LinkedIn + GitHub icons
- **CTA buttons:** Orange background, white text, rounded corners, strong shadow on hover

---

### Wireframes (Described)

#### Homepage
```
┌────────────────────────────────────────┐
│                                        │
│     Get Paid to Build AI               │
│     Go from learning to earning        │
│     in 3 months                        │
│                                        │
│   [Join Next Cohort]  [See Events]     │
└────────────────────────────────────────┘

┌─ Problem-Solution ─────────────────────┐
│ Left: "You want to do AI consulting    │
│ but don't know where to start"         │
│                                        │
│ Right: "Job Club gets you               │
│ LinkedIn-ready, portfolio-ready,       │
│ and income-ready"                      │
└────────────────────────────────────────┘

┌─ Member Testimonials ──────────────────┐
│ [Video]  [Video]  [Video]              │
│ "This changed my career"               │
└────────────────────────────────────────┘

┌─ Stats ────────────────────────────────┐
│ X Members | X Jobs Landed | $XXX Total │
└────────────────────────────────────────┘

┌─ FAQ + Footer ────────────────────────┐
│ [...] [Contact] [LinkedIn] [Discord]  │
└────────────────────────────────────────┘
```

#### Onboarding Form
```
┌────────────────────────────────────────┐
│  Join Job Club                         │
│  Let's get you onboarded              │
├────────────────────────────────────────┤
│                                        │
│  Name *                                │
│  [________________________]             │
│                                        │
│  Email *                               │
│  [________________________]             │
│                                        │
│  Major *                               │
│  [______________________▼]             │
│                                        │
│  Expected Graduation *                 │
│  [______________________▼]             │
│                                        │
│  Career Goal *                         │
│  ◉ Consulting  ◯ Startup  ◯ SWE       │
│  ◯ Data  ◯ Other                      │
│                                        │
│  LinkedIn URL                          │
│  [_________________________]            │
│  (optional, we'll help you set up)     │
│                                        │
│  GitHub URL                            │
│  [_________________________]            │
│                                        │
│  [Cancel]  [Join Club]                 │
└────────────────────────────────────────┘
```

#### Events Listing
```
┌────────────────────────────────────────┐
│  Upcoming Events                       │
│                                        │
│  ┌─ Recurring: Weekly Standup ────────┐│
│  │ Every Tuesday, 5 PM ET             ││
│  │ Discord - #general                 ││
│  │ "Share what you shipped"           ││
│  │ [Add to Calendar] [Join Discord]   ││
│  └────────────────────────────────────┘│
│                                        │
│  ┌─ Workshop: Cold Outreach 101 ─────┐│
│  │ Thursday, Dec 12, 6 PM ET          ││
│  │ Zoom + Discord                     ││
│  │ Speaker: Sarah (alumni consultant) ││
│  │ [Register] [Add to Calendar]       ││
│  └────────────────────────────────────┘│
│                                        │
│  ┌─ Mentor Speed Dating ──────────────┐│
│  │ Saturday, Dec 14, 11 AM ET         ││
│  │ NJIT - Tiernan Hall, Room 102      ││
│  │ For new members to meet mentors    ││
│  │ [Register] [Add to Calendar]       ││
│  └────────────────────────────────────┘│
│                                        │
└────────────────────────────────────────┘
```

#### Onboarding Checklist (Email / Dashboard)
```
┌────────────────────────────────────────┐
│  Welcome to Job Club!                  │
│  Your 7-Day Onboarding Checklist       │
├────────────────────────────────────────┤
│                                        │
│  [ ] Join Discord                      │
│      Invite: [link expires in 7 days]  │
│                                        │
│  [ ] Set up LinkedIn                   │
│      Guide: [LinkedIn Profile Template]│
│                                        │
│  [ ] Create/update GitHub              │
│      Guide: [GitHub README Starter]    │
│                                        │
│  [ ] Build personal site               │
│      Template: [Notion, Webflow, etc]  │
│                                        │
│  [ ] Schedule mentor call               │
│      Calendly: [link]                  │
│                                        │
│  [ ] Introduce yourself in #intros     │
│      Template: "Hi, I'm [Name], grad   │
│      year [X], interested in [goal]"   │
│                                        │
│  Questions? DM @admin or email contact │
│                                        │
└────────────────────────────────────────┘
```

---

## 4. Implementation

### Onboarding Workflow

**Timeline: 7 days from form submission to active member**

1. **Day 0: Form submission**
   - Student fills onboarding form
   - Zapier creates Sanity document (Member record)
   - Zapier sends confirmation email: "Welcome! Check your email tomorrow for setup steps"

2. **Day 1: Automated email sequence**
   - Email 1: "Here's your onboarding checklist"
     - Discord invite link (expires in 7 days)
     - LinkedIn setup guide (PDF or embedded)
     - GitHub README template
     - Personal site template recommendation
     - Calendly link to schedule mentor call
   - Zapier adds contact to HubSpot
   - Zapier creates Discord invite link (one-time use, auto-expires)

3. **Day 1–2: Join Discord**
   - Member joins Discord using invite link
   - Bot auto-assigns "member" role
   - Member sees welcome message with channel guide
   - Optional: Bot DMs member with !onboarding command (shows checklist)

4. **Day 3–5: Self-directed setup**
   - Member completes LinkedIn, GitHub, personal site at own pace
   - Discord bot allows !progress command to track checklist status
   - Peer mentors available in Discord for questions

5. **Day 5–7: Mentor call**
   - Member schedules first mentor call via Calendly
   - Zapier posts to #jobclub-intros: "🎉 [Name] scheduled onboarding call with [Mentor]"
   - Zapier sends email to assigned mentor with member's info
   - After call, mentor fills form: "Impression, recommended projects, follow-up items"

6. **Day 7: Full member activation**
   - Member marked as "onboardingComplete: true"
   - Added to mailing list for events
   - Invited to first weekly standup
   - Discord bot auto-assigns "active" role

---

### Automated Zapier Flows

#### Flow 1: Form Submission → Multi-Channel Setup
```
Trigger: Google Form (Job Club Onboarding) submission
  ↓
Action 1: Create Sanity member document
  - Set: onboardingComplete = false, status = "active"
  - Map form fields: name, email, major, careerGoal, linkedinUrl, githubUrl
  ↓
Action 2: Generate Discord invite link
  - (Zapier can't create invites directly; alternative: use Discord webhook + bot)
  - OR: Generate shareable link via manual setup
  ↓
Action 3: Send confirmation email to member
  - Subject: "Welcome to Job Club!"
  - Include: Discord invite, onboarding checklist link
  ↓
Action 4: Post to Discord #jobclub-intros
  - Message: "👋 Please welcome [Name] to the club! [Major], interested in [Goal]. Connect with them here."
  ↓
Action 5: Create HubSpot contact
  - Fields: name, email, phone (if provided)
  - Custom field: "source" = "job-club-form"
  - Custom field: "career-goal" = [mapped from form]
  ↓
Action 6: Assign mentor (manual or rule-based)
  - Rule: If "beginner" → assign available beginner-friendly mentor
  - Store in HubSpot as "Assigned Mentor"
```

#### Flow 2: Calendly Event Booked → Notification & Prep
```
Trigger: Event booked in Calendly (Job Club Mentor Calls)
  ↓
Action 1: Update HubSpot member
  - Field: "Onboarding Call Scheduled" = true
  - Add activity: "Mentor call booked: [Date/Time]"
  ↓
Action 2: Send preparation email to member
  - Subject: "Your Job Club Mentor Call is Scheduled"
  - Include: Tips for prep, what to expect, mentor's bio/LinkedIn link
  ↓
Action 3: Send notification to assigned mentor
  - Subject: "Your mentee [Name] just booked a call"
  - Include: Member's profile snapshot (major, goal, current skills)
  ↓
Action 4: Post to Discord #jobclub-intros
  - Message: "🤝 [Member] is meeting with [Mentor] on [Date] – great way to kick off!"
```

#### Flow 3: Event Registration → Confirmation & Discord Role
```
Trigger: Google Form (Event Registration) submission
  ↓
Action 1: Find member in Sanity (by email)
  ↓
Action 2: Add member to event attendeeList in Sanity
  ↓
Action 3: Send confirmation email
  - Subject: "[Event Title] – See you there!"
  - Include: Zoom link (if applicable), calendar invite, pre-event resources
  ↓
Action 4: (Optional) Assign Discord role
  - Example: If event is "volunteer workshop" → add volunteer role
  - Use Zapier + Discord bot for this
  ↓
Action 5: Post to Discord announcement channel
  - Message: "[Member] just registered for [Event]"
```

#### Flow 4: Achievement Submitted → Celebration
```
Trigger: Member submits achievement (Google Form)
  ↓
Action 1: Create Sanity Achievement document
  - Map: title, description, member, achievement type, links
  ↓
Action 2: Post to Discord #wins
  - Message: "🎉 [Member] just [achievement]! [Description] [Link]"
  - Add reaction emoji
  ↓
Action 3: Send congratulations email to member
  - Subject: "Congrats on [Achievement]!"
  - Encourage sharing on LinkedIn; provide template
  ↓
Action 4: Update HubSpot member
  - Add activity: "Achievement logged: [Type]"
  - Field: "First Gig Date" = [today] (if gig-landed)
```

---

### Frontend Implementation (Next.js)

**Key pages:**

1. `pages/index.tsx` — Homepage with hero, testimonials, stats
2. `pages/about.tsx` — Mission, process, team
3. `pages/events.tsx` — Events listing and detail pages
4. `pages/onboard.tsx` — Onboarding form page
5. `pages/resources.tsx` — Guides, templates, readings
6. `pages/directory.tsx` — Member/mentor directory (searchable)
7. `pages/wins.tsx` — Achievement feed
8. `pages/careers.tsx` — Job board (optional)
9. `pages/member/[slug].tsx` — Individual member profile (public)

**Example Sanity query (GROQ):**
```groq
// Get active members
*[_type == "jobClubMember" && status == "active"] | order(joinedAt desc)

// Get upcoming events
*[_type == "jobClubEvent" && startTime > now() && status == "published"] 
  | order(startTime asc)

// Get recent achievements
*[_type == "achievement"] | order(postedAt desc) [0...10]
```

---

## 5. AI Integration

### AI Prompt Examples

#### Prompt 1: Generate Onboarding Checklist & Guide
```
Create a personalized onboarding checklist for a NJIT student interested in [CAREER GOAL].
The student is at skill level [BEGINNER/INTERMEDIATE/ADVANCED].

Checklist should include:
1. LinkedIn profile optimization (specific guidance for their goal)
2. GitHub portfolio pieces (project ideas at their level)
3. Personal site template recommendation
4. First project/gig idea (beginner-friendly, doable in 2 weeks)
5. Networking suggestion (who to connect with, how)

Format: Markdown checklist with brief explanations. Keep it actionable, not overwhelming.
```

**Expected output:** Personalized 15-20 item list with specific next steps.

#### Prompt 2: Cold Outreach Email Draft
```
I'm a junior AI consultant/developer and want to reach out to potential clients.
My background: [BACKGROUND]
What I offer: [SERVICES: consulting, freelance dev, project partnerships, etc.]
Target client: [INDUSTRY/PERSONA: small business, startup, nonprofit, etc.]

Draft 3 cold outreach email templates I can personalize and send.
Each email should:
- Be 80–120 words
- Include social proof or credibility
- Have a clear ask/next step
- Sound genuine, not salesy

Format: Email template with [PLACEHOLDER] for me to customize.
```

**Expected output:** 3 draft emails ready to customize and send.

#### Prompt 3: LinkedIn Profile Review
```
Here's my current LinkedIn profile:
[PROFILE URL or text description of profile]

I'm trying to position myself for [GOAL: consulting, startup, SWE role].
My target audience is [WHO you want to attract].

Review my profile and suggest:
1. Headline (current vs. suggested)
2. About section (rewrite suggestion)
3. Experience descriptions (how to reframe for consulting/startup)
4. Skills to highlight (specific, relevant to goal)
5. Projects or recommendations (what to add)

Be specific and actionable.
```

**Expected output:** Detailed profile audit with concrete improvements.

---

### AI-Powered Features (Team Ideas)

1. **Personalized onboarding paths**
   - Member skill assessment quiz
   - AI generates customized resource list + project recommendations

2. **Matching members & mentors**
   - AI analyzes mentor expertise and mentee goals
   - Suggests best mentor matches (could also be peer)

3. **Cold outreach automation**
   - Member inputs target companies/contacts
   - AI drafts personalized outreach emails
   - Member sends manually (not automated spamming!)

4. **Project idea generator**
   - Based on skill level and career goal, AI suggests 3–5 project ideas
   - Each with tech stack, timeline, difficulty estimate

5. **Achievement story generator**
   - Member inputs what they accomplished
   - AI drafts blog post or LinkedIn post version
   - Member edits and shares

---

## 6. Events & Ongoing Support

### Recurring Events

**Weekly Standup** (Tuesdays, 5 PM)
- 30 minutes, Discord voice chat
- Format: "What did you ship this week? What's blocking you?"
- 1–2 min per person; mentor gives advice if stuck
- Goal: Accountability, peer learning, community

**Monthly Workshop** (varies)
- Topics: LinkedIn optimization, cold outreach, pitch practice, building in public
- 90 minutes: Presentation (40 min) + Q&A (20 min) + breakout discussions (30 min)
- Speaker: Alumni consultant, external guest, or senior mentor
- Recorded & available async

**Quarterly Showcase** (every 3 months)
- Members present what they shipped (project or gig)
- 2–3 min per person
- Opportunity to celebrate, attract collaborators, build network
- Recorded; shared on YouTube for future students

**Mentor Speed Dating** (monthly)
- New members meet mentors in speed-dating format (5 min rotations)
- Helps members find mentor match
- Casual, fun, in-person (or breakout rooms online)

---

## 7. Success Metrics

- **Onboarding completion rate** (% of new members who finish checklist in 7 days; target: 85%)
- **Active member rate** (% attending events or Discord activity; target: 60% monthly)
- **Time to first gig** (avg. days from joining to first paid work; target: 3–6 months)
- **Member retention** (% still active after 6 months; target: 70%)
- **Achievement velocity** (# of members landing gigs/projects per quarter; target: 5–10)
- **Average consulting rate** (for members doing work; target: $25–75/hr)
- **LinkedIn growth** (avg. followers/engagment gained by members; target: +200% over 6 months)

---

## 8. Rough Timeline (6-Week Project)

**Week 1:** Interviews, personas, journey maps  
**Week 2:** Brand guide, wireframes, tool evaluation  
**Week 3:** Sanity schema, Zapier onboarding flows, landing page  
**Week 4:** Onboarding form, Discord setup, mentor assignment system  
**Week 5:** Events page, resource templates, member directory  
**Week 6:** Testing, content seeding, launch, demo  

---

## Checklist

- [ ] Stakeholder interviews (at least 3) documented
- [ ] 3+ detailed personas created
- [ ] Customer journey map completed (all 7 stages)
- [ ] Brand guide with visual examples
- [ ] Wireframes for 6+ key pages
- [ ] Sanity schemas deployed
- [ ] Onboarding form working end-to-end
- [ ] At least 3 Zapier workflows tested
- [ ] Discord server setup with channels, roles, welcome message
- [ ] 5+ onboarding resources/guides created (LinkedIn, GitHub, personal site, etc.)
- [ ] Landing page deployed with value prop and CTA
- [ ] 3+ upcoming events seeded in CMS
- [ ] Member directory implemented (searchable)
- [ ] #wins channel with achievement examples
- [ ] AI prompts documented with example outputs
- [ ] Frontend deployed to Vercel/Netlify
- [ ] GitHub repo with README and setup instructions
