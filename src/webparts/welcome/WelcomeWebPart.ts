import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import styles from './WelcomeWebPart.module.scss';

export interface IWelcomeWebPartProps {
}

export default class WelcomeWebPart extends BaseClientSideWebPart<IWelcomeWebPartProps> {
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
        <div class="${styles.slogan}">Das digitale Morgenrot für deinen Studienalltag</div>
        <div class="${styles.description}">Hier ist dein digitaler Schreibtisch. Du kannst dir einen Überblick verschaffen und dein akademisches Leben organisieren. Du findest hier Info von allen Microsoft-Plattformen an einem Ort.</div>
        <button class="${styles.btn}">Hier geht's lang!</button>
      </div>
    </div>
    </div>
    <!-- partial -->
      
    </body>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
