import 'mocha';

import { expect } from '@integration/testing-tools';
import { Actor, actorCalled } from '@serenity-js/core';

import { Browser, chromium, Page } from 'playwright';
import { BrowseTheWebWithPlaywright } from '../../../src';

import { PlaywrightPageElement } from '../../../src/screenplay/models/PlaywrightPageElement';


describe('PlaywrightPageElement', () => {
    let browser: Browser;
    let page: Page;
    let actor: Actor;
    let ability: BrowseTheWebWithPlaywright;

    before(async () => {
        actor = actorCalled('Jimmy').whoCan(BrowseTheWebWithPlaywright.using(chromium));
        ability = actor.abilityTo(BrowseTheWebWithPlaywright);
        browser = await (ability as any).browser();
    })

    beforeEach(async () => {
        page = await (ability as any).page();
    });

    afterEach(async () => {
        await (ability as any).closePage();
    });

    after(async () => {
        await browser.close();
    });

    it('can enter and clear value', async () => {
        const expectedValue = 'entered value';
        await page.setContent("<input id='test-input'></input>");
        const element = await PlaywrightPageElement.locatedById('test-input').answeredBy(actor);
        await element.enterValue(expectedValue);
        let text = await (await page.$('id=test-input')).inputValue();
        expect(text).to.be.equal(expectedValue);

        await element.clearValue();
        text = await (await page.$('id=test-input')).inputValue();
        expect(text).to.be.equal('');
    });

    it('can click', async () => {
        await page.setContent(`
            <html>
                <button
                        id='to-hide'
                        onclick="
                                document.getElementById('to-hide').style.display = 'none';"
                >
                    Click me!
                </button>
            </html>`
        );
        let foundElement = await page.$('id=to-hide');
        expect(await foundElement.isVisible()).to.be.true;

        const element = await PlaywrightPageElement.locatedById('to-hide').answeredBy(actor);
        await element.click();
        foundElement = await page.$('id=to-hide');
        expect(await foundElement.isVisible()).to.be.false;
    });

    it('can double click', async () => {
        await page.setContent(`
            <html>
                <button
                        id='to-hide'
                        ondblclick="
                                document.getElementById('to-hide').style.display = 'none';"
                >
                    Click me!
                </button>
            </html>`
        );
        let foundElement = await page.$('id=to-hide');
        expect(await foundElement.isVisible()).to.be.true;

        const element = await PlaywrightPageElement.locatedById('to-hide').answeredBy(actor);
        await element.doubleClick();

        foundElement = await page.$('id=to-hide');
        expect(await foundElement.isVisible()).to.be.false;
    });

    it('can hover over', async () => {
        await page.setContent(`
            <html>
                <button id="to-hide">Hide me!</button>
                <br/>
                <button
                        id="to-hover"
                        onmouseover="
                                document.getElementById('to-hide').style.display = 'none';"
                >
                    Click me!
                </button>
            </html>`
        );
        let foundElement = await page.$('id=to-hide');
        expect(await foundElement.isVisible()).to.be.true;

        const element = await PlaywrightPageElement.locatedById('to-hover').answeredBy(actor);
        await element.hoverOver();

        foundElement = await page.$('id=to-hide');
        expect(await foundElement.isVisible()).to.be.false;
    });

    it('can return attribute', async () => {
        const expectedName = "Heisenberg";
        await page.setContent(`
            <html>
                <div id="who" data-name="${expectedName}">Say my name!</div>
            </html>`
        );

        const element = await PlaywrightPageElement.locatedById('who').answeredBy(actor);
        const actualName = await element.attribute("data-name");

        expect(actualName).to.be.equal(expectedName);
    });

    it('can return value', async () => {
        const expectedValue = 'entered value';
        await page.setContent("<input id='test-input'></input>");
        const element = await PlaywrightPageElement.locatedById('test-input').answeredBy(actor);
        await element.enterValue(expectedValue);
        let text = await element.value();
        expect(text).to.be.equal(expectedValue);
    });

    it('can return isActive', async () => {
        const element = await PlaywrightPageElement.locatedById('test-input').answeredBy(actor);

        await page.setContent(`
            <input id='test-input'></input>
            <input id='another-input'></input>
        `);
        await (await page.$('id=test-input')).focus();
        expect(await element.isActive()).to.be.true;

        await (await page.$('id=another-input')).focus();
        expect(await element.isActive()).to.be.false;
    });

    it('can return isClickable', async () => {
        const element = await PlaywrightPageElement.locatedByTagName('button').answeredBy(actor);

        await page.setContent(`
                <button
                        onclick="
                                document.getElementById('to-hide').style.display = 'none';"
                >
                    Click me!
                </button>
        `);
        expect(await element.isClickable()).to.be.true;

        await page.setContent(`
            <button id='test-input' style="display: none">Click me!</button>
        `);
        expect(await element.isClickable()).to.be.false;
    });

    it('can return isDisplayed', async () => {
        const element = await PlaywrightPageElement.locatedByTagName('button').answeredBy(actor);

        await page.setContent(`
            <button id='test-input'>Click me!</button>
        `);
        expect(await element.isDisplayed()).to.be.true;

        await page.setContent(`
            <button id='test-input' style="display: none">Click me!</button>
        `);
        expect(await element.isDisplayed()).to.be.false;
    });

    it('can return isEnabled', async () => {
        const element = await PlaywrightPageElement.locatedByTagName('button').answeredBy(actor);

        await page.setContent(`
            <button id='test-input'>Click me!</button>
        `);
        expect(await element.isEnabled()).to.be.true;

        await page.setContent(`
            <button id='test-input' disabled>Click me!</button>
        `);
        expect(await element.isEnabled()).to.be.false;
    });

    it('can return isPresent');
    it('can return isSelected');
    it('can be a child of another element');
});
