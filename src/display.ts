export function cardDisplay(width:number, height:number, fillColor:string, iconColor:string, textColor:string, items:number){
    var contentList = [];
    for(let i=0;i<items;i++){
      const card = penpot.createRectangle();
      card.x = penpot.viewport.center.x + i*(width/.945);
      card.y = penpot.viewport.center.y;
      card.resize(width,height); //(1750,2500)
      card.fills = [{fillColor:fillColor}];
      card.name = "Card";

      const header = penpot.createRectangle();
      header.x = penpot.viewport.center.x +i*(width/.945);
      header.y = penpot.viewport.center.y;
      header.resize(width,height/2.38);
      header.fills = [{fillColor:iconColor}];
      header.name = "Header";

      const subtitle = penpot.createText("Subtitle");
      if(subtitle){
        subtitle.x = penpot.viewport.center.x + (width/43.75) + i*(width/.945);
        subtitle.y = penpot.viewport.center.y + (height/2.27);
        subtitle.fontSize = String(width/17.5);
        subtitle.fontFamily = 'Sour Gummy';
        subtitle.fills = [{fillColor:textColor, fillOpacity:.7}];
        subtitle.name = "Subtitle";
      }

      const title = penpot.createText("Main Title");
      if(title){
        title.x = penpot.viewport.center.x + (width/43.75) + i*(width/.945);
        title.y = penpot.viewport.center.y + (height/2);
        title.fontSize = String(width/9.72);
        title.fontFamily = 'Sour Gummy';
        title.fills = [{fillColor:textColor}];
        title.name = "Title";
      }

      const paragraph = penpot.createText("Lorem ipsum consectetur odio in condimentum tristique. Nam hendrerit urna ex, non pretium erat pellentesque eget. Sed ut risus nec augue sagittis convallis.");
      if(paragraph){
        paragraph.x = penpot.viewport.center.x+(width/43.75) + i*(width/.945);
        paragraph.y = penpot.viewport.center.y+(height/1.66);
        paragraph.fontSize = String(width/21.875);
        paragraph.resize(width/1.029,height/6.25);
        paragraph.fontFamily = 'Sour Gummy';
        paragraph.fills = [{fillColor:textColor, fillOpacity:.6}];
        paragraph.name = "Paragraph";
      }

      const button = penpot.createRectangle();
      button.x = penpot.viewport.center.x+(width/3.43) + i*(width/.945);
      button.y = penpot.viewport.center.y+(height/1.26);
      button.resize(width/2.1875,height/8.33);
      button.borderRadius = width/43.75;
      button.fills = [{fillColor:iconColor}];
      button.name = "Button Box";

      const buttonText = penpot.createText("Button"); 
      if(buttonText){
        buttonText.x = penpot.viewport.center.x+(width/2.61) + i*(width/.945);
        buttonText.y = penpot.viewport.center.y+height/1.225;
        buttonText.fontSize = String(width/11.66);
        buttonText.fontFamily = 'Sour Gummy';
        buttonText.fills = [{fillColor:fillColor}];
        buttonText.name = "Button Text";
      }

      if(subtitle&& title && paragraph && buttonText){
        penpot.selection = [card, header, subtitle, title, paragraph,button,buttonText];
        const group = penpot.group(penpot.selection);
        if(group){
          group.name = "Card - "+i;
          contentList.push(group);
        }
      }
    }
    penpot.selection = contentList;
    const cardGroup = penpot.group(penpot.selection);
    if(cardGroup){
      cardGroup.name = "Card Display";
    }
}

