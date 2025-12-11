import './globals.css'

export const metadata = {
  title: 'Samyak | Portfolio',
  description: 'Machine learning engineer passionate about building real-world solutions with Generative AI, NLP, and intelligent automation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/logo.svg" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7990839454922290"
          crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
