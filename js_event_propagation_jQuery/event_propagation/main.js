document.querySelectorAll('*').forEach(node => {
    // use this option {capture:true} as the third argument of addEventListener to make it become capture phase
    node.addEventListener('click', event => {
        // event.eventPhase
        // const currentTarget = event.currentTarget;
        // const eventPhase = event.eventPhase;
        const { currentTarget, eventPhase } = event;
        let eventPhaseText = '';
        if (eventPhase === 0) {
            eventPhaseText = 'none';
        } else if (eventPhase === 1) {
            eventPhaseText = 'Capture';
        } else if (eventPhase === 2) {
            eventPhaseText = 'At Target';
        } else {
            eventPhaseText = 'Bubble';
        }
        if (currentTarget.matches('.teams')) {
            event.stopPropagation();
        }
        console.log(`Phase: ${eventPhaseText} - Node: ${currentTarget.tagName} Class: ${currentTarget.className}`);
    })
})