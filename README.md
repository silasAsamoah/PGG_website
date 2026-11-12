# Chapter Church — website starter

A beginner-friendly, responsive static website built with HTML, CSS, and JavaScript. It is organised for deployment on Hostinger shared hosting.

## Project structure

```text
chapter_church_website/
├── index.html
├── styles.css
├── script.js
├── README.md
└── resources/
    ├── README.md
    ├── images/       # Replace sample image slots with church photos
    ├── logo/         # Church logo (currently a temporary SVG placeholder)
    └── documents/    # Optional public church documents
```

## Preview on Windows

1. Extract the ZIP file.
2. Open the extracted `chapter_church_website` folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the Live Server extension in VS Code.
4. Edit the page content in `index.html` and the appearance in `styles.css`.

## Add the church's pictures and logo

The website uses local files in the `resources` folder. This makes it easier to manage the church's assets and avoids relying on third-party image links.

Replace the temporary logo at `resources/logo/chapter-church-logo.svg` with the approved logo. If you use a different filename, update the two logo image paths in `index.html`.

Add photos to `resources/images/` using the exact filenames below:

- `hero.jpg` — homepage banner
- `ministry-children.jpg` — children and families ministry
- `ministry-community.jpg` — community groups
- `ministry-outreach.jpg` — outreach and service
- `featured-message.jpg` — featured message
- `gallery-worship.jpg` — worship gallery
- `gallery-community.jpg` — fellowship gallery
- `gallery-service.jpg` — service gallery

See `resources/images/README.md` for suggested image dimensions. Use church-owned photos or images the church has permission to publish. Optimised JPG or WebP files are recommended. If you use WebP or another filename, update the matching paths in `styles.css`.

## Upload to Hostinger

This project is a static website and can run on Hostinger shared hosting; it does not require Node.js or a database for the current features.

1. Purchase a Hostinger hosting plan and connect the domain to the hosting account.
2. In Hostinger hPanel, open **Websites → Manage → File Manager** (the exact labels may vary).
3. Open the website's `public_html` directory.
4. Upload the contents of the `chapter_church_website` folder into `public_html` — specifically `index.html`, `styles.css`, `script.js`, `README.md` (optional), and the entire `resources` folder. Do not upload only the ZIP file unless you then extract it inside `public_html`.
5. Confirm that `index.html` is directly inside `public_html`, not one folder deeper.
6. Visit the domain and check the site on both desktop and mobile.

Keep the directory structure intact. In particular, `resources/images/` and `resources/logo/` must remain alongside `index.html`.

## Current feature limitations

- The prayer request form is a demo. It does not send, store, or email submissions.
- Event registration, online giving, sermon management, and an admin dashboard are not connected yet.
- Do not publish forms or payment instructions as functional until an appropriate service is connected and tested.
- The page currently uses Google Fonts from an external service; the website can still display using its fallback fonts if Google Fonts is unavailable.

## Suggested next steps

1. Replace the placeholder logo and add church photos to `resources/`.
2. Update the service time, location, contact details, ministry names, events, and church information.
3. Connect and test the prayer/contact forms.
4. Add real sermon links and giving instructions when ready.
