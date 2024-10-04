
const isEmpty= element => (!element || (Object.keys(element).length === 0));

const getUnavailabilityClass= data => {

    return data.some(d => isEmpty(d)) ?
        'unavailable' : '';
};

const parseNaturalNumber= number => (number > 0) ? parseInt(number) : undefined;

// ---------- ----------

export {isEmpty, getUnavailabilityClass, parseNaturalNumber};