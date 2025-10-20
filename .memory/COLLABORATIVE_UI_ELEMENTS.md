# Collaborative Mode UI Elements

## Overview
Visual guide to the UI elements that appear in collaborative mode during gameplay.

## Game Header Layout

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│  Challenge Title  [Topic]  [Team]  [Collaborative]  [Leave] [Score] │
│  Challenge description...                                            │
└─────────────────────────────────────────────────────────────────────┘
```

### Elements Breakdown

#### 1. Challenge Title
- **Location**: Left side of header
- **Style**: Large, bold text
- **Content**: Name of the current challenge

#### 2. Topic Badge
- **Location**: Next to title
- **Style**: Colored pill badge
- **Content**: Challenge category (Education, Business, etc.)
- **Colors**: Topic-specific (blue, purple, green, etc.)

#### 3. Team Badge (Team Mode Only)
- **Location**: After topic badge
- **Style**: Purple pill badge
- **Content**: "Team: [Team Name]"
- **Visibility**: Only in team mode

#### 4. Collaborative Badge (NEW)
- **Location**: After team badge (or topic if no team)
- **Style**: Green pill badge with icon
- **Content**: "👥 Collaborative"
- **Icon**: Users icon
- **Visibility**: Only in collaborative mode

#### 5. Leave Session Button (NEW)
- **Location**: Top right, before score
- **Style**: Red border button
- **Content**: "Leave Session"
- **Hover**: Red background
- **Visibility**: Only in collaborative mode
- **Action**: Opens confirmation dialog

#### 6. Score Display
- **Location**: Far right of header
- **Style**: Large purple number
- **Content**: Current score + "points" label

#### 7. Session Code Bar (NEW)
- **Location**: Below challenge description (when in collaborative mode)
- **Style**: Border-top separator, horizontal layout
- **Components**:
  - "Session Code:" label
  - Code display (monospace font, gray background)
  - Copy button (green icon)
  - Participant count (users icon + number)
- **Visibility**: Only in collaborative mode

## Visual Examples

### Solo Mode Header
```
┌─────────────────────────────────────────────────────────┐
│  Campus Coffee Crisis  [Education]           [Score: 45]│
│  Students are falling asleep in afternoon classes...    │
└─────────────────────────────────────────────────────────┘
```

### Team Mode Header
```
┌──────────────────────────────────────────────────────────────────┐
│  Remote Team Disconnect  [Business]  [Team: Innovators] [Score: 60]│
│  A fully remote startup is struggling with team bonding...       │
└──────────────────────────────────────────────────────────────────┘
```

### Collaborative Mode Header (NEW)
```
┌────────────────────────────────────────────────────────────────────────────┐
│  Sustainable Shopping  [Sustainability]  [👥 Collaborative]  [Leave] [75]  │
│  Consumers want to shop sustainably but find it confusing...               │
├────────────────────────────────────────────────────────────────────────────┤
│  Session Code: abc123-def456  [📋]              👥 3 participants          │
└────────────────────────────────────────────────────────────────────────────┘
```

## Button Specifications

### Leave Session Button

**Visual Design:**
```
┌──────────────────┐
│  Leave Session   │  ← Red border (#DC2626)
└──────────────────┘
```

**States:**
- **Default**: White background, red border, red text
- **Hover**: Light red background (#FEF2F2), darker red border
- **Active**: Slightly darker red background
- **Focus**: Red outline for accessibility

**CSS Classes:**
```css
text-red-600 hover:text-red-700 
text-sm font-medium 
px-4 py-2 
hover:bg-red-50 
rounded-lg 
transition-all 
border border-red-200 hover:border-red-300
```

### Collaborative Badge

**Visual Design:**
```
┌────────────────────┐
│ 👥 Collaborative   │  ← Green background
└────────────────────┘
```

**Styling:**
- Background: Light green (#DCFCE7)
- Text: Dark green (#166534)
- Icon: Users icon (16x16px)
- Border radius: Full (pill shape)
- Padding: 4px 12px

**CSS Classes:**
```css
bg-green-100 text-green-800 
px-3 py-1 
rounded-full 
text-sm font-semibold 
flex items-center gap-1
```

## Responsive Behavior

### Desktop (>768px)
- All elements visible in single row
- Full text labels
- Adequate spacing between elements

### Tablet (768px - 1024px)
- Elements may wrap to two rows
- Badges stack below title
- Leave button remains visible

### Mobile (<768px)
- Header stacks vertically
- Title on first row
- Badges on second row
- Leave button and score on third row
- Smaller text sizes

## Accessibility

### Keyboard Navigation
- Tab to focus Leave Session button
- Enter/Space to activate
- Escape to cancel confirmation dialog

### Screen Readers
- Collaborative badge: "Collaborative session active"
- Leave button: "Leave collaborative session"
- Score: "Current score: X points"

### Color Contrast
- All text meets WCAG AA standards
- Red button has sufficient contrast
- Green badge readable on white background

## User Experience Flow

### Entering Collaborative Mode
1. User creates or joins session
2. Game starts
3. Header shows:
   - Challenge info
   - **Collaborative badge** (NEW)
   - **Leave Session button** (NEW)
   - Score

### During Gameplay
- Leave button always visible
- Badge reminds user of collaborative mode
- Can leave at any phase
- Confirmation prevents accidents

### Leaving Session
1. Click "Leave Session"
2. See confirmation dialog
3. Choose Cancel or OK
4. If OK: Return to intro screen

## Implementation Details

### Conditional Rendering
```javascript
{isCollaborative && (
  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
    <Icons.Users className="w-4 h-4" />
    Collaborative
  </span>
)}

{isCollaborative && (
  <button
    onClick={leaveSession}
    className="text-red-600 hover:text-red-700 text-sm font-medium px-4 py-2 hover:bg-red-50 rounded-lg transition-all border border-red-200 hover:border-red-300"
  >
    Leave Session
  </button>
)}
```

### State Management
- `isCollaborative`: Boolean flag
- `leaveSession`: Function with confirmation
- Visible in all phases (0-4)
- Persists across phase transitions

## Benefits

### Visibility
- ✅ Always accessible during gameplay
- ✅ Clear visual indicator of collaborative mode
- ✅ No need to navigate away to leave

### Safety
- ✅ Confirmation prevents accidents
- ✅ Red color signals caution
- ✅ Clear labeling

### User Experience
- ✅ Consistent location across phases
- ✅ Easy to find and use
- ✅ Doesn't interfere with gameplay

## Testing Checklist

- [ ] Button visible in all phases (0-4)
- [ ] Button only shows in collaborative mode
- [ ] Collaborative badge displays correctly
- [ ] Click triggers confirmation dialog
- [ ] Confirmation shows correct message (host vs participant)
- [ ] Cancel keeps user in session
- [ ] OK leaves session successfully
- [ ] Button responsive on mobile
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Hover states work properly
- [ ] Button doesn't overlap other elements

## Future Enhancements

### Possible Improvements
1. **Participant Count**: Show number of active participants
2. **Session Timer**: Display session duration
3. **Quick Actions Menu**: Dropdown with more options
4. **Minimize Button**: Collapse header for more space
5. **Session Info Tooltip**: Hover to see session details

### Not Planned
- Auto-hide button (always visible is better)
- Move to different location (header is optimal)
- Remove confirmation (safety is important)

## Session Code Bar

### Visual Design
```
┌──────────────────────────────────────────────────────────────────┐
│  Session Code: [abc123-def456] 📋        👥 3 participants       │
└──────────────────────────────────────────────────────────────────┘
```

### Components

#### Session Code Label
- Text: "Session Code:"
- Style: Small, medium weight, gray
- Purpose: Identifies the code field

#### Code Display
- Background: Light gray (#F3F4F6)
- Border: Gray border (#D1D5DB)
- Font: Monospace (code font)
- Text: Session ID (UUID format)
- Style: Rounded corners, padding

#### Copy Button
- Icon: Copy icon (green)
- Hover: Light green background
- Action: Copies code to clipboard
- Feedback: Alert message "Session code copied!"
- Tooltip: "Copy session code"

#### Participant Count
- Icon: Users icon
- Text: "X participant(s)"
- Style: Small, gray text
- Updates: Real-time as people join/leave

### Interaction Flow

1. **View Code**: Always visible in collaborative mode
2. **Copy Code**: Click copy button
3. **Clipboard**: Code copied automatically
4. **Feedback**: Alert confirms copy
5. **Share**: Paste code to invite others

### Benefits

✅ **Easy Sharing**: One-click copy for inviting others  
✅ **Always Visible**: No need to navigate away  
✅ **Participant Awareness**: See how many are in session  
✅ **Professional Look**: Clean, organized display  

### Implementation

```javascript
{isCollaborative && sessionId && (
  <div className="mt-4 pt-4 border-t border-gray-200">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">
          Session Code:
        </span>
        <code className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded font-mono text-sm border border-gray-300">
          {sessionId}
        </code>
        <button
          onClick={() => {
            navigator.clipboard.writeText(sessionId);
            alert("Session code copied to clipboard!");
          }}
          className="text-green-600 hover:text-green-700 p-1.5 hover:bg-green-50 rounded transition-all"
          title="Copy session code"
        >
          <Icons.Copy className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Icons.Users className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">
          {participants.length} participant{participants.length !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  </div>
)}
```
