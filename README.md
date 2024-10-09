# Human-Aware Planning and Interaction Lab @ CSU
Built [Wyatt Hansen](https://github.com/Kickblip)

## Maintaining
Almost all the editable content is under the `/content/` directory in JSONs

### How can I run this locally?

Clone the repo and install dependencies
```
git clone https://github.com/Kickblip/hapi-site.git
cd hapi-site
npm install
```
_If you don't have npm, [install Node.js](https://nodejs.org/en)_

Create a `.env.local` file at the root of the project and paste the following into it
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FORMSUBMIT_CONTACT=example@example.com # Not important
```

Run the dev server
```
npm run dev
```

Finally, navigate to [localhost:3000](http://localhost:3000/) in your browser of choice

## Techstack Used:

-   Framework: [Next.js](https://nextjs.org/)
-   Language: [TypeScript](https://www.typescriptlang.org/)
-   Styling: [Tailwind CSS](https://tailwindcss.com/)
-   Content: [MDX](https://mdxjs.com/)
-   Content Management: [Contentlayer](https://www.contentlayer.dev/)
-   Deployment: [Vercel](https://vercel.com/)
