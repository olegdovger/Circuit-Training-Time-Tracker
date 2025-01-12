import type { FC } from "react";

import { Preset } from "../../types/entities.ts";

interface PresetPreviewV2Props {
  preset: Preset;
}

const PresetPreview: FC<PresetPreviewV2Props> = ({ preset }) => {
  return (
    <div className="PresetPreviewV2Wrapper">
      <div className="PresetPreviewV2" tabIndex={preset.id}>
        <span className="SetCellV2 CellSetCountV2 LeftPadding">
          {preset.setCount}
        </span>
        <span className="SetCellV2 CellExerciseCountV2">
          {preset.exerciseCount}
        </span>
        <span className="SetCellV2 CellExerciseTimeSecondsV2">
          {preset.exerciseTimeSeconds}
        </span>
        <span className="SetCellV2 CellExerciseRelaxSecondsV2">
          {preset.exerciseRelaxSeconds}
        </span>
        <span className="SetCellV2 CellSetRelaxSecondsV2 RightPadding">
          {preset.setRelaxSeconds}
        </span>
      </div>
      <hr className="HorizontalShadow" />
    </div>
  );
};

export default PresetPreview;
