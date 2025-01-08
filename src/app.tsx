import useAsset from "ultra/hooks/use-asset.js";
import PresetPreviewListV2 from "./components/PresetPreviewListV2.tsx";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>FitnessTimeTracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />

        <link rel="manifest" href={useAsset("/manifest.json")} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href={useAsset("/style.css")} />
        <link rel="stylesheet" href={useAsset("/preset-preview.css")} />
        <link rel="stylesheet" href={useAsset("/preset-preview-v2.css")} />
      </head>
      <body>
        <main className="MainScreen">
          <PresetPreviewListV2 />
          {/*<div>Упражнения</div>*/}
          {/*<div>Отдых</div>*/}
          {/*<div>Отдых</div>*/}
          {/*<p>5 подходов по 4 упражнения</p>*/}
          {/*<p>упражнение занимает 1 минуту</p>*/}
          {/*<p>между упражнениями - 30 секунд отдыха</p>*/}
          {/*<p>между подходами - 3 минуты отдыха</p>*/}
        </main>
      </body>
    </html>
  );
}
