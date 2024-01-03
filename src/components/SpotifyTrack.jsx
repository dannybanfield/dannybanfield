export function SpotifyTrack(props) {
  const track = `https://open.spotify.com/embed/track/${props.track}?utm_source=generator`;
  return (
    <iframe src={track} title={props.title} width="100%" height="352"
      style="border-radius:12px"  frameBorder="0" allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>);
}
