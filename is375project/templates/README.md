# Implementation Templates

This folder contains starter templates for CMS schemas, forms, Zapier workflows, and code boilerplate.

## Contents

### 1. Sanity Schema Templates (TypeScript)
See `sanity-schemas.ts` for:
- Shared base schemas (Author, Person, etc.)
- MyWebClass-specific schemas (DesignStyle, GalleryEntry, etc.)
- Job Club-specific schemas (Member, Event, Achievement, etc.)
- Town Hall-specific schemas (Event, BlogPost, Attendee, Resource, etc.)

### 2. Next.js Project Starter
See `nextjs-starter/` for:
- `pages/` folder structure
- `lib/sanity.ts` — Sanity client setup
- `lib/queries.ts` — Common GROQ queries
- `components/` — Reusable components
- `.env.example` — Environment variables template

### 3. Form Templates
See `forms/` for:
- Google Forms templates (capture design submission, event registration, etc.)
- HTML/CSS form templates (if building custom forms in Next.js)
- Form validation rules and error messages

### 4. Zapier Workflow Exports
See `zapier-workflows/` for:
- Zapier JSON exports (import directly into your Zapier account)
- Step-by-step instructions for manual setup
- Webhook payload examples

### 5. Discord Bot Template
See `discord-bot/` for:
- Simple bot for welcome messages, slash commands
- Environment setup
- Deployment options (Heroku, Replit, etc.)

### 6. AI Prompts Library
See `ai-prompts/` for:
- Prompt templates for generating content
- Prompt templates for analyzing submissions
- Documentation on how to use AI in each workflow

### 7. Email Templates
See `email-templates/` for:
- Confirmation emails
- Approval/rejection emails
- Event follow-ups
- Weekly digests
- (Use with Zapier, Brevo, or Mailchimp)

---

## Quick Start

### For MyWebClass.org:
1. Copy `sanity-schemas/design-schemas.ts` to your Sanity project
2. Set up Google Form for submissions (or use `forms/mywebclass-submission-form.html`)
3. Import `zapier-workflows/mywebclass-submission-flow.json` to Zapier
4. Deploy Next.js frontend using `nextjs-starter/` as base
5. Customize brand colors in `styles/theme.ts`

### For Job Club:
1. Copy `sanity-schemas/jobclub-schemas.ts` to your Sanity project
2. Set up Google Form for onboarding (or use `forms/jobclub-onboarding-form.html`)
3. Import Zapier workflows for onboarding, event registration, calendar booking
4. Deploy Discord bot (optional but recommended)
5. Create Calendly account and link via Zapier

### For Town Hall:
1. Copy `sanity-schemas/townhall-schemas.ts` to your Sanity project
2. Set up Google Form for event registration
3. Import Zapier workflows for registration, post-event follow-up
4. Deploy Next.js frontend with accessibility focus
5. Create Discord community channel
6. Publish initial blog posts using `email-templates/blog-post-template.md`

---

## File Structure

```
templates/
├── sanity-schemas.ts
├── nextjs-starter/
│   ├── pages/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   ├── .env.example
│   └── README.md
├── forms/
│   ├── mywebclass-submission-form.html
│   ├── jobclub-onboarding-form.html
│   ├── townhall-registration-form.html
│   └── form-validation.js
├── zapier-workflows/
│   ├── mywebclass-submission-flow.json
│   ├── jobclub-onboarding-flow.json
│   ├── townhall-registration-flow.json
│   └── SETUP-INSTRUCTIONS.md
├── discord-bot/
│   ├── bot.js
│   ├── commands/
│   ├── .env.example
│   └── deployment-guide.md
├── ai-prompts/
│   ├── mywebclass-prompts.md
│   ├── jobclub-prompts.md
│   ├── townhall-prompts.md
│   └── prompt-best-practices.md
├── email-templates/
│   ├── confirmation-email.html
│   ├── approval-email.html
│   ├── event-followup-email.html
│   ├── weekly-digest.html
│   └── email-styles.css
├── database-seed/
│   ├── seed-data.json
│   ├── import-to-sanity.md
│   └── generate-test-data.js
└── README.md (this file)
```

---

## Deployment Checklist

- [ ] Sanity project created (free tier)
- [ ] Sanity schemas imported and deployed
- [ ] Next.js project initialized (GitHub repo)
- [ ] Environment variables configured (.env.local)
- [ ] Vercel/Netlify connected to GitHub repo
- [ ] Zapier account created, workflows imported
- [ ] Google Forms created for each org
- [ ] HubSpot account created and API key configured
- [ ] Discord server created, channels set up, roles defined
- [ ] (Optional) Discord bot deployed
- [ ] (Optional) Calendly account created (for Job Club)
- [ ] Email templates customized with org colors/branding
- [ ] Seed data imported to Sanity (test events, blog posts, etc.)
- [ ] Frontend tested end-to-end (form → Zapier → Discord → email)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] DNS configured (if custom domain)
- [ ] Analytics setup (Google Analytics, Vercel insights)

---

## Support & Resources

- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Zapier:** https://zapier.com/app/home
- **Discord.js:** https://discord.js.org/
- **Community Slack:** [Sanity Community Slack](https://slack.sanity.io/)

---

**Need help?** See the individual org briefs for more detailed guidance, or refer to `/docs/` for additional resources.
