export function paymentDetails(width:number, height:number, fillColor:string, iconColor:string, textColor:string){
    var contentList = [];
    const containerBox = penpot.createRectangle();
    containerBox.x = penpot.viewport.center.x; 
    containerBox.y = penpot.viewport.center.y;
    containerBox.resize(width,height); //(950,600)
    containerBox.fills = [{fillColor: fillColor}];
    containerBox.name = "Payment Details Box";
    contentList.push(containerBox);

    const title = penpot.createText("Payment Details");
    if(title){
    title.x = penpot.viewport.center.x + width/19;
    title.y = penpot.viewport.center.y + height/7.5;
    title.fontSize = String(width/12.6);
    title.fontFamily = 'Sour Gummy';
    title.name = "Payment Details";
    title.fills = [{fillColor: textColor}];
    contentList.push(title);}

    const bar = penpot.createRectangle();
    bar.x = penpot.viewport.center.x +width/19;
    bar.y = penpot.viewport.center.y +height/3;
    bar.resize(width/1.144,height/120);
    bar.fills = [{fillColor: iconColor, fillOpacity: .25}];
    bar.name = "Divider";
    contentList.push(bar);

    const cardHolder = penpot.createText("CARD HOLDER");
    if(cardHolder){
    cardHolder.x = penpot.viewport.center.x +width/19;
    cardHolder.y = penpot.viewport.center.y +height/2.4;
    cardHolder.fontFamily = 'Sour Gummy';
    cardHolder.fontSize = String(width/31.66);
    cardHolder.fills = [{fillColor: textColor}];}

    const cardHolderBox = penpot.createRectangle();
    cardHolderBox.x = penpot.viewport.center.x + width/19;
    cardHolderBox.y = penpot.viewport.center.y + height/2;
    cardHolderBox.resize(width/2.53,height/8.57);
    cardHolderBox.fills = [{fillColor: fillColor}];
    cardHolderBox.strokes = [{strokeColor: iconColor,strokeWidth: 1, strokeOpacity:.5}];
    cardHolderBox.borderRadius = width/95;
    cardHolderBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const cardHolderSubtext = penpot.createText("Card Holder"); 
    if(cardHolderSubtext){
    cardHolderSubtext.x = penpot.viewport.center.x +width/14.61;
    cardHolderSubtext.y = penpot.viewport.center.y +height/1.9;
    cardHolderSubtext.fontSize = String(width/31.66);
    cardHolderSubtext.fontFamily = 'Sour Gummy'; 
    cardHolderSubtext.fills = [{fillColor: textColor, fillOpacity:.25}];}

    if(cardHolder && cardHolderSubtext){
      penpot.selection = [cardHolder, cardHolderBox, cardHolderSubtext];
      const cardHolderGroup = penpot.group(penpot.selection);
      if(cardHolderGroup){
        cardHolderGroup.name = "Card Holder";
        contentList.push(cardHolderGroup);}}

    const expirationDate = penpot.createText("EXPIRATION DATE");
    if(expirationDate){
    expirationDate.x = penpot.viewport.center.x +width/1.9;
    expirationDate.y = penpot.viewport.center.y +height/2.4;
    expirationDate.fontFamily = 'Sour Gummy';
    expirationDate.fontSize = String(width/31.66);
    expirationDate.fills = [{fillColor:textColor}];}

    const expirationDateBox = penpot.createRectangle();
    expirationDateBox.x = penpot.viewport.center.x + width/1.9;
    expirationDateBox.y = penpot.viewport.center.y + height/2; 
    expirationDateBox.resize(width/6.3,height/8.57);
    expirationDateBox.fills = [{fillColor: fillColor}];
    expirationDateBox.strokes = [{strokeColor: iconColor,strokeWidth: 1, strokeOpacity:.5}];
    expirationDateBox.borderRadius = width/95;
    expirationDateBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const expirationDateSubtext = penpot.createText("MM");
    if(expirationDateSubtext){
    expirationDateSubtext.x = penpot.viewport.center.x +width/1.86;
    expirationDateSubtext.y = penpot.viewport.center.y +height/1.9;
    expirationDateSubtext.fontSize = String(width/31.66);
    expirationDateSubtext.fontFamily = 'Sour Gummy';
    expirationDateSubtext.fills = [{fillColor: textColor, fillOpacity:.25}];}

    const expirationDateBox2 = penpot.createRectangle();
    expirationDateBox2.x = penpot.viewport.center.x + width/1.26;
    expirationDateBox2.y = penpot.viewport.center.y + height/2; 
    expirationDateBox2.resize(width/6.33,height/8.57);
    expirationDateBox2.fills = [{fillColor: fillColor}];
    expirationDateBox2.strokes = [{strokeColor: iconColor,strokeWidth: 1, strokeOpacity:.5}];
    expirationDateBox2.borderRadius = width/95;
    expirationDateBox2.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const expirationDateSubtext2 = penpot.createText("YY");
    if(expirationDateSubtext2){
    expirationDateSubtext2.x = penpot.viewport.center.x +width/1.25;
    expirationDateSubtext2.y = penpot.viewport.center.y +height/1.9;
    expirationDateSubtext2.fontSize = String(width/31.66);
    expirationDateSubtext2.fontFamily = 'Sour Gummy';
    expirationDateSubtext2.fills = [{fillColor: textColor, fillOpacity:.25}]; }

    const dash = penpot.createRectangle();
    dash.x = penpot.viewport.center.x + width/1.37;
    dash.y = penpot.viewport.center.y + height/2;
    dash.resize(width/63.33,height/9.23);
    dash.borderRadius = width/95;
    dash.rotate(45);
    dash.fills = [{fillColor: iconColor}];

    if(expirationDate && expirationDateSubtext && expirationDateSubtext2){
      penpot.selection = [expirationDate, expirationDateBox, expirationDateBox2, expirationDateSubtext, expirationDateSubtext2, dash];
      const expirationDateGroup = penpot.group(penpot.selection);
      if(expirationDateGroup){
        expirationDateGroup.name = "Expiration Date";
        contentList.push(expirationDateGroup);}}

    const cardNumber = penpot.createText("CARD NUMBER");
    if(cardNumber){
    cardNumber.x = penpot.viewport.center.x +width/19;
    cardNumber.y = penpot.viewport.center.y +height/1.5;
    cardNumber.fontFamily = 'Sour Gummy';
    cardNumber.fontSize = String(width/31.66);
    cardNumber.fills = [{fillColor:textColor}];}

    const cardNumberBox = penpot.createRectangle();
    cardNumberBox.x = penpot.viewport.center.x + width/19;
    cardNumberBox.y = penpot.viewport.center.y + height/1.33;
    cardNumberBox.resize(width/1.809,height/8.57);
    cardNumberBox.fills = [{fillColor: fillColor}];
    cardNumberBox.strokes = [{strokeColor: iconColor,strokeWidth: 1, strokeOpacity:.5}];
    cardNumberBox.borderRadius = width/95;
    cardNumberBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const cardNumberSubtext = penpot.createText("1234 1234 1234 1234");
    if(cardNumberSubtext){
    cardNumberSubtext.x = penpot.viewport.center.x +width/14.61;
    cardNumberSubtext.y = penpot.viewport.center.y +height/1.29;
    cardNumberSubtext.fontSize = String(width/31.66);
    cardNumberSubtext.fontFamily = 'Sour Gummy'; 
    cardNumberSubtext.fills = [{fillColor: textColor, fillOpacity:.25}]; }

    if(cardNumber && cardNumberSubtext){
      penpot.selection = [cardNumber, cardNumberBox, cardNumberSubtext];
      const cardNumberGroup = penpot.group(penpot.selection);
      if(cardNumberGroup){
        cardNumberGroup.name = "Card Number";
        contentList.push(cardNumberGroup);}}

    const cvc = penpot.createText("CVC");
    if(cvc){
    cvc.x = penpot.viewport.center.x +width/1.461;
    cvc.y = penpot.viewport.center.y +height/1.5;
    cvc.fontFamily = 'Sour Gummy';
    cvc.fontSize = String(width/31.66);
    cvc.fills = [{fillColor: textColor}];}

    const cvcBox = penpot.createRectangle();
    cvcBox.x = penpot.viewport.center.x + width/1.461;
    cvcBox.y = penpot.viewport.center.y + height/1.33; 
    cvcBox.resize(width/4.75,height/8.57);
    cvcBox.fills = [{fillColor: fillColor}];
    cvcBox.strokes = [{strokeColor: iconColor,strokeWidth: 1, strokeOpacity:.5}];
    cvcBox.borderRadius = width/95;
    cvcBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    const cvcSubtext = penpot.createText("000");
    if(cvcSubtext){
    cvcSubtext.x = penpot.viewport.center.x +width/1.428;
    cvcSubtext.y = penpot.viewport.center.y +height/1.29;
    cvcSubtext.fontSize = String(width/31.66);
    cvcSubtext.fontFamily = 'Sour Gummy'; 
    cvcSubtext.fills = [{fillColor: textColor, fillOpacity:.25}]; }

    if(cvc && cvcSubtext){
      penpot.selection = [cvc, cvcBox, cvcSubtext];
      const cvcGroup = penpot.group(penpot.selection);
      if(cvcGroup){
        cvcGroup.name = "CVC";
        contentList.push(cvcGroup);}}

    penpot.selection = contentList;
    const paymentDetails = penpot.group(penpot.selection);
    if(paymentDetails){
      paymentDetails.name = "Payment Details";}
}

