function TodoCounter({total,completed}) {
    return(
    <h1 style={{
        fontSize :24,
        textAlign: "center",
       margin:0,
        padding:48 
    }}>
      Has completado {completed} de {total} TODOS
    </h1>
    );
  }

  export {TodoCounter};