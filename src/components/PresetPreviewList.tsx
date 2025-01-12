import type { FC } from "react";

import { presets } from "../../__mocks__/some.ts";
import PresetPreview from "./PresetPreview.tsx";
import NewPresetPreviewV2 from "./NewPresetPreview.tsx";

const PresetPreviewList: FC = () => {
  return (
    <div className="PresetPreviewListV2">
      {presets.map((preset) => (
        <PresetPreview key={preset.id} preset={preset} />
      ))}
      <NewPresetPreviewV2 />
    </div>
  );
};

export default PresetPreviewList;
