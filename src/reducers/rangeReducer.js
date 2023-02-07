const rangeReducer = (state = "", action) => {

    switch (action.type) {
        case 'DELUXE_RANGE':
            return state = 'DeLuxe'

        case 'WORKMASTER_RANGE':
            return state = 'WorkMaster'

        default:
            return state
    }
}

export default rangeReducer;