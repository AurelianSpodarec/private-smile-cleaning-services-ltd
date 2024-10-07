const serviceIds = {
  production: {
    Residential: 11,
    Commercial: 2,
    EndOfTenancy: 3,
    Ironing: 4,
  },
  staging: {
    Residential: 11,
    Commercial: 2,
    EndOfTenancy: 3,
    Ironing: 4,
  },
};

const currentEnvironment = process.env.NODE_ENV === 'production' ? 'production' : 'staging';
const currentServiceIds = serviceIds[currentEnvironment];

const serviceNamesById = Object.fromEntries(
  Object.entries(currentServiceIds).map(([key, value]) => [value, key])
);

export const ServiceType = serviceIds[currentEnvironment];
export const ServiceNamesById = serviceNamesById;
