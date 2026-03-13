# Portfolio 2025

A high-performance personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project serves as a showcase of modern frontend development practices, focusing on performance, accessibility, and clean architectural patterns.

## 🚀 technical Overview

This application is engineered to be scalable and maintainable. While currently a static presentation layer, the architecture is designed to support dynamic content fetching through a strict separation of concerns.

### Core Tech Stack
*   **Framework:** [Next.js](https://nextjs.org/) (App Router) for server-side rendering and optimized routing.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a custom design token system for consistent theming and dark mode support.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) for static typing and developer experience.
*   **Animation:** [GSAP](https://gsap.com/) (GreenSock) for high-performance timeline-based animations and scroll triggers (see `features/projects/Projects.tsx`).

### Architecture & Design Patterns

The codebase moves away from tightly coupled components in favor of a **Feature-Based Architecture**.

1.  **Feature Slices:**
    Code is organized by domain features (e.g., `features/header`, `features/projects`) rather than generic file types. Each feature encapsulates its own logic, UI, and styles, making the codebase easier to navigate and refactor.

2.  **Repository & Service Pattern (Planned):**
    To ensure the UI remains agnostic to data sources, I am implementing a Clean Architecture approach for data retrieval:
    *   **Entities:** TypeScript interfaces defining core data models (e.g., `Project`, `Experience`).
    *   **Repositories:** Abstract interfaces defining *how* data is accessed.
    *   **Services:** Concrete implementations that fetch data (currently mocked, scalable to CMS/API).

    *Example Implementation Plan:*
    ```typescript
    // The UI consumes this, unaware if data comes from Sanity CMS, Firebase, or JSON.
    const projects = await projectService.getAll();
    ```

3.  **Performance Optimizations:**
    *   **Passive Event Listeners:** Scroll handlers (found in `Header.tsx`) utilize `{ passive: true }` to prevent UI blocking during scroll events.
    *   **Ref-based Animations:** GSAP animations use React `useRef` to manipulate DOM elements directly, bypassing the React render cycle for smoother frame rates during complex transitions.

## 🛠️ Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AndiCoding/site.git
    cd site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔮 Future Roadmap

*   [ ] Refactor hardcoded data into a Headless CMS (Sanity.io or Contentful) using the Repository pattern.
*   [ ] Implement Unit Testing (Jest/React Testing Library) for core UI components.
*   [ ] Add E2E testing with Playwright to verify navigation and theme toggling flows.
*   [ ] Optimize LCP (Largest Contentful Paint) by fine-tuning generic font loading with `next/font`.


## 📄 License

This project is open-source and available under the [MIT License](LICENSE).