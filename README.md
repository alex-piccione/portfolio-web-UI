# portfolio-web-UI
Web UI for the Portfolio project

[![Build and test](https://github.com/alex-piccione/portfolio-web-UI/actions/workflows/Build%20and%20test.yml/badge.svg)](https://github.com/alex-piccione/portfolio-web-UI/actions/workflows/Build%20and%20test.yml)

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

### Locale

Next.js detect the locale automatically.  
https://nextjs.org/docs/advanced-features/i18n-routing#automatic-locale-detection  
BUT **it forces you to define which locales you want to support** and a default one.  

_next.config.js_
```json
module.exports = {
  i18n: {
    locales:["en-US", "en-GB", "en-UK", "it-IT"],
    defaultLocale: "it-IT",
    localeDetection: true,
  }
}
```
What if I want to support ALL locales?  
To generate the locale.js and locale-names.js files I used F#: devops/[generate locale.fsx]("./devops/generate locale.fsx")

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Configuration

Private configuration is stored in _.env.local_ file like:
```
a_AWS_REGION=eu-central-1
a_AWS_API_ID=***
a_AWS_API_STAGE=***
a_AWS_KEY_ID=***
a_AWS_KEY_SECRET=***
```
These values are loded by Next.js within _process.env.AAA_.   
ref: 
  - https://vercel.com/docs/concepts/next.js/overview#adding-secrets  
  - https://nextjs.org/docs/basic-features/environment-variables

variables are prefixed with "a_" because many of them are used  by Next.js/Vercel itself.  
For production these values are stored in the Vercel project Environment Variables.  


## Bootstrap

Using "modal" (and other componentthat needs JavaScript) from vanilla bootstrap does not work (it does not show up).    
You need to use _Modal_ component from bootstrap package.    
When use ``import {Modal} from "bootstrap"`` and try to use the _Modal_ component I receive this error: "document is not defined".  
(The same error I receive when I try to import _bootstrap.js_ in _app.js or other componnets)
Also using workaround like this it wasn't possible to use Bootstrap:
```typescript
  // https://www.kindacode.com/article/how-to-correctly-use-bootstrap-5-in-next-js/
  // Next.js render the app both client side and sever side, so "document" and "window" does not exists.
  useEffect && useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  }, []);
```
So I'm using React-Bootstrap: ``yarn add react-bootstrap``.  
(it still need bootstrap for CSS, ``yarn add bootstrap``)  
Reference: https://react-bootstrap.github.io/getting-started/introduction/

### Icons
Good reference: https://react-icons.github.io  
I choose [__Feather__](https://feathericons.com/) https://react-icons.github.io/react-icons/icons?name=fi
``yarn add react-icons``  
``import { IconName } from "react-icons/fi"``


## Tests
I use [Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Assertions) 
and _Gherkin_.

Gherkin link 1: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor  
Gherkin link 2: https://wanago.io/2020/01/13/javascript-testing-cypress-cucumber/

In order to use TypeScript for Gherkin I followed the instruction here:
https://betterprogramming.pub/migrate-a-cypress-cucumber-project-to-use-typescript-407c612d2f34

Error: SyntaxError: 'import' and 'export' may appear only with 'sourceType: module'

## Yarn
Yarn does not have a "search" functionality. Use ``npm search`` or search on the web.  
To add a package use ``yarn add package@version``.
``yarn help  upgrade`` does not explain if and how a single package can be updated.  
``yarn upgrade [package]`` does not work (it does not upgrade the package to the latest, like next 12.0.1 to 12.0.7).  
You have to specify the version yourself.

### yarn.lock
This file can change.   
It should be part of the repositories: https://github.com/yarnpkg/yarn/issues/1776  

When there are conflicts,  
get the latest version from the repository and run ``yarn install``.  
In this way it will take the old yarn.lock but it will update the packages changed in the current _package.json_.     
``git checkout -- yarn.lock`` or ``git checkout origin/main -- yarn.lock`` if we are merging from master.  
``yarn install`` will update the yarn.lock (based on the changes in the current package.json).    


## Issues

0. Warning when run ``yarn test:ui:open``
> [0102/180334.258:ERROR:registration_protocol_win.cc(102)] CreateFile: The system cannot find the file specified. (0x2)
It does not happen on another project with older versions:  
- "next": "11.1.2",
- "react": "17.0.2",
Upgrading Cypress from version 9.0.0 to 9.2.0 does not fix the issue.

## Calendars (DatePicker)

### react-datepicker  
https://reactdatepicker.com/
No.   
You can't load dynamic locale, based on current request locale.  
Also if you set locale="en-GB" it renders the date as MM/dd/yyyy !!
Interface is not nice, too simple.  
Documentation on localization is not clear and ambiguous.

### react-modern-calendar-datepicker
No No.   
It rendered out of the screen, on top of the textbox.  
Only 2 locales are available, actually languages,  "en" and "fa".  

### react-nice-dates
https://reactnicedates.hernansartorio.com
``yarn add react-nice-dates date-fns``
locale is in the format of "enUS" and needs to be imported in advance

### react-day-picker
http://react-day-picker.js.org/examples/localization



### https://github.com/wojtekmaj/react-datetime-picker#readme