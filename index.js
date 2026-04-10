class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataques = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken"
    };

    const ataque = ataques[this.tipo] || "ataque desconhecido";

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Teste
const herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthur", 30, "guerreiro"),
  new Heroi("Lee", 25, "monge"),
  new Heroi("Hanzo", 28, "ninja")
];

herois.forEach(heroi => heroi.atacar());