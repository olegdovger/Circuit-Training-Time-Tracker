import type { FC } from "react";
import Icon from "./Icon.tsx";

const PresetPreviewV2: FC = () => {
  return (
    <div className="PresetPreviewV2" tabIndex={0} onKeyPress={() => alert(1)}>
      <span className="SetCellV2" />
      <span className="SetCellV2" />
      <span className="SetCellV2">
        <Icon name="add" />
      </span>
      <span className="SetCellV2" />
      <span className="SetCellV2" />
    </div>
  );
};

export default PresetPreviewV2;
