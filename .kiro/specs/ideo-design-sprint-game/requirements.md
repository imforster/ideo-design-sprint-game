# Requirements Document

## Introduction

The IDEO Design Sprint Game is an interactive web-based educational tool that teaches design thinking methodology through gamification. The application guides users (solo or teams) through the five phases of the IDEO design process: Empathize, Ideate, Select, Prototype, and Iterate. Users work on real-world design challenges, earn points for creative thinking, and can export their results for sharing or documentation.

The game serves as both a learning tool for individuals new to design thinking and a facilitation tool for workshops and team exercises. It provides structured guidance through each phase while encouraging creativity and collaboration.

## Requirements

### Requirement 1: Game Mode Selection

**User Story:** As a user, I want to choose between solo, team, and collaborative modes, so that I can practice design thinking individually, with a local team, or with remote participants in real-time.

#### Acceptance Criteria

1. WHEN the user launches the application THEN the system SHALL display an intro screen with three mode options: Solo Mode, Team Mode, and Collaborative Mode
2. WHEN the user selects Solo Mode THEN the system SHALL proceed to the game start screen without requiring team setup
3. WHEN the user selects Team Mode THEN the system SHALL display team setup fields for team name and team member names
4. IF Team Mode is selected AND the user attempts to start without entering a team name or adding at least one team member THEN the system SHALL display an error message and prevent game start
5. WHEN the user selects Collaborative Mode THEN the system SHALL display options to either create a new session or join an existing session
6. WHEN the user is in mode selection THEN the system SHALL display game information including estimated duration (15-20 min), potential points (100+), and available challenges count

### Requirement 2: Challenge Management

**User Story:** As a facilitator, I want to create and manage custom design challenges, so that I can tailor the game to specific learning objectives or contexts.

#### Acceptance Criteria

1. WHEN the user opens the settings modal THEN the system SHALL display a list of default challenges and any custom challenges
2. WHEN the user clicks "Add Challenge" THEN the system SHALL display a form with fields for title, description, persona, and pain point
3. WHEN the user submits a new challenge with all required fields filled THEN the system SHALL add the challenge to the available challenges pool
4. IF the user attempts to submit a challenge with missing fields THEN the system SHALL display an error message and prevent submission
5. WHEN a game starts THEN the system SHALL randomly select one challenge from the combined pool of default and custom challenges
6. WHEN the system displays a challenge THEN it SHALL show the title, description, persona, and pain point to provide context

### Requirement 3: Empathize Phase

**User Story:** As a player, I want to create a "How Might We" statement, so that I can reframe the challenge as an opportunity focused on human needs.

#### Acceptance Criteria

1. WHEN the Empathize phase begins THEN the system SHALL display the challenge details and instructions to create a "How Might We" statement
2. WHEN the system displays instructions THEN it SHALL include a tip: "Focus on the human need, not the solution. Start with 'How might we help [persona] to [goal] so that [benefit]?'"
3. WHEN the user submits input THEN the system SHALL validate that the text includes "how might we" (case-insensitive)
4. IF the submission does not include "how might we" THEN the system SHALL display an alert message prompting the user to start with "How might we..."
5. WHEN a valid "How Might We" statement is submitted THEN the system SHALL award 20 points, save the statement, and advance to the Ideate phase

### Requirement 4: Ideate Phase with Timer

**User Story:** As a player, I want to rapidly generate ideas with a timer, so that I can practice divergent thinking without overthinking.

#### Acceptance Criteria

1. WHEN the Ideate phase begins THEN the system SHALL display instructions to "Generate wild ideas! No judgment, go for quantity!"
2. WHEN the Ideate phase begins THEN the system SHALL provide a timer option starting at 180 seconds (3 minutes)
3. WHEN the user starts the timer THEN the system SHALL count down and display remaining time
4. WHEN the user enters an idea and presses Enter THEN the system SHALL add the idea to the list and award 5 points
5. IF Team Mode is active AND a player name is set THEN the system SHALL attribute each idea to the player who submitted it
6. WHEN the timer reaches zero OR the user has submitted at least 5 ideas THEN the system SHALL allow progression to the Select phase
7. WHEN the Ideate phase is active THEN the system SHALL display a tip: "Think: What would Apple do? What if budget was unlimited? What's the opposite of obvious?"

