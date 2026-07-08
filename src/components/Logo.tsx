export default function Logo({ size }: { size?: string }) {
  return (
    <div className={`whitespace-nowrap ${size} font-bold select-none`}>
      <span className="color-accent">{'<'}</span>
      <span className="primary-dark">Short</span>
      <span className="color-accent">Works</span>
      <span className="primary-dark">{'/>'}</span>
    </div>
  )
}
