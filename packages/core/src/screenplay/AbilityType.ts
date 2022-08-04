import { Ability } from './Ability';
import { UsesAbilities } from './actor';

/**
 * An interface describing the static access method that every {@link Ability} class
 * needs to provide in order to be accessible from within the {@link Interaction|interactions}.
 *
 * ## Learn more
 * - {@link Ability}
 * - {@link Actor}
 * - {@link Interaction}
 *
 * @group Abilities
 */
export interface AbilityType<A extends Ability> extends Function {

    /**
     * Retrieves the ability of a given type from the {@link Actor},
     * provided that the {@link Actor} has it.
     *
     * #### Retrieving an ability from an interaction
     *
     * ```ts
     * import { Ability, actorCalled, Interaction } from '@serenity-js/core';
     *
     * class MakePhoneCalls implements Ability {
     *   static as(actor: UsesAbilities): MakesPhoneCalls {
     *     return actor.abilityTo(MakePhoneCalls);
     *   }
     *
     *   static using(phone: Phone) {
     *     return new MakePhoneCalls(phone);
     *   }
     *
     *   protected constructor(private readonly phone: Phone) {
     *   }
     *
     *   // some method that allows us to interact with the external interface of the system under test
     *   dial(phoneNumber: string): Promise<void> {
     *     // ...
     *   }
     * }
     *
     * const Call = (phoneNumber: string) =>
     *   Interaction.where(`#actor calls ${ phoneNumber }`, async actor => {
     *     await MakePhoneCalls.as(actor).dial(phoneNumber)
     *   });
     *
     * await actorCalled('Connie')
     *   .whoCan(MakePhoneCalls.using(phone))
     *   .attemptsTo(
     *     Call(phoneNumber),
     *   )
     * ```
     *
     * @param {UsesAbilities} actor
     */
    as(actor: UsesAbilities): A;
}
