# Euphoria Clothing Website - Design Specification

## 1. Project Overview

This document outlines the design and architecture for the Euphoria Clothing website, aiming to create a unique online presence that reflects the brand's "cool but underground" aesthetic. The site will serve as a digital showcase for their handmade streetwear, with a focus on immersive visuals and engaging animations.

## 2. Core Aesthetic & Vibe

**Concept:** Underground Industrial & Experimental Streetwear (refined for "cool but underground")

**Details:**
*   **Color Palette:** Dominated by dark tones (deep greys, charcoal, black) with high-contrast accents (muted neon, distressed white, metallic silver). The intent is a sophisticated, edgy feel rather than harsh. Think refined grunge.
*   **Typography:** A blend of industrial, slightly distressed sans-serif fonts for headings and a clean, legible sans-serif for body text. Fonts will convey a raw, authentic, yet modern sensibility.
*   **Imagery:** Emphasis on high-quality, raw, and artistic photography of products and lookbook shots. Will incorporate noise textures, subtle film grain, or halftone patterns to enhance the underground feel without being overly "brutal."
*   **Layout:** Asymmetric and dynamic layouts, utilizing grid systems with intentional breaks and overlaps to create visual interest. Generous use of whitespace to ensure clarity despite the edgy aesthetic.
*   **Custom Cursor:** An animated, stylized custom cursor will provide a unique interactive element, hinting at the site's experimental nature.

## 3. Key Animations & Interactions

The website will leverage advanced animation libraries to create a fluid, engaging, and premium user experience:

*   **Smooth Scrolling:** Custom implementation (GSAP/Framer Motion) for a distinct, fluid scrolling feel, differentiating from standard browser scroll.
*   **Hover Effects:** Product cards and interactive elements will feature subtle hover-tilt effects, giving a tactile and responsive feel.
*   **Text Reveal Animations:** Headings and key textual content will animate into view, adding a dynamic and intentional rhythm to content presentation.
*   **Image Transitions:** Unique liquid, distorted, or glitch-like transitions for full-screen images (e.g., hero, lookbook) to reinforce the experimental vibe.
*   **Interactive Backgrounds:** Subtle, dynamic backgrounds (e.g., noise, abstract particles) that react to user interaction or scroll.

## 4. Site Structure & Sections

Leveraging Next.js App Router for optimal performance and user experience.

### **4.1. Home Page (Hero Section)**
*   **Purpose:** Immediate visual impact, introduce the brand's aesthetic and core offering.
*   **Content:** Fullscreen dynamic visual (image/short video loop) showcasing key pieces. Animated "Euphoria.clthng" logo/brand name. Subtle call to action (e.g., "Explore Collections").
*   **Interactions:** Custom cursor, text reveal animations for brand name, dynamic background elements.

### **4.2. Shop / Collection Page**
*   **Purpose:** Display products with clear categorization and engaging presentation.
*   **Content:** Grid or masonry layout of product cards. Categories/filters (e.g., "T-Shirts", "Hoodies", "Accessories"). Each product card will include image, name, and price.
*   **Interactions:** Hover-tilt effects on product cards. Quick view functionality (modal/drawer) for product details. Smooth transitions when filtering categories.
*   **E-commerce (Placeholder):** Initial implementation will focus on visual layout. A clear placeholder for future e-commerce integration (e.g., "Add to Cart" button that currently does nothing or links to an external shop if available).

### **4.3. Lookbook / Gallery Page**
*   **Purpose:** Artistic showcase of clothing in styled contexts, emphasizing the brand's visual identity.
*   **Content:** High-resolution editorial photography of models wearing Euphoria clothing. Could be a horizontal scrolling experience or a dynamic grid that expands on click.
*   **Interactions:** Fullscreen image viewer with unique transitions. Parallax effects on background images during scroll.

### **4.4. About Us Page**
*   **Purpose:** Share the brand story, values, and introduce the team.
*   **Content:** Textual content about Euphoria's philosophy, its "Designed and Handmade in Hungary" ethos. Introduction to `@tino_sk8z`, `@frigyes_varga` (designers), and `@ab3l_h`, `@yunoigore` (creative management). Potentially stylized photos of the team/process.
*   **Interactions:** Subtle text reveal animations, image fade-ins.

### **4.5. Contact Page**
*   **Purpose:** Provide clear avenues for communication.
*   **Content:** Contact form (name, email, message). Direct links to social media: Instagram (`@euphoria.clthng`), TikTok (`@euphoria.clthng`). Hungary-based location mention.
*   **Interactions:** Form submission feedback (e.g., success/error message). Animated social media icons.

## 5. Technology Stack

*   **Frontend Framework:** Next.js 14+ (React Server Components, App Router)
*   **Styling:** Custom CSS / CSS Modules for unique elements, with Tailwind CSS for rapid utility-first development and consistent spacing/sizing. This approach avoids "Tailwind slop" by encapsulating complex styles in custom CSS while leveraging Tailwind for atomic properties.
*   **Animations:** Framer Motion for declarative, physics-based animations and GSAP (GreenSock Animation Platform) for fine-tuned, timeline-based complex animations and custom scroll effects.
*   **Image Optimization:** Next/image component for responsive and optimized image delivery.
*   **Deployment:** Vercel (CI/CD integration with GitHub repo).

## 6. Data & Content Strategy

*   **Instagram Content:** Product images and visual inspiration will be sourced directly from `https://www.instagram.com/euphoria.clthng/` as discussed. These will be integrated into the Shop and Lookbook sections.
*   **Contact Info:** Will be hardcoded initially, with a placeholder contact form.
*   **Future Considerations:** Potential integration with a headless CMS (e.g., Contentful, Sanity) for product management and blog content. E-commerce platform integration (e.g., Shopify, Snipcart) for full transaction capabilities.

## 7. Development & Verification

*   **Test-Driven Development (TDD):** Where applicable, features will be built with a test-first approach.
*   **Code Quality:** Linting (ESLint, Prettier) and TypeScript for type safety will be enforced.
*   **Performance:** Focus on Core Web Vitals, image optimization, and efficient animation rendering.
*   **Accessibility:** Basic accessibility considerations will be integrated (semantic HTML, keyboard navigation).
*   **Build & Deploy:** Automated builds and deployments via Vercel on every push to the main branch.

## Approval

Please review this design specification. Let me know if you have any questions, require modifications, or approve to proceed with the implementation plan.
