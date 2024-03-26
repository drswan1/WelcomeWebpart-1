import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import styles from './WelcomeWebPart.module.scss';

export interface IWelcomeWebPartProps {
}

export default class WelcomeWebPart extends BaseClientSideWebPart<IWelcomeWebPartProps> {
  public descriptionArray: string[] = ["Hier ist dein digitaler Schreibtisch. Du kannst dir einen Überblick verschaffen und dein akademisches Leben organisieren. Du findest hier Info von allen Microsoft-Plattformen an einem Ort.", "Hier findest du alle wichtigen Informationen, die du für dein Studium brauchst. Du kannst dich über aktuelle Veranstaltungen informieren und dich mit anderen Studierenden austauschen.", "Aktuelle Events für Studierende, Info von der ÖH und studentische Plätze in Salzburg - hier kannst du dich mit Kolleg:innen, der PLUS und mit Salzburg vernetzen.", "Bei dieser Seite handelt sich um eine Sammlung allgemeiner Informationen, die dir dabei helfen sollen, Antworten auf Fragen im Zusammenhang mit der PLUS und deinem Studium zu finden.", "Hier wird's sozial - du findest Informationen zu STV-Veranstaltungen, Zusammenkünften und verschiedenen Studierenden-Communities. Verpasse kein Event an der PLUS!"];
  public IDtoContentKey: { [key: string]: number } = { tab1: 0, tab2: 1, tab3: 2 };
  public logosArray: string[] = ["Orientiert.png", "Informiert.svg", "Verbunden.svg"];
  public btnArray: string[] = ["#b7342e", "#115740", "#de7e44"];
  public elements= [
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three')
  ];
  public linkArray : string[] = ["https://twhrg.sharepoint.com/Orientiert/SitePages/Home.aspx","https://twhrg.sharepoint.com/Informiert/SitePages/Home.aspx","https://twhrg.sharepoint.com/Verbunden/SitePages/Home.aspx"];

