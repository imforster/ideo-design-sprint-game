# Leave Session Confirmation

## Overview
Added confirmation prompts when users attempt to leave a collaborative session to prevent accidental exits and data loss.

## Confirmation Messages

### For Hosts
```
Are you sure you want to leave this session?

As the host, leaving will end the session for all participants. 
All progress will be lost.

[Cancel] [OK]
```

**Why this message?**
- Hosts need to understand the impact of their action
- Leaving as host effectively ends the session
- All participants will lose access
- Progress may be lost if not saved

### For Participants
```
Are you sure you want to leave this session?

You can rejoin using the session code if needed.

[Cancel] [OK]
```

**Why this message?**
- Less severe consequences for participants
- Reassures them they can rejoin
- Session continues for others
- Less alarming tone

## User Flow

### Button Location
The "Leave Session" button is visible:
- In the game header (top right area)
- During all game phases (Empathize, Ideate, Select, Prototype, Iterate)
- Next to the score display
- Styled with red border to indicate caution

### Leaving as Host
1. Click "Leave Session" button (visible in header)
2. See warning about ending session for all
3. Choose:
   - **Cancel**: Stay in session, nothing changes
   - **OK**: Leave session, all participants disconnected

### Leaving as Participant
1. Click "Leave Session" button (visible in header)
2. See message about rejoining
3. Choose:
   - **Cancel**: Stay in session, nothing changes
   - **OK**: Leave session, can rejoin later

## Technical Implementation

### Confirmation Logic
```javascript
const confirmMessage = isHost
  ? "Are you sure you want to leave this session?\n\n" +
    "As the host, leaving will end the session for all participants. " +
    "All progress will be lost."
  : "Are you sure you want to leave this session?\n\n" +
    "You can rejoin using the session code if needed.";

const confirmed = window.confirm(confirmMessage);

if (!confirmed) {
  return; // User cancelled, do nothing
}

// Proceed with leaving...
```

### Error Handling
- If leaving fails, shows error alert
- User remains in session on error
- Can try again
- Session state preserved

## Benefits

### Prevents Accidental Exits
- Users must confirm before leaving
- Reduces frustration from accidental clicks
- Protects work in progress

### Clear Communication
- Different messages for different roles
- Users understand consequences
- Informed decision making

### Better UX
- Standard confirmation pattern
- Familiar interface (browser confirm dialog)
- Clear action buttons

## Design Decisions

### Why Native Confirm Dialog?
- **Familiar**: Users know how it works
- **Accessible**: Built-in keyboard support
- **Simple**: No custom modal needed
- **Reliable**: Works everywhere
- **Fast**: No additional UI to build

### Why Different Messages?
- **Context-aware**: Matches user's role
- **Appropriate severity**: Hosts see stronger warning
- **Helpful**: Participants know they can rejoin
- **Clear consequences**: No surprises

### Why Block on Confirmation?
- **Prevents accidents**: Can't leave by mistake
- **Gives time to think**: User must actively confirm
- **Protects data**: Reduces unintended data loss
- **Standard pattern**: Expected behavior

## Alternative Approaches Considered

### Custom Modal
**Pros:**
- More control over styling
- Can add additional options
- Better branding

**Cons:**
- More code to maintain
- Accessibility concerns
- Slower to implement
- Not necessary for this use case

**Decision:** Use native confirm for simplicity

### No Confirmation
**Pros:**
- Faster to leave
- Less friction

**Cons:**
- Easy to leave accidentally
- Frustrating for users
- Data loss risk
- Poor UX

**Decision:** Confirmation is necessary

### Undo Option
**Pros:**
- Can reverse action
- More forgiving

**Cons:**
- Complex to implement
- Confusing for other participants
- Session state issues
- Not worth the complexity

**Decision:** Confirmation is sufficient

## User Feedback

### Expected Reactions

**Hosts:**
- Appreciate the warning
- Understand the impact
- Less likely to leave accidentally
- May reconsider leaving

**Participants:**
- Reassured they can rejoin
- Less anxiety about leaving
- Clear about consequences
- Confident in their choice

## Testing Checklist

- [ ] Host sees correct warning message
- [ ] Participant sees correct message
- [ ] Cancel button keeps user in session
- [ ] OK button leaves session successfully
- [ ] Session state unchanged on cancel
- [ ] Error handling works correctly
- [ ] Message text is clear and readable
- [ ] Works on mobile devices
- [ ] Keyboard navigation works
- [ ] Screen readers announce correctly

## Future Enhancements

### Possible Improvements
1. **Save Progress Option**: Offer to download results before leaving
2. **Transfer Host**: Allow host to transfer role before leaving
3. **Custom Modal**: Better styling and branding
4. **Countdown Timer**: Give host time to reconsider
5. **Participant Notification**: Alert others when someone leaves

### Not Planned
- Auto-save on leave (complexity)
- Prevent host from leaving (too restrictive)
- Silent leave (poor UX)
- Delayed leave (confusing)

## Accessibility

### Keyboard Support
- Tab to focus buttons
- Enter/Space to activate
- Escape to cancel (browser default)

### Screen Readers
- Confirmation message read aloud
- Button labels clear
- Role and state announced

### Visual
- High contrast text
- Clear button labels
- Standard dialog appearance

## Browser Compatibility

### Supported
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Mobile browsers

### Notes
- Native confirm() is universally supported
- No polyfills needed
- Works in all modern browsers
- Consistent behavior across platforms
