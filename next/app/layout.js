export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
          margin: 0;
        }
        #wrapper {
          width: 960px;
          height: 720px;
          position: relative;
          background-color: white;
        }
        .tile {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #333;
        `}
        </style>    
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
