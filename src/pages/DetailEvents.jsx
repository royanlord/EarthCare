import { useParams } from "react-router-dom";

export default function DetailEvents() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detail Events ke-{id}</h1>
    </div>
  );
}
