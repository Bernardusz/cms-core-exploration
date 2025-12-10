# CMS Core Exploration (Archived)

This project was an experimental multi-user CMS built with:
- Django
- Postgres
- React
- Docker Compose

## Goal
Explore the architecture of a multi-user CMS

## What Worked
- Clean data models for structured content
- Section ordering and validation
- Slug generation and Postgres integration

## What Broke
- Scope exceeded current experience level
- Multi-user permissions + content modeling combined too early
- Debugging complexity amplified by Docker + WSL

## Key Lessons
- Separate content modeling from authorization systems
- Avoid multi-user systems in early Django projects
- Finish small, single-purpose applications first

# Postmortem

## Why this project stalled
- Too many abstractions introduced simultaneously
- No clear "core loop."
- Permissions affected every query

## What I would do differently
- Start single-user
- Be ambitious but realistic
- Don't underestimate scope

## What survives into future projects
- Section-based content modeling
- Slug collision handling


## Status
Archived intentionally as a learning artifact.
This project is intentionally archived to preserve lessons learned before moving on to smaller, fully shipped applications.
