export function xIcon (color = undefined) {
    const svg = document.createElement('svg')
    svg.setAttribute('viewBox', '0 0 24 24')
    if (color) {
        svg.setAttribute('fill', color)
    }
    const path = document.createElement('path')
    path.setAttribute('d',
    'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
    )
    
    svg.innerHTML(path)
    return svg
}

export function oIcon (color = undefined) {
    const svg = document.createElement('svg')
    svg.setAttribute('viewBox', '0 0 24 24')
    if (color) {
        svg.setAttribute('fill', color)
    }
    const path = document.createElement('path')
    path.setAttribute('d',
    'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
    )
    
    svg.innerHTML(path)
    return svg
}