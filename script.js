function startGame() {
    // Aquí debes implementar la lógica para iniciar el juego
    alert('Game started!');
}

class MascotaWeb {
    constructor(nombreMascota) {
      // Crear una nueva instancia de la mascota
      this.mascota = new Mascota();
      this.mascota.setNombre(nombreMascota);
  
    }
  
    obtenerValoresIniciales() {
      // Lógica para obtener valores iniciales de la base de datos (simulado en el ejemplo)
      // Puedes ajustar esto según la implementación real con base de datos
      this.mascota.setEstadoEnergia(new Estado(100));
      this.mascota.setEstadoHambre(new Estado(50));
      this.mascota.setEstadoDiversion(new Estado(75));
      this.mascota.setEstadoHigiene(new Estado(90));
      this.mascota.setEstadoSalud(new Estado(80));
    }
  
    // Métodos de la mascota...
    aumentarHambre(cantidad) {
      this.mascota.aumentarHambre(cantidad);
    }
  
    decrementarHambre(cantidad) {
      this.mascota.decrementarHambre(cantidad);
    }
  
    aumentarDiversion(cantidad) {
      this.mascota.aumentarDiversion(cantidad);
    }
  
    decrementarDiversion(cantidad) {
      this.mascota.decrementarDiversion(cantidad);
    }
  
    aumentarEnergia(cantidad) {
      this.mascota.aumentarEnergia(cantidad);
    }
  
    decrementarEnergia(cantidad) {
      this.mascota.decrementarEnergia(cantidad);
    }
  
    aumentarSalud(cantidad) {
      this.mascota.aumentarSalud(cantidad);
    }
  
    decrementarSalud(cantidad) {
      this.mascota.decrementarSalud(cantidad);
    }
  
    aumentarHigiene(cantidad) {
      this.mascota.aumentarHigiene(cantidad);
    }
  
    decrementarHigiene(cantidad) {
      this.mascota.decrementarHigiene(cantidad);
    }
  
    
  }
  