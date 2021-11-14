# portfolio-web-UI
Web UI for the Portfolio project

[![Cypress tests](https://github.com/alex-piccione/portfolio-web-UI/actions/workflows/Cypress.yml/badge.svg)](https://github.com/alex-piccione/portfolio-web-UI/actions/workflows/Cypress.yml)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To run the app

``yarn dev``

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Debugging](https://nextjs.org/docs/advanced-features/debugging) - (server-side, client-side, full-stack)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Configuration

Private configuration is stored in _.env.local_ file like:
```
AWS_REGION=eu-central-1
AWS_API_ID=***
AWS_API_STAGE=***
AWS_KEY_ID=***
AWS_KEY_SECRET=***
```
These values are loded by Next.js within by _process.env.AAA_.  

For production these values are passed by ...