# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for **Silverback Treeworks**, a tree service company based in the Vancouver, BC area. The website is being built from scratch. No framework has been chosen yet.

## Asset Library

Business assets are stored in the `Silverback/` folder and should be referenced (not duplicated) when building the site:

- **Logo**: `Silverback/Silberback Treeworks.png`
- **Photos/Videos**: Various `.png`, `.jpeg`, `.mp4`, `.mov` files for gallery/hero use
- **Business docs**: WorkSafe BC clearance, business license, arborist reports (not for public display)
- **Ad creatives**: `Ads/` folder contains design references

## Development Commands

These will be added once a framework/stack is chosen. Common options to consider:

- **Static HTML/CSS/JS** — no build step, open `index.html` directly in browser
- **Vite** — `npm run dev` to start dev server, `npm run build` to build
- **Next.js** — `npm run dev`, `npm run build`, `npm run start`

## Development

No build step, but the header nav is shared across pages via `components/header.html` + `js/components.js`, which fetches and injects it at runtime — browsers block that `fetch()` call on pages opened directly via `file://`, so **don't just double-click `index.html`**. Preview through a local server instead: VS Code's Live Server extension, or `python3 -m http.server` from the project root. Push to GitHub to trigger an automatic GitHub Pages deploy. Enable Pages in repo Settings → Pages → set source to `main` branch.

## Website Plan

See `WEBSITE_PLAN.md` for the full build plan — site structure, page breakdown, design direction, tech stack decisions, and build order.
