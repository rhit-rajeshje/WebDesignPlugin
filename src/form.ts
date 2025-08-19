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

    var component_dimensions = [
        {"textX":width/19, "textY":height/2.4, "boxX":width/19,"boxY":height/2,"boxWidth":width/2.53,"boxHeight":height/8.57,"subtextX":width/14.61,"subtextY":height/1.9, "name":"Card Holder", "subtext":"Card Holder"},
        {"textX":width/1.9, "textY":height/2.4, "boxX":width/1.9,"boxY":height/2,"boxWidth":width/6.3,"boxHeight":height/8.57,"subtextX":width/1.86,"subtextY":height/1.9, "name":"Expiration Date", "subtext":"MM"},
        {"textX":width/1.9, "textY":height/2.4, "boxX":width/1.26,"boxY":height/2,"boxWidth":width/6.33,"boxHeight":height/8.57,"subtextX":width/1.25,"subtextY":height/1.9, "name":" ", "subtext":"YY"},
        {"textX":width/19, "textY":height/1.5, "boxX":width/19,"boxY":height/1.33,"boxWidth":width/1.809,"boxHeight":height/8.57,"subtextX":width/14.61,"subtextY":height/1.29, "name":"Card Number", "subtext":"1234 1234 1234 1234"},
        {"textX":width/1.461, "textY":height/1.5, "boxX":width/1.461,"boxY":height/1.33,"boxWidth":width/4.75,"boxHeight":height/8.57,"subtextX":width/1.428,"subtextY":height/1.29, "name":"CVC", "subtext":"000"},
    ];

    for(let i=0;i<component_dimensions.length;i++){
        const text = penpot.createText(component_dimensions[i]["name"].toUpperCase());
        if(text){
        text.x = penpot.viewport.center.x +component_dimensions[i]["textX"];
        text.y = penpot.viewport.center.y +component_dimensions[i]["textY"];
        text.fontFamily = 'Sour Gummy';
        text.fontSize = String(width/31.66);
        text.fills = [{fillColor: textColor}];}

        const box = penpot.createRectangle();
        box.x = penpot.viewport.center.x + component_dimensions[i]["boxX"];
        box.y = penpot.viewport.center.y + component_dimensions[i]["boxY"];
        box.resize(component_dimensions[i]["boxWidth"],component_dimensions[i]["boxHeight"]);
        box.fills = [{fillColor: fillColor}];
        box.strokes = [{strokeColor: iconColor,strokeWidth: 1, strokeOpacity:.5}];
        box.borderRadius = width/95;
        box.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];

        const subtext = penpot.createText(component_dimensions[i]["subtext"]); 
        if(subtext){
        subtext.x = penpot.viewport.center.x +component_dimensions[i]["subtextX"];
        subtext.y = penpot.viewport.center.y +component_dimensions[i]["subtextY"];
        subtext.fontSize = String(width/31.66);
        subtext.fontFamily = 'Sour Gummy'; 
        subtext.fills = [{fillColor: textColor, fillOpacity:.25}];}

        if(text && subtext){
        penpot.selection = [text, box, subtext];
        const group = penpot.group(penpot.selection);
        if(group){
            group.name = component_dimensions[i]["name"];
            contentList.push(group);}}
    }


    const dash = penpot.createRectangle();
    dash.x = penpot.viewport.center.x + width/1.37;
    dash.y = penpot.viewport.center.y + height/2;
    dash.resize(width/63.33,height/9.23);
    dash.borderRadius = width/95;
    dash.rotate(45);
    dash.fills = [{fillColor: iconColor}];
    contentList.push(dash);

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

     var component_dimensions = [
        {"textX":width/18.6,"textY":height/4.16,"boxX":width/18.6,"boxY":height/3.57,"boxWidth":width/2.65,"boxHeight":height/15.625,"subtextX":width/14.3,"subtextY":height/3.42, "arrowX":0,"arrowY":0,"arrowWidth":0,"arrowHeight":0,"name":"First Name", "subtext":"First Name"},
        {"textX":width/1.93,"textY":height/4.15,"boxX":width/1.93,"boxY":height/3.57,"boxWidth":width/2.657,"boxHeight":height/15.6,"subtextX":width/1.87,"subtextY":height/3.42, "arrowX":0,"arrowY":0,"arrowWidth":0,"arrowHeight":0,"name":"Last Name", "subtext":"Last Name"},
        {"textX":width/18.6,"textY":height/2.659,"boxX":width/18.6,"boxY":height/2.4,"boxWidth":width/1.19,"boxHeight":height/15.625,"subtextX":width/14.3,"subtextY":height/2.33, "arrowX":0,"arrowY":0,"arrowWidth":0,"arrowHeight":0,"name":"Address 1", "subtext":"123 Sample Street"},
        {"textX":width/18.6,"textY":height/1.95,"boxX":width/18.6,"boxY":height/1.811,"boxWidth":width/1.19,"boxHeight":height/15.625,"subtextX":width/14.3,"subtextY":height/1.77, "arrowX":0,"arrowY":0,"arrowWidth":0,"arrowHeight":0,"name":"Address 2", "subtext":"456 Example Dr"},
        {"textX":width/18.6,"textY":height/1.54,"boxX":width/18.6,"boxY":height/1.453,"boxWidth":width/2.06,"boxHeight":height/15.625,"subtextX":width/14.3,"subtextY":height/1.428,  "arrowX":0,"arrowY":0,"arrowWidth":0,"arrowHeight":0, "name":"City", "subtext":"Test City"},
        {"textX":width/1.512,"textY":height/1.54,"boxX":width/1.512,"boxY":height/1.453,"boxWidth":width/4.22,"boxHeight":height/15.625,"subtextX":width/1.47,"subtextY":height/1.428, "arrowX":width/1.223,"arrowY":height/1.436,"arrowWidth":width/15.5,"arrowHeight":height/20.83, "name":"State", "subtext":"EX"},
        {"textX":width/18.6,"textY":height/1.2755,"boxX":width/18.6,"boxY":height/1.213,"boxWidth":width/2.325,"boxHeight":height/15.625,"subtextX":width/14.3,"subtextY":height/1.196,  "arrowX":0,"arrowY":0,"arrowWidth":0,"arrowHeight":0, "name":"Zip Code", "subtext":"000000"},
        {"textX":width/1.738,"textY":height/1.2755,"boxX":width/1.738,"boxY":height/1.213,"boxWidth":width/3.1,"boxHeight":height/15.625,"subtextX":width/1.69,"subtextY":height/1.196, "arrowX":width/1.22,"arrowY":height/1.2,"arrowWidth":width/15.5,"arrowHeight":height/20.83, "name":"Country", "subtext":"Country"},
     ];

     for(let i=0;i<component_dimensions.length;i++){
        var parts = [];
         const text = penpot.createText(component_dimensions[i]["name"].toUpperCase());
        if(text){
            text.x = penpot.viewport.center.x +component_dimensions[i]["textX"];
            text.y = penpot.viewport.center.y +component_dimensions[i]["textY"];
            text.fontSize = String(width/31);
            text.fontFamily = 'Sour Gummy';
            text.fills = [{fillColor:textColor}];
            parts.push(text);
        }

        const box = penpot.createRectangle();
        box.x = penpot.viewport.center.x+component_dimensions[i]["boxX"];
        box.y = penpot.viewport.center.y+component_dimensions[i]["boxY"];
        box.resize(component_dimensions[i]["boxWidth"],component_dimensions[i]["boxHeight"]);
        box.borderRadius= width/93;
        box.fills = [{fillColor: fillColor}];
        box.strokes = [{strokeColor: iconColor, strokeOpacity: .5, strokeWidth:1}];
        box.shadows = [{spread:0, blur: .8, offsetX: .85, offsetY: .85, style: 'drop-shadow'}];
        parts.push(box);

        const subtext = penpot.createText(component_dimensions[i]["subtext"]);
        if(subtext){
            subtext.x = penpot.viewport.center.x +component_dimensions[i]["subtextX"];
            subtext.y = penpot.viewport.center.y + component_dimensions[i]["subtextY"]; 
            subtext.fontSize = String(width/31);
            subtext.fontFamily = 'Sour Gummy';
            subtext.fills = [{fillColor:textColor, fillOpacity:.25}];
            parts.push(subtext);
        }

        if(component_dimensions[i]["name"]=="State"||component_dimensions[i]["name"]=="Country"){
            const iconColorString="'"+iconColor+"'";
            const arrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
            const arrow = penpot.createShapeFromSvg(arrowString);
            if(arrow){
                arrow.x = penpot.viewport.center.x +component_dimensions[i]["arrowX"];
                arrow.y = penpot.viewport.center.y+component_dimensions[i]["arrowY"];
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
}