import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { touchSwipeHandler } from './TouchSwipeHandler';

import styles from './WelcomeWebpartWebPart.module.scss';

export interface IWelcomeWebpartWebPartProps {
}

export default class WelcomeWebpartWebPart extends BaseClientSideWebPart<IWelcomeWebpartWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.welcomeWebpart }">
   <div class="${styles.wrapper}">
    <div id="${styles.container}">
        <input type="radio" name="slide" id="c1" checked>
        <label for="c1" class="${styles.card}">
        <div class="${styles.cardTitle}">Orientiert</div>
            <div class="${styles.rowDescription}">
                <div class="${styles.description}">
                    <div class="${styles.title}">Orientiert</div>
                    <div class="${styles.content}">Emails, Kalender, To-Dos: Dein digitales Leben an der Uni an einem Ort.</div>
                    <a class="${styles.btn}" href="${"https://plusacat.sharepoint.com/sites/StudentPlace/Orientiert"}">Hier geht's lang!</a>
                </div>
            </div>
            <div class="${styles.rowIcon}">
                <img class="${styles.icon}" src="${require('./assets/Orientiert.svg')}">
            </div>
        </label>
        <input type="radio" name="slide" id="c2" >
        <label for="c2" class="${styles.card}">
        <div class="${styles.cardTitle}">Informiert</div>
              <div class="${styles.rowDescription}">
                <div class="${styles.description}">
                    <div class="${styles.title}">Informiert</div>
                    <div class="${styles.content}">Aktuelle Veranstaltungen an der Universität Salzburg, Unterstützungsangebote, Orte zum Lernen und Zusammenarbeiten – all das findest du hier.</div>
                    <a class="${styles.btn}" href="${"https://plusacat.sharepoint.com/sites/StudentPlace/Informiert"}">Hier geht's lang!</a>
                </div>
              </div>
            <div class="${styles.rowIcon}">
                <img class="${styles.icon}" src="${require('./assets/Informiert.svg')}">
            </div>
        </label>
        <input type="radio" name="slide" id="c3" >
        <label for="c3" class="${styles.card}">
        <div class="${styles.cardTitle}">Verbunden</div>
                    <div class="${styles.rowDescription}">
                <div class="${styles.description}">
                    <div class="${styles.title}">Verbunden</div>
                    <div class="${styles.content}">Aktuelle Events deiner StVen, Angebote der ÖH und Vernetzungsmöglichkeiten in Salzburg – hier findest du alles, was neben der Uni zum Studienleben gehört!</div>
                    <a class="${styles.btn}" href="${"https://plusacat.sharepoint.com/sites/StudentPlace/Verbunden"}">Hier geht's lang!</a>
                </div>
            </div>
            <div class="${styles.rowIcon}">
                <img class="${styles.icon}" src="${require('./assets/Verbunden.svg')}">
            </div>
        </label>
    </div>
</div>
</div>`;
touchSwipeHandler();
}






  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
