# Implementation Plan

- [x] 1. Add challenge topic field and categorization
  - Add topic field to Challenge interface in both index.html and src/ideo_game.tsx
  - Update defaultChallenges array to include topic for each challenge
  - Add TOPICS constant array with predefined topic options
  - _Requirements: 16.1, 16.2, 16.3, 16.4_

- [x] 1.1 Update challenge form with topic dropdown
  - Add topic dropdown to newChallenge form in settings modal
  - Implement conditional custom topic input when "Custom" is selected
  - Update addCustomChallenge validation to require topic field
  - _Requirements: 16.1, 16.2, 16.3, 16.4_

- [x] 1.2 Display topic badges on challenges
  - Create topic badge component with color coding
  - Display topic badges in custom challenges list
  - Add topic to challenge display during game
  - _Requirements: 16.5, 16.13_

- [x] 1.3 Implement challenge selection in settings
  - Add enabledChallenges state variable as Set of challenge titles
  - Initialize with all challenges enabled by default
  - Create "Challenge Selection" section in settings modal
  - Display all challenges (default + custom) with checkboxes
  - _Requirements: 16.6, 16.7, 16.8_

- [x] 1.4 Implement challenge enable/disable functionality
  - Create toggleChallengeEnabled function to add/remove from Set
  - Add checkbox change handlers for each challenge
  - Add "Select All" and "Deselect All" buttons
  - Display topic badges next to each challenge in selection list
  - _Requirements: 16.7, 16.9_

- [x] 1.5 Validate and filter challenges on game start
  - Create getEnabledChallenges function to filter by enabled Set
  - Update startGame to only select from enabled challenges
  - Add validation to ensure at least one challenge is enabled
  - Display warning message if no challenges are enabled
  - Disable "Start Design Sprint" button when no challenges enabled
  - _Requirements: 16.10, 16.11, 16.12_

- [x] 1.6 Handle enabled state for imported challenges
  - When importing challenges, add their titles to enabledChallenges Set
  - Ensure imported challenges are enabled by default
  - _Requirements: 16.14_

- [x] 2. Implement timer customization in facilitator settings
  - Add timerDuration state variable with default 180
  - Create "Timer Settings" section in the settings modal (same modal as challenge management)
  - Position timer settings section below or above challenge selection
  - _Requirements: 15.1, 15.2, 15.7_

- [x] 2.1 Add timer preset buttons in settings
  - Create preset buttons for 60s, 180s, 300s, 600s in settings modal
  - Implement click handlers to set timerDuration
  - Add visual indication of selected preset (highlighted button)
  - Display current timer duration value
  - _Requirements: 15.3_

- [x] 2.2 Add custom timer input in settings
  - Add number input field for custom duration in settings modal
  - Implement validation for 30-1800 second range
  - Display error message for invalid input
  - Update preset button selection when custom value is entered
  - _Requirements: 15.4, 15.5, 15.6_

- [x] 2.3 Integrate custom timer with Ideate phase
  - Update startGame to initialize timer with timerDuration from settings
  - Update timer display in Ideate phase to show MM:SS format
  - Add note in settings modal about session-only persistence
  - Ensure timer resets to custom duration when starting new game
  - _Requirements: 15.8, 15.9, 15.10_

- [x] 3. Implement image upload for prototypes
  - Add prototypeImages state variable as array
  - Add file input with accept="image/\*" in Prototype phase
  - Style upload button with icon
  - _Requirements: 14.1, 14.2_

- [x] 3.1 Implement image validation and preview
  - Implement handleImageUpload function with file type validation (PNG, JPG, JPEG, GIF, SVG)
  - Add file size validation (max 5MB)
  - Display error messages for invalid files
  - Use FileReader to convert to base64 and store in state
  - _Requirements: 14.3, 14.4, 14.5_

- [x] 3.2 Display image thumbnails and removal
  - Display uploaded images as thumbnails (150px width)
  - Add remove button for each image
  - Implement removeImage function
  - Limit to maximum 3 images
  - _Requirements: 14.6, 14.7, 14.10_

- [x] 3.3 Include images in results and exports
  - Display images in completion screen
  - Update generateShareableResults to include images
  - Add note about images in text export
  - _Requirements: 14.8, 14.9_

- [x] 4. Implement JSON challenge import/export
  - Add importPreviewData state variable
  - Add showImportPreview state variable
  - Create challenge JSON schema constant
  - _Requirements: 17.1, 17.4, 17.5_

