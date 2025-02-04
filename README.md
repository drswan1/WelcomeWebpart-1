# welcome-webpart

## Summary

Welcome web-part, a styling webpart that dispalys small summaries of the different sharepoint subsites.


## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.20.0-green.svg)

* Supported in SharePoint Online

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

- Node 18.20 required

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| Welcome-webpart | Juan-Gabriel Farias Sedalski, juan.farias40@gmail.com, Universität Salzburg |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 2.0.1.5 | Demcember, 2024  | Complete design and logic overhaul, v2.0 upgrade|
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**




To rebundle the webpart, within this SPFx solution root folder run the following commands
  * in the command line run:
  
  ```powershell
  gulp build
  gulp bundle
  gulp package-solution
  ```

## Features

This webpart is used as a landing webpart to explain different substies of our sharepoint solution. Additionally, each button's link is hard-coded. Mobile responsiveness is built-in.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
