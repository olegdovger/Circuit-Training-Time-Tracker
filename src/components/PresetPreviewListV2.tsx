import type { FC } from "react";

import { presets } from "../../__mocks__/some.ts";
import PresetPreviewV2 from "./PresetPreviewV2.tsx";
import NewPresetPreviewV2 from "./NewPresetPreviewV2.tsx";

const PresetPreviewListV2: FC = () => {
  return (
    <div className="PresetPreviewListV2">
      {presets.map((preset) => (
        <PresetPreviewV2 key={preset.id} preset={preset} />
      ))}
      <NewPresetPreviewV2 />
    </div>
  );
};

export default PresetPreviewListV2;