### Requirement 5: Select Phase

**User Story:** As a player, I want to select my top 3 ideas based on specific criteria, so that I can practice convergent thinking and prioritization.

#### Acceptance Criteria

1. WHEN the Select phase begins THEN the system SHALL display all generated ideas as selectable items
2. WHEN the system displays instructions THEN it SHALL specify selection criteria: Desirability, Feasibility, and Innovation
3. WHEN the user clicks an idea THEN the system SHALL toggle its selection state
4. WHEN the user selects ideas THEN the system SHALL allow selection of up to 3 ideas maximum
5. WHEN the user completes selecting 3 ideas THEN the system SHALL award 20 points and enable progression to the Prototype phase
6. WHEN the Select phase is active THEN the system SHALL display a tip: "Look for ideas that users want, you can build, and that feel fresh or unexpected."

### Requirement 6: Prototype Phase

**User Story:** As a player, I want to describe a simple prototype for my best idea, so that I can practice thinking about rapid testing and validation.

#### Acceptance Criteria

1. WHEN the Prototype phase begins THEN the system SHALL display the top 3 selected ideas for reference
2. WHEN the system displays instructions THEN it SHALL ask "Describe a simple prototype for your best idea. How would you test it in 48 hours?"
3. WHEN the user submits a prototype description THEN the system SHALL validate that it contains at least 20 characters
4. IF the description is less than 20 characters THEN the system SHALL display an alert requesting more detail
5. WHEN a valid prototype description is submitted THEN the system SHALL award 30 points, save the description, and advance to the Iterate phase
6. WHEN the Prototype phase is active THEN the system SHALL display a tip: "Keep it rough! Sketch, storyboard, or role-play. The goal is to learn, not to perfect."

### Requirement 7: Iterate Phase and Completion

**User Story:** As a player, I want to reflect on improvements and iterations, so that I can practice the continuous improvement mindset of design thinking.

#### Acceptance Criteria

1. WHEN the Iterate phase begins THEN the system SHALL display instructions to reflect on feedback and improvements
2. WHEN the system displays instructions THEN it SHALL ask "What feedback would improve this? What's the smallest testable version?"
3. WHEN the user submits iteration notes THEN the system SHALL validate that it contains at least 15 characters
4. IF the notes are less than 15 characters THEN the system SHALL display an alert requesting more thoughts
5. WHEN valid iteration notes are submitted THEN the system SHALL award 25 points and transition to the completion screen
6. WHEN the Iterate phase is active THEN the system SHALL display a tip: "Use: I like... I wish... What if... to refine your concept."

### Requirement 8: Results and Export

**User Story:** As a player, I want to view, download, and share my design sprint results, so that I can document my work and share insights with others.

#### Acceptance Criteria

1. WHEN the game is completed THEN the system SHALL display a completion screen with total score and a summary of all phases
2. WHEN the completion screen is displayed THEN it SHALL show: challenge title, team name (if applicable), team members (if applicable), How Might We statement, ideas count, top 3 ideas, prototype description, and iteration notes
3. WHEN the user clicks "Download Results" THEN the system SHALL generate a text file containing all sprint information formatted for readability
4. WHEN the user clicks "Copy to Clipboard" THEN the system SHALL copy a formatted summary to the clipboard
5. WHEN the user clicks "Share" THEN the system SHALL display a modal with sharing options and a summary preview
6. WHEN results are exported THEN the system SHALL include metadata: date, score, and attribution

### Requirement 9: Progress Tracking and Scoring

