export function carouselCards(width:number, height:number, fillColor:string, iconColor:string, textColor:string, items:number){
        const iconColorString = "'"+iconColor+"'";
        var contentList = [];
        for(let i=0;i<items;i++){
            var parts = [];
            const carouselBox1 = penpot.createRectangle();
            carouselBox1.x = penpot.viewport.center.x + (width/.81)*i;
            carouselBox1.y = penpot.viewport.center.y;
            carouselBox1.resize(width,height); //(450,550)
            carouselBox1.borderRadius = width/9;
            carouselBox1.fills = [{fillColor:fillColor}];
            carouselBox1.name = "Card Box";
            parts.push(carouselBox1);

            const imageString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-card-image" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/></svg>';
            const image = penpot.createShapeFromSvg(imageString);
            if(image){
                image.x = penpot.viewport.center.x+width/3.46+(width/.81)*i;
                image.y = penpot.viewport.center.y+height/9.16;
                image.resize(width/3,height/3.6);
                image.name = "Filler Image";
                parts.push(image);
            }

            const title = penpot.createText("Main Title");
            if(title){
                title.x = penpot.viewport.center.x+width/4.28+(width/.81)*i;
                title.y = penpot.viewport.center.y+height/2.619;
                title.fills = [{fillColor:textColor}];
                title.fontSize = String(width/7.758);
                title.fontFamily = 'Sour Gummy';
                title.name = "Title";
                parts.push(title);
            }

            const desc = penpot.createText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
            if(desc){
                desc.x = penpot.viewport.center.x+width/15+(width/.81)*i;
                desc.y = penpot.viewport.center.y+height/1.896;
                desc.resize(width/1.184,height/2.2);
                desc.fills = [{fillColor:textColor}];
                desc.fontSize = String(width/20.45);
                desc.fontFamily = 'Sour Gummy';
                desc.align = 'center'; 
                desc.name = "Desc.";
                parts.push(desc);
            }

            penpot.selection = parts;
            const cardGroup = penpot.group(penpot.selection);
            if(cardGroup){
                cardGroup.name = "Card - "+i;
                contentList.push(cardGroup);
            }

        }
        const leftArrowCircle = penpot.createEllipse();
        leftArrowCircle.x = penpot.viewport.center.x - width/1.55;
        leftArrowCircle.y = penpot.viewport.center.y + height/2.75;
        leftArrowCircle.resize(width/2.25,height/2.75); 
        leftArrowCircle.fills = [{fillColor:fillColor}];
        leftArrowCircle.strokes = [{strokeColor:iconColor, strokeWidth:width/30}];
        leftArrowCircle.name = "Left Arrow Circle";
        contentList.push(leftArrowCircle);

        const leftArrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-left-fill" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>';
        const leftArrow = penpot.createShapeFromSvg(leftArrowString);
        if(leftArrow){
            leftArrow.x = penpot.viewport.center.x - width/1.875;
            leftArrow.y = penpot.viewport.center.y + height/2.2;
            leftArrow.resize(width/5,height/5.5);
            leftArrow.name = "Left Arrow";
            contentList.push(leftArrow);
        }

        const rightArrowCircle = penpot.createEllipse();
        rightArrowCircle.x = penpot.viewport.center.x + (width/.81)*items + width/18;
        rightArrowCircle.y = penpot.viewport.center.y + height/2.75;
        rightArrowCircle.resize(width/2.25,height/2.75); 
        rightArrowCircle.fills = [{fillColor:fillColor}];
        rightArrowCircle.strokes = [{strokeColor:iconColor, strokeWidth:width/30}];
        rightArrowCircle.name = "Right Arrow Circle";
        contentList.push(rightArrowCircle);

        const rightArrowString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>';
        const rightArrow = penpot.createShapeFromSvg(rightArrowString);
        if(rightArrow){
            rightArrow.x = penpot.viewport.center.x + (width/.81)*items + width/5.625; 
            rightArrow.y = penpot.viewport.center.y + height/2.2;
            rightArrow.resize(width/5,height/5.5);
            rightArrow.name = "Right Arrow";
            contentList.push(rightArrow);
        }

        penpot.selection = contentList;
        const carouselCardsGroup = penpot.group(penpot.selection);
        if(carouselCardsGroup){
            carouselCardsGroup.name = "Carousel Cards";
        }
}