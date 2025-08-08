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