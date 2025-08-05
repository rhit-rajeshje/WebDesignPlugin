import {button1, button2} from './button.ts';
import {dropdown, pageNav} from './dropdown.ts';
import { nav1, nav2 } from './nav.ts';
import { calender } from './calender.ts';
import { paymentDetails } from './form.ts';

penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.theme}`);

penpot.ui.onMessage<Map<string,string>>((message) => {
  console.log("plugin");
  const width = Number(message.get("data-width"));
  const height = Number(message.get("data-height"));
  const borderRadius = Number(message.get("data-borderRadius"));
  const fillColor = message.get("data-fillColor");
  const iconColor = message.get("data-iconColor");
  const textColor = message.get("data-textColor");
  const items = Number(message.get("data-items"));
  const iconListNames = message.get("data-icons")?.split(",").reverse();
  console.log(iconListNames);
  console.log(items);
  if (message.get("data-version")=="1") {
    if(fillColor && iconColor){
      button1(width,height,borderRadius,fillColor,iconColor);
      }
  }
  if(message.get("data-version")=="2"){
     if(fillColor && iconColor){
      button2(width,height,borderRadius,fillColor,iconColor);
    }
  }

  if(message.get("data-version")=="3"){
    if(fillColor && iconColor){
      dropdown(width,fillColor,iconColor,items);
    }
  }

  if(message.get("data-version")=="4"){
    if(fillColor && iconColor && textColor && iconListNames){
      nav1(width,height,fillColor,iconColor,textColor,iconListNames);
    }
  }

  if(message.get("data-version")=="5"){
    if(fillColor && iconColor && textColor && iconListNames){
      nav2(width,height,fillColor,iconColor,textColor,items,iconListNames);
    }
  }

  if(message.get("data-version")=="6"){
    if(fillColor && iconColor && textColor){
      calender(width,height,fillColor,iconColor,textColor); 
    }
  }

  if(message.get("data-version")=="7"){
    if(fillColor && iconColor && textColor){
      pageNav(width,height,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="8"){
    // if(fillColor && iconColor && textColor){
    // paymentDetails(width,height,fillColor,iconColor,textColor);
    // }

     const containerBox = penpot.createRectangle();
     containerBox.x = penpot.viewport.center.x;
     containerBox.y = penpot.viewport.center.y;
     containerBox.resize(930,1250);
     containerBox.fills = [{fillColor: '#FFFFFF'}];

     const title = penpot.createText("Address Details");
     if(title){
      title.x = penpot.viewport.center.x+50; 
      title.y = penpot.viewport.center.y+60;
      title.fontSize = '75';
      title.fontFamily = 'Sour Gummy';
     }

     const bar = penpot.createRectangle();
     bar.x = penpot.viewport.center.x+50;
     bar.y = penpot.viewport.center.y+200;
     bar.resize(830,10);
     bar.fills = [{fillColor: '#b1b2b5', fillOpacity: .25}];

     const firstName = penpot.createText("FIRST NAME");
     if(firstName){
      firstName.x = penpot.viewport.center.x +50;
      firstName.y = penpot.viewport.center.y +300;
      firstName.fontSize = '30';
      firstName.fontFamily = 'Sour Gummy';
     }

     const firstNameBox = penpot.createRectangle();
     firstNameBox.x = penpot.viewport.center.x+50;
     firstNameBox.y = penpot.viewport.center.y+350;
     firstNameBox.resize(350,80);
     firstNameBox.borderRadius= 10;
     firstNameBox.fills = [{fillColor: '#FFFFFF'}];
     firstNameBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
     firstNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const firstNameSubText = penpot.createText("First Name");
     if(firstNameSubText){
      firstNameSubText.x = penpot.viewport.center.x +65;
      firstNameSubText.y = penpot.viewport.center.y +365;
      firstNameSubText.fontSize = '30';
      firstNameSubText.fontFamily = 'Sour Gummy';
      firstNameSubText.fills = [{fillColor:"#e0e0e0"}];
     }

    const lastName = penpot.createText("LAST NAME");
     if(lastName){
      lastName.x = penpot.viewport.center.x +480;
      lastName.y = penpot.viewport.center.y +300;
      lastName.fontSize = '30';
      lastName.fontFamily = 'Sour Gummy';
     }

     const lastNameBox = penpot.createRectangle();
     lastNameBox.x = penpot.viewport.center.x+480;
     lastNameBox.y = penpot.viewport.center.y+350;
     lastNameBox.resize(350,80);
     lastNameBox.borderRadius = 10;
     lastNameBox.fills = [{fillColor: '#FFFFFF'}];
     lastNameBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
     lastNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const lastNameSubText = penpot.createText("Last Name");
     if(lastNameSubText){
      lastNameSubText.x = penpot.viewport.center.x +495;
      lastNameSubText.y = penpot.viewport.center.y +365;
      lastNameSubText.fontSize = '30';
      lastNameSubText.fontFamily = 'Sour Gummy';
      lastNameSubText.fills = [{fillColor:"#e0e0e0"}];
     }

     const address1 = penpot.createText("ADDRESS 1");
     if(address1){
      address1.x = penpot.viewport.center.x +50;
      address1.y = penpot.viewport.center.y +470;
      address1.fontSize = '30';
      address1.fontFamily = 'Sour Gummy';
     }

     const address1Box = penpot.createRectangle();
     address1Box.x = penpot.viewport.center.x+50;
     address1Box.y = penpot.viewport.center.y+520;
     address1Box.resize(780,80);
     address1Box.borderRadius= 10;
     address1Box.fills = [{fillColor: '#FFFFFF'}];
     address1Box.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
     address1Box.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const address1SubText = penpot.createText("123 Sample Street");
     if(address1SubText){
      address1SubText.x = penpot.viewport.center.x +65;
      address1SubText.y = penpot.viewport.center.y +535; 
      address1SubText.fontSize = '30';
      address1SubText.fontFamily = 'Sour Gummy';
      address1SubText.fills = [{fillColor:"#e0e0e0"}];
     }

     const address2 = penpot.createText("ADDRESS 2");
     if(address2){
      address2.x = penpot.viewport.center.x +50;
      address2.y = penpot.viewport.center.y +640;
      address2.fontSize = '30';
      address2.fontFamily = 'Sour Gummy';
     }

     const address2Box = penpot.createRectangle();
     address2Box.x = penpot.viewport.center.x+50;
     address2Box.y = penpot.viewport.center.y+690;
     address2Box.resize(780,80);
     address2Box.borderRadius= 10;
     address2Box.fills = [{fillColor: '#FFFFFF'}];
     address2Box.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
     address2Box.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const address2SubText = penpot.createText("456 Example Dr");
     if(address2SubText){
      address2SubText.x = penpot.viewport.center.x +65;
      address2SubText.y = penpot.viewport.center.y +705; 
      address2SubText.fontSize = '30';
      address2SubText.fontFamily = 'Sour Gummy';
      address2SubText.fills = [{fillColor:"#e0e0e0"}];
     }

    const city = penpot.createText("CITY");
     if(city){
      city.x = penpot.viewport.center.x +50;
      city.y = penpot.viewport.center.y +810;
      city.fontSize = '30';
      city.fontFamily = 'Sour Gummy';
     }

     const cityBox = penpot.createRectangle();
     cityBox.x = penpot.viewport.center.x+50;
     cityBox.y = penpot.viewport.center.y+860;
     cityBox.resize(450,80);
     cityBox.borderRadius= 10;
     cityBox.fills = [{fillColor: '#FFFFFF'}];
     cityBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
     cityBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const citySubText = penpot.createText("Test City");
     if(citySubText){
      citySubText.x = penpot.viewport.center.x +65;
      citySubText.y = penpot.viewport.center.y +875; 
      citySubText.fontSize = '30';
      citySubText.fontFamily = 'Sour Gummy';
      citySubText.fills = [{fillColor:"#e0e0e0"}];
     }

    const state = penpot.createText("STATE");
     if(state){
      state.x = penpot.viewport.center.x +615;
      state.y = penpot.viewport.center.y +810;
      state.fontSize = '30';
      state.fontFamily = 'Sour Gummy';
     }

     const stateBox = penpot.createRectangle();
     stateBox.x = penpot.viewport.center.x+615;
     stateBox.y = penpot.viewport.center.y+860;
     stateBox.resize(220,80);
     stateBox.borderRadius= 10;
     stateBox.fills = [{fillColor: '#FFFFFF'}];
     stateBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
     stateBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const stateSubText = penpot.createText("EX");
     if(stateSubText){
      stateSubText.x = penpot.viewport.center.x +630;
      stateSubText.y = penpot.viewport.center.y +875;  
      stateSubText.fontSize = '30';
      stateSubText.fontFamily = 'Sour Gummy';
      stateSubText.fills = [{fillColor:"#e0e0e0"}];
     }

     const stateArrow = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
     if(stateArrow){
      stateArrow.x = penpot.viewport.center.x +760;
      stateArrow.y = penpot.viewport.center.y+870;
      stateArrow.resize(60,60);
     }

    const zipCode = penpot.createText("ZIP CODE");
     if(zipCode){
      zipCode.x = penpot.viewport.center.x +50;
      zipCode.y = penpot.viewport.center.y + 980;
      zipCode.fontSize = '30';
      zipCode.fontFamily = 'Sour Gummy';
     }

     const zipCodeBox = penpot.createRectangle();
     zipCodeBox.x = penpot.viewport.center.x+50;
     zipCodeBox.y = penpot.viewport.center.y+1030;
     zipCodeBox.resize(400,80);
     zipCodeBox.borderRadius= 10;
     zipCodeBox.fills = [{fillColor: '#FFFFFF'}];
     zipCodeBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
     zipCodeBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const zipCodeSubText = penpot.createText("000000");
     if(zipCodeSubText){
      zipCodeSubText.x = penpot.viewport.center.x +65;
      zipCodeSubText.y = penpot.viewport.center.y +1045; 
      zipCodeSubText.fontSize = '30';
      zipCodeSubText.fontFamily = 'Sour Gummy';
      zipCodeSubText.fills = [{fillColor:"#e0e0e0"}];
     }

     const country = penpot.createText("COUNTRY");
     if(country){
      country.x = penpot.viewport.center.x +535;
      country.y = penpot.viewport.center.y + 980;
      country.fontSize = '30';
      country.fontFamily = 'Sour Gummy';
     }

     const countryBox = penpot.createRectangle();
     countryBox.x = penpot.viewport.center.x+535;
     countryBox.y = penpot.viewport.center.y+1030;
     countryBox.resize(300,80);
     countryBox.borderRadius= 10;
     countryBox.fills = [{fillColor: '#FFFFFF'}];
     countryBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
     countryBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const countrySubText = penpot.createText("Trial");
     if(countrySubText){
      countrySubText.x = penpot.viewport.center.x +550;
      countrySubText.y = penpot.viewport.center.y + 1045; 
      countrySubText.fontSize = '30';
      countrySubText.fontFamily = 'Sour Gummy';
      countrySubText.fills = [{fillColor:"#e0e0e0"}];
     }

     const countryArrow = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
     if(countryArrow){
      countryArrow.x = penpot.viewport.center.x +760;
      countryArrow.y = penpot.viewport.center.y+1040;
      countryArrow.resize(60,60);
     }

 














  }
});

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});
