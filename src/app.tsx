import useAsset from "ultra/hooks/use-asset.js";
import Icon from "./components/Icon.tsx";
import { useState } from "react";
import cn from "./utils/class-names.ts";

import type { MouseEventHandler } from "react";
import type { Preset } from "../types/entities.ts";

type FieldName = keyof Preset;

const fields: FieldName[] = [
  "approaches",
  "exercises",
  "exerciseDuration",
  "exercisePauseDuration",
  "approachPauseDuration",
];

const nextFieldName = (position = 0): FieldName => {
  return fields[(position + 1) % fields.length];
};

const prevFieldName = (position = 0): FieldName => {
  position = position === 0 ? fields.length - 1 : position - 1;

  return fields[position % fields.length];
};

export default function App() {
  const [currentField, setCurrentField] = useState<FieldName | undefined>(undefined);
  const [state, setState] = useState<Preset>({
    approaches: 5,
    exercises: 4,
    exerciseDuration: 60,
    exercisePauseDuration: 30,
    approachPauseDuration: 180,
  });
  const [editMode, setEditMode] = useState<boolean>(false);

  const onNextFieldChange: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (currentField) {
      setCurrentField(nextFieldName(fields.indexOf(currentField)));
    }
  };

  const onPrevFieldChange: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (currentField) {
      setCurrentField(prevFieldName(fields.indexOf(currentField)));
    }
  };

  const onDecreaseValue: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    setState((prev) => {
      if (!currentField) return prev;

      const draft = structuredClone(prev);

      if (draft[currentField] > 0) {
        draft[currentField] -= 1;
      }

      return draft;
    });
  };

  const onIncreaseValue: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    setState((prev) => {
      if (!currentField) return prev;

      const draft = structuredClone(prev);

      draft[currentField] += 1;

      return draft;
    });
  };

  const onDoubleDecreaseValue: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    setState((prev) => {
      if (!currentField) return prev;

      const draft = structuredClone(prev);

      if (draft[currentField] > 9) {
        draft[currentField] -= 10;
      }

      return draft;
    });
  };

  const onDoubleIncreaseValue: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    setState((prev) => {
      if (!currentField) return prev;

      const draft = structuredClone(prev);

      draft[currentField] += 10;

      return draft;
    });
  };

  const onEdit = () => {
    setEditMode(true);
    setCurrentField("approaches");
  };

  const onBack = () => {
    setEditMode(false);
    setCurrentField(undefined);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>FitnessTimeTracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />

        <link rel="manifest" href={useAsset("/manifest.json")} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          cross-origin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href={useAsset("/style.css")} />
        <link rel="stylesheet" href={useAsset("/preset-preview.css")} />
        <link rel="stylesheet" href={useAsset("/preset-preview-v2.css")} />
        <link rel="stylesheet" href={useAsset("/main-screen-style.css")} />
      </head>
      <body>
        <main className="MainScreen">
          <div className="Items">
            <div className="Label">Подходы</div>
            <div
              className={cn("Value", { "Edit": currentField === "approaches" })}
            >
              {state.approaches}
            </div>

            <div className="Label">Упражнения</div>
            <div
              className={cn("Value", { "Edit": currentField === "exercises" })}
            >
              {state.exercises}
            </div>

            <div className="Label">Длительность упражнения, секунд</div>
            <div
              className={cn("Value", {
                "Edit": currentField === "exerciseDuration",
              })}
            >
              {state.exerciseDuration}
            </div>

            <div className="Label">Длительность отдыха, секунд</div>
            <div
              className={cn("Value", {
                "Edit": currentField === "exercisePauseDuration",
              })}
            >
              {state.exercisePauseDuration}
            </div>

            <div className="Label">Отдых между подходами, секунд</div>
            <div
              className={cn("Value", {
                "Edit": currentField === "approachPauseDuration",
              })}
            >
              {state.approachPauseDuration}
            </div>
          </div>

          <div className={cn("Buttons", "Row", { "Hidden": editMode })}>
            <div className="Button" onClick={onEdit}>
              <Icon name="edit" size={"4rem"} />
              <span className="Label">Настроить</span>
            </div>
            <div className="Button">
              <Icon name="play" size={"4rem"} />
              <span className="Label">Старт</span>
            </div>
          </div>

          <div className={cn("Buttons", "Column", { "Hidden": !editMode })}>
            <div className="Row">
              <div className="Button" onClick={onDoubleIncreaseValue}>
                <span className="LabelNumber">+ 10</span>
                <Icon name="keyboard-arrow-double-up" size={"4rem"} />
              </div>
              <div className="Button" onClick={onIncreaseValue}>
                <span className="LabelNumber">+ 1</span>
                <Icon name="keyboard-arrow-up" size={"4rem"} />
              </div>
              <div className="Button" onClick={onPrevFieldChange}>
                <span className="Label">Вверх</span>
                <Icon name="keyboard-arrow-up" size={"4rem"} />
              </div>
            </div>

            <div className="Row">
              <div className="Button" onClick={onDoubleDecreaseValue}>
                <Icon name="keyboard-arrow-double-down" size={"4rem"} />
                <span className="LabelNumber">- 10</span>
              </div>
              <div className="Button" onClick={onDecreaseValue}>
                <Icon name="keyboard-arrow-down" size={"4rem"} />
                <span className="LabelNumber">- 1</span>
              </div>
              <div className="Button" onClick={onNextFieldChange}>
                <Icon name="keyboard-arrow-down" size={"4rem"} />
                <span className="Label">Вниз</span>
              </div>
            </div>

            <div className="Row">
              <div className="Button" onClick={onBack}>
                <Icon name="back" size={"4rem"} />
                <span className="Label">Отменить</span>
              </div>
              <div className="Button" onClick={onBack}>
                <Icon name="save" size={"4rem"} />
                <span className="Label">Сохранить</span>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
