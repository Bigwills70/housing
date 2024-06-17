function ReactList() {
  const Links = [
    { id: 1, url: "Home" },
    { id: 2, url: "About" },
    { id: 3, url: "Contact" },
    { id: 4, url: "Services" },
  ];
  return (
    <div>
      {Links.map((p) => {
        return (
          <>
            <p>{p.url}</p>
          </>
        );
      })}
    </div>
  );
}

export default ReactList;
