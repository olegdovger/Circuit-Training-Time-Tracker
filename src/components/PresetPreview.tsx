import type { FC } from "react";

import { Preset } from "../../types/entities.ts";

interface PresetPreviewProps {
  preset: Preset;
}

const PresetPreview: FC<PresetPreviewProps> = ({ preset }) => {
  return (
    <div className="PresetPreview">
      <span className="SetCell CellSetCount">{preset.setCount}</span>
      <span className="Separator"></span>
      <span className="SetCell CellExerciseCount">{preset.exerciseCount}</span>
      <span className="Separator"></span>
      <span className="SetCell CellExerciseTimeSeconds">
        {preset.exerciseTimeSeconds}
      </span>
      <span className="Separator"></span>
      <span className="SetCell CellExerciseRelaxSeconds">
        {preset.exerciseRelaxSeconds}
      </span>
      <span className="Separator"></span>
      <span className="SetCell CellSetRelaxSeconds">
        {preset.setRelaxSeconds}
      </span>
    </div>
  );
};

export default PresetPreview;