**User Story:** As a player, I want to see my progress and score throughout the game, so that I can stay motivated and understand my performance.

#### Acceptance Criteria

1. WHEN the game is in progress THEN the system SHALL display the current score prominently in the header
2. WHEN the user completes an action that awards points THEN the system SHALL immediately update the displayed score
3. WHEN the game is in progress THEN the system SHALL display a phase progress indicator showing all 5 phases and highlighting the current phase
4. WHEN each phase is displayed THEN it SHALL show a unique icon and color: Empathize (blue, Users icon), Ideate (yellow, Lightbulb icon), Select (green, Target icon), Prototype (purple, Rocket icon), Iterate (pink, RefreshCw icon)
5. WHEN the user is in a phase THEN the system SHALL display phase-specific instructions and tips

### Requirement 10: Navigation and Game Control

**User Story:** As a player, I want to navigate through the game and restart if needed, so that I can control my learning experience.

#### Acceptance Criteria

1. WHEN the user is on the intro screen with a mode selected THEN the system SHALL display a "Back" button to return to mode selection
2. WHEN the user completes the game THEN the system SHALL display options to "Try New Challenge" or "Back to Start"
3. WHEN the user clicks "Try New Challenge" THEN the system SHALL start a new game with the same mode but a different random challenge
4. WHEN the user clicks "Back to Start" THEN the system SHALL return to the intro screen and reset mode selection
5. WHEN a new game starts THEN the system SHALL reset all state: score to 0, phase to 0, clear all inputs and selections

### Requirement 11: Responsive Design and Accessibility

**User Story:** As a user on any device, I want the interface to be responsive and accessible, so that I can use the game comfortably regardless of my device or abilities.

#### Acceptance Criteria

1. WHEN the application is viewed on different screen sizes THEN the system SHALL adapt the layout appropriately using responsive design
2. WHEN interactive elements are displayed THEN they SHALL have appropriate hover states and visual feedback
3. WHEN forms are displayed THEN input fields SHALL have clear labels and placeholder text
4. WHEN the user interacts with buttons THEN they SHALL have appropriate disabled states when actions are not available
5. WHEN colors are used to convey information THEN they SHALL have sufficient contrast for readability

### Requirement 12: PDF Export

**User Story:** As a player, I want to export my design sprint results as a professionally formatted PDF, so that I can easily share polished reports with stakeholders and include them in presentations.

#### Acceptance Criteria

1. WHEN the completion screen is displayed THEN the system SHALL provide a "Download PDF" button alongside existing export options
2. WHEN the user clicks "Download PDF" THEN the system SHALL generate a PDF document containing all sprint results
3. WHEN the PDF is generated THEN it SHALL include: header with title and date, challenge information, team details (if applicable), HMW statement, all generated ideas, top 3 selected ideas, prototype description, iteration notes, and final score
4. WHEN the PDF is generated THEN it SHALL use professional formatting with appropriate typography, spacing, and visual hierarchy
5. WHEN the PDF includes multiple ideas THEN they SHALL be formatted as a numbered list with proper pagination
6. WHEN the PDF is created THEN the system SHALL automatically download it with a filename format: `design-sprint-[team-name]-[timestamp].pdf`

### Requirement 13: Email Integration

**User Story:** As a player, I want to email my design sprint results directly from the application, so that I can quickly share outcomes with team members and stakeholders without manual file handling.

#### Acceptance Criteria

1. WHEN the completion screen is displayed THEN the system SHALL provide an "Email Results" button
2. WHEN the user clicks "Email Results" THEN the system SHALL open a modal with email composition fields
3. WHEN the email modal is displayed THEN it SHALL include fields for: recipient email(s), subject line (pre-filled), and optional message
4. WHEN the email modal is displayed THEN the system SHALL show a preview of the content that will be sent
5. WHEN the user submits the email form THEN the system SHALL open the user's default email client with pre-populated content including formatted results
6. WHEN the email is composed THEN it SHALL include all sprint results formatted for email readability with proper line breaks and structure
7. IF the user has uploaded images THEN the system SHALL include instructions for attaching them manually (as email client integration has limitations)

