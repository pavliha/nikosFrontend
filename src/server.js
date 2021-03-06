import React from 'react'
import renderServer from 'lib/renderServer'
import App from 'src/App'

const template = (html, assets) => `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <link rel="preconnect" href="${process.env.BACKEND_URL}">
        <link rel="preconnect" crossorigin="anonymous" href="https://www.google-analytics.com">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
        <meta content="width=device-width, minimum-scale=1, shrink-to-fit=no" name="viewport">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/nikos-favicon.svg" color="#9306BC">
        <meta name="msapplication-TileColor" content="#9306BC">
        <meta name="theme-color" content="#9306BC">
        <base href="/">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="/nikos-favicon.png" type="image/x-icon">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
        ${assets.title}
        ${assets.meta}
        ${assets.links}
        ${assets.styles}
      </head>
      <body>
         <div id="root">${html}</div>
         ${assets.scripts} 
        <!-- Google Analytics -->
        <script>
          window.ga = window.ga || function() {(ga.q = ga.q || []).push(arguments)}
          ga.l = +new Date
          ga('create', '${process.env.GOOGLE_ANALYTICS}', 'auto')
          ga('send', 'pageview')
        </script>
        <script async src="https://www.google-analytics.com/analytics.js"></script>        
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}"></script>
      </body>
      </html>
`

export default () => renderServer(<App />, template)
