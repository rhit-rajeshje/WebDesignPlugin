# Website Component Plugin

This Penpot Plugin is designed to insert customizable Website Components into your project for UI Mockups

Current Elements: 
 - Buttons (Two Styles)
 - Dropdown 
 - Calender
 - Charts (Bar & Line)
 - Page Navigation (Two Styles)
 - Page Selection  (Two Styles)
 - Navigation Bar (Three Styles)
 - Card Display (Three Styles)
 - Review Cards (Two Styles) 
 - Carousels
 - Forms
 - Lists

Users can resize the Website Component before being placed through setting a specific width and height and well as dragging once placed. Components that involve text must be scaled individually by pressing the 'K' key and then resizing. For the best result, set the width and height of the component to be equal to the ratio provided as an example

## How to use
### In Penpot
Open up the 'Plugin Manager' within Penpot. Paste the following URL and click 'Install'. The plugin will appear in your 'Installed Plugins' list which you can click 'OPEN' to use

*url*

### Locally
Clone this repo and open the project in your code editor (Recommended is Visual Studio Code).

Run the following commands:
- `npm install` *DO NOT run `npm audit fix` after if suggested
- `npm run dev` 

If running successfully, a link of the local network host will appear. Ex: ` http://localhost:4400/ `

Open up the 'Plugin Manager' within Penpot. Paste the following url (your local host with `/manifest.json` at the end) and click 'Install'. The plugin will appear in your 'Installed Plugins' list which you can click 'OPEN' to use

*{localHost}/manifest.json*

## Feedback and Support
To contribute to the development of this project, please refer to the instructions on how to run Penpot Locally

Feedback is always welcome through opening issues on the project

## License
This plugin is under the [MIT](https://en.wikipedia.org/wiki/MIT_License) License

## Extra Resources
- [Penpot Plugin Starter Template](https://github.com/penpot/penpot-plugin-starter-template)
- [Penpot Plugin API Docs](https://penpot-plugins-api-doc.pages.dev/)
- [Penpot Plugin Library](https://penpot.app/penpothub/plugins)