### Requirement 14: Image and Sketch Upload for Prototypes

**User Story:** As a player, I want to upload images or sketches during the prototype phase, so that I can visually communicate my design ideas more effectively than text alone.

#### Acceptance Criteria

1. WHEN the Prototype phase is displayed THEN the system SHALL provide an image upload button alongside the text description field
2. WHEN the user clicks the upload button THEN the system SHALL open a file picker allowing selection of image files (PNG, JPG, JPEG, GIF, SVG)
3. WHEN the user selects an image file THEN the system SHALL validate the file size is under 5MB
4. IF the file size exceeds 5MB THEN the system SHALL display an error message and prevent upload
5. WHEN a valid image is uploaded THEN the system SHALL display a thumbnail preview below the upload button
6. WHEN an image is uploaded THEN the system SHALL allow the user to remove it and upload a different image
7. WHEN multiple images are uploaded THEN the system SHALL support up to 3 images per prototype
8. WHEN the prototype is submitted THEN the system SHALL store the images and display them in the completion screen
9. WHEN results are exported (PDF or download) THEN the system SHALL include the uploaded images in the output
10. WHEN images are displayed THEN they SHALL be shown at an appropriate size with proper aspect ratio preservation

### Requirement 15: Timer Customization

**User Story:** As a facilitator, I want to customize the ideation timer duration, so that I can adapt the game to different workshop formats and time constraints.

#### Acceptance Criteria

1. WHEN the settings modal is opened THEN the system SHALL display a timer customization section
2. WHEN the timer customization section is displayed THEN it SHALL show the current default timer duration (180 seconds)
3. WHEN the timer customization section is displayed THEN it SHALL provide preset options: 1 minute (60s), 3 minutes (180s), 5 minutes (300s), 10 minutes (600s)
4. WHEN the timer customization section is displayed THEN it SHALL provide a custom input field for entering any duration in seconds
5. WHEN the user selects a preset or enters a custom duration THEN the system SHALL validate the input is between 30 and 1800 seconds (30 seconds to 30 minutes)
6. IF the custom duration is outside the valid range THEN the system SHALL display an error message and prevent saving
7. WHEN a valid timer duration is set THEN the system SHALL save it and use it for all subsequent games in the current session
8. WHEN the Ideate phase begins THEN the system SHALL initialize the timer with the configured duration
9. WHEN the timer is displayed during Ideate phase THEN it SHALL show the remaining time in MM:SS format
10. WHEN the settings are displayed THEN the system SHALL show a note that timer settings reset when the browser is closed

### Requirement 16: Challenge Selection and Management

**User Story:** As a facilitator, I want to select which specific challenges will be available when starting a sprint, so that I can curate the exact set of challenges appropriate for my workshop or learning session.

#### Acceptance Criteria

1. WHEN the add challenge form is displayed THEN the system SHALL include a "Topic" field with a dropdown selector
2. WHEN the topic dropdown is displayed THEN it SHALL include predefined options: Education, Business, Healthcare, Technology, Sustainability, Social Impact, Product Design, Service Design, and Custom
3. WHEN the user selects "Custom" from the topic dropdown THEN the system SHALL display a text input field to enter a custom topic name
4. WHEN a custom challenge is saved THEN the system SHALL store the selected or custom topic with the challenge
5. WHEN custom challenges are displayed in the settings modal THEN each challenge SHALL show its associated topic as a colored tag or badge
6. WHEN the settings modal is opened THEN the system SHALL display a "Challenge Selection" section showing all available challenges (default and custom)
7. WHEN the challenge selection section is displayed THEN each challenge SHALL have a checkbox to enable/disable it for use in sprints
8. WHEN the settings modal is first opened THEN all challenges SHALL be enabled by default
9. WHEN a facilitator unchecks a challenge THEN the system SHALL mark it as disabled and exclude it from the random selection pool
10. WHEN at least one challenge is enabled THEN the "Start Design Sprint" button SHALL be available
11. IF all challenges are disabled THEN the system SHALL display a warning message and disable the "Start Design Sprint" button
12. WHEN a new game starts THEN the system SHALL randomly select only from the enabled challenges
13. WHEN challenges are exported or imported THEN the topic information SHALL be included in the data structure
14. WHEN challenges are imported THEN they SHALL be enabled by default

