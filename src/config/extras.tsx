/**
 * Enum representing the names of various extras offered.
 * The keys correspond to the types of extras, while the values are the string identifiers used throughout the application.
 */

enum NamedExtras {
  pets = 'pets',
  deepCleaning = 'deepCleaning',
  moveInMoveOut = 'moveInMoveOut',
  insideTheFridge = 'insideTheFridge',
  insideTheOven = 'insideTheOven',
  insideKitchenCabinets = 'insideKitchenCabinets',
  ironing = 'ironing',
  cleaningProducts = 'cleaningProducts',
  premiumBookingSlot = 'premiumBookingSlot',
}

/**
 * Object containing the IDs of extras for different environments (production and staging).
 * The keys are the names from the NamedExtras enum, and the values are the corresponding numeric IDs.
 */

const extrasIds = {
  production: {
    [NamedExtras.pets]: 16,
    [NamedExtras.deepCleaning]: 11,
    [NamedExtras.moveInMoveOut]: 13,
    [NamedExtras.insideTheFridge]: 1,
    [NamedExtras.insideTheOven]: 9,
    [NamedExtras.insideKitchenCabinets]: 14,
    [NamedExtras.ironing]: 12,
    [NamedExtras.cleaningProducts]: 17,
    [NamedExtras.premiumBookingSlot]: 15,
  },
  staging: {
    [NamedExtras.pets]: 16,
    [NamedExtras.deepCleaning]: 11,
    [NamedExtras.moveInMoveOut]: 13,
    [NamedExtras.insideTheFridge]: 1,
    [NamedExtras.insideTheOven]: 9,
    [NamedExtras.insideKitchenCabinets]: 14,
    [NamedExtras.ironing]: 12,
    [NamedExtras.cleaningProducts]: 17,
    [NamedExtras.premiumBookingSlot]: 15,
  },
};

const currentEnvironment = process.env.NODE_ENV === 'production' ? 'production' : 'staging';
const currentServiceIds = extrasIds[currentEnvironment];

/**
 * Retrieves the ID of an extra based on its name.
 * 
 * @param {keyof typeof NamedExtras} name - The name of the extra to retrieve the ID for.
 * @returns {number} - The ID associated with the specified extra name.
 * @throws {Error} - Throws an error if the name is not a valid key of NamedExtras.
 */
export function getExtraByName(name: keyof typeof NamedExtras): number {
  return extrasIds[currentEnvironment][name];
}

const serviceNamesById = Object.fromEntries(
  Object.entries(currentServiceIds).map(([key, value]) => [value, key])
);

export const ExtrasType = extrasIds[currentEnvironment];
export const ExtrasNamesById = serviceNamesById;
