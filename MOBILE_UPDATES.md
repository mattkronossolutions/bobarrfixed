# Mobile Optimization Update Guide

This document describes how to maintain and update this mobile-optimized clone of bobarr while staying synchronized with the upstream repository.

## Overview

This repository is a fork of [bobarr](https://github.com/iam4x/bobarr) with extensive mobile optimizations. All mobile-specific changes are CSS-based and implemented as responsive enhancements within the existing component structure, making updates from upstream straightforward.

## Mobile Changes Summary

The following components have been enhanced for mobile responsiveness:

### Core Theme & Utilities
- **`packages/web/components/theme.ts`** - Added breakpoint constants and media query helpers
- **`packages/web/styled-components.d.ts`** - Extended TypeScript types for responsive theme
- **`packages/web/components/responsive.utils.ts`** - New utility file with responsive helpers

### Component Enhancements
- **Navigation** (`navbar/`) - Added hamburger menu for mobile (uses Ant Design Drawer)
- **Carousel** (`search/carousel.component.tsx`) - Responsive slide count and card width
- **Movie/TV Cards** (`tmdb-card/`) - Responsive sizing and layout
- **Modals** (`movie-details/`, `tvshow-details/`) - Stacked layout on mobile, side-by-side on desktop

### Global Styles
- **`pages/_app.tsx`** - Added mobile-specific modal and drawer styles

## Breakpoints

All responsive changes use these breakpoints:
- **Mobile**: < 576px
- **Tablet**: 576px - 991px  
- **Desktop**: ≥ 992px

## Updating from Upstream

### Quick Update (No Conflicts Expected)

```bash
# Fetch latest changes from upstream
git fetch upstream

# Rebase mobile changes on top of upstream/master
git rebase upstream/master

# If no conflicts, push to your fork
git push origin master --force-with-lease
```

### If Conflicts Occur

The mobile changes are isolated to styles and responsive utilities, so conflicts are typically easy to resolve:

1. **CSS conflicts in theme.ts**: Keep both the mobile additions AND upstream changes
   - Mobile additions: breakpoints object, media object
   - Upstream additions: new color values, height values, etc.

2. **Component conflicts**: Usually in styles files
   - Mobile changes are additive (media queries, responsive properties)
   - Accept both versions - mobile media queries + upstream changes

3. **Example resolution**:
   ```typescript
   // KEEP mobile additions
   export const breakpoints = { mobile: 576, tablet: 992 };
   export const media = { ... };
   
   // KEEP upstream changes too
   export const theme: DefaultTheme = {
     ...upstreamTheme,
     breakpoints,
     media,
   };
   ```

### Manual Merge Strategy (Alternative)

If rebasing is problematic, use a three-way merge:

```bash
# Create a feature branch
git checkout -b update/upstream-sync

# Merge upstream
git merge upstream/master

# Resolve conflicts manually
# Verify mobile functionality still works
git add .
git commit -m "Merge upstream bobarr updates"

# Push and create PR for review
git push origin update/upstream-sync
```

## Testing After Updates

After updating from upstream, test:

1. **Desktop (1920x1080)**
   - All features work as before
   - No regressions in desktop layout

2. **Tablet (768x1024)**
   - Navigation accessible
   - Carousel shows 2-3 items
   - Modals fit on screen

3. **Mobile (375x667)**
   - Hamburger menu opens/closes
   - Cards visible in carousel
   - Modal buttons clickable
   - All forms are usable

4. **Key Features**
   - Search and add to library
   - Browse library
   - View movie/show details
   - Manage seasons (for TV shows)

## Development Tips

### Adding New Responsive Features

1. Use the existing breakpoint constants from `theme.ts`
2. Follow the media query pattern used in existing files:
   ```typescript
   const MyComponent = styled.div`
     // Desktop styles (default)
     
     @media (max-width: 575px) {
       // Mobile styles
     }
     
     @media (min-width: 576px) and (max-width: 991px) {
       // Tablet styles (optional)
     }
   `;
   ```

3. Test responsive behavior at all breakpoints

### Upstream Conflicts to Watch For

Files most likely to conflict when updating from upstream:
- `packages/web/components/theme.ts`
- `packages/web/styled-components.d.ts`
- `packages/web/pages/_app.tsx`
- Component styles files (`.styles.tsx` files)

These are generally easy to resolve since mobile changes are clearly marked in media queries.

## Performance Considerations

Mobile optimizations prioritize:
- **Responsive layout** - Single column on mobile, multi-column on desktop
- **Touch targets** - Minimum 44x44px button sizes on mobile
- **Viewport awareness** - Full-width modals on mobile
- **No additional dependencies** - Uses existing Ant Design and styled-components

## Known Limitations

- Video player not optimized for mobile (if applicable in upstream)
- Very long lists may need pagination optimizations (consider for future)
- Landscape mobile may have display issues on very small devices (< 320px height)

## Support

For mobile-specific issues or questions about these optimizations:
1. Check existing media queries in the relevant component
2. Test at the appropriate breakpoint
3. Reference the original desktop implementation for patterns

## History

Mobile optimizations were added to improve usability on small devices while maintaining full desktop functionality and ease of upstream updates.
