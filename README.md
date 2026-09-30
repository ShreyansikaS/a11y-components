# Accessible Components

Four interface pieces built so they work with a keyboard and a screen reader: tabs, an expandable section, a modal dialog, and a toast message.


## Why I made this
Most tutorials build these with a few divs and a click handler, and then they break the moment someone uses Tab instead of a mouse. I wanted to see what it actually takes to do them properly, following the WAI-ARIA Authoring Practices, without using a library that hides the details.

## What it does
- **Tabs:** arrow keys move between tabs, Home and End jump to the first and last, and only the active tab is in the Tab order.
- **Expandable section:** a button with `aria-expanded` that shows and hides its content.
- **Modal dialog:** traps focus inside while open, closes with Escape, and returns focus to the button that opened it.
- **Toast:** appears in a live region so screen readers announce it.

## What I did
The hardest part was the modal. Keeping focus inside it means catching Tab and Shift+Tab at the first and last element and sending focus around. Getting focus to return to the right place on close was the other detail that is easy to miss. I also made the animation turn off when a person has reduced motion turned on, and the colors follow light and dark mode.

## Skills used
JavaScript (DOM and keyboard events), semantic HTML, ARIA roles and states, focus management, CSS custom properties, responsive design, `prefers-reduced-motion` and `prefers-color-scheme`.

## Roles this project fits
UX Engineer, Front-End Engineer, Design Systems Engineer, Accessibility Specialist, Software Engineer Intern (web).

## Run it
Open `index.html` in a browser. No build step, no dependencies.

## What I would add next
Rebuild it in React with TypeScript and add automated accessibility tests with axe-core.
