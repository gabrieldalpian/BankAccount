// Sanity Schema Templates for IS 375 Project
// Copy these into your Sanity project's /schemas folder
// Reference: https://www.sanity.io/docs/schema-types

// ============================================================
// SHARED SCHEMAS (Used by all three orgs)
// ============================================================

export const author = {
  name: 'author',
  title: 'Author / Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'email',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Student', value: 'student' },
          { title: 'Instructor', value: 'instructor' },
          { title: 'Mentor', value: 'mentor' },
          { title: 'Volunteer', value: 'volunteer' },
          { title: 'External Contributor', value: 'external' },
        ],
      },
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
      options: {
        list: [
          { title: 'NJIT', value: 'njit' },
          { title: 'MyWebClass', value: 'mywebclass' },
          { title: 'Job Club', value: 'jobclub' },
          { title: 'Town Hall', value: 'townhall' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'personalUrl',
      title: 'Personal Website URL',
      type: 'url',
    },
    {
      name: 'hubspotContactId',
      title: 'HubSpot Contact ID',
      type: 'string',
      hidden: true,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
      subtitle: 'role',
    },
  },
};

// ============================================================
// MYWEBCLASS.ORG SCHEMAS
// ============================================================

export const designStyle = {
  name: 'designStyle',
  title: 'Design Style',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Style Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'history',
      title: 'History & Timeline',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'keyCharacteristics',
      title: 'Key Characteristics',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g., "Grid-based layout", "Sans-serif typography", "High contrast"',
    },
    {
      name: 'examples',
      title: 'External References',
      type: 'array',
      of: [{ type: 'url' }],
    },
    {
      name: 'doList',
      title: 'Do\'s',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'dontList',
      title: 'Don\'t\'s',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'canonicalEntry',
      title: 'Canonical Example',
      type: 'reference',
      to: [{ type: 'galleryEntry' }],
      description: 'Best example of this style on MyWebClass',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
      },
      initialValue: 'draft',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
};

export const galleryEntry = {
  name: 'galleryEntry',
  title: 'Gallery Entry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'submittedBy',
      title: 'Submitted By',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'style',
      title: 'Design Style',
      type: 'reference',
      to: [{ type: 'designStyle' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'explanation',
      title: 'Why This Is [Style] (Detailed)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'demoUrl',
      title: 'Live Demo URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gitRepoUrl',
      title: 'GitHub Repository URL',
      type: 'url',
    },
    {
      name: 'screenshot',
      title: 'Thumbnail Screenshot',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'fullPageScreenshot',
      title: 'Full-Page Screenshot',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'codeWalkthrough',
      title: 'Code Walkthrough',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'status',
      title: 'Moderation Status',
      type: 'string',
      options: {
        list: [
          { title: 'Submitted', value: 'submitted' },
          { title: 'Under Review', value: 'under-review' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
      },
      initialValue: 'submitted',
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    },
    {
      name: 'approvedBy',
      title: 'Approved By',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'approvedAt',
      title: 'Approved At',
      type: 'datetime',
    },
    {
      name: 'rejectionReason',
      title: 'Rejection Reason',
      type: 'text',
      rows: 2,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'viewCount',
      title: 'View Count',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'style.name',
      media: 'screenshot',
    },
  },
};

export const learningArticle = {
  name: 'learningArticle',
  title: 'Learning Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'relatedStyles',
      title: 'Related Styles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'designStyle' }],
        },
      ],
    },
    {
      name: 'relatedEntries',
      title: 'Related Gallery Entries',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'galleryEntry' }],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Ready', value: 'ready' },
          { title: 'Published', value: 'published' },
        ],
      },
      initialValue: 'draft',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
    },
  },
};

// ============================================================
// JOB CLUB SCHEMAS
// ============================================================

