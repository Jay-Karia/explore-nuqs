import { Basic } from "./components/basic";
import {CustomParser} from "./components/custom-parser";
import {Parse} from "./components/parse";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <Basic />
      <Parse />
      <CustomParser />
    </div>
  );
}
