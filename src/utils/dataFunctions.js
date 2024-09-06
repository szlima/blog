
const getUnavailabilityClass= data => {

    return data.some(d => (
        !d || (Object.keys(d).length === 0)
    )) ?
        'unavailable' : '';
};


export {getUnavailabilityClass};