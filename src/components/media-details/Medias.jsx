/* Components */
import { Carousel } from "../carousel";
import Link from "next/link";

/* Logic */
import { useEffect, useState } from "react";
import { getMedias } from "@/services/TMDB_API";

export default function Medias({ type, classification }) {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getMedias(setMedias, type, classification);
  }, []);
  return (
    <Carousel medias={medias}>
      <Link href={`/${type}/${classification}`} className="btn-show-all">
        Show all
      </Link>
    </Carousel>
  );
}