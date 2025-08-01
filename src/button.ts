export function button1(width: number, height:number, borderRadius:number, fillColor:string, iconColor:string){
    const buttonBoard = penpot.createBoard();
    buttonBoard.resize(width,height);
    buttonBoard.x = penpot.viewport.center.x;
    buttonBoard.y = penpot.viewport.center.y;
    buttonBoard.borderRadius = borderRadius;

    const button = penpot.createRectangle();
    button.resize(width,height);
    button.x = penpot.viewport.center.x;
    button.y = penpot.viewport.center.y;
    button.borderRadius = borderRadius;
    button.strokes = [{strokeColor: fillColor, strokeWidth: 15}]
    button.fills = [{fillColor: iconColor}]
   
    const buttonText = penpot.createText("Button");
    if(buttonText){
    buttonText.x = penpot.viewport.center.x+35;
    buttonText.y = penpot.viewport.center.y+23;
    buttonText.fontSize= '45';
    buttonText.fontFamily = 'Sour Gummy';
    buttonText.fills = [{fillColor: fillColor}];
    buttonBoard.insertChild(0, buttonText);}
    buttonBoard.insertChild(0, button);
  
    const buttonBoard2 = penpot.createBoard();
    buttonBoard2.resize(width,height);
    buttonBoard2.x = penpot.viewport.center.x;
    buttonBoard2.y = penpot.viewport.center.y;
    buttonBoard2.borderRadius = borderRadius;

    const button2 = penpot.createRectangle();
    button2.resize(width,height);
    button2.x = penpot.viewport.center.x;
    button2.y = penpot.viewport.center.y;
    button2.borderRadius = borderRadius;
    button2.fills = [{fillColor: fillColor}]

    const buttonText2 = penpot.createText("Button");
    if(buttonText2){
    buttonText2.x = penpot.viewport.center.x+35;
    buttonText2.y = penpot.viewport.center.y+23;
    buttonText2.fontSize= '45';
    buttonText2.fontFamily = 'Sour Gummy';
    buttonText2.fills = [{fillColor: iconColor}];
    buttonBoard2.insertChild(0, buttonText2);}
    buttonBoard2.insertChild(0, button2);
    buttonBoard2.addInteraction('mouse-enter', {type: 'navigate-to', destination: buttonBoard});
    buttonBoard.addInteraction('mouse-leave', {type: 'navigate-to', destination: buttonBoard2});

    penpot.selection = [buttonBoard, buttonBoard2];
    const buttonStyle1 = penpot.group(penpot.selection);
    if(buttonStyle1){
      buttonStyle1.name = "Button Style 1";
    }
}

export function button2(width:number, height:number, borderRadius:number, fillColor:string, iconColor:string){
const circleBoard = penpot.createBoard();
    circleBoard.x = penpot.viewport.center.x;
    circleBoard.y = penpot.viewport.center.y;
    circleBoard.borderRadius = borderRadius;
    circleBoard.resize(width,height);
    circleBoard.name = "Button (Hovered)";

    const circle = penpot.createRectangle();
    circle.x = penpot.viewport.center.x;
    circle.y = penpot.viewport.center.y;
    circle.borderRadius = borderRadius;
    circle.resize(width,height);
    circle.fills = [{fillColor: iconColor}];
    circle.strokes = [{strokeColor: fillColor, strokeWidth: 10}]
    circle.name = "Circle (Hovered)";

    const fillColorString = "'"+fillColor+"'";
    const svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=' + fillColorString + ' class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>';
    //const arrowRight = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF8577" class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>');
    const arrowRight = penpot.createShapeFromSvg(svgString);
    if(arrowRight){
    arrowRight.x = penpot.viewport.center.x+width/4;
    arrowRight.y = penpot.viewport.center.y+height/5;
    arrowRight.resize(width/2,60);
    circleBoard.insertChild(0,arrowRight);   
    arrowRight.name = "Arrow (Hovered)";
    }
    circleBoard.insertChild(0,circle);

    const circleBoard2 = penpot.createBoard();
    circleBoard2.x = penpot.viewport.center.x;
    circleBoard2.y = penpot.viewport.center.y;
    circleBoard2.borderRadius = borderRadius;
    circleBoard2.resize(width,height);
    circleBoard2.name = "Button";
 
    const circle2 = penpot.createRectangle();
    circle2.x = penpot.viewport.center.x;
    circle2.y = penpot.viewport.center.y;
    circle2.borderRadius = borderRadius;
    circle2.resize(width,height);
    circle2.fills = [{fillColor: fillColor}];
    circle2.name = "Circle";
    
    const iconColorString = "'"+iconColor+"'";
    const svgString2 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=' + iconColorString + ' class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>';
    //const arrowRight2 = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>');
    const arrowRight2 = penpot.createShapeFromSvg(svgString2);
    if(arrowRight2){
    arrowRight2.x = penpot.viewport.center.x+width/4;
    arrowRight2.y = penpot.viewport.center.y+height/5;
    arrowRight2.resize(width/2,60);
    circleBoard2.insertChild(0,arrowRight2);
    arrowRight2.name = "Arrow";
    }

    circleBoard2.insertChild(0,circle2);
    circleBoard2.addInteraction('mouse-enter', {type: 'navigate-to', destination: circleBoard});
    circleBoard.addInteraction('mouse-leave', {type: 'navigate-to', destination: circleBoard2});

    penpot.selection = [circleBoard,circleBoard2];
    const buttonStyle2 = penpot.group(penpot.selection);
    if(buttonStyle2){
      buttonStyle2.name = "Button Style 2";
    }
}
