# IDEO Design Sprint Game - Facilitator Guide

## Table of Contents

1. [Introduction for Facilitators](#introduction-for-facilitators)
2. [Workshop Planning](#workshop-planning)
3. [Pre-Workshop Setup](#pre-workshop-setup)
4. [Running the Workshop](#running-the-workshop)
5. [Challenge Management for Facilitators](#challenge-management-for-facilitators)
6. [Timer and Pacing Strategies](#timer-and-pacing-strategies)
7. [Remote Facilitation](#remote-facilitation)
8. [Exporting and Sharing Results](#exporting-and-sharing-results)
9. [Troubleshooting During Workshops](#troubleshooting-during-workshops)
10. [Advanced Facilitation Techniques](#advanced-facilitation-techniques)

---

## Introduction for Facilitators

### Purpose of This Guide

This guide is specifically for facilitators, trainers, educators, and workshop leaders who will use the IDEO Design Sprint Game with groups. It covers setup, facilitation techniques, customization, and best practices for running effective design thinking sessions.

### Who Should Use This Guide

- Workshop facilitators
- Design thinking trainers
- Educators and teachers
- Team leads running innovation sessions
- Consultants facilitating client workshops
- HR professionals running team building
- Innovation coaches

### What Makes a Good Facilitator

**Key Skills:**
- Time management
- Group energy management
- Encouraging participation
- Managing diverse perspectives
- Keeping momentum
- Handling challenges gracefully

**Mindset:**
- Defer judgment
- Encourage wild ideas
- Build on contributions
- Stay focused on users
- Embrace iteration

---

## Workshop Planning

### Workshop Formats

#### Quick Sprint (20-30 minutes)
**Best for:**
- Lunch and learns
- Team energizers
- Introduction to design thinking
- Quick ideation sessions

**Setup:**
- Use default challenges
- Standard 3-minute timer
- Solo or small teams (2-3 people)
- Focus on speed and energy

#### Standard Workshop (45-60 minutes)
**Best for:**
- Training sessions
- Team workshops
- Classroom activities
- Client kickoffs

**Setup:**
- Custom challenges relevant to audience
- Adjust timer based on group size
- Teams of 3-5 people
- Include debrief time

#### Deep Dive Session (90-120 minutes)
**Best for:**
- Innovation workshops
- Strategic planning
- Complex problem-solving
- Multi-round sprints

**Setup:**
- Multiple custom challenges
- Longer timer (5-10 minutes)
- Multiple rounds
- Extensive debrief and discussion
- Export and share results

### Participant Numbers

**Solo Mode:**
- Individual learning
- Self-paced exploration
- Portfolio development
- Pre-workshop practice

**Small Groups (2-5 people):**
- Ideal for collaboration
- Everyone contributes
- Easy to manage
- Good energy

**Medium Groups (6-12 people):**
- Split into 2-3 teams
- Run parallel sprints
- Compare results
- Rich discussion

**Large Groups (13+ people):**
- Multiple teams
- Stagger start times
- Assign facilitator helpers
- Plan longer debrief

### Time Allocation

**20-Minute Sprint:**
- Intro: 2 min
- Empathize: 2 min
- Ideate: 3 min (timer)
- Select: 2 min
- Prototype: 5 min
- Iterate: 3 min
- Debrief: 3 min

**45-Minute Workshop:**
- Intro & Setup: 5 min
- Sprint: 20 min
- Discussion: 10 min
- Second round (optional): 20 min
- Wrap-up: 5 min

**90-Minute Deep Dive:**
- Introduction: 10 min
- First sprint: 25 min
- Debrief: 15 min
- Second sprint (different challenge): 25 min
- Group sharing: 10 min
- Reflection & next steps: 5 min

---

## Pre-Workshop Setup

### Technical Preparation

**1-2 Days Before:**

- [ ] Test the game on your computer
- [ ] Ensure internet connection for CDN loads
- [ ] Test screen sharing if remote
- [ ] Test projector if in-person
- [ ] Verify download functionality
- [ ] Test PDF export
- [ ] Check email integration
- [ ] Test image upload feature

**Day Of:**

- [ ] Open game 15 minutes early
- [ ] Load all CDN resources
- [ ] Test offline functionality
- [ ] Have backup browser ready
- [ ] Clear any previous session data
- [ ] Import challenge pack if needed
- [ ] Configure timer duration
- [ ] Set challenge selection

### Challenge Preparation

**Using Default Challenges:**

Review the 4 default challenges:
1. Campus Coffee Crisis (Education)
2. Remote Team Disconnect (Business)
3. Sustainable Shopping Struggle (Sustainability)
4. Fitness Motivation Gap (Healthcare)

**Creating Custom Challenges:**

For maximum relevance, create challenges specific to your audience:

**Corporate Workshop:**
```
Title: Cross-Department Communication
Description: Teams in different departments struggle
to share information effectively, leading to
duplicated work and missed opportunities.
Persona: Maria, a project manager coordinating
between engineering and marketing teams
Pain Point: Spends hours in meetings trying to
align teams, information gets lost in email chains
Topic: Business
```

**Education Setting:**
```
Title: Student Engagement in Online Classes
Description: Students in virtual classrooms feel
disconnected and struggle to stay focused during
long video lectures.
Persona: Alex, a college sophomore taking all
classes remotely
Pain Point: Finds it hard to concentrate during
2-hour Zoom lectures, misses the energy of
in-person discussions
Topic: Education
```

**Healthcare Context:**
```
Title: Patient Medication Adherence
Description: Patients with chronic conditions
often forget to take medications or don't
understand proper dosing schedules.
Persona: Robert, a 68-year-old managing diabetes
and high blood pressure
Pain Point: Confused by multiple prescriptions,
forgets doses, unsure about timing with meals
Topic: Healthcare
```

**Tips for Custom Challenges:**
- Make it relevant to participants' work
- Use real problems they face
- Be specific about the persona
- Focus on observable pain points
- Keep scope manageable for 20-minute sprint
- Assign appropriate topic for organization

### Challenge Import/Export Strategy

**Building Challenge Libraries:**

1. **Create themed challenge packs:**
   - Export challenges by topic
   - Name files clearly: `healthcare-challenges.json`
   - Share with co-facilitators
   - Build reusable library

2. **Collaborate with other facilitators:**
   - Share challenge JSON files
   - Build on each other's work
   - Create industry-specific packs
   - Maintain version control

3. **Pre-load challenges before workshop:**
   - Import relevant challenge pack
   - Test each challenge
   - Enable only needed challenges
   - Disable irrelevant ones

**Example Challenge Pack Structure:**

*startup-challenges.json:*
- Product-market fit
- User acquisition
- Funding pitch
- Team scaling
- Customer retention

*education-challenges.json:*
- Student engagement
- Assessment methods
- Accessibility
- Remote learning
- Parent communication

**JSON Format for Challenge Packs:**
```json
{
  "version": "1.0",
  "exportDate": "2025-10-05T12:00:00Z",
  "challenges": [
    {
      "title": "Challenge Title",
      "description": "Problem description",
      "persona": "User persona",
      "painPoint": "Main pain point",
      "topic": "Business"
    }
  ]
}
```

### Timer Configuration

**Choose timer duration based on:**

**Group Size:**
- 1-3 people: 3 minutes (default)
- 4-6 people: 5 minutes
- 7-10 people: 7-10 minutes
- 10+ people: Consider multiple teams

**Challenge Complexity:**
- Simple, familiar: 3 minutes
- Moderate complexity: 5 minutes
- Complex, technical: 7-10 minutes

**Workshop Energy:**
- High energy, fast-paced: 1-3 minutes
- Balanced: 3-5 minutes
- Thoughtful, deep: 5-10 minutes

**Experience Level:**
- First-timers: 5 minutes (less pressure)
- Experienced: 3 minutes (challenge them)
- Mixed group: 5 minutes (accommodate all)

**Timer Presets Available:**
- 60 seconds (1 minute)
- 180 seconds (3 minutes) - Default
- 300 seconds (5 minutes)
- 600 seconds (10 minutes)
- Custom: 30-1800 seconds

### Materials Checklist

**Digital:**
- [ ] Game file (index.html) accessible
- [ ] Challenge JSON files (if using imports)
- [ ] Backup browser installed
- [ ] Screen sharing tested
- [ ] Recording setup (if recording)
- [ ] Image examples (if demonstrating uploads)

**Physical (In-Person):**
- [ ] Projector and screen
- [ ] Backup laptop
- [ ] Power cables
- [ ] Whiteboard for debrief
- [ ] Markers
- [ ] Printed handouts (optional)
- [ ] Paper for sketching (if using image uploads)

**Communication:**
- [ ] Workshop link/location shared
- [ ] Pre-work sent (if any)
- [ ] Zoom/meeting link tested
- [ ] Backup communication method

---

## Running the Workshop

### Opening (5-10 minutes)

**1. Welcome and Context**
```
"Welcome! Today we're going to practice design thinking
using an interactive game. Design thinking is a human-
centered approach to innovation that helps us solve
problems creatively."
```

**2. Explain the Game**
- 5 phases of design thinking
- Gamified with points
- 20-30 minutes to complete
- Focus on quantity and creativity
- No wrong answers
- Can upload images to prototypes

**3. Set Expectations**
- Defer judgment
- Build on ideas
- Go for quantity
- Stay focused
- Be visual (if using images)
- Encourage wild ideas

**4. Technical Setup**
- Show the game interface
- Explain navigation
- Demonstrate one phase
- Show image upload feature
- Answer questions

### Facilitating Each Phase

#### Phase 1: Empathize (3-5 minutes)

**Your Role:**
- Read the challenge aloud
- Emphasize the persona and pain point
- Explain HMW format
- Give example if needed

**Example Facilitation:**
```
"Let's read our challenge together. Notice the specific
person we're designing for and their pain point. Now,
let's reframe this as an opportunity using 'How Might We.'

Remember: Focus on the human need, not the solution yet.
Start with 'How might we help [persona] to [goal] so
that [benefit]?'"
```

**Common Issues:**
- Solution jumping: "Let's stay focused on the need first"
- Too vague: "Can we be more specific about who we're helping?"
- Missing HMW: "Try starting with 'How might we...'"

#### Phase 2: Ideate (3-10 minutes)

**Your Role:**
- Start the timer
- Keep energy high
- Encourage wild ideas
- Prevent judgment
- Call out time remaining

**Facilitation Script:**
```
"Now we're going to generate as many ideas as possible.
I'm starting the timer for [X] minutes. Don't filter
yourself—write everything down. Wild ideas welcome!
Think: What would Apple do? What if budget was unlimited?
What's the opposite of obvious?"
```

**Energy Management:**
- 2:30 remaining: "Great momentum!"
- 1:30 remaining: "Push for a few more!"
- 0:30 remaining: "Final sprint!"
- 0:00: "Time! Let's see what we created."

**Encouraging Participation:**
- "I see some great ideas coming in!"
- "Don't hold back—all ideas are valid"
- "Build on what you're seeing"
- "What's the craziest idea you can think of?"

#### Phase 3: Select (3-5 minutes)

**Your Role:**
- Explain selection criteria
- Give time to review ideas
- Facilitate discussion (team mode)
- Encourage diverse selection

**Facilitation Script:**
```
"Now let's select our top 3 ideas. Consider:
- Desirability: Will users want this?
- Feasibility: Can we build it?
- Viability: Does it make business sense?
- Innovation: How fresh is the approach?

Take a moment to review all ideas, then select 3."
```

**For Teams:**
- Allow brief discussion
- Encourage different perspectives
- Vote if needed
- Aim for consensus

#### Phase 4: Prototype (5-10 minutes)

**Your Role:**
- Explain prototype concept
- Emphasize low-fidelity
- Encourage image uploads
- Focus on testability

**Facilitation Script:**
```
"Now describe a simple prototype for your best idea.
This isn't about perfection—it's about making it
tangible enough to test. Include:
- One-sentence pitch
- Key features
- User scenario
- How you'd test it in 48 hours

You can also upload sketches or images! Up to 3 images,
each under 5MB. Sketch on paper and photograph it, or
use any drawing tool you have."
```

**Image Upload Guidance:**
- "Sketch on paper and photograph it"
- "Use any drawing tool you have"
- "Storyboards work great"
- "Wireframes if you have them"
- "Up to 3 images, under 5MB each"
- "PNG, JPG, JPEG, GIF, or SVG formats"
- "Images will appear in your PDF export"

#### Phase 5: Iterate (3-5 minutes)

**Your Role:**
- Frame as reflection
- Use I Like, I Wish, What If
- Encourage honest assessment
- Focus on learning

**Facilitation Script:**
```
"Final phase: reflection and iteration. Use this framework:
- I LIKE: What's working in this concept?
- I WISH: What needs improvement?
- WHAT IF: What new possibilities could we explore?

Also think: What's the smallest version we could test?"
```

### Debrief and Discussion (10-20 minutes)

**Key Questions:**

**Process Reflection:**
- "How did the HMW statement change your thinking?"
- "What was challenging about rapid ideation?"
- "How did you decide which ideas to select?"
- "What surprised you in this process?"
- "Did anyone use images? How did that help?"

**Learning Outcomes:**
- "What did you learn about design thinking?"
- "How might you use this in your work?"
- "What phase was most valuable?"
- "What would you do differently next time?"

**Sharing Results:**
- Have teams present top concepts
- Show images if uploaded
- Compare different approaches
- Discuss common themes
- Celebrate creativity

**Next Steps:**
- "How could you test this idea?"
- "Who would you talk to next?"
- "What resources would you need?"
- "What's your next action?"

---

## Challenge Management for Facilitators

### Creating Workshop-Specific Challenges

**Industry-Specific Examples:**

**Technology Company:**
```json
{
  "title": "Developer Onboarding Experience",
  "description": "New developers joining the team struggle to set up their development environment and understand the codebase architecture.",
  "persona": "Sam, a senior developer joining from another company",
  "painPoint": "Spends first week troubleshooting setup issues instead of contributing code",
  "topic": "Technology"
}
```

**Retail Business:**
```json
{
  "title": "In-Store to Online Transition",
  "description": "Long-time customers who prefer shopping in physical stores are hesitant to try online ordering.",
  "persona": "Linda, a 55-year-old loyal customer who visits the store weekly",
  "painPoint": "Finds the website confusing and misses the personal service of in-store shopping",
  "topic": "Business"
}
```

**Non-Profit:**
```json
{
  "title": "Volunteer Engagement and Retention",
  "description": "Volunteers sign up enthusiastically but often don't return after their first experience.",
  "persona": "Marcus, a 30-year-old professional wanting to give back to the community",
  "painPoint": "Unclear expectations, poor communication, and feeling like his time wasn't well-used",
  "topic": "Social Impact"
}
```

### Challenge Selection Strategies

**For Mixed Groups:**
- Enable challenges from multiple topics
- Let randomness create variety
- Discuss how different contexts apply

**For Focused Workshops:**
- Enable only relevant topic challenges
- Disable default challenges if not applicable
- Create 3-5 custom challenges for variety

**For Training Series:**
- Week 1: Education challenges (familiar)
- Week 2: Business challenges (relevant)
- Week 3: Custom challenges (applied)
- Week 4: Participant-created challenges

**Using Challenge Selection Feature:**
1. Open Settings before workshop
2. Go to Challenge Selection section
3. Review all available challenges
4. Uncheck challenges not relevant to audience
5. Ensure at least one challenge enabled
6. Test by starting a practice sprint

### Building Challenge Libraries

**Create Reusable Packs:**

1. **Workshop Warm-ups** (easy, fun challenges)
2. **Industry Deep-Dives** (sector-specific)
3. **Advanced Challenges** (complex problems)
4. **Client-Specific** (real business problems)

**Sharing with Co-Facilitators:**
- Export after each workshop
- Name files descriptively
- Include version/date in filename
- Share via cloud storage
- Document which worked best

**Example File Naming:**
- `healthcare-workshop-2025-10.json`
- `startup-challenges-v2.json`
- `education-k12-challenges.json`
- `corporate-innovation-pack.json`

---

## Timer and Pacing Strategies

### Timer Duration Guidelines

**Fast-Paced Workshop (60 seconds):**
- **Use for:** Energizers, warm-ups, large groups
- **Energy:** High, exciting, pressure
- **Outcome:** Quantity over quality
- **Best with:** Experienced participants

**Standard Pace (180 seconds):**
- **Use for:** Most workshops, balanced approach
- **Energy:** Moderate, focused
- **Outcome:** Good balance
- **Best with:** Mixed experience levels

**Thoughtful Pace (300-600 seconds):**
- **Use for:** Complex challenges, small groups
- **Energy:** Calm, deep thinking
- **Outcome:** Quality and depth
- **Best with:** Technical or complex topics

### Configuring Timer Before Workshop

**In Settings Modal:**
1. Click Settings icon on intro screen
2. Scroll to "Timer Settings" section
3. Choose preset or enter custom duration
4. Timer applies to all sprints in session

**Preset Buttons:**
- 60s: Quick energizer
- 180s: Standard (default)
- 300s: Extended ideation
- 600s: Deep exploration

**Custom Input:**
- Enter any value 30-1800 seconds
- Validation prevents invalid ranges
- Good for specific workshop needs

### Adjusting Mid-Workshop

**If Group is Struggling:**
- Pause and provide more prompts
- Give examples
- Reduce pressure
- Note: Can't change timer mid-sprint, but can adjust for next round

**If Group is Flying:**
- Keep standard timer
- Challenge them to go deeper
- Add constraints
- Increase difficulty in next round

**Reading the Room:**
- Watch body language
- Listen to energy level
- Check idea quantity
- Adjust for next sprint

### Multiple Round Strategies

**Round 1: Warm-up**
- Short timer (60s)
- Easy challenge
- Build confidence
- Focus on process

**Round 2: Main Event**
- Standard timer (180s)
- Relevant challenge
- Apply learnings
- Full engagement

**Round 3: Challenge Mode**
- Longer timer (300-600s)
- Complex challenge
- Deep exploration
- Advanced techniques

---

## Remote Facilitation

### Technical Setup

**Before Workshop:**
- Test screen sharing quality
- Ensure audio is clear
- Have backup communication (chat)
- Test game in shared screen
- Verify participants can see clearly
- Test image upload if demonstrating

**Platform Recommendations:**
- Zoom: Best for screen sharing
- Teams: Good for corporate
- Google Meet: Simple and accessible
- Any platform with screen share works

### Remote Facilitation Techniques

**Engagement Strategies:**
- Use chat for quick responses
- Polls for decisions
- Breakout rooms for team mode
- Reactions for energy
- Camera on for connection

**Running the Game Remotely:**

**Option 1: Facilitator Drives**
- You share screen with game open
- Participants call out ideas
- You type them in
- Everyone sees same screen
- Good for large groups

**Option 2: Participants Drive**
- Everyone opens game individually
- You facilitate verbally
- They work independently
- Share results at end
- Good for solo mode practice

**Option 3: Hybrid**
- Breakout rooms with teams
- One person per team drives
- Teams work independently
- Return to main room to share
- Good for team mode

### Managing Remote Energy

**Keep It Moving:**
- Shorter phases than in-person
- More frequent check-ins
- Use timer pressure positively
- Celebrate contributions

**Encourage Participation:**
- Call on quiet participants
- Use chat for introverts
- Breakout rooms for discussion
- Vary interaction modes

**Technical Troubleshooting:**
- Have backup facilitator
- Use chat if audio fails
- Screen share backup plan
- Record session (with permission)

---

## Exporting and Sharing Results

### Export Options Overview

**Text Export:**
- Quick documentation
- Email attachments
- Plain text format
- Includes note about images

**PDF Export:**
- Professional formatting
- Embedded images
- Client-ready
- Portfolio quality

**Email Integration:**
- Direct sharing
- Pre-populated content
- Opens email client
- Manual image attachment needed

**Copy to Clipboard:**
- Quick sharing
- Chat/Slack friendly
- Summary format
- No images

### During Workshop

**Real-Time Sharing:**
- Screen share results screen
- Read highlights aloud
- Show uploaded images
- Celebrate achievements
- Discuss as group

**Individual Review:**
- Give time to read own results
- Reflect privately first
- Then share with group
- Respect different paces

### Post-Workshop Distribution

**Immediate Distribution:**
1. Have each team download PDF
2. Collect PDFs via email or shared folder
3. Send to all participants
4. Include workshop summary

**Email Integration Use:**
1. Click "Email Results" on completion screen
2. Enter stakeholder emails
3. Customize subject and message
4. Send from email client
5. Manually attach images if needed

**Creating Workshop Reports:**

Compile multiple team results:

1. Collect all team PDFs
2. Create summary document
3. Include:
   - Workshop overview
   - Challenge used
   - Number of participants
   - Key themes across teams
   - Standout ideas
   - Images from prototypes
   - Next steps

**Workshop Summary Template:**
```
DESIGN THINKING WORKSHOP SUMMARY
Date: [Date]
Facilitator: [Name]
Participants: [Number] people in [Number] teams
Challenge: [Challenge Title] ([Topic])

TEAM RESULTS:
Team 1: [Top concept] - [Brief description]
Team 2: [Top concept] - [Brief description]
Team 3: [Top concept] - [Brief description]

COMMON THEMES:
- [Theme 1]
- [Theme 2]
- [Theme 3]

STANDOUT IDEAS:
1. [Idea with description]
2. [Idea with description]
3. [Idea with description]

VISUAL HIGHLIGHTS:
[Include screenshots of best prototype images]

NEXT STEPS:
- [Action item 1]
- [Action item 2]
- [Action item 3]

ATTACHMENTS:
- Team 1 PDF (with images)
- Team 2 PDF (with images)
- Team 3 PDF (with images)
```

### Follow-Up Strategies

**Immediate (Same Day):**
- Email PDFs to participants
- Share photos/screenshots
- Send thank you message
- Provide resources

**Short-Term (1 Week):**
- Share compiled summary
- Highlight best ideas
- Propose next steps
- Schedule follow-up

**Long-Term (1 Month):**
- Check on implementation
- Share success stories
- Offer additional workshops
- Build on momentum

---

## Troubleshooting During Workshops

### Common Technical Issues

**Game Won't Load:**
- **Cause:** No internet for CDN
- **Fix:** Use different browser, check connection
- **Prevention:** Load game 15 min early

**Download Not Working:**
- **Cause:** Browser permissions
- **Fix:** Use "Copy to Clipboard" or Email instead
- **Prevention:** Test before workshop

**PDF Export Fails:**
- **Cause:** Browser compatibility, large images
- **Fix:** Try different browser, use text export
- **Prevention:** Test PDF export in advance

**Timer Not Starting:**
- **Cause:** Browser issue
- **Fix:** Refresh page, restart phase
- **Prevention:** Test timer in advance

**Images Won't Upload:**
- **Cause:** File too large (>5MB) or wrong format
- **Fix:** Resize image, convert format, use different file
- **Prevention:** Explain limits upfront (5MB, PNG/JPG/JPEG/GIF/SVG)

**Image Upload Slow:**
- **Cause:** Large file size
- **Fix:** Resize before uploading
- **Prevention:** Recommend smaller images (under 2MB)

**Email Button Opens Nothing:**
- **Cause:** No default email client configured
- **Fix:** Use PDF or text export instead
- **Prevention:** Mention this limitation upfront

### Participant Challenges

**"I Can't Think of Ideas":**
- Provide prompts
- Give examples
- Reduce pressure
- Extend timer (next round)
- Encourage building on others

**"This Challenge Isn't Relevant":**
- Reframe to their context
- Ask how it relates
- Switch challenges (if multiple enabled)
- Create custom challenge on the fly

**"We're Stuck on Selection":**
- Review criteria
- Vote if needed
- Time-box discussion
- Remind: no perfect answer

**"Our Prototype Is Too Simple":**
- Reinforce: simple is good
- Focus on testability
- Add one detail
- Emphasize learning over perfection
- Suggest adding a sketch/image

**"How Do I Upload Images?":**
- Click "Upload Image" button
- Select file from computer
- Max 3 images, 5MB each
- PNG, JPG, JPEG, GIF, SVG formats
- Images appear as thumbnails

**"My Image Is Too Large":**
- Resize image before uploading
- Use image compression tool
- Take lower resolution photo
- Crop unnecessary parts

### Group Dynamics

**Dominant Participant:**
- Thank them for enthusiasm
- Invite others specifically
- Use round-robin
- Breakout rooms

**Quiet Group:**
- Smaller teams
- Written before verbal
- Anonymous idea submission
- Lower stakes

**Off-Topic Discussion:**
- Acknowledge interest
- Redirect gently
- Park for later
- Stay on schedule

**Conflict Over Ideas:**
- Remind: defer judgment
- All ideas valid
- Focus on user needs
- Vote if needed

---

## Advanced Facilitation Techniques

### Multi-Round Workshops

**Progressive Difficulty:**
1. Round 1: Familiar challenge, short timer (60s)
2. Round 2: Relevant challenge, standard timer (180s)
3. Round 3: Complex challenge, longer timer (300s)

**Topic Exploration:**
1. Round 1: Education challenge
2. Round 2: Business challenge
3. Round 3: Healthcare challenge
4. Debrief: Compare approaches across contexts

**Iteration Practice:**
1. Round 1: Complete sprint
2. Round 2: Same challenge, different approach
3. Compare: How did thinking evolve?

### Competitive Elements

**Team Scoring:**
- Track scores across teams
- Friendly competition
- Bonus points for creativity
- Bonus for image uploads
- Celebrate all teams

**Speed Challenges:**
- Shortest timer wins
- Most ideas wins
- Best HMW statement
- Most innovative prototype
- Best visual prototype (with images)

**Themed Sprints:**
- "Sustainability Solutions"
- "Tech-Free Ideas"
- "Under $100 Budget"
- "Visual Thinking" (must use images)
- "Opposite Day" (reverse assumptions)

### Integration with Other Methods

**Combine with:**
- Lean Canvas
- Business Model Canvas
- User Story Mapping
- Journey Mapping
- Stakeholder Analysis

**Before the Game:**
- User research
- Problem definition
- Stakeholder interviews
- Context setting

**After the Game:**
- Prototype building
- User testing
- Iteration cycles
- Implementation planning

### Customization for Specific Audiences

**For Students:**
- Relatable challenges
- Shorter phases
- More guidance
- Portfolio focus
- Grade-friendly exports (PDF)

**For Executives:**
- Business-focused challenges
- Faster pace
- Strategic framing
- Professional exports (PDF)
- ROI discussion

**For Designers:**
- Complex challenges
- Longer ideation
- Image uploads emphasized
- Critique and feedback
- Portfolio quality

**For Non-Designers:**
- Extra explanation
- More examples
- Confidence building
- Celebrate all contributions
- Demystify design thinking

---

## Quick Reference

### Pre-Workshop Checklist
- [ ] Game tested and loaded
- [ ] Challenges prepared/imported
- [ ] Timer duration set
- [ ] Challenge selection configured
- [ ] Screen sharing tested
- [ ] PDF export tested
- [ ] Image upload tested
- [ ] Backup plan ready
- [ ] Materials prepared
- [ ] Participants notified

### Facilitation Reminders
- Defer judgment
- Encourage wild ideas
- Keep energy high
- Watch the time
- Celebrate contributions
- Promote visual thinking
- Stay flexible
- Have fun!

### Export Options Summary
- **Text:** Quick documentation, includes image note
- **PDF:** Professional reports with embedded images
- **Email:** Direct sharing, manual image attachment
- **Clipboard:** Fast informal sharing, no images

### Timer Presets
- **60s:** Energizer, warm-up
- **180s:** Standard, balanced (default)
- **300s:** Thoughtful, deeper
- **600s:** Complex, thorough
- **Custom:** 30-1800 seconds

### Image Upload Specs
- **Formats:** PNG, JPG, JPEG, GIF, SVG
- **Max Size:** 5MB per image
- **Max Count:** 3 images per prototype
- **Best Practice:** Under 2MB for faster upload

### Challenge Topics
- Education
- Business
- Healthcare
- Technology
- Sustainability
- Social Impact
- Product Design
- Service Design
- Custom

---

## Additional Resources

### Recommended Reading
- IDEO Design Thinking resources
- "Sprint" by Jake Knapp
- "Creative Confidence" by Tom and David Kelley
- Stanford d.school materials

### Online Communities
- Design thinking forums
- Facilitator networks
- Innovation communities
- Workshop facilitation groups

### Continuing Education
- Facilitation training
- Design thinking certification
- Workshop design courses
- Remote facilitation skills
- Visual thinking workshops

---

**Happy Facilitating! 🎯**

Remember: The best facilitators create space for others to shine. Your role is to guide, encourage, and celebrate the creativity of your participants.

---

_Last Updated: October 2025_
_Facilitator Guide Version: 3.0_
