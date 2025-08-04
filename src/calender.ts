export function calender(width:number, height:number, fillColor:string, iconColor:string, textColor:string){
    const calenderBoard = penpot.createBoard();
    calenderBoard.x = penpot.viewport.center.x;
    calenderBoard.y = penpot.viewport.center.y;
    calenderBoard.resize(width, height); //(2850,675)
    calenderBoard.fills = [{fillColor: '#FFFFFF', fillOpacity:0}];
    calenderBoard.name = "Calender Board (Unopened)";

    const calenderBar = penpot.createRectangle();
    calenderBar.x = penpot.viewport.center.x;
    calenderBar.y = penpot.viewport.center.y;
    calenderBar.resize(width, height);
    calenderBar.fills = [{fillColor: fillColor}];
    calenderBar.name = "Calender Bar";

    const date = penpot.createText("08/01/2025");
    if(date){
      date.x = penpot.viewport.center.x+width/23.75;
      date.y = penpot.viewport.center.y+height/3.375;
      date.fontSize = String(width/11.63);
      date.fontFamily = 'Sour Gummy';
      date.name = "Current Date";
    }
    const calenderLogo = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>');
    if(calenderLogo){
      calenderLogo.x = penpot.viewport.center.x+width/1.278;
      calenderLogo.y = penpot.viewport.center.y+height/7.5;
      calenderLogo.resize(width/6,height/1.42);
      calenderLogo.name = "Current Logo";
    } 

    if(calenderLogo&&date){
    penpot.selection = [date,calenderBar];
    const calenderBarGroup = penpot.group(penpot.selection);
    if(calenderBarGroup){
      calenderBarGroup.name = "Calender Bar (Unopened)";
      calenderBoard.insertChild(0,calenderLogo);
      calenderBoard.insertChild(0,calenderBarGroup);
      }
    }

    const calenderBoard2 = penpot.createBoard();
    calenderBoard2.x = penpot.viewport.center.x;
    calenderBoard2.y = penpot.viewport.center.y;
    calenderBoard2.resize(width/.655,height/.168);
    calenderBoard2.fills = [{fillColor: '#FFFFFF', fillOpacity:0}];
    calenderBoard2.name = "Calender Box (Opened)"

    const calenderBox = penpot.createRectangle();
    calenderBox.resize(width/.876,height/.23);
    calenderBox.x = penpot.viewport.center.x+width/2.85;
    calenderBox.y = penpot.viewport.center.y+height/.675;
    calenderBox.fills = [{fillColor: fillColor}];
    calenderBox.name = "Calender Box";
   
    const arrow = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>');
    if(arrow){ 
      arrow.x = penpot.viewport.center.x+width/2.85+width/1.075;
      arrow.y = penpot.viewport.center.y+height/.675+height/6.75;
      arrow.resize(width/9.5,height/2.25);
      arrow.name = "Right Arrow";
    }

    const arrow2 = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>');
    if(arrow2){
      arrow2.x = penpot.viewport.center.x+width/2.85+width/9.5;
      arrow2.y = penpot.viewport.center.y+height/.675+height/6.75;
      arrow2.resize(width/9.5,height/2.25);
      arrow2.name = "Left Arrow";
    }

    const month = penpot.createText("August 2025");
    if(month){
      month.x = penpot.viewport.center.x+width/2.85+width/3.16;
      month.y = penpot.viewport.center.y+height/.675+height/6.75;
      month.fontSize = String(width/11.63);
      month.fontFamily = 'Sour Gummy';
      month.name = "Month";
    }

    var xPos = width/8.38;
    var yPos = height/2.25;
    const content = ["S", "M", "T", "W", "T", "F", "S", "27", "28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
    const contentList = [];
    for(let i=0; i<content.length; i++){
      if(i%7 ==0){
        xPos=width/8.38;
        yPos+=height/1.8; 
      }
      const textItem = penpot.createText(content[i]);
      if(textItem){ 
        textItem.x = penpot.viewport.center.x+width/2.85+xPos;
        textItem.y = penpot.viewport.center.y+height/.675+yPos;
        textItem.fontSize =String(width/14.25);
        textItem.fills = [{fillColor: textColor}];
        textItem.fontFamily = 'Sour Gummy';
        textItem.name = content[i];
        contentList.push(textItem);
      }
      xPos+=width/7.125;
    }
    penpot.selection = contentList;
    const contentGroup = penpot.group(penpot.selection);
    if(contentGroup){
      contentGroup.name = "Content";
    }

    const highlightBox = penpot.createRectangle();
    highlightBox.resize(width/1.06,height/1.4);
    highlightBox.x = penpot.viewport.center.x+width/2.85+width/11.4;
    highlightBox.y = penpot.viewport.center.y+height/.675+height/1.22;
    highlightBox.borderRadius=width/28.5;
    highlightBox.fills = [{fillColor: iconColor, fillOpacity: .2}];
    highlightBox.name = "Highlight Box";
     
    const highlightCircle = penpot.createEllipse();
    highlightCircle.x = penpot.viewport.center.x+width/2.85+width/1.54;
    highlightCircle.y = penpot.viewport.center.y+height/.675+height/.655;
    highlightCircle.resize(width/9.5,height/2.25);
    highlightCircle.fills = [{fillColor:iconColor, fillOpacity:.2}]; 
    highlightCircle.name = "Highlight Circle";

    if(arrow && arrow2 && month && contentGroup){
    penpot.selection = [calenderBox, month, contentGroup, highlightBox, highlightCircle];
    const calenderBoxGroup = penpot.group(penpot.selection);
    if(calenderBoxGroup){
      calenderBoxGroup.name = "Highlight Box (Opened)";
      calenderBoard2.insertChild(0, calenderBoard);
      calenderBoard2.insertChild(0, arrow);
      calenderBoard2.insertChild(0, arrow2);
      calenderBoard2.insertChild(0, calenderBoxGroup);
    }
    }
    calenderBoard.addInteraction('click', {type: 'navigate-to', destination: calenderBoard2});
    calenderBoard2.addInteraction('click', {type: 'navigate-to', destination: calenderBoard});
}