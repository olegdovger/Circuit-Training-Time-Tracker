import type { FC } from "react";
import IconAdd from "./IconAdd.tsx";

const PresetPreviewV2: FC = () => {
  return (
    <div className="PresetPreviewV2">
      <span className="SetCellV2" />
      <span className="SetCellV2" />
      <span className="SetCellV2">
        <IconAdd />
      </span>
      <span className="SetCellV2" />
      <span className="SetCellV2" />
    </div>
  );
};

export default PresetPreviewV2;