export const jobClubMember = {
  name: 'jobClubMember',
  title: 'Job Club Member',
  type: 'document',
  fields: [
    {
      name: 'profile',
      title: 'Author Profile',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'major',
      title: 'Major',
      type: 'string',
    },
    {
      name: 'graduationYear',
      title: 'Graduation Year',
      type: 'number',
    },
    {
      name: 'careerGoal',
      title: 'Career Goal',
      type: 'string',
      options: {
        list: [
          { title: 'AI Consulting', value: 'consulting' },
          { title: 'Startup', value: 'startup' },
          { title: 'Software Engineer', value: 'swe' },
          { title: 'Data Science', value: 'data' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {\n      name: 'skills',\n      title: 'Skills',\n      type: 'array',\n      of: [{ type: 'string' }],\n    },\n    {\n      name: 'onboardingComplete',\n      title: 'Onboarding Complete',\n      type: 'boolean',\n      initialValue: false,\n    },\n    {\n      name: 'onboardingChecklist',\n      title: 'Onboarding Checklist',\n      type: 'object',\n      fields: [\n        { name: 'linkedinSetup', title: 'LinkedIn Setup', type: 'boolean' },\n        { name: 'githubSetup', title: 'GitHub Setup', type: 'boolean' },\n        { name: 'personalSite', title: 'Personal Site', type: 'boolean' },\n        { name: 'discordJoin', title: 'Discord Join', type: 'boolean' },\n        { name: 'mentorCall', title: 'Mentor Call Scheduled', type: 'boolean' },\n      ],\n    },\n    {\n      name: 'mentorAssigned',\n      title: 'Mentor Assigned',\n      type: 'reference',\n      to: [{ type: 'author' }],\n    },\n    {\n      name: 'joinedAt',\n      title: 'Joined At',\n      type: 'datetime',\n    },\n    {\n      name: 'firstGigDate',\n      title: 'First Gig Date',\n      type: 'datetime',\n    },\n    {\n      name: 'status',\n      title: 'Status',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Active', value: 'active' },\n          { title: 'On Leave', value: 'on-leave' },\n          { title: 'Alumni', value: 'alumni' },\n        ],\n      },\n      initialValue: 'active',\n    },\n  ],\n  preview: {\n    select: {\n      title: 'profile.name',\n      subtitle: 'careerGoal',\n    },\n  },\n};\n\nexport const jobClubEvent = {\n  name: 'jobClubEvent',\n  title: 'Job Club Event',\n  type: 'document',\n  fields: [\n    {\n      name: 'title',\n      title: 'Title',\n      type: 'string',\n      validation: (Rule) => Rule.required(),\n    },\n    {\n      name: 'slug',\n      title: 'Slug',\n      type: 'slug',\n      options: {\n        source: 'title',\n        maxLength: 96,\n      },\n    },\n    {\n      name: 'description',\n      title: 'Description',\n      type: 'text',\n      rows: 3,\n    },\n    {\n      name: 'eventType',\n      title: 'Event Type',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Weekly Standup', value: 'standup' },\n          { title: 'Workshop', value: 'workshop' },\n          { title: 'Networking', value: 'networking' },\n          { title: 'Showcase', value: 'showcase' },\n        ],\n      },\n    },\n    {\n      name: 'startTime',\n      title: 'Start Time',\n      type: 'datetime',\n      validation: (Rule) => Rule.required(),\n    },\n    {\n      name: 'endTime',\n      title: 'End Time',\n      type: 'datetime',\n    },\n    {\n      name: 'location',\n      title: 'Location',\n      type: 'string',\n      description: 'E.g., \"Discord #general\", \"NJIT - Tiernan Hall 102\", \"Zoom\"',\n    },\n    {\n      name: 'calendarUrl',\n      title: 'Calendar Link',\n      type: 'url',\n    },\n    {\n      name: 'recordingUrl',\n      title: 'Recording URL',\n      type: 'url',\n    },\n    {\n      name: 'speaker',\n      title: 'Speaker / Facilitator',\n      type: 'reference',\n      to: [{ type: 'author' }],\n    },\n    {\n      name: 'status',\n      title: 'Status',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Draft', value: 'draft' },\n          { title: 'Scheduled', value: 'scheduled' },\n          { title: 'Past', value: 'past' },\n        ],\n      },\n      initialValue: 'draft',\n    },\n  ],\n  preview: {\n    select: {\n      title: 'title',\n      subtitle: 'startTime',\n    },\n  },\n};\n\nexport const achievement = {\n  name: 'achievement',\n  title: 'Achievement',\n  type: 'document',\n  fields: [\n    {\n      name: 'member',\n      title: 'Member',\n      type: 'reference',\n      to: [{ type: 'jobClubMember' }],\n      validation: (Rule) => Rule.required(),\n    },\n    {\n      name: 'achievementType',\n      title: 'Achievement Type',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Gig Landed', value: 'gig-landed' },\n          { title: 'Project Shipped', value: 'project-shipped' },\n          { title: 'Internship', value: 'internship' },\n          { title: 'Revenue Milestone', value: 'revenue' },\n          { title: 'Certification', value: 'certification' },\n        ],\n      },\n    },\n    {\n      name: 'title',\n      title: 'Title',\n      type: 'string',\n      validation: (Rule) => Rule.required(),\n    },\n    {\n      name: 'description',\n      title: 'Description / Story',\n      type: 'text',\n      rows: 3,\n    },\n    {\n      name: 'amount',\n      title: 'Amount (for revenue)',\n      type: 'number',\n    },\n    {\n      name: 'links',\n      title: 'Links',\n      type: 'array',\n      of: [{ type: 'url' }],\n    },\n    {\n      name: 'postedAt',\n      title: 'Posted At',\n      type: 'datetime',\n    },\n  ],\n  preview: {\n    select: {\n      title: 'title',\n      subtitle: 'member.profile.name',\n    },\n  },\n};\n\n// ============================================================\n// TOWN HALL SCHEMAS\n// ============================================================\n\nexport const townHallEvent = {\n  name: 'townHallEvent',\n  title: 'Town Hall Event',\n  type: 'document',\n  fields: [\n    {\n      name: 'title',\n      title: 'Title',\n      type: 'string',\n      validation: (Rule) => Rule.required(),\n    },\n    {\n      name: 'slug',\n      title: 'Slug',\n      type: 'slug',\n      options: {\n        source: 'title',\n        maxLength: 96,\n      },\n    },\n    {\n      name: 'description',\n      title: 'Description',\n      type: 'text',\n      rows: 3,\n    },\n    {\n      name: 'plainLanguageSummary',\n      title: 'Plain Language Summary (No Jargon)',\n      type: 'text',\n      rows: 2,\n    },\n    {\n      name: 'whatYouWillLearn',\n      title: 'What You Will Learn',\n      type: 'array',\n      of: [{ type: 'string' }],\n      description: '3-5 learning outcomes in plain language',\n    },\n    {\n      name: 'eventType',\n      title: 'Event Type',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Workshop', value: 'workshop' },\n          { title: 'Town Hall', value: 'town-hall' },\n          { title: 'Webinar', value: 'webinar' },\n          { title: 'Networking', value: 'networking' },\n        ],\n      },\n    },\n    {\n      name: 'topic',\n      title: 'Topics',\n      type: 'array',\n      of: [{ type: 'string' }],\n      options: {\n        list: [\n          { title: 'AI Basics', value: 'ai-basics' },\n          { title: 'Business', value: 'business' },\n          { title: 'Privacy', value: 'privacy' },\n          { title: 'Careers', value: 'careers' },\n          { title: 'Ethics', value: 'ethics' },\n        ],\n      },\n    },\n    {\n      name: 'startTime',\n      title: 'Start Time',\n      type: 'datetime',\n      validation: (Rule) => Rule.required(),\n    },\n    {\n      name: 'endTime',\n      title: 'End Time',\n      type: 'datetime',\n    },\n    {\n      name: 'location',\n      title: 'Location',\n      type: 'string',\n      description: 'E.g., \"NJIT - Martin Tuchman Hall, Room 201\" or \"Zoom\"',\n    },\n    {\n      name: 'registrationUrl',\n      title: 'Registration URL',\n      type: 'url',\n    },\n    {\n      name: 'recordingUrl',\n      title: 'Recording URL',\n      type: 'url',\n    },\n    {\n      name: 'speaker',\n      title: 'Speaker / Facilitator',\n      type: 'reference',\n      to: [{ type: 'author' }],\n    },\n    {\n      name: 'postEventSummary',\n      title: 'Post-Event Summary',\n      type: 'array',\n      of: [{ type: 'block' }],\n    },\n    {\n      name: 'status',\n      title: 'Status',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Draft', value: 'draft' },\n          { title: 'Scheduled', value: 'scheduled' },\n          { title: 'Past', value: 'past' },\n        ],\n      },\n      initialValue: 'draft',\n    },\n  ],\n  preview: {\n    select: {\n      title: 'title',\n      subtitle: 'startTime',\n    },\n  },\n};\n\nexport const blogPost = {\n  name: 'blogPost',\n  title: 'Blog Post',\n  type: 'document',\n  fields: [\n    {\n      name: 'title',\n      title: 'Title',\n      type: 'string',\n      validation: (Rule) => Rule.required(),\n    },\n    {\n      name: 'slug',\n      title: 'Slug',\n      type: 'slug',\n      options: {\n        source: 'title',\n        maxLength: 96,\n      },\n    },\n    {\n      name: 'author',\n      title: 'Author',\n      type: 'reference',\n      to: [{ type: 'author' }],\n    },\n    {\n      name: 'content',\n      title: 'Content',\n      type: 'array',\n      of: [{ type: 'block' }],\n    },\n    {\n      name: 'plainLanguageLevel',\n      title: 'Plain Language Level',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Beginner (No tech knowledge)', value: 'beginner' },\n          { title: 'Intermediate', value: 'intermediate' },\n          { title: 'Advanced', value: 'advanced' },\n        ],\n      },\n    },\n    {\n      name: 'keyTakeaways',\n      title: 'Key Takeaways (TL;DR)',\n      type: 'array',\n      of: [{ type: 'string' }],\n    },\n    {\n      name: 'topic',\n      title: 'Topics',\n      type: 'array',\n      of: [{ type: 'string' }],\n    },\n    {\n      name: 'publishedAt',\n      title: 'Published At',\n      type: 'datetime',\n    },\n    {\n      name: 'status',\n      title: 'Status',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Draft', value: 'draft' },\n          { title: 'Ready', value: 'ready' },\n          { title: 'Published', value: 'published' },\n        ],\n      },\n      initialValue: 'draft',\n    },\n  ],\n  preview: {\n    select: {\n      title: 'title',\n      subtitle: 'author.name',\n    },\n  },\n};\n\nexport const townHallAttendee = {\n  name: 'townHallAttendee',\n  title: 'Event Attendee',\n  type: 'document',\n  fields: [\n    {\n      name: 'name',\n      title: 'Name',\n      type: 'string',\n      validation: (Rule) => Rule.required(),\n    },\n    {\n      name: 'email',\n      title: 'Email',\n      type: 'email',\n    },\n    {\n      name: 'phone',\n      title: 'Phone',\n      type: 'string',\n    },\n    {\n      name: 'neighborhood',\n      title: 'Neighborhood',\n      type: 'string',\n    },\n    {\n      name: 'techLiteracyLevel',\n      title: 'Tech Literacy Level',\n      type: 'string',\n      options: {\n        list: [\n          { title: 'Beginner', value: 'beginner' },\n          { title: 'Intermediate', value: 'intermediate' },\n          { title: 'Advanced', value: 'advanced' },\n        ],\n      },\n    },\n    {\n      name: 'interestedInVolunteering',\n      title: 'Interested in Volunteering',\n      type: 'boolean',\n    },\n    {\n      name: 'subscribeToNewsletter',\n      title: 'Subscribe to Newsletter',\n      type: 'boolean',\n    },\n    {\n      name: 'registeredAt',\n      title: 'Registered At',\n      type: 'datetime',\n    },\n  ],\n  preview: {\n    select: {\n      title: 'name',\n      subtitle: 'email',\n    },\n  },\n};\n\n// ============================================================\n// EXPORT ALL SCHEMAS\n// ============================================================\n\nexport const allSchemas = [\n  // Shared\n  author,\n  // MyWebClass\n  designStyle,\n  galleryEntry,\n  learningArticle,\n  // Job Club\n  jobClubMember,\n  jobClubEvent,\n  achievement,\n  // Town Hall\n  townHallEvent,\n  blogPost,\n  townHallAttendee,\n];\n