### Requirement 17: Challenge Import from JSON

**User Story:** As a facilitator, I want to import a list of custom challenges from a JSON file, so that I can quickly load pre-prepared challenge sets for workshops without manual entry.

#### Acceptance Criteria

1. WHEN the settings modal is opened THEN the system SHALL display an "Import Challenges" button in the custom challenges section
2. WHEN the user clicks "Import Challenges" THEN the system SHALL open a file picker allowing selection of JSON files
3. WHEN a JSON file is selected THEN the system SHALL validate the file format matches the expected challenge schema
4. WHEN the JSON file is valid THEN the system SHALL parse the challenges and display a preview modal showing the challenges to be imported
5. WHEN the preview modal is displayed THEN it SHALL show: number of challenges, list of challenge titles with topics, and options to "Import All" or "Cancel"
6. WHEN the user confirms import THEN the system SHALL add all challenges from the JSON file to the custom challenges list
7. IF duplicate challenges exist (matching title) THEN the system SHALL skip duplicates and display a summary of skipped items
8. IF the JSON file is invalid or malformed THEN the system SHALL display a clear error message explaining the issue
9. WHEN challenges are imported THEN the system SHALL validate each challenge has required fields: title, description, persona, painPoint, and topic
10. WHEN the settings modal displays custom challenges THEN it SHALL provide an "Export Challenges" button to download current custom challenges as JSON
11. WHEN the user clicks "Export Challenges" THEN the system SHALL generate a JSON file with all custom challenges and download it with filename format: `ideo-challenges-[timestamp].json`

**Expected JSON Schema:**
```json
{
  "challenges": [
    {
      "title": "Challenge Title",
      "description": "Challenge description",
      "persona": "User persona",
      "painPoint": "Main pain point",
      "topic": "Education"
    }
  ],
  "version": "1.0",
  "exportDate": "2025-10-05"
}
```

### Requirement 18: Collaborative Session Management

**User Story:** As a facilitator or team member, I want to create or join real-time collaborative sessions, so that remote participants can work together on design sprints synchronously.

#### Acceptance Criteria

1. WHEN the user selects Collaborative Mode THEN the system SHALL display options to "Create Session" or "Join Session"
2. WHEN creating a session THEN the system SHALL require the user to enter their name
3. WHEN a session is created THEN the system SHALL generate a unique session code and display it prominently
4. WHEN the user clicks "Join Session" THEN the system SHALL display fields for name and session code
5. WHEN a valid session code is entered THEN the system SHALL add the participant to the session and sync their state
6. IF an invalid session code is entered THEN the system SHALL display an error message
7. WHEN a session is active THEN the system SHALL display the session code with a copy button in the game header
8. WHEN the copy button is clicked THEN the system SHALL copy the session code to clipboard and display confirmation
9. WHEN participants join or leave THEN the system SHALL update the participant count in real-time
10. WHEN the session host starts the game THEN all participants SHALL see the same challenge and progress through phases together
11. WHEN any participant submits input THEN all participants SHALL see the updated content in real-time

### Requirement 19: Session Persistence and Restoration

**User Story:** As a collaborative session participant, I want my session to persist across page refreshes, so that I can rejoin without losing progress or having to re-enter the session code.

#### Acceptance Criteria

