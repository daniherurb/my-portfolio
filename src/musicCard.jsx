import { FaSpotify } from "react-icons/fa";

export default function MusicCard({ song }) {
    return (
        <a href={song.external_url} target="_blank" rel="noreferrer" className="flex flex-col gap-2 group">
            <div className="w-full aspect-square overflow-hidden rounded-md">
                <img
                    src={song.image}
                    alt={song.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <p className="font-helios font-bold text-sm text-[var(--blue)] truncate">{song.name}</p>
            <div className="flex flex-row items-center justify-between">
                <p className="font-helios font-light text-xs text-[var(--blue)]">{song.artists.join(', ')}</p>
                <FaSpotify className="text-green-500 text-lg flex-shrink-0" />
            </div>
        </a>
    );
}
