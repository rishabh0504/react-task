const openModal = () => {
    return {
        type: "OPEN_MODAL",
        payload: true
    }
}



const closeModal = () => {
    return {
        type: "CLOSE_MODAL",
        payload: false
    }
}

export default {
    openModal,
    closeModal
}