export function infoTile(width:number, height:number, fillColor:string, iconColor:string, textColor:string, items:number){
    var xPos=width/.96;
    var contentList = [];
    for(let i=0;i<items;i++){
      var parts = [];
      const cardBox = penpot.createRectangle();
      cardBox.x = penpot.viewport.center.x +xPos*i;
      cardBox.y = penpot.viewport.center.y;
      cardBox.resize(width,height);
      cardBox.fills = [{fillColor:fillColor}];
      cardBox.name = "Info Tile";
      parts.push(cardBox);
      
      const mainTitle = penpot.createText("Main Title");
      if(mainTitle){
        mainTitle.x = penpot.viewport.center.x+width/13.44 +xPos*i;
        mainTitle.y = penpot.viewport.center.y+height/2.9;
        mainTitle.fontSize = String(width/11.2);
        mainTitle.fontFamily = 'Sour Gummy';
        mainTitle.fills = [{fillColor: textColor}];
        mainTitle.name = "Main Title";
        parts.push(mainTitle);
      }

      const paragraph = penpot.createText("Lorem ipsum consectetur odio in condimentum tristique. Nam hendrerit urna ex, non pretium erat pellentesque eget. Sed ut risus nec augue sagittis convallis.");
      if(paragraph){
        paragraph.x = penpot.viewport.center.x + width/13.44 +xPos*i;
        paragraph.y = penpot.viewport.center.y + height/1.789;
        paragraph.resize(width/1.135,height/7.846);
        paragraph.fontFamily = 'Sour Gummy';
        paragraph.fontSize = String(width/24);
        paragraph.fills = [{fillColor:textColor, fillOpacity:.40}];
        paragraph.name = "Paragraph";
        parts.push(paragraph);
      }

      const iconColorString = "'"+iconColor+"'";
      const bulletPointString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-asterisk" viewBox="0 0 16 16"><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/></svg>';
      const bulletPoint = penpot.createShapeFromSvg(bulletPointString);
      if(bulletPoint){
        bulletPoint.x = penpot.viewport.center.x+width/15.27 +xPos*i;
        bulletPoint.y = penpot.viewport.center.y+height/20.4;
        bulletPoint.resize(width/6.22,height/3.77);
        bulletPoint.name = "Asterisk";
        parts.push(bulletPoint);
      }

      penpot.selection = parts;
      const tileGroup = penpot.group(penpot.selection);
      if(tileGroup){
        tileGroup.name = "Info Tile";
        contentList.push(tileGroup);
      }
    }

    penpot.selection = contentList;
    const infoTitleGroup = penpot.group(penpot.selection);
    if(infoTitleGroup){
      infoTitleGroup.name = "Info Tiles";
    }
}

export function testimonial(width:number, height:number, fillColor:string, iconColor:string, textColor:string){
    var contentList = [];
    const cardBox = penpot.createRectangle();
    cardBox.x = penpot.viewport.center.x;
    cardBox.y = penpot.viewport.center.y;
    cardBox.resize(width,height); //(6800,2400)
    cardBox.fills = [{fillColor:fillColor}];
    cardBox.name = "Testimonial";
    contentList.push(cardBox);

    const paragraph = penpot.createText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
    if(paragraph){
      paragraph.x = penpot.viewport.center.x+width/8;
      paragraph.y = penpot.viewport.center.y+height/3.8;
      paragraph.fontFamily = 'Sour Gummy';
      paragraph.fontSize = String(width/45.33);
      paragraph.resize(width/1.97,height/3.2);
      paragraph.align = "center";
      paragraph.fills = [{fillColor:textColor}];
      paragraph.name = "Paragraph";
      contentList.push(paragraph);
    }

    const author = penpot.createText("-Lorem ipsum dolor");
    if(author){
      author.x = penpot.viewport.center.x+width/8;
      author.y = penpot.viewport.center.y+height/1.5;
      author.fontSize = String(width/45.33);
      author.fontFamily = 'Sour Gummy';
      author.resize(width/1.97,height/8.57);
      author.fontWeight='700';
      author.align = "center";
      author.fills = [{fillColor:textColor}];
      author.name = "Author";
      contentList.push(author);
    }

    const iconColorString = "'"+iconColor+"'";
    const profilePicString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg>';
    const profilePic = penpot.createShapeFromSvg(profilePicString);
    if(profilePic){
      profilePic.x = penpot.viewport.center.x+width/1.41;
      profilePic.y = penpot.viewport.center.y+height/3.75;
      profilePic.resize(width/5.66,height/2.086);
      profilePic.name = "Profile Pic";
      contentList.push(profilePic);    
    }

    const arrowRightString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>';
    const arrowRight = penpot.createShapeFromSvg(arrowRightString);
    if(arrowRight){
      arrowRight.x = penpot.viewport.center.x+width/1.070;
      arrowRight.y = penpot.viewport.center.y+height/2.58;
      arrowRight.resize(width/13.6,height/4.17);
      arrowRight.name = "Arrow Right";
      contentList.push(arrowRight);
    }

    const arrowLeftString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>';
    const arrowLeft = penpot.createShapeFromSvg(arrowLeftString);
    if(arrowLeft){ 
      arrowLeft.x = penpot.viewport.center.x+width/340;
      arrowLeft.y = penpot.viewport.center.y+height/2.58;
      arrowLeft.resize(width/13.6,height/4.17);
      arrowLeft.name = "Arrow Left";
      contentList.push(arrowLeft);
    }

    penpot.selection = contentList;
    const testimonialGroup = penpot.group(penpot.selection);
    if(testimonialGroup){
        testimonialGroup.name = "Testimonial";
    }

}