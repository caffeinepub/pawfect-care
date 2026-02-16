# Specification

## Summary
**Goal:** Fix broken landing-page image rendering in production for Pawfect Care by correcting asset paths, ensuring all referenced images ship in the frontend build, and providing a safe themed fallback when an image fails to load.

**Planned changes:**
- Audit all image references in `frontend/src/components/PawfectCareLanding.tsx` and replace any deployment-breaking absolute/fragile paths with base-path-safe asset references.
- Ensure every image used by the landing page (Hero, Overview, Services, end-of-page gallery) exists in the frontend static assets and is referenced with an exact matching filename (including `image-18.png`).
- Add a consistent, themed `onError` fallback for all landing page images to prevent broken-image icons and preserve layout dimensions.
- Verify in production-like builds that all landing-page image requests resolve successfully (no 404/ERR) and no image-load console errors occur on initial load.

**User-visible outcome:** The live Pawfect Care landing page displays all intended images across sections without broken/blank image containers; if any image fails to load, a styled placeholder appears instead of a broken-image icon.
