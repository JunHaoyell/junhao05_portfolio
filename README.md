# Jun Hao — professional portfolio

A static portfolio: `index.html`, `portfolio.css`, `projects.js`, and `assets/`.
No installation or build step is required. Existing older stylesheets are retained but are not loaded by the current page.

## Adding projects

Add a record to the `projects` array in `projects.js`. Follow an existing record and provide `title`, `category`, `role`, `description`, `image`, `stack`, `details`, and `links`. Put screenshots in `assets/` and use their relative paths. Set `featured: true` for a selected project; omit it to put the project in the always-visible project archive below the selected projects. The archive count updates automatically. There is no fixed project limit.

Write contributions as factual statements and keep URLs in `links` with a readable `label`. An empty `links` array displays an internal-work note. Never put credentials or private customer data in a project record or screenshot.

## Content merge

Source: https://yell-portifolio.vercel.app/

The current library contains three recent products and thirteen additional cases. All fifteen project/work entries from the earlier portfolio are represented: the two RAG entries are combined into one case with both repositories, and Meals on Wheels front-end/back-end entries are combined with both repositories. The earlier Data Developer case is retained alongside the employment history. All original nonempty repository, demo, Figma, and project-post URLs are retained.

The merge also includes the earlier skills, tools, languages, education, GitHub, and secondary social profiles. Placeholder Latin text from Enomy Finance was excluded; its description only reflects the stated project and technologies. Scholarship details follow the supplied offer letter (study commencing in 2027); no claim of offer acceptance or maximum award is made.

The only contact email is **yellminthu04@icloud.com**, as requested. The earlier email address and phone number are intentionally omitted. No Upwork link is included.

## Preview and publishing

Open `index.html` locally or serve this folder with a static web server. The existing GitHub/Vercel deployment remains the publishing destination; these local edits do not by themselves update the public domain. No hosting migration or automatic publishing is configured here.
