
const getUnavailabilityClass= data => {

    return data.some(d => (
        !d || (Object.keys(d).length === 0)
    )) ?
        'unavailable' : '';
};

const parseNaturalNumber= number => (number > 0) ? parseInt(number) : undefined;


export {getUnavailabilityClass, parseNaturalNumber};