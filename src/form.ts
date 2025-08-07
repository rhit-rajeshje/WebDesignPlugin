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

export function employeeInfo(width:number, height:number, fillColor:string, iconColor:string, textColor:string){
    var contentList = [];
    const containerBox = penpot.createRectangle();
    containerBox.x = penpot.viewport.center.x;
    containerBox.y = penpot.viewport.center.y;
    containerBox.resize(width,height); //(1400,1460)
    containerBox.fills = [{fillColor:fillColor}];
    containerBox.name = "Employee Info Box";
    contentList.push(containerBox);

    const title = penpot.createText('Employee Info');
    if(title){
      title.x = penpot.viewport.center.x + width/20;
      title.y = penpot.viewport.center.y + height/14.6;
      title.fontSize = String(width/18.66);
      title.fontFamily = 'Sour Gummy';
      title.name = "Employee Info Title";
      contentList.push(title);
    }

    const bar = penpot.createRectangle();
    bar.x = penpot.viewport.center.x + width/20;
    bar.y = penpot.viewport.center.y + height/6.347; 
    bar.resize(width/1.138,height/146);
    bar.fills = [{fillColor: iconColor, fillOpacity:.25}];
    bar.name = "Divider";
    contentList.push(bar);


    var component_dimensions = [
      {"textX": width/20, "textY":height/4.86, "boxX":width/20, "boxY":height/4.11, "boxWidth":width/4, "boxHeight":height/18.25, "subtextX": width/17.5, "subtextY":height/3.893, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "First Name", "subtext": "First Name"},
      {"textX": width/2.69, "textY":height/4.86, "boxX":width/2.69, "boxY":height/4.11, "boxWidth":width/4, "boxHeight":height/18.25, "subtextX": width/2.641, "subtextY":height/3.893, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "Middle Name", "subtext": "Middle Name"},
      {"textX": width/1.458, "textY":height/4.866, "boxX":width/1.458, "boxY":height/4.11, "boxWidth":width/4, "boxHeight":height/18.25, "subtextX": width/1.44, "subtextY":height/3.893, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "Last Name", "subtext": "Last Name"},
      {"textX": width/20, "textY":height/3.0416, "boxX":width/20, "boxY":height/2.78, "boxWidth":width/1.138, "boxHeight":height/18.25, "subtextX": width/16.47, "subtextY":height/2.7, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "Email", "subtext": "sample@gmail.com"},
      {"textX": width/20, "textY":height/2.246, "boxX":width/20, "boxY":height/2.1, "boxWidth":width/1.138, "boxHeight":height/18.25, "subtextX": width/16.47, "subtextY":height/2.056, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "Phone", "subtext": "123-456-7890"},
      {"textX": width/20, "textY":height/1.78, "boxX":width/20, "boxY":height/1.68, "boxWidth":width/3.5, "boxHeight":height/18.25, "subtextX": width/16.47, "subtextY":height/1.659, "calenderX": width/3.58, "calenderY": height/1.668, "calenderWidth": width/28, "calenderHeight": height/24.33, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0,"name": "Birthday", "subtext":"00/00/0000"},
      {"textX": width/2.456, "textY":height/1.78, "boxX":width/2.456, "boxY":height/1.687, "boxWidth":width/6.36, "boxHeight":height/18.25, "subtextX": width/2.39, "subtextY":height/1.659, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": width/1.971, "arrowY": height/1.697, "arrowWidth": width/17.5, "arrowHeight": height/16.22, "name": "Gender", "subtext":"Gender"},
      {"textX": width/1.56, "textY":height/1.78, "boxX":width/1.546, "boxY":height/1.687, "boxWidth":width/3.5, "boxHeight":height/18.25, "subtextX": width/1.5217, "subtextY":height/1.659, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "SSN", "subtext":"ssn"},
      {"textX": width/20, "textY":height/1.47, "boxX":width/20, "boxY":height/1.41, "boxWidth":width/3.5, "boxHeight":height/18.25, "subtextX": width/16.47, "subtextY":height/1.39, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "Position", "subtext":"Job Position"},
      {"textX": width/2.456, "textY":height/1.47, "boxX":width/2.456, "boxY":height/1.41, "boxWidth":width/4.375, "boxHeight":height/18.25, "subtextX": width/2.393, "subtextY":height/1.39, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": width/1.75, "arrowY": height/1.417, "arrowWidth": width/17.5, "arrowHeight": height/16.22, "name": "Employment Type", "subtext":"Full-Time"},
      {"textX": width/1.435, "textY":height/1.47, "boxX":width/1.435, "boxY":height/1.41, "boxWidth":width/4.375, "boxHeight":height/18.25, "subtextX": width/1.414, "subtextY":height/1.39, "calenderX": 0, "calenderY": 0, "calenderWidth": 0, "calenderHeight": 0, "arrowX": width/1.16, "arrowY": height/1.417, "arrowWidth": width/17.5, "arrowHeight": height/16.22, "name": "Status", "subtext":"Active"},
      {"textX": width/20, "textY":height/1.258, "boxX":width/20, "boxY":height/1.211, "boxWidth":width/2.545, "boxHeight":height/18.25, "subtextX": width/16.47, "subtextY":height/1.196, "calenderX": width/2.59, "calenderY": height/1.206, "calenderWidth": width/28, "calenderHeight": height/24.33, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "Date of Hire", "subtext":"00/00/0000"},
      {"textX": width/1.879, "textY":height/1.258, "boxX":width/1.879, "boxY":height/1.2116, "boxWidth":width/2.54, "boxHeight":height/18.25, "subtextX": width/1.84, "subtextY":height/1.196, "calenderX": width/1.15, "calenderY": height/1.206, "calenderWidth": width/28, "calenderHeight": height/24.33, "arrowX": 0, "arrowY": 0, "arrowWidth": 0 , "arrowHeight": 0, "name": "Termination Date", "subtext": "00/00/000"},
    ];
    for(let i=0;i<component_dimensions.length;i++){
      var parts = [];
      const text = penpot.createText((component_dimensions[i]["name"]).toUpperCase());
      if(text){
        text.x = penpot.viewport.center.x +component_dimensions[i]["textX"];
        text.y = penpot.viewport.center.y + component_dimensions[i]["textY"];
        text.fontSize = String(width/46.66);
        text.fontFamily = 'Sour Gummy';
        text.fills = [{fillColor:textColor}];
        parts.push(text);
      }

      const box = penpot.createRectangle();
      box.x = penpot.viewport.center.x + component_dimensions[i]["boxX"];
      box.y = penpot.viewport.center.y + component_dimensions[i]["boxY"];
      box.resize(component_dimensions[i]["boxWidth"],component_dimensions[i]["boxHeight"]);
      box.borderRadius=10;
      box.fills = [{fillColor: fillColor}];
      box.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
      box.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];
      parts.push(box);

      const subText = penpot.createText(component_dimensions[i]["subtext"]);
      if(subText){
        subText.x = penpot.viewport.center.x +component_dimensions[i]["subtextX"];
        subText.y = penpot.viewport.center.y+component_dimensions[i]["subtextY"];
        subText.fontSize = String(width/46.66);
        subText.fontFamily = 'Sour Gummy';
        subText.fills = [{fillColor: textColor, fillOpacity:.25}];
        parts.push(subText);
      }
      const iconColorString = "'"+iconColor+"'";
      if(component_dimensions[i]["name"] == "Birthday"||component_dimensions[i]["name"] == "Date of Hire"||component_dimensions[i]["name"] == "Termination Date"){
        const calenderString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+ ' class="bi bi-calendar4" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>';
        const calender = penpot.createShapeFromSvg(calenderString);
          if(calender){
            calender.x = penpot.viewport.center.x + component_dimensions[i]["calenderX"];
            calender.y = penpot.viewport.center.y + component_dimensions[i]["calenderY"];
            calender.resize(component_dimensions[i]["calenderWidth"],component_dimensions[i]["calenderHeight"]);
            parts.push(calender);
          }
      }
      if(component_dimensions[i]["name"] == "Gender"||component_dimensions[i]["name"] == "Employment Type"||component_dimensions[i]["name"] == "Status"){
        const arrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
        const arrow = penpot.createShapeFromSvg(arrowString);
        if(arrow){
          arrow.x = penpot.viewport.center.x + component_dimensions[i]["arrowX"];
          arrow.y = penpot.viewport.center.y + component_dimensions[i]["arrowY"];
          arrow.resize(component_dimensions[i]["arrowWidth"],component_dimensions[i]["arrowHeight"]);
          parts.push(arrow);
        }
      }

      penpot.selection = parts;
      const group = penpot.group(penpot.selection);
      if(group){
        group.name = component_dimensions[i]["name"];
        contentList.push(group);
      }
    }
   
  
    penpot.selection = contentList;
    const employeeInfo = penpot.group(penpot.selection);
    if(employeeInfo){
      employeeInfo.name = "Employee Info"
    }


    // var contentList = [];
    // const containerBox = penpot.createRectangle();
    // containerBox.x = penpot.viewport.center.x;
    // containerBox.y = penpot.viewport.center.y;
    // containerBox.resize(width,height); //(1400,1460)
    // containerBox.fills = [{fillColor:fillColor}];
    // containerBox.name = "Employee Info Box";
    // contentList.push(containerBox);

    // const title = penpot.createText('Employee Info');
    // if(title){
    //   title.x = penpot.viewport.center.x + width/20;
    //   title.y = penpot.viewport.center.y + height/14.6;
    //   title.fontSize = String(width/18.66);
    //   title.fontFamily = 'Sour Gummy';
    //   title.name = "Employee Info Title";
    //   contentList.push(title);
    // }

    // const bar = penpot.createRectangle();
    // bar.x = penpot.viewport.center.x + width/20;
    // bar.y = penpot.viewport.center.y + height/6.347; 
    // bar.resize(width/1.138,height/146);
    // bar.fills = [{fillColor: iconColor, fillOpacity:.25}];
    // bar.name = "Divider";
    // contentList.push(bar);

    // const firstName = penpot.createText('FIRST NAME');
    // if(firstName){
    //   firstName.x = penpot.viewport.center.x +width/20;
    //   firstName.y = penpot.viewport.center.y + height/4.86;
    //   firstName.fontSize = String(width/46.66);
    //   firstName.fontFamily = 'Sour Gummy';
    //   firstName.fills = [{fillColor:textColor}];
    // }

    // const firstNameBox = penpot.createRectangle();
    // firstNameBox.x = penpot.viewport.center.x + width/20;
    // firstNameBox.y = penpot.viewport.center.y + height/4.11;
    // firstNameBox.resize(width/4,height/18.25);
    // firstNameBox.borderRadius=10;
    // firstNameBox.fills = [{fillColor: fillColor}];
    // firstNameBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // firstNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const firstNameSubText = penpot.createText('First Name');
    // if(firstNameSubText){
    //   firstNameSubText.x = penpot.viewport.center.x +width/17.5;
    //   firstNameSubText.y = penpot.viewport.center.y+height/3.893;
    //   firstNameSubText.fontSize = String(width/46.66);
    //   firstNameSubText.fontFamily = 'Sour Gummy';
    //   firstNameSubText.fills = [{fillColor: textColor, fillOpacity:.25}];
    // }

    // if(firstName && firstNameSubText){
    //   penpot.selection = [firstName,firstNameBox,firstNameSubText];
    //   const firstNameGroup = penpot.group(penpot.selection);
    //   if(firstNameGroup){
    //     firstNameGroup.name = "First Name";
    //     contentList.push(firstNameGroup);
    //   }
    // }

    // const middleName = penpot.createText('MIDDLE NAME');
    // if(middleName){
    //   middleName.x = penpot.viewport.center.x +width/2.69;
    //   middleName.y = penpot.viewport.center.y + height/4.86;
    //   middleName.fontSize = String(width/46.66);
    //   middleName.fontFamily = 'Sour Gummy';
    //   middleName.fills = [{fillColor:textColor}];
    // }

    // const middleNameBox = penpot.createRectangle();
    // middleNameBox.x = penpot.viewport.center.x + width/2.69;
    // middleNameBox.y = penpot.viewport.center.y + height/4.11;
    // middleNameBox.resize(width/4,height/18.25);
    // middleNameBox.borderRadius = 10;
    // middleNameBox.fills = [{fillColor: fillColor}];
    // middleNameBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // middleNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const middleNameSubText = penpot.createText('Middle Name');
    // if(middleNameSubText){
    //   middleNameSubText.x = penpot.viewport.center.x +width/2.641;
    //   middleNameSubText.y = penpot.viewport.center.y+height/3.893;
    //   middleNameSubText.fontSize = String(width/46.66);
    //   middleNameSubText.fontFamily = 'Sour Gummy';
    //   middleNameSubText.fills = [{fillColor: textColor, fillOpacity:.25}];
    // }

    // if(middleName && middleNameSubText){
    //   penpot.selection = [middleName,middleNameBox,middleNameSubText];
    //   const middleNameGroup = penpot.group(penpot.selection);
    //   if(middleNameGroup){
    //     middleNameGroup.name = "Middle Name";
    //     contentList.push(middleNameGroup);
    //   }
    // }

    // const lastName = penpot.createText('LAST NAME');
    // if(lastName){
    //   lastName.x = penpot.viewport.center.x +width/1.458;
    //   lastName.y = penpot.viewport.center.y + height/4.866;
    //   lastName.fontSize = String(width/46.66);
    //   lastName.fontFamily = 'Sour Gummy';
    //   lastName.fills = [{fillColor:textColor}];
    // }

    // const lastNameBox = penpot.createRectangle();
    // lastNameBox.x = penpot.viewport.center.x + width/1.458;
    // lastNameBox.y = penpot.viewport.center.y + height/4.11;
    // lastNameBox.resize(width/4,height/18.25);
    // lastNameBox.borderRadius = 10; 
    // lastNameBox.fills = [{fillColor: fillColor}];
    // lastNameBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // lastNameBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const lastNameSubText = penpot.createText('Last Name');
    // if(lastNameSubText){
    //   lastNameSubText.x = penpot.viewport.center.x +width/1.44;
    //   lastNameSubText.y = penpot.viewport.center.y+height/3.893;
    //   lastNameSubText.fontSize = String(width/46.66);
    //   lastNameSubText.fontFamily = 'Sour Gummy';
    //   lastNameSubText.fills = [{fillColor: textColor, fillOpacity:.25}];
    // }

    // if(lastName && lastNameSubText){
    //   penpot.selection = [lastName,lastNameBox,lastNameSubText];
    //   const lastNameGroup = penpot.group(penpot.selection);
    //   if(lastNameGroup){
    //     lastNameGroup.name = "Last Name";
    //     contentList.push(lastNameGroup);
    //   }
    // }

    // const email = penpot.createText('EMAIL');
    // if(email){
    //   email.x = penpot.viewport.center.x + width/20;
    //   email.y = penpot.viewport.center.y + height/3.0416;
    //   email.fontSize = String(width/46.66);
    //   email.fontFamily = 'Sour Gummy';
    //   email.fills = [{fillColor:textColor}];
    // }

    // const emailBox = penpot.createRectangle();
    // emailBox.x = penpot.viewport.center.x+width/20;
    // emailBox.y = penpot.viewport.center.y+height/2.78;
    // emailBox.resize(width/1.138,height/18.25);
    // emailBox.borderRadius = 10;
    // emailBox.fills = [{fillColor: fillColor}];
    // emailBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // emailBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const emailSubText = penpot.createText("sample@gmail.com");
    // if(emailSubText){
    //   emailSubText.x = penpot.viewport.center.x + width/16.47;
    //   emailSubText.y = penpot.viewport.center.y + height/2.7;
    //   emailSubText.fontSize = String(width/46.66);
    //   emailSubText.fontFamily = 'Sour Gummy';
    //   emailSubText.fills = [{fillColor: textColor, fillOpacity:.25}];
    // }

    // if(email && emailSubText){
    //   penpot.selection = [email,emailBox,emailSubText];
    //   const emailGroup = penpot.group(penpot.selection);
    //   if(emailGroup){
    //     emailGroup.name = "Email";
    //     contentList.push(emailGroup);
    //   }
    // }

    // const phone = penpot.createText('PHONE NUMBER');
    // if(phone){
    //   phone.x = penpot.viewport.center.x + width/20;
    //   phone.y = penpot.viewport.center.y + height/2.246;
    //   phone.fontSize = String(width/46.66);
    //   phone.fontFamily = 'Sour Gummy';
    //   phone.fills = [{fillColor:textColor}];
    // }

    // const phoneBox = penpot.createRectangle();
    // phoneBox.x = penpot.viewport.center.x+width/20;
    // phoneBox.y = penpot.viewport.center.y+height/2.1;
    // phoneBox.resize(width/1.138,height/18.25);
    // phoneBox.borderRadius =10;
    // phoneBox.fills = [{fillColor: fillColor}];
    // phoneBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // phoneBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const phoneSubText = penpot.createText("123-456-7890");
    // if(phoneSubText){
    //   phoneSubText.x = penpot.viewport.center.x + width/16.47; 
    //   phoneSubText.y = penpot.viewport.center.y + height/2.056;
    //   phoneSubText.fontSize = String(width/46.66);
    //   phoneSubText.fontFamily = 'Sour Gummy';
    //   phoneSubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    //   if(phone && phoneSubText){
    //   penpot.selection = [phone,phoneBox,phoneSubText];
    //   const phoneGroup = penpot.group(penpot.selection);
    //   if(phoneGroup){
    //     phoneGroup.name = "Phone";
    //     contentList.push(phoneGroup);
    //   }
    // }

    // const birthday = penpot.createText('BIRTHDAY');
    // if(birthday){
    //   birthday.x = penpot.viewport.center.x + width/20;
    //   birthday.y = penpot.viewport.center.y + height/1.78;
    //   birthday.fontFamily = 'Sour Gummy';
    //   birthday.fontSize = String(width/46.66);
    //   birthday.fills = [{fillColor:textColor}];
    // }
    
    // const birthdayBox = penpot.createRectangle();
    // birthdayBox.x = penpot.viewport.center.x+width/20;
    // birthdayBox.y = penpot.viewport.center.y+height/1.68;
    // birthdayBox.resize(width/3.5,height/18.25);
    // birthdayBox.borderRadius =10;
    // birthdayBox.fills = [{fillColor: fillColor}];
    // birthdayBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // birthdayBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const birthdaySubText = penpot.createText("00/00/0000");
    // if(birthdaySubText){
    //   birthdaySubText.x = penpot.viewport.center.x + width/16.47; 
    //   birthdaySubText.y = penpot.viewport.center.y + height/1.659;
    //   birthdaySubText.fontSize = String(width/46.66);
    //   birthdaySubText.fontFamily = 'Sour Gummy';
    //   birthdaySubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    // const iconColorString = "'"+iconColor+"'";
    // const birthdayCalenderString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+ ' class="bi bi-calendar4" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>';
    // // const birthdayCalender = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e0e0e0" class="bi bi-calendar4" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>');
    // const birthdayCalender = penpot.createShapeFromSvg(birthdayCalenderString);
    // if(birthdayCalender){
    //   birthdayCalender.x = penpot.viewport.center.x + width/3.58;
    //   birthdayCalender.y = penpot.viewport.center.y + height/1.668;
    //   birthdayCalender.resize(width/28,height/24.33);
    // }

    //  if(birthday && birthdaySubText && birthdayCalender){
    //   penpot.selection = [birthday,birthdayBox,birthdaySubText, birthdayCalender];
    //   const birthdayGroup = penpot.group(penpot.selection);
    //   if(birthdayGroup){
    //     birthdayGroup.name = "Birthday";
    //     contentList.push(birthdayGroup);
    //   }
    // }

    // const gender = penpot.createText('Gender');
    // if(gender){
    //   gender.x = penpot.viewport.center.x + width/2.456;
    //   gender.y = penpot.viewport.center.y + height/1.78;
    //   gender.fontFamily = 'Sour Gummy';
    //   gender.fontSize = String(width/46.66);
    //   gender.fills = [{fillColor:textColor}];
    // }
    
    // const genderBox = penpot.createRectangle();
    // genderBox.x = penpot.viewport.center.x+width/2.456;
    // genderBox.y = penpot.viewport.center.y+height/1.687;
    // genderBox.resize(width/6.36,height/18.25);
    // genderBox.borderRadius =10;
    // genderBox.fills = [{fillColor: fillColor}];
    // genderBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // genderBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const genderSubText = penpot.createText("Gender");
    // if(genderSubText){
    //   genderSubText.x = penpot.viewport.center.x + width/2.39; 
    //   genderSubText.y = penpot.viewport.center.y + height/1.659;
    //   genderSubText.fontSize = String(width/46.66);
    //   genderSubText.fontFamily = 'Sour Gummy';
    //   genderSubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    // const genderArrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
    // // const genderArrow = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e0e0e0" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
    // const genderArrow = penpot.createShapeFromSvg(genderArrowString);
    // if(genderArrow){
    //   genderArrow.x = penpot.viewport.center.x + width/1.971;
    //   genderArrow.y = penpot.viewport.center.y + height/1.697;
    //   genderArrow.resize(width/17.5,height/16.22);
    // }

    // if(gender && genderSubText && genderArrow){
    //   penpot.selection = [gender,genderBox,genderSubText, genderArrow];
    //   const genderGroup = penpot.group(penpot.selection);
    //   if(genderGroup){
    //     genderGroup.name = "Gender";
    //     contentList.push(genderGroup);
    //   }
    // }

    // const ssn = penpot.createText('SSN');
    // if(ssn){
    //   ssn.x = penpot.viewport.center.x + width/1.56;
    //   ssn.y = penpot.viewport.center.y + height/1.78;
    //   ssn.fontFamily = 'Sour Gummy';
    //   ssn.fontSize = String(width/46.66);
    //   ssn.fills = [{fillColor:textColor}];
    // }
    
    // const ssnBox = penpot.createRectangle();
    // ssnBox.x = penpot.viewport.center.x+width/1.546;
    // ssnBox.y = penpot.viewport.center.y+height/1.687;
    // ssnBox.resize(width/3.5,height/18.25);
    // ssnBox.borderRadius =10;
    // ssnBox.fills = [{fillColor: fillColor}];
    // ssnBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // ssnBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const ssnSubText = penpot.createText("000000");
    // if(ssnSubText){
    //   ssnSubText.x = penpot.viewport.center.x + width/1.5217; 
    //   ssnSubText.y = penpot.viewport.center.y + height/1.659;
    //   ssnSubText.fontSize = String(width/46.66);
    //   ssnSubText.fontFamily = 'Sour Gummy';
    //   ssnSubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    // if(ssn && ssnSubText){
    //   penpot.selection = [ssn,ssnBox,ssnSubText];
    //   const ssnGroup = penpot.group(penpot.selection);
    //   if(ssnGroup){
    //     ssnGroup.name = "SSN";
    //     contentList.push(ssnGroup);
    //   }
    // }

    // const position = penpot.createText('POSITION');
    // if(position){
    //   position.x = penpot.viewport.center.x + width/20;
    //   position.y = penpot.viewport.center.y + height/1.47;
    //   position.fontFamily = 'Sour Gummy';
    //   position.fontSize = String(width/46.66);
    //   position.fills = [{fillColor:textColor}];
    // }
    
    // const positionBox = penpot.createRectangle();
    // positionBox.x = penpot.viewport.center.x+width/20;
    // positionBox.y = penpot.viewport.center.y+height/1.41;
    // positionBox.resize(width/3.5,height/18.25);
    // positionBox.borderRadius =10;
    // positionBox.fills = [{fillColor: fillColor}];
    // positionBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // positionBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const positionSubText = penpot.createText("Job Position");
    // if(positionSubText){
    //   positionSubText.x = penpot.viewport.center.x + width/16.47; 
    //   positionSubText.y = penpot.viewport.center.y + height/1.39;
    //   positionSubText.fontSize = String(width/46.66);
    //   positionSubText.fontFamily = 'Sour Gummy';
    //   positionSubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    // if(position && positionSubText){
    //   penpot.selection = [position,positionBox,positionSubText];
    //   const positionGroup = penpot.group(penpot.selection);
    //   if(positionGroup){
    //     positionGroup.name = "Position";
    //     contentList.push(positionGroup);
    //   }
    // }

    // const employmentType = penpot.createText('EMPLOYMENT TYPE');
    // if(employmentType){
    //   employmentType.x = penpot.viewport.center.x + width/2.456;
    //   employmentType.y = penpot.viewport.center.y + height/1.47;
    //   employmentType.fontFamily = 'Sour Gummy';
    //   employmentType.fontSize = String(width/46.66);
    //   employmentType.fills = [{fillColor:textColor}];
    // }
    
    // const employmentTypeBox = penpot.createRectangle();
    // employmentTypeBox.x = penpot.viewport.center.x+width/2.456;
    // employmentTypeBox.y = penpot.viewport.center.y+height/1.41;
    // employmentTypeBox.resize(width/4.375,height/18.25);
    // employmentTypeBox.borderRadius =10;
    // employmentTypeBox.fills = [{fillColor: fillColor}];
    // employmentTypeBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // employmentTypeBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const employmentTypeSubText = penpot.createText("Full-Time");
    // if(employmentTypeSubText){
    //   employmentTypeSubText.x = penpot.viewport.center.x + width/2.393; 
    //   employmentTypeSubText.y = penpot.viewport.center.y + height/1.39;
    //   employmentTypeSubText.fontSize = String(width/46.66);
    //   employmentTypeSubText.fontFamily = 'Sour Gummy';
    //   employmentTypeSubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    // const employmentTypeArrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
    // // const employmentTypeArrow = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e0e0e0" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
    // const employmentTypeArrow = penpot.createShapeFromSvg(employmentTypeArrowString);
    // if(employmentTypeArrow){
    //   employmentTypeArrow.x = penpot.viewport.center.x + width/1.75;
    //   employmentTypeArrow.y = penpot.viewport.center.y + height/1.417;
    //   employmentTypeArrow.resize(width/17.5,height/16.22);
    // }

    // if(employmentType && employmentTypeSubText && employmentTypeArrow){
    //   penpot.selection = [employmentType,employmentTypeBox,employmentTypeSubText, employmentTypeArrow];
    //   const employmentTypeGroup = penpot.group(penpot.selection);
    //   if(employmentTypeGroup){
    //     employmentTypeGroup.name = "Employment Type";
    //     contentList.push(employmentTypeGroup);
    //   }
    // }

    // const status = penpot.createText('STATUS');
    // if(status){
    //   status.x = penpot.viewport.center.x + width/1.435;
    //   status.y = penpot.viewport.center.y + height/1.47;
    //   status.fontFamily = 'Sour Gummy';
    //   status.fontSize = String(width/46.66);
    //   status.fills = [{fillColor:textColor}];
    // }

    // const statusBox = penpot.createRectangle();
    // statusBox.x = penpot.viewport.center.x+width/1.435;
    // statusBox.y = penpot.viewport.center.y+height/1.41;
    // statusBox.resize(width/4.375,height/18.25);
    // statusBox.borderRadius =10;
    // statusBox.fills = [{fillColor: fillColor}];
    // statusBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // statusBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const statusSubText = penpot.createText("Active");
    // if(statusSubText){
    //   statusSubText.x = penpot.viewport.center.x + width/1.414; 
    //   statusSubText.y = penpot.viewport.center.y + height/1.39;
    //   statusSubText.fontSize = String(width/46.66);
    //   statusSubText.fontFamily = 'Sour Gummy';
    //   statusSubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    // const statusArrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
    // // const statusArrow = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e0e0e0" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
    // const statusArrow = penpot.createShapeFromSvg(statusArrowString);
    // if(statusArrow){
    //   statusArrow.x = penpot.viewport.center.x + width/1.16;
    //   statusArrow.y = penpot.viewport.center.y + height/1.417;
    //   statusArrow.resize(width/17.5,height/16.22);
    // }

    // if(status && statusSubText && statusArrow){
    //   penpot.selection = [status,statusBox,statusSubText, statusArrow];
    //   const statusGroup = penpot.group(penpot.selection);
    //   if(statusGroup){
    //     statusGroup.name = "Status";
    //     contentList.push(statusGroup);
    //   }
    // }

    // const dateOfHire = penpot.createText('DATE OF HIRE');
    // if(dateOfHire){
    //   dateOfHire.x = penpot.viewport.center.x + width/20;
    //   dateOfHire.y = penpot.viewport.center.y + height/1.258;
    //   dateOfHire.fontFamily = 'Sour Gummy';
    //   dateOfHire.fontSize = String(width/46.66);
    //   dateOfHire.fills = [{fillColor:textColor}];
    // }
    
    // const dateOfHireBox = penpot.createRectangle();
    // dateOfHireBox.x = penpot.viewport.center.x+width/20;
    // dateOfHireBox.y = penpot.viewport.center.y+height/1.211;
    // dateOfHireBox.resize(width/2.545,height/18.25);
    // dateOfHireBox.borderRadius =10;
    // dateOfHireBox.fills = [{fillColor: fillColor}];
    // dateOfHireBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // dateOfHireBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const dateOfHireSubText = penpot.createText("00/00/0000");
    // if(dateOfHireSubText){
    //   dateOfHireSubText.x = penpot.viewport.center.x + width/16.47; 
    //   dateOfHireSubText.y = penpot.viewport.center.y + height/1.196;
    //   dateOfHireSubText.fontSize = String(width/46.66);
    //   dateOfHireSubText.fontFamily = 'Sour Gummy';
    //   dateOfHireSubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    // const dateOfHireCalenderString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-calendar4" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>';
    // // const dateOfHireCalender = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e0e0e0" class="bi bi-calendar4" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>');
    // const dateOfHireCalender = penpot.createShapeFromSvg(dateOfHireCalenderString);
    // if(dateOfHireCalender){
    //   dateOfHireCalender.x = penpot.viewport.center.x + width/2.59;
    //   dateOfHireCalender.y = penpot.viewport.center.y + height/1.206;
    //   dateOfHireCalender.resize(width/28,height/24.33);
    // }

    // if(dateOfHire && dateOfHireSubText && dateOfHireCalender){
    //   penpot.selection = [dateOfHire,dateOfHireBox,dateOfHireSubText, dateOfHireCalender];
    //   const dateOfHireGroup = penpot.group(penpot.selection);
    //   if(dateOfHireGroup){
    //     dateOfHireGroup.name = "Date of Hire";
    //     contentList.push(dateOfHireGroup);
    //   }
    // }

    // const termDate = penpot.createText('TERMINATION DATE');
    // if(termDate){
    //   termDate.x = penpot.viewport.center.x + width/1.879;
    //   termDate.y = penpot.viewport.center.y + height/1.258;
    //   termDate.fontFamily = 'Sour Gummy';
    //   termDate.fontSize = String(width/46.66);
    //   termDate.fills = [{fillColor:textColor}];
    // }
    
    // const termDateBox = penpot.createRectangle();
    // termDateBox.x = penpot.viewport.center.x+width/1.879;
    // termDateBox.y = penpot.viewport.center.y+height/1.2116;
    // termDateBox.resize(width/2.54,height/18.25);
    // termDateBox.borderRadius =10;
    // termDateBox.fills = [{fillColor: fillColor}];
    // termDateBox.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
    // termDateBox.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

    // const termDateSubText = penpot.createText("00/00/0000");
    // if(termDateSubText){
    //   termDateSubText.x = penpot.viewport.center.x + width/1.84; 
    //   termDateSubText.y = penpot.viewport.center.y + height/1.196;
    //   termDateSubText.fontSize = String(width/46.66);
    //   termDateSubText.fontFamily = 'Sour Gummy';
    //   termDateSubText.fills = [{fillColor: textColor, fillOpacity:.25}]; 
    // }

    // const termDateCalenderString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-calendar4" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>';
    // // const termDateCalender = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e0e0e0" class="bi bi-calendar4" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>');
    // const termDateCalender = penpot.createShapeFromSvg(termDateCalenderString);
    // if(termDateCalender){
    //   termDateCalender.x = penpot.viewport.center.x + width/1.15;
    //   termDateCalender.y = penpot.viewport.center.y + height/1.206;
    //   termDateCalender.resize(width/28,height/24.33);
    // }

    // if(termDate && termDateSubText && termDateCalender){
    //   penpot.selection = [termDate,termDateBox,termDateSubText, termDateCalender];
    //   const termDateGroup = penpot.group(penpot.selection);
    //   if(termDateGroup){
    //     termDateGroup.name = "Termination Date";
    //     contentList.push(termDateGroup);
    //   }
    // }

    // penpot.selection = contentList;
    // const employeeInfo = penpot.group(penpot.selection);
    // if(employeeInfo){
    //   employeeInfo.name = "Employee Info"
    // }
}