- [x] 4.1 Implement challenge export
  - Add "Export Challenges" button in settings modal
  - Implement exportChallenges function to create JSON with schema
  - Include version, exportDate, and challenges array
  - Trigger download with filename format: ideo-challenges-[timestamp].json
  - _Requirements: 17.10, 17.11_

- [x] 4.2 Implement challenge import file selection
  - Add "Import Challenges" button in settings modal
  - Add file input with accept=".json"
  - Implement file reading with FileReader
  - _Requirements: 17.1, 17.2_

- [x] 4.3 Implement JSON validation
  - Create validateChallengeJSON function
  - Validate JSON structure matches schema
  - Validate required fields for each challenge
  - Display clear error messages for invalid JSON
  - _Requirements: 17.3, 17.8, 17.9_

- [x] 4.4 Implement import preview modal
  - Create import preview modal component
  - Display number of challenges to import
  - Show list of challenge titles with topics
  - Detect and display duplicate warnings
  - Add "Import All" and "Cancel" buttons
  - _Requirements: 17.4, 17.5, 17.7_

- [x] 4.5 Complete import process
  - Implement import confirmation handler
  - Merge imported challenges into customChallenges state
  - Skip duplicates based on title matching
  - Display success message with import summary
  - _Requirements: 17.6, 17.7_

- [x] 5. Implement PDF export
  - Add jsPDF library via CDN in HTML head
  - Add "Download PDF" button on completion screen
  - Create downloadPDF function
  - _Requirements: 12.1, 12.6_

- [x] 5.1 Implement PDF content generation
  - Initialize jsPDF document with A4 size
  - Add header with title and date
  - Add challenge information with topic
  - Add team details if applicable
  - _Requirements: 12.3, 12.4_

- [x] 5.2 Add sprint content to PDF
  - Add HMW statement in formatted section
  - Add ideas list with numbering
  - Add top 3 selected ideas with emphasis
  - Add prototype description
  - Add iteration notes
  - Add final score in footer
  - _Requirements: 12.3, 12.4_

- [x] 5.3 Embed images in PDF
  - Convert base64 images to PDF format
  - Add images to prototype section
  - Maintain aspect ratio and proper sizing
  - Handle pagination for multiple images
  - _Requirements: 12.5_

- [x] 6. Implement email integration
  - Add showEmailModal state variable
  - Add emailForm state with recipients, subject, message fields
  - Add "Email Results" button on completion screen
  - _Requirements: 13.1, 13.2_

- [x] 6.1 Create email modal component
  - Create modal with email form fields
  - Pre-fill subject line with challenge title
  - Add recipients input (comma-separated)
  - Add optional message textarea
  - Display preview of email content
  - _Requirements: 13.3, 13.4_

- [x] 6.2 Implement email composition
  - Create openEmailClient function
  - Format results for email body
  - Construct mailto URL with encoded parameters
  - Include all sprint information in readable format
  - Add note about manually attaching images
  - _Requirements: 13.5, 13.6, 13.7_

- [x] 6.3 Handle email submission
  - Validate email form inputs
  - Open mailto URL in new window
  - Close email modal after submission
  - Display confirmation message
  - _Requirements: 13.5_

- [x] 7. Update all export functions to include new data
  - Update downloadResults to include topic and image notes
  - Update copyToClipboard to include topic
  - Update generateShareableResults to include all new fields
  - Ensure consistent formatting across all export methods
  - _Requirements: 8.6, 12.3, 13.6_

- [x] 8. Update UI styling and responsiveness
  - Ensure new modals are responsive
  - Add proper spacing for new form fields
  - Ensure topic badges are readable and accessible
  - Test image thumbnails on mobile devices
  - Verify all new buttons have proper hover states
  - _Requirements: 11.1, 11.2, 11.4_

- [ ] 9. Add comprehensive error handling
  - Add try-catch blocks for file operations
  - Add try-catch for JSON parsing
  - Validate all user inputs before processing
  - Display user-friendly error messages
  - Ensure app doesn't crash on invalid input
  - _Requirements: All validation requirements_

- [ ]\* 10. Update documentation
  - Update README.md with new features
  - Update DOCUMENTATION.md with usage instructions
  - Update FACILITATOR_GUIDE.md with new capabilities
  - Add JSON schema example to documentation
  - Document timer customization options
  - _Requirements: All requirements_
