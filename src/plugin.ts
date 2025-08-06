import {button1, button2} from './button.ts';
import {dropdown, pageNav} from './dropdown.ts';
import { nav1, nav2 } from './nav.ts';
import { calender } from './calender.ts';
import { addressDetails, paymentDetails } from './form.ts';

penpot.ui.open("Website Components Plugin", `?theme=${penpot.theme}`);

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
    if(fillColor && iconColor && textColor){
    paymentDetails(width,height,fillColor,iconColor,textColor);
    }
  }
  if(message.get("data-version")=="9"){
    // if(fillColor && iconColor && textColor){
    //   addressDetails(width,height,fillColor,iconColor,textColor);
    // }
    const containerBox = penpot.createRectangle();
    containerBox.x = penpot.viewport.center.x;
    containerBox.y = penpot.viewport.center.y;
    containerBox.resize(1400,1700);
    containerBox.fills = [{fillColor:'#FFFFFF'}];

    const title = penpot.createText('Employee Info');
    if(title){
      title.x = penpot.viewport.center.x + 70;
      title.y = penpot.viewport.center.y + 100;
      title.fontSize = '75';
      title.fontFamily = 'Sour Gummy';
    }

    const bar = penpot.createRectangle();
    bar.x = penpot.viewport.center.x + 70;
    bar.y = penpot.viewport.center.y + 230;
    bar.resize(1230,10);
    bar.fills = [{fillColor: '#b1b2b5', fillOpacity:.25}];

    const firstName = penpot.createText('FIRST NAME');
    if(firstName){
      firstName.x = penpot.viewport.center.x +70;
      firstName.y = penpot.viewport.center.y + 300;
      firstName.fontSize = '30';
      firstName.fontFamily = 'Sour Gummy';
    }

    const firstNameBox = penpot.createRectangle();
    firstNameBox.x = penpot.viewport.center.x + 70;
    firstNameBox.y = penpot.viewport.center.y + 355;
    firstNameBox.resize(350,80);
    firstNameBox.borderRadius=10;
    firstNameBox.fills = [{fillColor: '#FFFFFF'}];
    firstNameBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    firstNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const firstNameSubText = penpot.createText('First Name');
    if(firstNameSubText){
      firstNameSubText.x = penpot.viewport.center.x +80;
      firstNameSubText.y = penpot.viewport.center.y+375;
      firstNameSubText.fontSize = '30';
      firstNameSubText.fontFamily = 'Sour Gummy';
      firstNameSubText.fills = [{fillColor: '#e0e0e0'}];
    }

    const middleName = penpot.createText('MIDDLE NAME');
    if(middleName){
      middleName.x = penpot.viewport.center.x +520;
      middleName.y = penpot.viewport.center.y + 300;
      middleName.fontSize = '30';
      middleName.fontFamily = 'Sour Gummy';
    }

    const middleNameBox = penpot.createRectangle();
    middleNameBox.x = penpot.viewport.center.x + 520;
    middleNameBox.y = penpot.viewport.center.y + 355;
    middleNameBox.resize(350,80);
    middleNameBox.borderRadius = 10;
    middleNameBox.fills = [{fillColor: '#FFFFFF'}];
    middleNameBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    middleNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const middleNameSubText = penpot.createText('Middle Name');
    if(middleNameSubText){
      middleNameSubText.x = penpot.viewport.center.x +530;
      middleNameSubText.y = penpot.viewport.center.y+375;
      middleNameSubText.fontSize = '30';
      middleNameSubText.fontFamily = 'Sour Gummy';
      middleNameSubText.fills = [{fillColor: '#e0e0e0'}];
    }

    const lastName = penpot.createText('LAST NAME');
    if(lastName){
      lastName.x = penpot.viewport.center.x +960;
      lastName.y = penpot.viewport.center.y + 300;
      lastName.fontSize = '30';
      lastName.fontFamily = 'Sour Gummy';
    }

    const lastNameBox = penpot.createRectangle();
    lastNameBox.x = penpot.viewport.center.x + 960;
    lastNameBox.y = penpot.viewport.center.y + 355;
    lastNameBox.resize(350,80);
    lastNameBox.borderRadius = 10; 
    lastNameBox.fills = [{fillColor: '#FFFFFF'}];
    lastNameBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    lastNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const lastNameSubText = penpot.createText('Last Name');
    if(lastNameSubText){
      lastNameSubText.x = penpot.viewport.center.x +970;
      lastNameSubText.y = penpot.viewport.center.y+375;
      lastNameSubText.fontSize = '30';
      lastNameSubText.fontFamily = 'Sour Gummy';
      lastNameSubText.fills = [{fillColor: '#e0e0e0'}];
    }

    const email = penpot.createText('EMAIL');
    if(email){
      email.x = penpot.viewport.center.x + 70;
      email.y = penpot.viewport.center.y + 480;
      email.fontSize = '30';
      email.fontFamily = 'Sour Gummy';
    }

    const emailBox = penpot.createRectangle();
    emailBox.x = penpot.viewport.center.x+70;
    emailBox.y = penpot.viewport.center.y+525;
    emailBox.resize(1230,80);
    emailBox.borderRadius =10;
    emailBox.fills = [{fillColor: '#FFFFFF'}];
    emailBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    emailBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const emailSubText = penpot.createText("sample@gmail.com");
    if(emailSubText){
      emailSubText.x = penpot.viewport.center.x + 85;
      emailSubText.y = penpot.viewport.center.y + 540;
      emailSubText.fontSize = '30';
      emailSubText.fontFamily = 'Sour Gummy';
      emailSubText.fills = [{fillColor: '#e0e0e0'}];
    }

    const phone = penpot.createText('PHONE NUMBER');
    if(phone){
      phone.x = penpot.viewport.center.x + 70;
      phone.y = penpot.viewport.center.y + 650;
      phone.fontSize = '30';
      phone.fontFamily = 'Sour Gummy';
    }

    const phoneBox = penpot.createRectangle();
    phoneBox.x = penpot.viewport.center.x+70;
    phoneBox.y = penpot.viewport.center.y+695;
    phoneBox.resize(1230,80);
    phoneBox.borderRadius =10;
    phoneBox.fills = [{fillColor: '#FFFFFF'}];
    phoneBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    phoneBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const phoneSubText = penpot.createText("123-456-7890");
    if(phoneSubText){
      phoneSubText.x = penpot.viewport.center.x + 85; 
      phoneSubText.y = penpot.viewport.center.y + 710;
      phoneSubText.fontSize = '30';
      phoneSubText.fontFamily = 'Sour Gummy';
      phoneSubText.fills = [{fillColor: '#e0e0e0'}]; 
    }

    const birthday = penpot.createText('BIRTHDAY');
    if(birthday){
      birthday.x = penpot.viewport.center.x + 70;
      birthday.y = penpot.viewport.center.y + 820;
      birthday.fontFamily = 'Sour Gummy';
      birthday.fontSize = '30';
    }
    
    const birthdayBox = penpot.createRectangle();
    birthdayBox.x = penpot.viewport.center.x+70;
    birthdayBox.y = penpot.viewport.center.y+865;
    birthdayBox.resize(400,80);
    birthdayBox.borderRadius =10;
    birthdayBox.fills = [{fillColor: '#FFFFFF'}];
    birthdayBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    birthdayBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const birthdaySubText = penpot.createText("00/00/0000");
    if(birthdaySubText){
      birthdaySubText.x = penpot.viewport.center.x + 85; 
      birthdaySubText.y = penpot.viewport.center.y + 880;
      birthdaySubText.fontSize = '30';
      birthdaySubText.fontFamily = 'Sour Gummy';
      birthdaySubText.fills = [{fillColor: '#e0e0e0'}]; 
    }

    const gender = penpot.createText('Gender');
    if(gender){
      gender.x = penpot.viewport.center.x + 570;
      gender.y = penpot.viewport.center.y + 820;
      gender.fontFamily = 'Sour Gummy';
      gender.fontSize = '30';
    }
    
    const genderBox = penpot.createRectangle();
    genderBox.x = penpot.viewport.center.x+570;
    genderBox.y = penpot.viewport.center.y+865;
    genderBox.resize(220,80);
    genderBox.borderRadius =10;
    genderBox.fills = [{fillColor: '#FFFFFF'}];
    genderBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    genderBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const genderSubText = penpot.createText("Gender");
    if(genderSubText){
      genderSubText.x = penpot.viewport.center.x + 585; 
      genderSubText.y = penpot.viewport.center.y + 880;
      genderSubText.fontSize = '30';
      genderSubText.fontFamily = 'Sour Gummy';
      genderSubText.fills = [{fillColor: '#e0e0e0'}]; 
    }

    const ssn = penpot.createText('SSN');
    if(ssn){
      ssn.x = penpot.viewport.center.x + 890;
      ssn.y = penpot.viewport.center.y + 820;
      ssn.fontFamily = 'Sour Gummy';
      ssn.fontSize = '30';
    }
    
    const ssnBox = penpot.createRectangle();
    ssnBox.x = penpot.viewport.center.x+900;
    ssnBox.y = penpot.viewport.center.y+865;
    ssnBox.resize(400,80);
    ssnBox.borderRadius =10;
    ssnBox.fills = [{fillColor: '#FFFFFF'}];
    ssnBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    ssnBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const ssnSubText = penpot.createText("000000");
    if(ssnSubText){
      ssnSubText.x = penpot.viewport.center.x + 905; 
      ssnSubText.y = penpot.viewport.center.y + 880;
      ssnSubText.fontSize = '30';
      ssnSubText.fontFamily = 'Sour Gummy';
      ssnSubText.fills = [{fillColor: '#e0e0e0'}]; 
    }

    const position = penpot.createText('POSITION');
    if(position){
      position.x = penpot.viewport.center.x + 70;
      position.y = penpot.viewport.center.y + 990;
      position.fontFamily = 'Sour Gummy';
      position.fontSize = '30';
    }
    
    const positionBox = penpot.createRectangle();
    positionBox.x = penpot.viewport.center.x+70;
    positionBox.y = penpot.viewport.center.y+1035;
    positionBox.resize(400,80);
    positionBox.borderRadius =10;
    positionBox.fills = [{fillColor: '#FFFFFF'}];
    positionBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    positionBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const positionSubText = penpot.createText("Job Position");
    if(positionSubText){
      positionSubText.x = penpot.viewport.center.x + 85; 
      positionSubText.y = penpot.viewport.center.y + 1050;
      positionSubText.fontSize = '30';
      positionSubText.fontFamily = 'Sour Gummy';
      positionSubText.fills = [{fillColor: '#e0e0e0'}]; 
    }

    const employmentType = penpot.createText('EMPLOYMENT TYPE');
    if(employmentType){
      employmentType.x = penpot.viewport.center.x + 570;
      employmentType.y = penpot.viewport.center.y + 990;
      employmentType.fontFamily = 'Sour Gummy';
      employmentType.fontSize = '30';
    }
    
    const employmentTypeBox = penpot.createRectangle();
    employmentTypeBox.x = penpot.viewport.center.x+570;
    employmentTypeBox.y = penpot.viewport.center.y+1035;
    employmentTypeBox.resize(320,80);
    employmentTypeBox.borderRadius =10;
    employmentTypeBox.fills = [{fillColor: '#FFFFFF'}];
    employmentTypeBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    employmentTypeBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const employmentTypeSubText = penpot.createText("Full-Time");
    if(employmentTypeSubText){
      employmentTypeSubText.x = penpot.viewport.center.x + 585; 
      employmentTypeSubText.y = penpot.viewport.center.y + 1050;
      employmentTypeSubText.fontSize = '30';
      employmentTypeSubText.fontFamily = 'Sour Gummy';
      employmentTypeSubText.fills = [{fillColor: '#e0e0e0'}]; 
    }

    const status = penpot.createText('STATUS');
    if(status){
      status.x = penpot.viewport.center.x + 970;
      status.y = penpot.viewport.center.y + 990;
      status.fontFamily = 'Sour Gummy';
      status.fontSize = '30';
    }

    const statusBox = penpot.createRectangle();
    statusBox.x = penpot.viewport.center.x+970;
    statusBox.y = penpot.viewport.center.y+1035;
    statusBox.resize(320,80);
    statusBox.borderRadius =10;
    statusBox.fills = [{fillColor: '#FFFFFF'}];
    statusBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    statusBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const statusSubText = penpot.createText("Active");
    if(statusSubText){
      statusSubText.x = penpot.viewport.center.x + 985; 
      statusSubText.y = penpot.viewport.center.y + 1050;
      statusSubText.fontSize = '30';
      statusSubText.fontFamily = 'Sour Gummy';
      statusSubText.fills = [{fillColor: '#e0e0e0'}]; 
    }

    const dateOfHire = penpot.createText('DATE OF HIRE');
    if(dateOfHire){
      dateOfHire.x = penpot.viewport.center.x + 70;
      dateOfHire.y = penpot.viewport.center.y + 1160;
      dateOfHire.fontFamily = 'Sour Gummy';
      dateOfHire.fontSize = '30';
    }
    
    const dateOfHireBox = penpot.createRectangle();
    dateOfHireBox.x = penpot.viewport.center.x+70;
    dateOfHireBox.y = penpot.viewport.center.y+1205;
    dateOfHireBox.resize(550,80);
    dateOfHireBox.borderRadius =10;
    dateOfHireBox.fills = [{fillColor: '#FFFFFF'}];
    dateOfHireBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    dateOfHireBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const dateOfHireSubText = penpot.createText("00/00/0000");
    if(dateOfHireSubText){
      dateOfHireSubText.x = penpot.viewport.center.x + 85; 
      dateOfHireSubText.y = penpot.viewport.center.y + 1220;
      dateOfHireSubText.fontSize = '30';
      dateOfHireSubText.fontFamily = 'Sour Gummy';
      dateOfHireSubText.fills = [{fillColor: '#e0e0e0'}]; 
    }

    const termDate = penpot.createText('TERMINATION DATE');
    if(termDate){
      termDate.x = penpot.viewport.center.x + 740;
      termDate.y = penpot.viewport.center.y + 1160;
      termDate.fontFamily = 'Sour Gummy';
      termDate.fontSize = '30';
    }
    
    const termDateBox = penpot.createRectangle();
    termDateBox.x = penpot.viewport.center.x+740;
    termDateBox.y = penpot.viewport.center.y+1205;
    termDateBox.resize(550,80);
    termDateBox.borderRadius =10;
    termDateBox.fills = [{fillColor: '#FFFFFF'}];
    termDateBox.strokes = [{strokeColor: '#000000', strokeOpacity: .5, strokeWidth:1}];
    termDateBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const termDateSubText = penpot.createText("00/00/0000");
    if(termDateSubText){
      termDateSubText.x = penpot.viewport.center.x + 755; 
      termDateSubText.y = penpot.viewport.center.y + 1220;
      termDateSubText.fontSize = '30';
      termDateSubText.fontFamily = 'Sour Gummy';
      termDateSubText.fills = [{fillColor: '#e0e0e0'}]; 
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
