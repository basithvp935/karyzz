const brands = ['Northwind', 'Lumen Co.', 'Altura', 'Brightpath', 'Orbit Labs', 'Foundry'];

export default function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <div>
        {brands.map((b, i) => <span key={i}>{b}</span>)}
        {brands.map((b, i) => <span key={`r-${i}`}>{b}</span>)}
      </div>
    </div>
  );
}
