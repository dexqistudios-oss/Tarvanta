---
# TEMPLATE ARTICLE — draft: true keeps it out of production builds.
# Copy this file, rename it (the file name becomes the URL), set draft: false.
title: How to publish an Insights article
summary: A working sample of the Insights article template, showing every supported element. It is visible in development only and is never published.
topic: Strategic perspectives
published: 2026-10-30
author: Tarvanta
featured: true
draft: true
# Optional cover image: place the file next to this one and reference it, e.g.
# cover: ./my-cover.jpg
# coverAlt: Describe what the image shows, for people who cannot see it.
---

This is the opening paragraph. It is set slightly larger than the body to draw the reader in, so it works best as one or two sentences that state the article’s argument plainly.

Body paragraphs follow in the reading serif at a comfortable measure. Keep paragraphs short. Write for a thoughtful reader who has limited time.

## Section headings use the display serif

Use second-level headings to break the article into its main movements. Most pieces need between two and five.

### Smaller headings are set in the sans

Use these sparingly, for a short run of related points.

> A pull quote or quotation sits on a bronze rule. Use it for a line worth slowing down for, and always credit the source if it is someone else’s words.

Lists work as expected:

- Use unordered lists for points that do not have an order.
- Keep each item to a sentence or two.

1. Use numbered lists for steps that happen in sequence.
2. Each number should mean something.

[Links](/approach/) are underlined in olive. Links to other sites open normally from Markdown; add them only to sources you have checked.

---

## Before publishing

Check every figure, name and quotation against its source and link to that source. If a claim cannot be supported, remove it. Then set `draft: false`, commit, and push: Cloudflare Pages rebuilds the site and the article appears on the Insights page.
