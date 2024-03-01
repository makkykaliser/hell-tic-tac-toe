export default function importFonts() { // This is the same thing as just declaring them in the raw html, but programmatically
    const googleFonts = document.createElement('link')
    googleFonts.setAttribute('rel', 'preconnect')
    googleFonts.setAttribute('href', 'https://fonts.googleapis.com')

    const gStatic = document.createElement('link')
    gStatic.setAttribute('rel', 'preconnect')
    gStatic.setAttribute('href', 'https://fonts.gstatic.com')
    gStatic.setAttribute('crossorigin', '') // making the value blank sets this to true for some reason

    const roboto = document.createElement('link')
    roboto.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
    roboto.setAttribute('rel', 'stylesheet')

    const ibmPlexSans = document.createElement('link')
    ibmPlexSans.setAttribute('href', 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap')
    ibmPlexSans.setAttribute('rel', 'stylesheet')

    document.head.append(googleFonts)
    document.head.append(gStatic)
    document.head.append(roboto)
    document.head.append(ibmPlexSans)
}