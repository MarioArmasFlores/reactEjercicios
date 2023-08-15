export default function ({ restaurantes }) {
  return (
    <>
      <h1>Restaurant List componente</h1>
      <ul>
        {restaurantes.map((res) => {
          return (
            <li key={res.id}>
              <h1>{res.name}</h1>
              <span>{res.foodType}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
