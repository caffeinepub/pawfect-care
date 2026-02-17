# Specification

## Summary
**Goal:** Restore the Pawfect Care landing page’s Chewy-blue theme colors in production and apply the requested landing-page image updates.

**Planned changes:**
- Fix the production styling issue causing the landing page to render mostly black-and-white by ensuring only one authoritative set of Tailwind theme CSS variables is applied at runtime (resolving any conflicts/duplication between `frontend/index.css` and `frontend/src/index.css`).
- Update the “Happy Pets, Happy Hearts” section in `frontend/src/components/PawfectCareLanding.tsx` to render exactly three images (dog nail cutting, dog teeth cleaning, dog ear cleaning) and remove any other images from that section.
- Replace the Bath & Brush service card image in the Services section of `frontend/src/components/PawfectCareLanding.tsx` with `image-20.png`, referenced via a base-path-safe asset URL strategy (`publicAssetUrl`) so it loads in production.
- Rebuild and deploy the updated Pawfect Care Draft Version 2 frontend so the live site reflects the restored theme colors and the image changes.

**User-visible outcome:** The live Pawfect Care landing page shows the Chewy-blue theme (blue accents/buttons/links), the “Happy Pets, Happy Hearts” section displays exactly three specified images, and the Bath & Brush service card displays the new uploaded image without broken links.
