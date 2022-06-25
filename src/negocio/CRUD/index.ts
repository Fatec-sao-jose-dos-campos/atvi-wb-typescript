abstract class Cadastrar {
  public abstract cadastrar(): void
}

abstract class Listar {
  public abstract listar(): void
}

abstract class Alterar {
  public abstract alterar(): void;
}

abstract class Excluir {
  public abstract excluir(): void;
}

export { Cadastrar, Listar, Alterar, Excluir }
