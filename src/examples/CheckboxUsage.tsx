import Checkbox from "@/components/Checkbox";
import React, { useState } from "react";

 const CheckboxUsage: React.FC = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(true);
  const [disabled] = useState(true);

  return (
    <div className="border-2 border-dashed border-ui_red-600 p-4 rounded-lg flex flex-col gap-3 w-fit">
      <div className="flex gap-2 items-center">
        <Checkbox checked={first} onChange={setFirst} />
        <Checkbox checked={true} onChange={() => {}} />
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox checked={false} onChange={() => {}} label="Checkbox" />
        <Checkbox checked={second} onChange={setSecond} />
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox checked={false} disabled={disabled} onChange={() => {}} />
        <Checkbox checked={true} disabled={disabled} onChange={() => {}} />
      </div>
    </div>
  );
};
export default CheckboxUsage