1. WHEN a user creates or joins a session THEN the system SHALL save session information to localStorage
2. WHEN the user refreshes the page THEN the system SHALL automatically restore the session from localStorage
3. WHEN restoring a session THEN the system SHALL verify the session still exists in the database
4. IF the session no longer exists THEN the system SHALL clear localStorage and return to intro screen
5. WHEN a session is restored THEN the system SHALL sync all game state including current phase, ideas, prototype, and score
6. WHEN a session is restored THEN the system SHALL restore the user's participant ID and role (host or participant)
7. WHEN localStorage contains session data THEN the system SHALL restore it on application mount
8. WHEN a user leaves a session THEN the system SHALL clear session data from localStorage

### Requirement 20: Collaborative Text Editing

**User Story:** As a collaborative session participant, I want to see what my teammates are typing in real-time for HMW statements and prototype descriptions, so that we can collaborate effectively on shared text content.

#### Acceptance Criteria

1. WHEN in Phase 0 (Empathize) in collaborative mode THEN the system SHALL enable real-time text synchronization for the HMW statement
2. WHEN in Phase 3 (Prototype) in collaborative mode THEN the system SHALL enable real-time text synchronization for the prototype description
3. WHEN a participant types in a collaborative text field THEN the system SHALL sync the text to all other participants with a 300ms debounce
4. WHEN a participant is typing THEN the system SHALL display "[Name] is typing..." to other participants
5. WHEN no one is typing THEN the system SHALL clear the typing indicator
6. WHEN text is submitted THEN the system SHALL clear the draft text for all participants
7. WHEN a participant refreshes during Phase 0 or 3 THEN the system SHALL restore the current draft text
8. WHEN participants transition to a new phase THEN the system SHALL clear input fields for all participants
9. WHEN collaborative text editing is active THEN the system SHALL display a helper message explaining that team members can see the text
10. WHEN any participant submits the text THEN the system SHALL save it as final and advance all participants to the next phase

### Requirement 21: Leave Session Confirmation

**User Story:** As a session participant, I want to be warned before leaving a session, so that I don't accidentally disconnect and lose my progress or disrupt the team.

#### Acceptance Criteria

1. WHEN a participant clicks "Leave Session" THEN the system SHALL display a confirmation dialog
2. WHEN the user is the session host THEN the confirmation SHALL warn that leaving will end the session for all participants
3. WHEN the user is a regular participant THEN the confirmation SHALL inform them they can rejoin using the session code
4. WHEN the user confirms leaving THEN the system SHALL remove them from the session participants list
5. WHEN the user confirms leaving THEN the system SHALL clear session data from localStorage
6. WHEN the user confirms leaving THEN the system SHALL return them to the intro screen
7. WHEN the user cancels the leave action THEN the system SHALL close the dialog and keep them in the session
8. WHEN the session host leaves THEN the system SHALL mark the session as ended for all participants
9. WHEN a regular participant leaves THEN other participants SHALL see the updated participant count
10. WHEN the "Leave Session" button is displayed THEN it SHALL be visible during all game phases in the header

### Requirement 22: Real-Time Participant Awareness

**User Story:** As a collaborative session participant, I want to see who else is in the session and identify myself, so that I know who I'm collaborating with and can coordinate effectively.

#### Acceptance Criteria

1. WHEN in a collaborative session THEN the system SHALL display a list of all participants
2. WHEN displaying participants THEN the system SHALL show each participant's name
3. WHEN displaying the current user THEN the system SHALL add a visual indicator (ring/border) and "(You)" label
4. WHEN displaying the session host THEN the system SHALL add a "Host" badge
5. WHEN a new participant joins THEN the system SHALL update the participant list in real-time for all users
6. WHEN a participant leaves THEN the system SHALL remove them from the list in real-time
7. WHEN displaying the session code THEN the system SHALL show the current participant count
8. WHEN the participant count changes THEN the system SHALL update the display immediately
9. WHEN participants are displayed THEN they SHALL be shown with colored badges for visual distinction
10. WHEN the session is active THEN participant information SHALL be visible throughout all game phases


