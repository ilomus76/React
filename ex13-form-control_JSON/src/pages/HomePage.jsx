import useHome from "../hooks/useHome";
import GetForm from "../components/GetForm";
import InputControls from "../components/InputControls";
import PostPanel from "../components/PostPanel";
import SingleFileForm from "../components/SingleFileForm";
import MultiFileForm from "../components/MultiFileForm";

export default function HomePage() {
  const home = useHome();

  return (
    <div>
      <GetForm {...home} />
      <InputControls {...home} />
      <PostPanel {...home} />
      <SingleFileForm {...home} />
      <MultiFileForm {...home} />
    </div>
  );
}