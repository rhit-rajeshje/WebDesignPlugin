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