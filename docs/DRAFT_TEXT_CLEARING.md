# Draft Text Clearing Fix

## Issue
When starting a new game in collaborative mode, the HMW (How Might We) draft text from a previous session was not being cleared, causing confusion for users.

## Solution
Added comprehensive draft text clearing at key transition points in the game flow.

## Changes Made

### 1. Clear on Game Start
When `startGame()` is called, now clears:
```javascript
setUserInput("");
setDraftHmw("");
setDraftPrototype("");
setCurrentTyper(null);
```

**Session data also cleared:**
```javascript
draftHmw: "",
draftPrototype: "",
hmwTyper: null,
prototypeTyper: null,
```

### 2. Clear on Phase Transition
When moving from Phase 2 (Select) to Phase 3 (Prototype):
```javascript
setUserInput("");
setDraftPrototype("");
setCurrentTyper(null);
```

**Session data updated:**
```javascript
draftPrototype: "",
prototypeTyper: null,
```

### 3. Clear on Submit
Already implemented - draft cleared when HMW or Prototype is submitted.

## Draft Text Lifecycle

### Complete Flow

```
Game Start
    ↓
[Clear all drafts]
    ↓
Phase 0: Empathize
    ↓
[User types HMW]
    ↓
[Draft synced to session]
    ↓
[User submits]
    ↓
[Draft cleared, HMW saved]
    ↓
Phase 1: Ideate
    ↓
Phase 2: Select
    ↓
[Clear prototype draft]
    ↓
Phase 3: Prototype
    ↓
[User types prototype]
    ↓
[Draft synced to session]
    ↓
[User submits]
    ↓
[Draft cleared, prototype saved]
    ↓
Phase 4: Iterate
    ↓
Complete
```

## State Management

### Local State
- `userInput`: Current input field value
- `draftHmw`: Synced HMW draft
- `draftPrototype`: Synced prototype draft
- `currentTyper`: Who's currently typing

### Session State (Supabase)
- `draftHmw`: Shared HMW draft
- `hmwTyper`: Name of HMW typer
- `draftPrototype`: Shared prototype draft
- `prototypeTyper`: Name of prototype typer

### Clearing Points

| Event | Local State | Session State | All Participants |
|-------|-------------|---------------|------------------|
| Game Start | ✅ All cleared | ✅ All cleared | ✅ Synced |
| HMW Submit | ✅ HMW cleared | ✅ HMW cleared | ✅ Synced |
| Phase Change | ✅ Input cleared | N/A | ✅ Synced |
| Enter Phase 3 | ✅ Prototype cleared | ✅ Prototype cleared | ✅ Synced |
| Prototype Submit | ✅ Prototype cleared | ✅ Prototype cleared | ✅ Synced |
| Page Refresh | ❌ Not cleared | ❌ Not cleared (intentional) | N/A |

## Why Page Refresh Doesn't Clear

Draft text is intentionally preserved on page refresh to support:
- Accidental refreshes
- Browser crashes
- Network interruptions
- Session persistence

Users can continue where they left off without losing their work in progress.

## Testing Scenarios

### Scenario 1: New Game
1. Start a game
2. Type HMW statement
3. Submit
4. Complete game
5. Start new game
6. ✅ HMW input should be empty

### Scenario 2: Phase Transition
1. Start game
2. Complete phases 0-2
3. Enter phase 3 (Prototype)
4. ✅ Prototype input should be empty

### Scenario 2b: HMW Submit in Collaborative Mode
1. Start collaborative game
2. Type HMW statement
3. Submit HMW
4. Move to Ideate phase
5. ✅ All participants see empty input field

### Scenario 3: Refresh During Typing
1. Start game
2. Type HMW statement (don't submit)
3. Refresh page
4. ✅ HMW draft should be restored

### Scenario 4: Collaborative Mode
1. Host starts game
2. Participant joins
3. Someone types HMW
4. Host starts new game
5. ✅ All participants see empty HMW input

## Edge Cases Handled

### Multiple Games in Same Session
- Each new game clears previous drafts
- No carryover between games
- Clean slate for each challenge

### Host Leaves and Rejoins
- Draft cleared when new game starts
- Previous draft not restored
- Fresh start for new game

### Participant Joins Mid-Game
- Sees current draft if in phase 0 or 3
- Sees empty input if in other phases
- Syncs with current game state

## Benefits

### User Experience
- ✅ No confusion from old text
- ✅ Clean start for each game
- ✅ Clear visual state
- ✅ Predictable behavior

### Data Integrity
- ✅ No stale data
- ✅ Correct state synchronization
- ✅ Consistent across participants
- ✅ Proper lifecycle management

### Collaboration
- ✅ All users see same state
- ✅ No conflicting drafts
- ✅ Clear communication
- ✅ Smooth transitions

## Code Locations

### startGame() Function
**File:** `index.html`
**Lines:** ~1072-1130
**Purpose:** Initialize new game, clear all drafts

### nextPhase() Function
**File:** `index.html`
**Lines:** ~1218-1245
**Purpose:** Transition between phases, clear prototype draft

### handleSubmit() Function
**File:** `index.html`
**Lines:** ~1130-1215
**Purpose:** Submit answers, clear relevant drafts

## Related Documentation
- `COLLABORATIVE_EDITING.md` - Full collaborative editing feature
- `SESSION_PERSISTENCE.md` - Session persistence and restoration
- `DOCUMENTATION.md` - General game documentation
