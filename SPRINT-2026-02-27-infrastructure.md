# 🚀 Infrastructure Sprint: PWA + PDF Export

**Sprint Start:** February 25, 2026  
**Sprint Goal:** Transform Mystical Path Tools into a fully offline-capable Progressive Web App with professional PDF export functionality

**Estimated Duration:** 10-12 hours  
**Sprint Type:** 100% Technical Debt (Infrastructure)

---

## 🎯 Why This Sprint?

**Strategic Value:**
- ✅ Benefits ALL 12 existing tools immediately (no per-tool work needed)
- ✅ Enables offline use (major value for practitioners without internet)
- ✅ Installable app on mobile/desktop (home screen icon)
- ✅ Professional output format (PDF) for readings, rituals, collections
- ✅ Foundation for future features (notifications, background sync)

**Tech Debt First Philosophy:**
This sprint builds shared infrastructure that will accelerate ALL future development. Once complete, every new tool gets offline support and PDF export for free.

---

## 📋 Sprint Tasks

### Task 1: Progressive Web App Setup (~6 hours)

**Goal:** Make Mystical Path Tools installable and fully functional offline

**Subtasks:**
- [ ] Create `manifest.json` with app metadata, icons, theme colors
- [ ] Generate app icons (512x512, 192x192, maskable variants)
- [ ] Create service worker (`sw.js`) with cache strategies
- [ ] Implement install prompt UI (optional "Add to Home Screen" button)
- [ ] Add offline fallback page for uncached routes
- [ ] Register service worker in all 12 tools + homepage
- [ ] Test offline functionality (airplane mode, DevTools offline)
- [ ] Test installation on mobile (iOS Safari, Android Chrome)
- [ ] Update CLAUDE.md with PWA pattern documentation

**Cache Strategy:**
- **Cache First:** HTML, CSS, JS files (update on service worker update)
- **Network First:** API calls (Weather API - fallback to cached)
- **Cache Only:** Static assets (fonts, icons)

**Icon Requirements:**
- 512x512 PNG (high-res app icon)
- 192x192 PNG (standard app icon)
- Maskable icon variant (safe zone for different OS shapes)
- Favicon sizes (16x16, 32x32, 48x48)

**Reuses:**
- Existing theme colors for splash screen
- Navigation menu icons for app icon design

---

### Task 2: PDF Export Infrastructure (~4 hours)

**Goal:** Enable professional PDF downloads for readings, rituals, and collections

**Subtasks:**
- [ ] Research PDF generation libraries (jsPDF vs html2pdf vs print-to-PDF)
- [ ] Choose approach (lean toward browser's native print-to-PDF if possible)
- [ ] Create shared PDF utility (`js/pdf-utils.js`) or leverage existing `css/print.css`
- [ ] Add "Download as PDF" button to applicable tools:
  - Moon Tracker (rituals, calendar)
  - Rune Caster (readings)
  - Sabbat Calendar (sabbat info)
  - Crystal Database (collection)
  - Herbal Database (collection)
  - Spell Builder (grimoire entries)
  - Tarot (future - when built)
- [ ] Test PDF output quality (fonts, colors, page breaks)
- [ ] Ensure PDF respects print.css styles
- [ ] Add PDF filename generation (e.g., `rune-reading-2026-02-25.pdf`)
- [ ] Update CLAUDE.md with PDF pattern documentation

**Implementation Decision:**
- **Option A:** Use browser's `window.print()` + `@media print` CSS (zero dependencies, lightweight)
- **Option B:** jsPDF library (~150KB, more control over layout)
- **Recommendation:** Start with Option A (already have `css/print.css`), add jsPDF only if needed

**Reuses:**
- Existing `css/print.css` (354 lines of print styles already created!)
- Theme colors for PDF headers/branding

---

## 🔄 Development Order

**Phase 1: PWA Foundation (Hours 1-3)**
1. Create manifest.json
2. Design and generate app icons
3. Create basic service worker with caching
4. Register service worker in all tools

**Phase 2: PWA Polish (Hours 4-6)**
5. Add install prompt UI
6. Create offline fallback page
7. Test offline functionality thoroughly
8. Test installation on mobile devices

**Phase 3: PDF Export (Hours 7-10)**
9. Choose PDF approach (likely browser print)
10. Add "Download PDF" buttons to tools
11. Test PDF output quality
12. Polish filename generation

**Phase 4: Documentation (Hours 11-12)**
13. Update CLAUDE.md with PWA pattern
14. Update CLAUDE.md with PDF pattern
15. Update ROADMAP.md with sprint results
16. Test all changes one final time

---

## ✅ Success Criteria

**PWA:**
- [ ] App installable on iOS/Android (shows "Add to Home Screen")
- [ ] All 12 tools work offline (airplane mode test passes)
- [ ] Service worker caches static assets efficiently
- [ ] lighthouse PWA score > 90
- [ ] Install prompt appears and works correctly

**PDF Export:**
- [ ] "Download PDF" button on 6+ tools
- [ ] PDF output is readable and professional
- [ ] Fonts render correctly in PDF
- [ ] Page breaks work logically (no split cards)
- [ ] Filename includes tool name + date

**Quality:**
- [ ] No console errors
- [ ] No broken functionality in existing tools
- [ ] Mobile testing passes
- [ ] Documentation updated

---

## 🎓 Expected Learnings

**New Patterns to Document:**
- Service worker registration and lifecycle
- Cache strategies for different asset types
- Manifest.json configuration for PWA
- Install prompt UI/UX patterns
- PDF generation from web content
- Offline fallback page design

**Reusable Code:**
- `sw.js` - Service worker template (all future tools inherit)
- `manifest.json` - App metadata (one-time setup)
- `js/pdf-utils.js` (if created) - PDF generation utilities
- Offline fallback page template

---

## 📊 Estimated vs. Actual

**Estimates:**
- PWA Setup: 6 hours
- PDF Export: 4 hours
- Documentation: 1-2 hours
- **Total:** 10-12 hours

**Actual:** _[Fill in during sprint close]_

---

## 🔗 Related Issues

**Tech Debt Items Addressed:**
- [x] PWA manifest (Low Priority → Now High Priority)
- [x] Export to PDF (Low Priority → Now High Priority)

**Enables Future Work:**
- Push notifications for moon phases, sabbats
- Background sync for Weather API
- Offline-first architecture for all future tools
- Professional sharing of readings/collections

---

## 📝 Notes

**Icon Design Ideas:**
- Use ⛤ pentacle as primary icon (Chaos Magick theme)
- Incorporate moon phases or mystical symbols
- Purple/violet gradient (matches Chaos Magick theme colors)
- Keep recognizable at small sizes (maskable safe zone)

**PDF Considerations:**
- Filename format: `[tool-name]-[content-type]-[YYYY-MM-DD].pdf`
- Examples:
  - `rune-reading-2026-02-25.pdf`
  - `crystal-collection-2026-02-25.pdf`
  - `moon-rituals-february-2026.pdf`

**Browser Compatibility:**
- Service workers require HTTPS (or localhost)
- iOS Safari PWA support differs from Android
- Test install flow on both platforms

---

**Remember:** Tech debt first = acceleration! This infrastructure investment pays dividends across all 12 tools and every future tool we build. 🚀✨
