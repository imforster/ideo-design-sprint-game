# IDEO Design Sprint Game - Complete Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Game Modes](#game-modes)
4. [The 5 Design Phases](#the-5-design-phases)
5. [Features Guide](#features-guide)
6. [Challenge Management](#challenge-management)
7. [Export Options](#export-options)
8. [Timer Customization](#timer-customization)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)
11. [FAQ](#faq)

---

## Introduction

### What is the IDEO Design Sprint Game?

An interactive web-based game that teaches design thinking methodology through hands-on practice. Based on IDEO's human-centered design approach, it guides individuals and teams through a complete design sprint from empathy to iteration.

### Who is it for?

- **Students** learning design thinking
- **Teams** brainstorming solutions
- **Facilitators** running workshops
- **Designers** practicing ideation
- **Innovators** solving problems creatively

### What you'll learn

- Human-centered problem framing
- Rapid ideation techniques
- Systematic idea evaluation
- Quick prototyping methods
- Iterative design thinking

---

## Getting Started

### Opening the Game

1. Locate `index.html` in your downloaded folder
2. Double-click the file
3. Game opens in your default browser
4. Click "Start Design Sprint"

### First-Time Setup

**Internet Required (Once):**
On first load, the game downloads:

- React library (~100KB)
- Tailwind CSS (~50KB)
- Icon assets (inline)

**After First Load:**

- Works completely offline
- No internet needed
- All features available

### Browser Recommendations

**Best Experience:**

- Chrome (Windows/Mac/Linux)
- Safari (Mac)
- Firefox (All platforms)
- Edge (Windows)

**Minimum Version:**

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

---

## Game Modes

### Solo Mode

**When to use:**

- Personal practice
- Learning the process
- Portfolio projects
- Quick ideation
- Self-paced learning

**Features:**

- All 5 phases available
- Individual scoring
- Personal results
- Download capability
- No team setup needed

**How to start:**

1. Click "Solo Mode"
2. Click "Start Design Sprint"
3. Begin with Empathize phase

---

### Team Mode

**When to use:**

- Workshop facilitation
- Team brainstorming
- Collaborative sessions
- Training groups
- Remote meetings

**Features:**

- Team name tracking
- Multiple contributors
- Idea attribution
- Collaborative scoring
- Team results export

**How to start:**

1. Click "Team Mode"
2. Enter team name
3. Add team member names
4. Click "Start Design Sprint"

**Team Setup:**

```
Team Name: [Innovation Squad]

Team Members:
+ Sarah Johnson
+ Mike Chen
+ Priya Patel
+ Alex Kim

[Start Design Sprint →]
```

**During Ideation:**

- Each person selects their name
- Ideas are tagged: "Coffee app [by Sarah]"
- Final results show all contributors

---

## The 5 Design Phases

### Phase 1: Empathize

**Goal:** Frame the problem as an opportunity

**Task:** Create a "How Might We" (HMW) statement

**Format:**

```
How might we help [specific user]
to [accomplish goal]
so that [benefit/outcome]?
```

**Good Example:**

```
How might we help busy students get quality
coffee quickly so that they can stay alert
in afternoon classes without missing lectures?
```

**Tips:**

- Focus on the user, not the solution
- Be specific about who you're helping
- Include the desired outcome
- Avoid proposing solutions yet

**Scoring:** 20 points for valid HMW statement

---

### Phase 2: Ideate

**Goal:** Generate many diverse ideas quickly

**Task:** Create 5-10 ideas in 3 minutes (or more without timer)

**How it works:**

1. Click "Start Idea Generation"
2. Timer begins (3:00)
3. Type ideas and press Enter
4. Each idea appears as numbered card
5. Continue until timer ends or you have 5+ ideas

**Ideation Prompts:**

- What would [Apple/Google/Tesla] do?
- What if budget was unlimited?
- What if we had only $100?
- What's the opposite approach?
- How would a 5-year-old solve this?
- What if it had to work offline?

**Categories to explore:**

- 🔧 Technical solutions
- 🤝 Social/behavioral solutions
- 📱 Digital solutions
- 🏢 Systemic solutions
- 🎨 Experience solutions
- 💡 Radical alternatives

**Example Ideas:**

```
1. Mobile pre-order app with campus pickup
2. Coffee subscription service for students
3. Express line for between-class rush
4. Coffee vending machines in buildings
5. Peer-to-peer coffee delivery network
6. AI chatbot for menu recommendations
7. Loyalty points for fast pickup
8. Partnership with meal plan system
```

**Tips:**

- Don't self-censor
- Build on previous ideas
- Embrace wild concepts
- Write headlines, not essays
- Go for quantity
- Mix practical with radical

**Scoring:** 5 points per idea

---

### Phase 3: Select

**Goal:** Choose the most promising concepts

**Task:** Click on 3 ideas to select them

**Selection Criteria:**

**Desirability (💚):** Will users want this?

- Solves real pain point
- Addresses user needs
- Creates value
- Feels relevant

**Feasibility (🔨):** Can we build this?

- Technically possible
- Resource requirements
- Timeline realistic
- Skills available

**Viability (💰):** Does it make sense?

- Business model works
- Sustainable approach
- Stakeholder support
- Scalable solution

**Innovation (🚀):** How novel is it?

- Fresh perspective
- Differentiated approach
- Unexpected solution
- Breakthrough potential

**How to select:**

1. Read through all ideas
2. Click on 3 you want to develop
3. Selected ideas turn green
4. Click "Prototype Top Idea"

**Selection Strategy:**

- Balance: Pick 1 safe, 1 medium, 1 bold
- Diversity: Different solution types
- User-first: What helps them most?
- Feasible: What can you test quickly?

**Scoring:** 20 points for selecting 3 ideas

---

### Phase 4: Prototype

**Goal:** Make your best idea tangible and testable

**Task:** Describe a simple prototype

**What to include:**

1. **One-sentence pitch**
   - "A mobile app that lets students pre-order coffee and skip the line"

2. **Key features (3-5)**
   - Real-time wait time display
   - One-tap reorder favorites
   - Pick-up time estimates
   - Campus location integration
   - Payment through meal plan

3. **User scenario**
   - "Sarah is between classes. She opens the app, sees
     the campus coffee shop has a 10-minute wait. She
     orders her usual latte, selects 'ready in 15 min,'
     and pays with dining dollars. She walks over and
     picks up her order from the mobile shelf. Total
     time: 2 minutes."

4. **First test plan**
   - "In 48 hours, I would: Create paper mockups of the
     app screens, interview 5 students about their coffee
     habits, and have them walk through the ordering flow
     using the paper prototype."

**Prototype Fidelity Levels:**

- 📝 Concept description
- 🎭 Storyboard sequence
- 📦 Physical mockup
- 💻 Digital wireframe
- 🎬 Role-play scenario

**Example Prototype:**

```
PROTOTYPE: Coffee Queue App

Pitch: A mobile app that shows real-time wait times
and enables pre-ordering at campus coffee shops.

Key Features:
1. Live wait time dashboard
2. One-tap favorite orders
3. Pick-up time scheduler
4. Meal plan integration
5. Queue position tracking

User Scenario:
Alex has 15 minutes between classes. He checks the
app, sees 8-minute wait at the Union coffee shop.
He pre-orders his regular medium coffee, schedules
pickup for 12 minutes from now, and heads to class.
On his way, he gets a notification that his order
is ready. He walks in, grabs his coffee from the
mobile order shelf, and makes it to class on time.

48-Hour Test:
- Day 1: Create clickable mockup in Figma
- Day 1: Interview 3 baristas about workflow
- Day 2: Test with 5 students using prototype
- Day 2: Observe current ordering behavior
- Measure: Time saved, user satisfaction
```

**Tips:**

- Keep it simple
- Focus on core value
- Make it testable
- Think low-fidelity
- Plan quick validation

**Image Upload (Optional):**

You can now add visual elements to your prototype:

1. Click "Upload Image" button
2. Select image files (PNG, JPG, JPEG, GIF, SVG)
3. Maximum 3 images, each under 5MB
4. Images appear as thumbnails
5. Remove images with X button
6. Images included in PDF exports

**When to use images:**
- Sketches of interface designs
- Storyboard sequences
- Physical mockup photos
- Wireframe screenshots
- User journey diagrams

**Scoring:** 30 points for detailed prototype

---

### Phase 5: Iterate

**Goal:** Refine based on feedback and reflection

**Task:** Identify improvements and next steps

**Framework: I Like, I Wish, What If**

**I Like... (What's working)**

- Strengths of the concept
- Positive aspects
- Core value proposition
- User benefits

**I Wish... (What needs improvement)**

- Gaps in the solution
- Missing features
- User concerns
- Implementation challenges

**What If... (New possibilities)**

- Variations to explore
- Alternative approaches
- Unexpected uses
- Future enhancements

**Example Iteration:**

```
I LIKE that this solution directly addresses the
time constraint problem students face. The meal
plan integration removes payment friction.

I WISH we had considered how this works during
peak times when 100 students might pre-order at
once. We also need to think about users who don't
have smartphones.

WHAT IF we added a "buddy order" feature where
you can order for friends? What if we gamified it
with rewards for off-peak ordering to distribute
demand? What if coffee shops got a tablet showing
the queue so they could prep better?

SMALLEST TESTABLE VERSION:
Just a Google Form where students can pre-order
one signature drink, with pickup in 15 minutes.
No app needed. Test if pre-ordering alone saves
time.

NEXT VALIDATION STEPS:
1. Survey 50 students: Would you use this?
2. Partner with one coffee shop for pilot
3. Run 1-week test with simple system
4. Measure time saved and satisfaction
```

**Reflection Questions:**

- What surprised us?
- Which idea excites us most?
- What assumptions need testing?
- Who are we leaving out?
- How could this scale?
- What's the minimum viable version?

**Scoring:** 25 points for thorough iteration notes

---

## Features Guide

### Custom Challenge Creator

**Access:**

1. Click Settings icon (⚙️) on intro screen
2. Click "Add Challenge"
3. Fill in all fields
4. Click "Save Challenge"

**Required Fields:**

- **Challenge Title:** Short, descriptive name
- **Description:** Problem context (2-3 sentences)
- **User Persona:** Specific person affected
- **Pain Point:** Core frustration/need

**Example Custom Challenge:**

```
Title: Hospital Patient Experience

Description: Patients in the ER wait hours without
updates, causing anxiety and frustration. Family
members have no way to check status.

Persona: Maria, a 62-year-old patient's daughter
who drove 2 hours to the hospital

Pain Point: No visibility into wait times or
treatment progress, leading to uncertainty and
repeated check-ins with staff
```

**Uses:**

- Company-specific problems
- Industry challenges
- Educational scenarios
- Real project kickoffs
- Client workshops

---

### Download Results

**When to use:**

- End of sprint
- Need documentation
- Portfolio projects
- Client deliverables
- Team records

**What's included:**

- Team/solo identification
- Challenge details
- HMW statement
- All ideas (numbered and attributed)
- Top 3 selected concepts
- Complete prototype description
- Iteration and reflection notes
- Score and date

**How to download:**

1. Complete all 5 phases
2. Click "Download Results"
3. Save .txt file to desired location
4. File named: `design-sprint-[team-name]-[timestamp].txt`

**Sample Output:**

```
IDEO DESIGN SPRINT RESULTS
========================

Team: Innovation Squad
Members: Sarah, Mike, Priya, Alex
Challenge: Campus Coffee Crisis
Date: 10/5/2025
Score: 95 points

HOW MIGHT WE STATEMENT
How might we help busy students get quality
coffee quickly so that they stay alert in classes
without missing lectures?

IDEAS GENERATED (12 total)
1. Mobile pre-order app [by Sarah]
2. Coffee subscription service [by Mike]
...

[Full content included]
```

---

### Copy to Clipboard

**Quick sharing option:**

- Shorter summary
- Social media ready
- Email friendly
- Chat/Slack compatible

**Includes:**

- Team name
- Challenge title
- Total score
- Ideas generated count
- Top concept

**Sample Clipboard Output:**

```
🎨 IDEO Design Sprint Results

👥 Team: Innovation Squad
🎯 Challenge: Campus Coffee Crisis
⭐ Score: 95 points
💡 Ideas Generated: 12

Top Concept: Mobile pre-order app with
campus pickup integration

Play your own: [Share link if hosted]
```

---

### Team Contribution Tracking

**In Team Mode:**

**During Setup:**

- Add all team member names
- Names stored for session
- Visible throughout sprint

**During Ideation:**

- Dropdown shows team members
- Select name before submitting idea
- Each idea tagged with contributor
- Example: "Coffee kiosk [by Alex]"

**In Results:**

- All team members listed
- Ideas show attribution
- Full collaborative record
- Shared accomplishment

**Benefits:**

- Recognizes contributions
- Tracks participation
- Fair credit distribution
- Team accountability
- Portfolio evidence

---

## Challenge Management

### Creating Custom Challenges

**Access Settings:**
1. Click Settings icon (⚙️) on intro screen
2. View existing challenges
3. Click "Add Challenge" button

**Required Fields:**

- **Challenge Title:** Short, descriptive name (e.g., "Hospital Patient Experience")
- **Description:** Problem context in 2-3 sentences
- **User Persona:** Specific person affected by the problem
- **Pain Point:** Core frustration or unmet need
- **Topic:** Category from dropdown or custom topic

**Available Topics:**
- Education
- Business
- Healthcare
- Technology
- Sustainability
- Social Impact
- Product Design
- Service Design
- Custom (enter your own)

**Example Custom Challenge:**

```
Title: Remote Team Onboarding

Description: New employees joining remote-first companies
struggle to build relationships and understand company
culture without in-person interactions.

Persona: Jamie, a 28-year-old software developer starting
their first remote job after working in offices for 5 years

Pain Point: Feels isolated and unsure how to connect with
teammates, missing the casual conversations that build
rapport in physical offices

Topic: Business
```

**Tips for Good Challenges:**
- Be specific about the user
- Focus on real pain points
- Avoid suggesting solutions
- Make it relatable
- Keep scope manageable

---

### Challenge Selection

**Enable/Disable Challenges:**

Control which challenges appear in your sprints:

1. Open Settings modal
2. Scroll to "Challenge Selection" section
3. See all available challenges with topic badges
4. Check/uncheck boxes to enable/disable
5. Use "Select All" or "Deselect All" for bulk actions

**Why Use This:**
- Focus on specific topics for workshops
- Remove irrelevant challenges
- Create themed sessions
- Test new challenges individually
- Curate experience for audience

**Requirements:**
- At least one challenge must be enabled
- "Start Design Sprint" button disabled if none selected
- Selection persists during browser session
- Resets when browser is closed

**Example Use Cases:**

*Healthcare Workshop:*
- Enable only Healthcare and Social Impact challenges
- Disable Business and Technology challenges
- Focused learning experience

*Testing New Challenges:*
- Disable all default challenges
- Enable only your new custom challenge
- Test before sharing with team

---

### Challenge Import/Export

**Export Your Challenges:**

Share your custom challenge sets with colleagues:

1. Open Settings modal
2. Click "Export Challenges" button
3. JSON file downloads automatically
4. Filename: `ideo-challenges-[timestamp].json`
5. Share file via email, Slack, or file sharing

**What's Included:**
- All custom challenges you've created
- Challenge topics
- Version information
- Export date
- Proper JSON schema

**Import Challenge Sets:**

Load pre-made challenge packs:

1. Open Settings modal
2. Click "Import Challenges" button
3. Select JSON file from your computer
4. Preview modal shows challenges to import
5. Review list and check for duplicates
6. Click "Import All" to confirm
7. Challenges added to your custom list

**Import Preview Shows:**
- Number of challenges in file
- Challenge titles with topics
- Duplicate warnings (matching titles)
- Option to cancel before importing

**Duplicate Handling:**
- Challenges with matching titles are skipped
- Summary shows what was imported vs skipped
- Prevents accidental duplicates
- Original challenges preserved

**JSON Schema:**

```json
{
  "version": "1.0",
  "exportDate": "2025-10-05T12:00:00Z",
  "challenges": [
    {
      "title": "Challenge Title",
      "description": "Detailed problem description",
      "persona": "User persona details",
      "painPoint": "Main pain point or frustration",
      "topic": "Education"
    },
    {
      "title": "Another Challenge",
      "description": "Problem context",
      "persona": "Specific user",
      "painPoint": "Core need",
      "topic": "Healthcare"
    }
  ]
}
```

**Creating Challenge Packs:**

Build themed collections:

*Startup Challenges Pack:*
- Product-market fit problems
- User acquisition challenges
- Scaling issues
- Team collaboration problems

*Education Challenges Pack:*
- Student engagement
- Remote learning
- Assessment methods
- Accessibility issues

*Healthcare Challenges Pack:*
- Patient experience
- Provider workflows
- Health equity
- Technology adoption

**Validation:**
- File must be valid JSON
- Must include version and challenges array
- Each challenge needs all required fields
- Clear error messages if validation fails

---

## Export Options

### Download Text Results

**Basic text export for documentation:**

1. Complete all 5 phases
2. Click "Download Results" button
3. Text file saves to Downloads folder
4. Filename: `design-sprint-[team-name]-[timestamp].txt`

**Contents:**
- Team/solo identification
- Challenge title and topic
- Date and score
- HMW statement
- All ideas (numbered, with attribution)
- Top 3 selected ideas
- Prototype description
- Note about images (if uploaded)
- Iteration notes

**Best For:**
- Quick documentation
- Email attachments
- Plain text archives
- Copy-paste into other tools

---

### PDF Export

**Professional formatted reports:**

1. Complete all 5 phases
2. Click "Download PDF" button
3. PDF generates and downloads
4. Filename: `design-sprint-[team-name]-[timestamp].pdf`

**PDF Features:**
- Professional header with title and date
- Challenge information with topic badge
- Team details (if applicable)
- Formatted sections with visual hierarchy
- Numbered idea lists
- Top 3 ideas with emphasis
- Prototype section with embedded images
- Iteration notes
- Footer with score and timestamp

**Image Handling:**
- Uploaded images embedded in PDF
- Maintains aspect ratio
- Proper sizing (max width 170mm)
- Automatic pagination for multiple images
- High quality output

**Layout Specifications:**
- Page size: A4 (210mm x 297mm)
- Margins: 20mm all sides
- Professional typography
- Clear section headers
- Readable body text (11pt)
- Line spacing: 1.5

**Best For:**
- Client presentations
- Portfolio pieces
- Workshop deliverables
- Stakeholder reports
- Professional documentation
- Archival records

---

### Email Integration

**Send results directly from the app:**

1. Complete all 5 phases
2. Click "Email Results" button
3. Email modal opens

**Email Form Fields:**
- **Recipients:** Comma-separated email addresses
- **Subject:** Pre-filled with challenge title (editable)
- **Message:** Optional personal note
- **Preview:** See formatted content before sending

**How It Works:**
1. Fill in recipient email(s)
2. Customize subject if desired
3. Add optional message
4. Click "Send Email"
5. Default email client opens
6. Email pre-populated with all content
7. Review and send from your email client

**Email Content Includes:**
- Challenge title and topic
- Team/solo identification
- Date and score
- HMW statement
- Top 3 ideas
- Prototype description
- Iteration notes
- Note about images

**Image Handling:**
- Images cannot be attached automatically via mailto
- Email includes note: "Images attached separately"
- Manually attach images if needed
- Or reference PDF export for images

**Best For:**
- Quick team sharing
- Stakeholder updates
- Workshop follow-ups
- Collaboration requests
- Feedback gathering

**Limitations:**
- Uses mailto: protocol (opens email client)
- Cannot auto-attach files
- Requires default email client configured
- Some email clients may truncate long content

---

### Copy to Clipboard

**Quick sharing for chat and social:**

1. Complete all 5 phases
2. Click "Copy to Clipboard" button
3. Paste anywhere (Slack, email, notes)

**Format:**
```
🎨 IDEO Design Sprint Results

👥 Team: Innovation Squad
🎯 Challenge: Campus Coffee Crisis (Education)
⭐ Score: 95 points
💡 Ideas Generated: 12

Top Concept: Mobile pre-order app with
campus pickup integration
```

**Best For:**
- Slack messages
- Quick emails
- Social media posts
- Chat applications
- Note-taking apps
- Informal sharing

---

## Timer Customization

### Adjusting Ideation Timer

**Access Timer Settings:**
1. Click Settings icon (⚙️) on intro screen
2. Scroll to "Timer Settings" section
3. See current timer duration

**Preset Options:**

Quick selection buttons:
- **1 minute (60s):** Lightning round, energizer
- **3 minutes (180s):** Default, balanced pace
- **5 minutes (300s):** More thoughtful ideation
- **10 minutes (600s):** Deep exploration

**Custom Duration:**

Enter any duration between 30 seconds and 30 minutes:

1. Click custom input field
2. Enter number of seconds
3. Valid range: 30-1800 seconds
4. Timer updates immediately

**Validation:**
- Minimum: 30 seconds
- Maximum: 1800 seconds (30 minutes)
- Error message if outside range
- Must be numeric value

**When Timer Applies:**
- All sprints in current browser session
- Resets to default (180s) when browser closed
- Not saved permanently
- Applies to Ideate phase only

**Use Cases:**

*Short Timer (60s):*
- Warm-up exercises
- Quick energizers
- Rapid-fire brainstorming
- Time-constrained workshops
- Testing the game

*Medium Timer (180-300s):*
- Standard workshops
- Balanced ideation
- Most use cases
- Default experience

*Long Timer (600s+):*
- Deep exploration
- Complex challenges
- Smaller groups
- Thoughtful ideation
- Research-heavy topics

**Timer Display:**
- Shows in MM:SS format
- Counts down in real-time
- Visual progress indicator
- Can proceed early if 5+ ideas submitted
- Automatic progression when time expires

**Tips:**
- Start with default (3 min) for first sprint
- Adjust based on group energy
- Shorter for energizers
- Longer for complex problems
- Consider group size (more people = more time)

---

## Best Practices

### Solo Mode Tips

**Maximize Learning:**

- Try different challenge types
- Push past your first ideas
- Actually time yourself
- Complete all 5 phases
- Reflect honestly on iterations

**Build Portfolio:**

- Download every sprint
- Create case studies
- Show your process
- Demonstrate thinking
- Include iterations

---

### Team Mode Tips

**Before Starting:**

- Set clear time expectations (20-30 min)
- Ensure everyone has the link open
- Agree on collaboration rules
- Assign a facilitator/timekeeper

**During Ideation:**

- Encourage quiet members
- Build on each other's ideas
- No criticism during generation
- Celebrate wild ideas
- Keep momentum high

**Selection Phase:**

- Discuss criteria first
- Vote or discuss as group
- Consider diverse perspectives
- Balance feasibility with innovation

**Prototyping:**

- Assign roles (sketcher, note-taker)
- Time-box the activity
- Focus on key features only
- Make it testable

---

### Facilitation Tips

**Workshop Setup:**

1. Project game on screen
2. Explain each phase before starting
3. Set clear time limits
4. Encourage participation
5. Document on shared screen

**Energy Management:**

- Start with energizer
- Take breaks between phases
- Vary activity types
- Keep pace brisk
- Celebrate milestones

**Remote Facilitation:**

- Screen share the game
- Use breakout rooms for ideation
- Collect ideas in chat
- One person drives the game
- Everyone contributes verbally

---

### Creating Effective HMW Statements

**Good Formula:**

```
How might we help [SPECIFIC USER]
to [ACCOMPLISH GOAL]
so that [BENEFIT/OUTCOME]?
```

**✅ Good Examples:**

```
How might we help new parents track feeding
schedules so that they feel confident their
baby is getting enough nutrition?

How might we help remote workers stay connected
with colleagues so that they feel less isolated
and maintain team relationships?
```

**❌ Avoid:**

```
How might we make a better coffee app?
(Too solution-focused)

How might we help people?
(Too vague)

How might we use AI to solve student problems?
(Specifies technology before understanding need)
```

---

### Ideation Best Practices

**Quantity Goals:**

- Minimum: 5 ideas
- Good: 10-15 ideas
- Excellent: 20+ ideas

**Idea Quality:**

- Headlines not essays
- Action-oriented
- Specific enough to visualize
- Diverse in approach

**Avoiding Blocks:**

- Set a timer
- Use prompts
- Build on others
- Switch contexts
- Think extremes

**Prompts to Use:**

- "What would [company] do?"
- "10x bigger/smaller?"
- "Different country/culture?"
- "For a different user?"
- "Opposite solution?"

---

## Troubleshooting

### Common Issues

**Game won't load:**

- Check internet on first load
- Try different browser
- Clear browser cache
- Disable ad blockers
- Allow JavaScript

**Timer not starting:**

- Refresh the page
- Click "Start" button again
- Check browser console for errors

**Download button doesn't work:**

- Check browser download permissions
- Try "Copy to Clipboard" instead
- Check pop-up blocker settings
- Use different browser

**Custom challenges disappear:**

- This is expected behavior
- Challenges saved only during session
- Document challenges separately
- Re-enter for next session

**Ideas not saving:**

- Press Enter after typing
- Check if timer is active (Phase 2)
- Don't refresh page mid-sprint
- Complete sprint before closing

---

## FAQ

**Q: Do I need to install anything?**
A: No. Just open the HTML file in a browser.

**Q: Does it work offline?**
A: Yes, after the first load which requires internet.

**Q: Can multiple people use the same file?**
A: Yes, everyone opens their own copy locally.

**Q: Are results saved permanently?**
A: No, download results before closing the browser.

**Q: Can I edit the challenges?**
A: Yes, either add custom ones or edit the HTML file directly.

**Q: What browsers work best?**
A: Chrome, Safari, Firefox, and Edge all work well.

**Q: Can I use this for commercial workshops?**
A: Yes, see LICENSE.txt for terms.

**Q: How long does a sprint take?**
A: Typically 15-30 minutes depending on depth.

**Q: Can we play asynchronously?**
A: Not directly. Each person runs independently and shares results.

**Q: Is there a mobile version?**
A: It works on mobile browsers but desktop is recommended.

**Q: Can I customize the scoring?**
A: Yes, edit the JavaScript in index.html.

**Q: How do I report bugs?**
A: Note the issue, browser, and OS version for troubleshooting.

**Q: Can I upload images to my prototype?**
A: Yes, up to 3 images (PNG, JPG, JPEG, GIF, SVG), each under 5MB.

**Q: How do I export to PDF?**
A: Complete the sprint and click "Download PDF" on the results screen.

**Q: Can I customize the timer duration?**
A: Yes, in Settings you can choose presets or enter custom duration (30s-30min).

**Q: How do I share challenge sets with colleagues?**
A: Export your challenges as JSON, share the file, they import it.

**Q: Do imported challenges stay permanently?**
A: No, like custom challenges they're session-only. Export to save.

**Q: Can I disable default challenges?**
A: Yes, use Challenge Selection in Settings to enable/disable any challenge.

**Q: What topics can I assign to challenges?**
A: 8 predefined topics or create your own custom topic.

**Q: Does email export attach images automatically?**
A: No, mailto protocol limitation. Use PDF export for images.

**Q: Are timer settings saved between sessions?**
A: No, timer resets to default (180s) when browser is closed.

---

## Additional Resources

### Learn More About Design Thinking

- IDEO Design Thinking resources
- Stanford d.school materials
- Design thinking books and courses

### Practice Challenges

- Use real problems from your work
- Community improvement projects
- Product ideas
- Service design challenges

### Share Your Results

- Portfolio websites
- LinkedIn posts
- Team retrospectives
- Case studies

---

**Need more help?** See FACILITATOR_GUIDE.md for workshop-specific guidance.

---

_Last Updated: October 2025_
_Documentation Version: 3.0_
