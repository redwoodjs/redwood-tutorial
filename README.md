# Redwood Tutorial App

This repo represents the final state of the app created during the [Redwood Tutorial](https://redwoodjs.com/tutorial).
It is meant to be a starting point for those working on the second half of the Tutorial, starting at the [Intermission](https://redwoodjs.com/docs/tutorial/intermission).

This repo contains much more styling than the one we built together in the tutorial, but is functionally identical.

## Setup

The [tutorial itself](https://redwoodjs.com/docs/tutorial/chapter1/prerequisites) contains instructions for getting this repo up and running, but here is a summary of the commands:

```bash
git clone https://github.com/redwoodjs/redwood-tutorial
cd redwood-tutorial
yarn install
yarn rw prisma migrate dev
yarn rw prisma db seed
yarn rw dev
```
