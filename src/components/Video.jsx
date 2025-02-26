export default function Video({ ref, src, autoPlay, controls }) {
    return (<video className="flex-shrink" ref={ref} width={1080} height={720} autoPlay={autoPlay} controls={controls}>
        <source src={src}></source>
    </video>)
}