### Requirement 23: Supabase Configuration in Settings

**User Story:** As a facilitator, I want to configure Supabase credentials through the settings UI and have them stored locally, so that I can enable collaborative mode without editing code files.

#### Acceptance Criteria

1. WHEN the settings modal is opened THEN the system SHALL display a "Collaborative Mode Configuration" section
2. WHEN the configuration section is displayed THEN it SHALL show input fields for Supabase URL and Supabase Anon Key
3. WHEN the configuration section is displayed THEN it SHALL show the current configuration status (configured via config.js, localStorage, or not configured)
4. WHEN Supabase credentials exist in config.js THEN the system SHALL use those as default values
5. WHEN the user enters Supabase URL and Anon Key in settings THEN the system SHALL validate the format
6. WHEN the user saves valid Supabase credentials THEN the system SHALL store them in localStorage with key `supabaseConfig`
7. WHEN credentials are stored in localStorage THEN they SHALL override any credentials from config.js
8. WHEN the application initializes THEN it SHALL check localStorage first, then config.js, for Supabase credentials
9. WHEN the user clicks "Clear Configuration" THEN the system SHALL remove credentials from localStorage and revert to config.js values
10. WHEN credentials are saved THEN the system SHALL display a success message and enable the Collaborative mode option
11. WHEN no valid credentials are configured THEN the system SHALL display a warning in the Collaborative mode section
12. WHEN the user attempts to create or join a session without valid credentials THEN the system SHALL display an error message with instructions to configure Supabase
13. WHEN displaying the configuration section THEN it SHALL include a link or instructions to COLLABORATIVE_SETUP.md
14. WHEN credentials are entered THEN the system SHALL mask the Anon Key input (show as password field with toggle to reveal)
15. WHEN the user tests the connection THEN the system SHALL attempt to connect to Supabase and display success or error message

**localStorage Schema:**
```json
{
  "supabaseUrl": "https://xxxxx.supabase.co",
  "supabaseAnonKey": "eyJhbGc..."
}
```

**Priority Order:**
1. localStorage configuration (highest priority)
2. config.js configuration
3. No configuration (collaborative mode disabled)

### Requirement 24: Team Name and Members in Collaborative Mode

**User Story:** As a collaborative session host, I want to set a team name and have team members automatically registered, so that our collaborative session has a clear identity and all participants are recognized as team members in exports and displays.

#### Acceptance Criteria

1. WHEN creating a collaborative session THEN the system SHALL display an optional "Team Name" input field
2. WHEN the host enters a team name THEN the system SHALL save it with the session data
3. WHEN a participant joins a session THEN the system SHALL automatically add their name to the teamMembers array
4. WHEN the session is active THEN the system SHALL display the team name prominently in the session header
5. WHEN no team name is set THEN the system SHALL display "Collaborative" as the default label
6. WHEN displaying the session during gameplay THEN the system SHALL show the team name in the challenge header badge
7. WHEN displaying participants THEN the system SHALL label the section as "Team Members" instead of "Participants"
8. WHEN the completion screen is displayed THEN the system SHALL show the team name and list all team members
9. WHEN results are exported to PDF THEN the system SHALL include the team name and team members list
10. WHEN results are exported to text THEN the system SHALL include the team name and team members list
11. WHEN results are emailed THEN the system SHALL include the team name and team members in the email body
12. WHEN results are copied to clipboard THEN the system SHALL include the team name in the summary
13. WHEN the session is restored from localStorage THEN the system SHALL restore the team name
14. WHEN real-time sync occurs THEN the system SHALL synchronize the team name across all participants
15. WHEN the team name input is displayed THEN it SHALL include helper text: "Team members will be automatically registered when they join the session"
