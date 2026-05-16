# Taawon Workspace Documentation

![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)

Welcome to the official documentation portal for **Taawon Workspace** (powered by Mattermost). This project serves as the primary end-user guide, delivering a premium, modern, and highly responsive documentation experience. It has been migrated from traditional Sphinx/reStructuredText (RST) to a component-driven architecture using [Astro Starlight](https://starlight.astro.build/) and MDX.

## 🌟 Key Features

- **Modern Tech Stack:** Built with Astro, Starlight, and MDX for blazing-fast performance and rich interactive content.
- **Arabic Localization (RTL):** Fully native Right-to-Left (RTL) support with meticulous attention to UI layout, typography, and keyboard shortcut directionality.
- **Premium Design System:**
  - Responsive 12-column fixed-width grid system (>1536px) for precise alignment.
  - Custom "squircle" icons, glassmorphism effects, and premium dark mode styling.
  - Bespoke, interactive UI cards for the landing page (`index.mdx`).
- **Enhanced UI Components:**
  - Exclusive Sidebar Accordions.
  - Centered, responsive Search Bar with optimized Pagefind integration.
  - Interactive Tabs and Admonitions (Callouts).
  - Dual-pane code block styling.
- **Seamless Content Migration:** Automated and manual translation of legacy RST directives into modern Starlight MDX components.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

### Local Development

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   _The local server will start at `http://localhost:4321/`._

3. **Build for Production:**

   ```bash
   npm run build
   ```

   _This generates static files in the `./dist/` directory._

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```text
.
├── public/                # Static assets (favicons, etc.)
├── src/
│   ├── assets/            # Local images and design assets
│   ├── components/        # Custom Astro & UI components (Tabs, Accordions, FAIcon)
│   ├── content/
│   │   └── docs/          # MDX documentation files (The actual content)
│   ├── styles/            # CSS Architecture
│   │   ├── global.css                 # Theme variables, RTL overrides, typography
│   │   ├── landing.css                # Premium landing page styling
│   │   └── searchbar-responsive.css   # Custom search bar layout
│   └── content.config.ts  # Astro content collections schema
├── astro.config.mjs       # Astro & Starlight configuration
└── package.json           # Project dependencies and scripts
```

## ✍️ Contribution & Editing Guidelines

If you are a developer or content editor working on this project, please adhere to the following guidelines established during the RST-to-MDX migration:

### 1. MDX & Starlight Components

- **Admonitions:** Use Starlight's syntax `:::note`, `:::tip`, `:::caution`, and `:::danger` instead of legacy `.. note::` directives.
- **Tabs:** When using tabs, always import the component at the top of the MDX file:

  ```mdx
  import { Tabs, TabItem } from "@astrojs/starlight/components";

  <Tabs>
    <TabItem label="Tab 1">Content</TabItem>
  </Tabs>
  ```

### 2. Image Handling

Images are referenced using external direct links from the legacy documentation server to avoid bloating the repository.

- **Format:** `![Alt text](https://docs.mattermost.com/_images/filename.ext)`
- _Do not use relative paths like `../images/` unless it is a new asset specific to the Taawon UI placed in `src/assets/`._

### 3. Styling & CSS

- **Design System:** Stick to the established CSS variables in `global.css` (e.g., brand color `#00987e`).
- **Avoid Inline Styles:** Use existing classes or update the relevant CSS files (`landing.css`, etc.) for complex UI adjustments.
- **TailwindCSS:** This project uses **Vanilla CSS** for maximum control and flexibility, tailored specifically for the Starlight DOM structure. Avoid injecting atomic utility classes unless part of an authorized component integration.

### 4. File Naming

Maintain the original file naming convention (kebab-case) from the RST docs to ensure link integrity (e.g., `user-guide-setup.mdx`).

---

**Need Help?**
Refer to the [Astro Documentation](https://docs.astro.build/) or the [Starlight Documentation](https://starlight.astro.build/) for advanced framework-level configurations.
