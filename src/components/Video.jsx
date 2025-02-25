export default function Video({ ref, src, autoPlay, controls }) {
    return <video className="flex-shrink" ref={ref} src={src} width={1080} autoPlay={autoPlay} controls={controls}></video>
}