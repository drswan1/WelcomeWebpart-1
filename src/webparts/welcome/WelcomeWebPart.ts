import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import styles from './WelcomeWebPart.module.scss';

export interface IWelcomeWebPartProps {
}

export default class WelcomeWebPart extends BaseClientSideWebPart<IWelcomeWebPartProps> {
  public descriptionArray: string[] = ["Hier ist dein digitaler Schreibtisch. Du kannst dir einen Überblick verschaffen und dein akademisches Leben organisieren. Du findest hier Info von allen Microsoft-Plattformen an einem Ort.", "Hier findest du alle wichtigen Informationen, die du für dein Studium brauchst. Du kannst dich über aktuelle Veranstaltungen informieren und dich mit anderen Studierenden austauschen.", "Hier kannst du dich mit anderen Studierenden vernetzen und dich über aktuelle Themen austauschen. Du kannst dich mit anderen Studierenden vernetzen und dich über aktuelle Themen austauschen.", "Bei dieser Seite handelt sich um eine Sammlung allgemeiner Informationen, die dir dabei helfen sollen, Antworten auf Fragen im Zusammenhang mit der PLUS und deinem Studium zu finden.", "Hier wird's sozial - du findest Informationen zu STV-Veranstaltungen, Zusammenkünften und verschiedenen Studierenden-Communities. Verpasse kein Event an der PLUS!"];
  public IDtoContentKey: { [key: string]: number } = { tab1: 0, tab2: 1, tab3: 2 };
  public logosArray: string[] = ["Orientiert.png", "Informiert.svg", "Verbunden.svg"];

  public render(): void {


    this.domElement.innerHTML = `<body>
    <!-- partial:index.partial.html -->
    <div class="${styles.popup}">
      <div class="${styles.tabs}">
            <input type="radio" id="${styles.tab1}" name="tab" checked="true">        
          <label for="${styles.tab1}">
            <img class="${styles.icons}" src="${require('./assets/Orientiert.png')}" />
            <div>Orientiert</div>
          </label>
            <input type="radio" id="${styles.tab2}" name="tab">
          <label for="${styles.tab2}">
          <img class="${styles.icons}" src="${require('./assets/Informiert.svg')}" />
          <div>Informiert</div>
          </label>
            <input type="radio" id="${styles.tab3}" name="tab">
          <label for="${styles.tab3}">
          <img class="${styles.icons}" src="${require('./assets/Verbunden.svg')}" />
          <div>Verbunden</div>
          </label>
          <div class="${styles.marker}">
             <div id="${styles.top}"></div>
             <div id="${styles.bottom}"></div>
          </div>
      </div>
      <div class="${styles.flexContainer}">
        <div class="${styles.logos}"></div>
        <div class="${styles.description}">Hier ist dein digitaler Schreibtisch. Du kannst dir einen Überblick verschaffen und dein akademisches Leben organisieren. Du findest hier Info von allen Microsoft-Plattformen an einem Ort.</div>
        <button class="${styles.btn}">Hier geht's lang!</button>
      </div>
    </div>
    </div>
    <!-- partial -->
      
    </body>`;




    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const descriptionElement = document.querySelector(`.${styles.description}`) as HTMLElement | null;
    const logos = document.querySelector(`.${styles.logos}`) as HTMLElement | null;
    console.log("We are here");
    console.log(radioButtons.length);
    radioButtons.forEach((radioButton) => {
      console.log("inside the loop");
      radioButton.addEventListener('change', () => {
        console.log("listener triggered");
        if (descriptionElement && logos) {
          console.log("if-loop triggered");
          let arrayKey = this.IDtoContentKey[radioButton.id];
          descriptionElement.innerText = this.descriptionArray[arrayKey];
          logos.style.backgroundImage = `url(${require('./assets/' + this.logosArray[arrayKey])})`;
          console.log("We are here");
        }
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