export function addressDetails(width:number, height:number, fillColor:string, iconColor:string, textColor:string){
     var contentList = [];
     const containerBox = penpot.createRectangle();
     containerBox.x = penpot.viewport.center.x;
     containerBox.y = penpot.viewport.center.y;
     containerBox.resize(width,height); //(930,1250)
     containerBox.fills = [{fillColor: fillColor}];
     containerBox.name = "Payment Details Box";
     contentList.push(containerBox);

     const title = penpot.createText("Address Details");
     if(title){
      title.x = penpot.viewport.center.x+width/18.6; 
      title.y = penpot.viewport.center.y+height/20.83;
      title.fontSize = String(width/12.4);
      title.fontFamily = 'Sour Gummy';
      title.name = "Title";
      title.fills = [{fillColor: textColor}];
      contentList.push(title);
     }

     const bar = penpot.createRectangle();
     bar.x = penpot.viewport.center.x+width/18.6;
     bar.y = penpot.viewport.center.y+height/6.25;
     bar.resize(width/1.12,height/125);
     bar.fills = [{fillColor: iconColor, fillOpacity: .25}];
     bar.name = "Divider";
     contentList.push(bar);

     const firstName = penpot.createText("FIRST NAME");
     if(firstName){
      firstName.x = penpot.viewport.center.x +width/18.6;
      firstName.y = penpot.viewport.center.y +height/4.16;
      firstName.fontSize = String(width/31);
      firstName.fontFamily = 'Sour Gummy';
      firstName.fills = [{fillColor: textColor}];
     }

     const firstNameBox = penpot.createRectangle();
     firstNameBox.x = penpot.viewport.center.x+width/18.6;
     firstNameBox.y = penpot.viewport.center.y+height/3.57;
     firstNameBox.resize(width/2.65,height/15.625);
     firstNameBox.borderRadius= width/93;
     firstNameBox.fills = [{fillColor: fillColor}];
     firstNameBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
     firstNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const firstNameSubText = penpot.createText("First Name");
     if(firstNameSubText){
      firstNameSubText.x = penpot.viewport.center.x +width/14.3;
      firstNameSubText.y = penpot.viewport.center.y +height/3.42;
      firstNameSubText.fontSize = String(width/31);
      firstNameSubText.fontFamily = 'Sour Gummy';
      firstNameSubText.fills = [{fillColor:textColor, fillOpacity:.25}];
     }

     if(firstName && firstNameSubText){
      penpot.selection = [firstName, firstNameBox, firstNameSubText];
      const firstNameGroup = penpot.group(penpot.selection);
      if(firstNameGroup){
        firstNameGroup.name = "First Name";
        contentList.push(firstNameGroup);
      }
     }

    const lastName = penpot.createText("LAST NAME");
     if(lastName){
      lastName.x = penpot.viewport.center.x +width/1.93;
      lastName.y = penpot.viewport.center.y +height/4.15;
      lastName.fontSize = String(width/31);
      lastName.fontFamily = 'Sour Gummy';
      lastName.fills = [{fillColor: textColor}];
     }

     const lastNameBox = penpot.createRectangle();
     lastNameBox.x = penpot.viewport.center.x+width/1.93;
     lastNameBox.y = penpot.viewport.center.y+height/3.57;
     lastNameBox.resize(width/2.657,height/15.6);
     lastNameBox.borderRadius = width/93;
     lastNameBox.fills = [{fillColor: fillColor}];
     lastNameBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
     lastNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const lastNameSubText = penpot.createText("Last Name");
     if(lastNameSubText){
      lastNameSubText.x = penpot.viewport.center.x +width/1.87;
      lastNameSubText.y = penpot.viewport.center.y +height/3.42;
      lastNameSubText.fontSize = String(width/31);
      lastNameSubText.fontFamily = 'Sour Gummy';
      lastNameSubText.fills = [{fillColor:textColor, fillOpacity: .25}];
     }

     if(lastName && lastNameSubText){
      penpot.selection = [lastName, lastNameBox, lastNameSubText];
      const lastNameGroup = penpot.group(penpot.selection);
      if(lastNameGroup){
        lastNameGroup.name = "Last Name";
        contentList.push(lastNameGroup);
      }
     }

     const address1 = penpot.createText("ADDRESS 1");
     if(address1){
      address1.x = penpot.viewport.center.x +width/18.6;
      address1.y = penpot.viewport.center.y +height/2.659;
      address1.fontSize = String(width/31);
      address1.fontFamily = 'Sour Gummy';
      address1.fills = [{fillColor: textColor}];
     }

     const address1Box = penpot.createRectangle();
     address1Box.x = penpot.viewport.center.x+width/18.6;
     address1Box.y = penpot.viewport.center.y+height/2.4;
     address1Box.resize(width/1.19,height/15.625);
     address1Box.borderRadius= width/93;
     address1Box.fills = [{fillColor: fillColor}];
     address1Box.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
     address1Box.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const address1SubText = penpot.createText("123 Sample Street");
     if(address1SubText){
      address1SubText.x = penpot.viewport.center.x +width/14.3;
      address1SubText.y = penpot.viewport.center.y +height/2.33; 
      address1SubText.fontSize = String(width/31);
      address1SubText.fontFamily = 'Sour Gummy';
      address1SubText.fills = [{fillColor:textColor, fillOpacity:.25}];
     }

     if(address1 && address1SubText){
      penpot.selection = [address1, address1Box, address1SubText];
      const address1Group = penpot.group(penpot.selection);
      if(address1Group){
        address1Group.name = "Address 1";
        contentList.push(address1Group);
      }
     }

     const address2 = penpot.createText("ADDRESS 2");
     if(address2){
      address2.x = penpot.viewport.center.x +width/18.6;
      address2.y = penpot.viewport.center.y +height/1.95;
      address2.fontSize = String(width/31);
      address2.fontFamily = 'Sour Gummy';
      address2.fills = [{fillColor:textColor}];
     }

     const address2Box = penpot.createRectangle();
     address2Box.x = penpot.viewport.center.x+width/18.6;
     address2Box.y = penpot.viewport.center.y+height/1.811;
     address2Box.resize(width/1.19,height/15.625);
     address2Box.borderRadius= width/93;
     address2Box.fills = [{fillColor: fillColor}];
     address2Box.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
     address2Box.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const address2SubText = penpot.createText("456 Example Dr");
     if(address2SubText){
      address2SubText.x = penpot.viewport.center.x +width/14.3;
      address2SubText.y = penpot.viewport.center.y +height/1.77; 
      address2SubText.fontSize = String(width/31);
      address2SubText.fontFamily = 'Sour Gummy';
      address2SubText.fills = [{fillColor:textColor, fillOpacity:.25}];
     }

    if(address2 && address2SubText){
      penpot.selection = [address2, address2Box, address2SubText];
      const address2Group = penpot.group(penpot.selection);
      if(address2Group){
        address2Group.name = "Address 2";
        contentList.push(address2Group);
      }
     }

    const city = penpot.createText("CITY");
     if(city){
      city.x = penpot.viewport.center.x +width/18.6;
      city.y = penpot.viewport.center.y +height/1.54;
      city.fontSize = String(width/31);
      city.fontFamily = 'Sour Gummy';
      city.fills = [{fillColor:textColor}];
     }

     const cityBox = penpot.createRectangle();
     cityBox.x = penpot.viewport.center.x+width/18.6;
     cityBox.y = penpot.viewport.center.y+height/1.453;
     cityBox.resize(width/2.06,height/15.625);
     cityBox.borderRadius= width/93;
     cityBox.fills = [{fillColor: fillColor}];
     cityBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
     cityBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const citySubText = penpot.createText("Test City");
     if(citySubText){
      citySubText.x = penpot.viewport.center.x +width/14.3;
      citySubText.y = penpot.viewport.center.y +height/1.428; 
      citySubText.fontSize = String(width/31);
      citySubText.fontFamily = 'Sour Gummy';
      citySubText.fills = [{fillColor:textColor, fillOpacity:.25}];
     }

    if(city && citySubText){
      penpot.selection = [city, cityBox, citySubText];
      const cityGroup = penpot.group(penpot.selection);
      if(cityGroup){
        cityGroup.name = "City";
        contentList.push(cityGroup);
      }
     }

    const state = penpot.createText("STATE");
     if(state){
      state.x = penpot.viewport.center.x +width/1.512;
      state.y = penpot.viewport.center.y +height/1.54;
      state.fontSize = String(width/31);
      state.fontFamily = 'Sour Gummy';
      state.fills = [{fillColor: textColor}];
     }

     const stateBox = penpot.createRectangle();
     stateBox.x = penpot.viewport.center.x+width/1.512;
     stateBox.y = penpot.viewport.center.y+height/1.45;
     stateBox.resize(width/4.22,height/15.625);
     stateBox.borderRadius= width/93;
     stateBox.fills = [{fillColor: fillColor}];
     stateBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
     stateBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const stateSubText = penpot.createText("EX");
     if(stateSubText){
      stateSubText.x = penpot.viewport.center.x +width/1.47;
      stateSubText.y = penpot.viewport.center.y +height/1.428;  
      stateSubText.fontSize = String(width/31);
      stateSubText.fontFamily = 'Sour Gummy';
      stateSubText.fills = [{fillColor:textColor, fillOpacity:.25}];
     }

     const iconColorString = "'"+iconColor+"'";
     const stateArrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
    //  const stateArrow = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e0e0e0" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
    const stateArrow = penpot.createShapeFromSvg(stateArrowString);
    if(stateArrow){
      stateArrow.x = penpot.viewport.center.x +width/1.223;
      stateArrow.y = penpot.viewport.center.y+height/1.436;
      stateArrow.resize(width/15.5,height/20.83);
     }

    if(state && stateSubText && stateArrow){
      penpot.selection = [state, stateBox, stateSubText, stateArrow];
      const stateGroup = penpot.group(penpot.selection);
      if(stateGroup){
        stateGroup.name = "State";
        contentList.push(stateGroup);
      }
     }
     
    const zipCode = penpot.createText("ZIP CODE");
     if(zipCode){
      zipCode.x = penpot.viewport.center.x +width/18.6;
      zipCode.y = penpot.viewport.center.y + height/1.2755;
      zipCode.fontSize = String(width/31);
      zipCode.fontFamily = 'Sour Gummy';
      zipCode.fills = [{fillColor:textColor}];
     }

     const zipCodeBox = penpot.createRectangle();
     zipCodeBox.x = penpot.viewport.center.x+width/18.6;
     zipCodeBox.y = penpot.viewport.center.y+height/1.213;
     zipCodeBox.resize(width/2.325,height/15.625);
     zipCodeBox.borderRadius= width/93;
     zipCodeBox.fills = [{fillColor: fillColor}];
     zipCodeBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
     zipCodeBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const zipCodeSubText = penpot.createText("000000");
     if(zipCodeSubText){
      zipCodeSubText.x = penpot.viewport.center.x +width/14.3;
      zipCodeSubText.y = penpot.viewport.center.y +height/1.196; 
      zipCodeSubText.fontSize = String(width/31);
      zipCodeSubText.fontFamily = 'Sour Gummy';
      zipCodeSubText.fills = [{fillColor:textColor, fillOpacity:.25}];
     }

    if(zipCode && zipCodeSubText){
      penpot.selection = [zipCode, zipCodeBox, zipCodeSubText];
      const zipCodeGroup = penpot.group(penpot.selection);
      if(zipCodeGroup){
        zipCodeGroup.name = "Zip Code";
        contentList.push(zipCodeGroup);
      }
     }

     const country = penpot.createText("COUNTRY");
     if(country){
      country.x = penpot.viewport.center.x +width/1.738;
      country.y = penpot.viewport.center.y + height/1.2755;
      country.fontSize = String(width/31);
      country.fontFamily = 'Sour Gummy';
      country.fills = [{fillColor:textColor}];
     }

     const countryBox = penpot.createRectangle();
     countryBox.x = penpot.viewport.center.x+width/1.738;
     countryBox.y = penpot.viewport.center.y+height/1.213;
     countryBox.resize(width/3.1,height/15.625);
     countryBox.borderRadius= width/93;
     countryBox.fills = [{fillColor: fillColor}];
     countryBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
     countryBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

     const countrySubText = penpot.createText("Trial");
     if(countrySubText){
      countrySubText.x = penpot.viewport.center.x +width/1.69;
      countrySubText.y = penpot.viewport.center.y + height/1.196; 
      countrySubText.fontSize = String(width/31);
      countrySubText.fontFamily = 'Sour Gummy';
      countrySubText.fills = [{fillColor:textColor, fillOpacity:.25}];
     }

     const countryArrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
    //  const countryArrow = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e0e0e0" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
     const countryArrow = penpot.createShapeFromSvg(countryArrowString);
    if(countryArrow){
      countryArrow.x = penpot.viewport.center.x +width/1.22;
      countryArrow.y = penpot.viewport.center.y+height/1.2;
      countryArrow.resize(width/15.5,height/20.8);
     }

    if(country && countrySubText && countryArrow){
      penpot.selection = [country, countryBox, countrySubText, countryArrow];
      const countryGroup = penpot.group(penpot.selection);
      if(countryGroup){
        countryGroup.name = "Country";
        contentList.push(countryGroup);
      }
     }
    
    penpot.selection = contentList;
    const addressDetailsGroup = penpot.group(penpot.selection);
    if(addressDetailsGroup){
      addressDetailsGroup.name = "Address Details";
    }
}