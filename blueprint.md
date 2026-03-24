# **Mood-Based Book Recommender Blueprint**

## **Project Overview**
A modern, framework-less web application that recommends books based on the user's mood. It leverages Web Components for modularity, modern CSS (oklch, :has(), container queries) for a premium aesthetic, and ES Modules for JavaScript logic.

## **Design & Aesthetics**
- **Typography:** Playfair Display for headers (elegant serif) and Inter for body text (clean sans-serif).
- **Color:** Vibrant colors using `oklch` for perceptually uniform color spaces.
- **Texture:** Subtle noise texture on the background for a premium, tactile feel.
- **Shadows:** Soft, deep, multi-layered shadows to give elements a "lifted" look.
- **Interactivity:** "Glow" effects and smooth transitions on hover/click.
- **Responsive:** Mobile-first approach with container queries for component-level responsiveness.

## **Project Features**
1.  **Mood Selector:** Interactive buttons to choose between Happy, Sad, Adventurous, Thoughtful, Mysterious, and Peaceful.
2.  **Book Card Component:** A custom `<book-card>` element that encapsulates the layout and styling for a single book recommendation.
3.  **Dynamic Rendering:** Recommendations update instantly as the user selects a mood.
4.  **Modern CSS:** Use of Cascade Layers (`@layer`), CSS Variables, and Logical Properties.

## **Implementation Log**
### **Phase 1: Foundation (Initial Setup)**
1.  Define the `blueprint.md` (Current Step).
2.  Set up `index.html` with basic structure and Google Fonts.
3.  Create a robust `style.css` with a focus on modern CSS features.
4.  Implement the core logic in `main.js` using Web Components.

### **Phase 2: Refinement**
- Add more books and detailed descriptions.
- Enhance animations and transitions.
- Fine-tune shadows and textures for a "premium" feel.

### **Phase 3: Localization**
1.  **Translate to Korean:** Update `index.html` content and language attribute to Korean. (Current Step)
2.  **Verify UI:** Ensure the Korean text fits correctly within the layout and maintains the premium aesthetic.
