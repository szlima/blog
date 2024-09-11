
const getUnavailabilityClass= data => {

    return data.some(d => (
        !d || (Object.keys(d).length === 0)
    )) ?
        'unavailable' : '';
};

const parseInteger= number => number ? parseInt(number) : undefined;


export {getUnavailabilityClass, parseInteger};