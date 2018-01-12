import { describeAs } from '@serenity-js/core/lib/recording';
import { ElementArrayFinder, ElementFinder } from 'protractor';
import { ElementHelper } from 'protractor/built/browser';
import { Locator } from 'protractor/built/locators';

export class Target {

    static the = (name: string) => ({
        located: (byLocator: Locator): Target => new Target(name, byLocator),
    })

    static within = (parent: Target) => ({
        the: (name: string) => ({
            located: (byLocator: Locator): Target => new Target(name, byLocator, parent),
        }),
    })

    of(...tokenReplacements: Array<string|number>): Target {
        return new Target(describeAs(this.name, ...tokenReplacements), new Interpolated(this.locator).with(tokenReplacements));
    }

    called(newName: string): Target {
        return new Target(newName, this.locator, this.parent);
    }

    resolveUsing(resolver: ElementHelper): ElementFinder {
        const finder: ElementFinder = this.getParentFinderChain(resolver);
        if (finder) {
            return finder.element(this.locator);
        } else {
            return resolver(this.locator);
        }
    }

    resolveAllUsing(resolver: ElementHelper): ElementArrayFinder {
        const finder: ElementFinder = this.getParentFinderChain(resolver);
        if (finder) {
            return finder.all(this.locator);
        } else {
            return resolver.all(this.locator);
        }
    }

    toString(): string {
        return `the ${ this.name }`;
    }

    constructor(private name: string, private locator: Locator, private parent?: Target) {
    }

    private getParentFinderChain(resolver: (locator: Locator) => ElementFinder): ElementFinder {
      let finderChain: ElementFinder;
      this.getParentChain().forEach(function(target: Target) {
        if (finderChain) {
            finderChain = finderChain.element(target.locator);
        } else {
            finderChain = resolver(target.locator);
        }
      });
      return finderChain;
    }

    private getParentChain(): Target[] {
        const parentChain: Target[] = [];
        let currentTarget: Target = this;
        while (currentTarget.parent) {
            currentTarget = currentTarget.parent;
            parentChain.push(currentTarget);
        }
        return parentChain.reverse();
    }

}

class Interpolated {

    constructor(private locator: Locator) {
    }

    public with(tokenReplacements: Array<string|number>) {

        const unescaped = template => template.replace(/\\{(\d+)\\}/, '{$1}');
        const asString  = (locator: Locator): string => unescaped(`${(locator as any).value}`);

        // note: ProtractorBy is not compatible with WebdriverBy https://github.com/angular/protractor/issues/3508
        if (! this.canBeInterpolated()) {
            throw new Error(this.locator.toString() +
                ' is not a webdriver-compatible locator so you won\'t be able to use token replacement with it');
        }

        const cloned: any  = Object.assign({}, this.locator);
        cloned.__proto__ = Object.getPrototypeOf(this.locator);
        cloned.value     = describeAs(asString(this.locator), ...tokenReplacements);

        return cloned;
    }

    private canBeInterpolated = (): boolean => !! (this.locator as any).value;
}