  public render(): void {
    this.domElement.innerHTML = `<body>
    <div class="${styles.popup}">
      <div class="${styles.tabs}">
            <input type="radio" id="${styles.tab1}" name="tab" checked="true">        
          <label for="${styles.tab1}">
            <img class="${styles.icons}" src="${require('./assets/Orientiert.png')}" />
            <div id="${styles.one}" >Orientiert</div>
          </label>
            <input type="radio" id="${styles.tab2}" name="tab">
          <label for="${styles.tab2}">
          <img class="${styles.icons}" src="${require('./assets/Informiert.svg')}" />
          <div id="${styles.two}">Informiert</div>
          </label>
            <input type="radio" id="${styles.tab3}" name="tab">
          <label for="${styles.tab3}">
          <img class="${styles.icons}" src="${require('./assets/Verbunden.svg')}" />
          <div id="${styles.three}">Verbunden</div>
          </label>
          <div class="${styles.marker}">
             <div id="${styles.top}"></div>
              <div id="${styles.middle}"></div>
             <div id="${styles.bottom}"></div>
          </div>
      </div>
      <div class="${styles.flexContainer}">
        <div class="${styles.logos}"></div>
        <div class="${styles.description}">Hier ist dein digitaler Schreibtisch. Du kannst dir einen Überblick verschaffen und dein akademisches Leben organisieren. Du findest hier Info von allen Microsoft-Plattformen an einem Ort.</div>
        <a class="${styles.btn}" href="${this.linkArray[0]}">Hier geht's lang!</a>
        </div>
    </div>
    </div>
    <!-- partial -->
      
    </body>`;


// Selecting necessary elements
const radioButtons = this.domElement.querySelectorAll('input[type="radio"]');
const descriptionElement = this.domElement.querySelector(`.${styles.description}`);
const logos = this.domElement.querySelector(`.${styles.logos}`);
const btn = this.domElement.querySelector(`.${styles.btn}`);

const correspondingIcon = document.querySelector(`label[for="${styles.tab1}"] img`);
const correspondingLabel = document.querySelector(`label[for="${styles.tab1}"] div`);
const viewpointWidth: number = window.innerWidth;
if(viewpointWidth > 950){
  (correspondingIcon as HTMLElement).style.visibility = 'hidden';
  (correspondingLabel as HTMLElement).style.fontWeight = '900';
}
(correspondingLabel as HTMLElement).style.paddingBottom = '20%';

const anchor = document.createElement('a');
anchor.href = this.linkArray[0];
anchor.textContent = "Hier geht's lang!";
anchor.style.cssText = `
  border-radius: 3px;
  display: block;
  position: absolute;
  top: 110%;
  padding: 8px 14px;
  cursor: pointer;
  border: 2px solid white;
  color: white;
  font-weight: bolder;
  box-shadow: 4px 4px 0 0 #f3f3f4;
  transition: 200ms;
  text-decoration: none;
  background-color: ${this.btnArray[0]};
  visibility: none;
`;

// Replace the button with the anchor element
if (btn && btn.parentNode) {
  btn.parentNode.replaceChild(anchor, btn);
}
anchor.addEventListener('mouseenter', () => {
  anchor.style.boxShadow = '3px 3px white, 6px 6px 0 0 #d4d4d4';
  anchor.style.transform = 'translate(-2px, -2px)';
});

anchor.addEventListener('mouseleave', () => {
  anchor.style.boxShadow = '4px 4px 0 0 #f3f3f4';
  anchor.style.transform = 'translate(0px, 0px)';
});

// Adding change event listeners to radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', () => {
    // Content change
    const radioButtonName = radioButton.id.split('_')[0];
    const arrayKey = this.IDtoContentKey[radioButtonName];
    (descriptionElement as HTMLElement).innerText = this.descriptionArray[arrayKey];
    (logos as HTMLElement).style.backgroundImage = `url(${require('./assets/' + this.logosArray[arrayKey])})`;
    
    // Update anchor href and background color
    anchor.style.visibility = 'none';
    anchor.href = this.linkArray[arrayKey];
    anchor.style.backgroundColor = this.btnArray[arrayKey];

        // Reset visibility of all icons
        const icons = document.querySelectorAll('img');
        icons.forEach(icon => {
          (icon as HTMLElement).style.visibility = 'visible';
        });

        // Reset font weight for all labels
        const labels = document.querySelectorAll('label div');
        labels.forEach(label => {
            (label as HTMLElement).style.fontWeight = '500';
            // (label as HTMLElement).style.lineHeight = '0%';
        });

        // Hide the image associated with the selected radio button
        if(viewpointWidth > 950){	
          const correspondingIcon = document.querySelector(`label[for="${radioButton.id}"] img`);
          (correspondingIcon as HTMLElement).style.visibility = 'hidden';

          // Set font weight for the corresponding label element
          const correspondingLabel = document.querySelector(`label[for="${radioButton.id}"] div`);
          (correspondingLabel as HTMLElement).style.fontWeight = '900';
        }
        else{
          const correspondingIcon = document.querySelector(`label[for="${radioButton.id}"] img`);
          (correspondingIcon as HTMLElement).style.visibility = 'visible';
        }

        const description = document.querySelector(`.${styles.description}`);
      

        // Set initial opacity to 0
        (logos as HTMLElement).style.opacity = '0';
        (description as HTMLElement).style.opacity = '0';
        (btn as HTMLElement).style.opacity = '0';

        // Define animation duration in milliseconds
        const animationDuration = 1000;

        // Function to animate text reveal
        function animateTextReveal(element: HTMLElement):void {
          let opacity = 0;
          

          const startTime = performance.now();

          // Animation loop
          function animate(currentTime: number):void {
            const elapsedTime = currentTime - startTime;
            opacity = (elapsedTime / animationDuration) * 1; // Adjust the final opacity value as needed (1 for full opacity)
            element.style.opacity = `${Math.min(opacity, 1)}`;

            if (opacity < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }

        // Call the animateTextReveal function for each element after a delay
        setTimeout(() => {
          animateTextReveal(logos as HTMLElement);
        }, 100); // Adjust the delay as needed

        setTimeout(() => {
          animateTextReveal(description as HTMLElement);
        }, 200); // Adjust the delay as needed

        setTimeout(() => {
          animateTextReveal(anchor as HTMLElement);
        }, 250); // Adjust the delay as needed

    });
  });
}


  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
