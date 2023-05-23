import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula.model';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [
    { titulo: 'Lobo de wall street', genero: 'Drama, Comedia', anio: 2013,  imagen: 'assets/imagenes/lobodewallstreet.jpg',  sinopsis: 'Película basada en hechos reales del corredor de bolsa neoyorquino Jordan Belfort. A mediados de los años 80, Belfort era un joven honrado que perseguía el sueño americano, pero pronto en la agencia de valores aprendió que lo más importante no era hacer ganar a sus clientes, sino ser ambicioso y ganar una buena comisión. Su enorme éxito y fortuna le valió el mote de "El lobo de Wall Street". Dinero. Poder. Mujeres. Drogas. Las tentaciones abundaban y el temor a la ley era irrelevante. Jordan y su manada de lobos consideraban que la discreción era una cualidad anticuada; nunca se conformaban con lo que tenían.'},
    { titulo: 'El pianista', genero: 'Drama, Guerra, Europeas', anio: 2002, imagen: 'assets/imagenes/elpianista.jpg', sinopsis: 'Varsovia, 1939. El pianista polaco de origen judío Wladyslaw Szpilman (Adrien Brody) interpreta un tema de Chopin en la radio nacional de Polonia mientras la aviación alemana bombardea la capital. El régimen nazi ha invadido el país, y como hace en otros países invadidos, lleva a cabo la misma política con respecto a los judíos. Así Szpilman y toda su familia -sus padres, su hermano y sus dos hermanas- se ven obligados a dejar su casa y todo lo que les pertenece para trasladarse con miles de personas de origen judío al ghetto de Varsovia. Mientras Wladyslaw trabaja como pianista en un restaurante propiedad de un judío que colabora con los nazis, su hermano Henryk (Ed Stoppard) prefiere luchar contra los nazis. Pero tres años más tarde, los habitantes del ghetto son trasladados en trenes hacia campos de concentración.'},
    { titulo: 'La isla siniestra', genero: 'Drama, Misterio, Suspenso', anio: 2010, imagen: 'assets/imagenes/laislasiniestra.jpg', sinopsis: 'Verano de 1954. Los agentes judiciales Teddy Daniels y Chuck Aule son destinados a una remota isla del puerto de Boston para investigar la desaparición de una peligrosa asesina recluida en el hospital psiquiátrico Ashecliffe, un centro penitenciario para criminales perturbados dirigido por el siniestro doctor John Cawley. Pronto descubrirán que el centro guarda muchos secretos, y que la isla esconde algo más peligroso que los pacientes.' },
    { titulo: 'Codigo fuente', genero: 'Accion, Drama, Ciencia ficcion, Aventura, Misterio, Suspenso', anio: 2011, imagen: 'assets/imagenes/codigofuente.jpg', sinopsis: 'El capitán Colter Stevens (Jake Gyllenhaal) se despierta de un sobresalto en el interior de un tren de cercanías de Chicago. Aunque todos los demás pasajeros parecen conocerlo él no tiene absolutamente ninguna idea de dónde está o, incluso, de quién es. Lo último que recuerda es estar volando en helicóptero durante una misión en Irak, pero aquí parece ser alguien que va a trabajar por la mañana como un día cualquiera. Pero antes de que puede hacer cualquier cosa un tren se acerca por la vía contraria y explota una bomba que aparentemente mata a Colter y a todos los demás pasajeros.' },
    { titulo: 'Joker', genero: 'Drama, Misterio, Suspenso, Crimen', anio: 2019, imagen: 'assets/imagenes/joker.jpg', sinopsis: 'Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro.' },
    { titulo: 'Tiempo de valientes', genero: 'Drama, Misterio, Suspenso, Crimen, Accion, Aventura, Comedia', anio: 2005, imagen: 'assets/imagenes/tiempo.jpg', sinopsis: 'Mariano Silverstein es un psicoanalista que a raíz de un accidente de tráfico está involucrado en un juicio penal. Comprometido a realizar tareas comunitarias dentro de su actividad, el juez le asigna a atender a Alfredo Díaz, un inspector de la Policía Federal anímicamente devastado por la infidelidad de su mujer. Así es como Silverstein debe improvisar una itinerante sesión de psicoanálisis mientras acompaña a Díaz en la investigación de un crimen, sumergiéndose progresivamente en el universo policial. Pero eventos fuera de programa dispararán la trama hacia zonas inesperadas, obligando a nuestros héroes a enfrentarse a grandes peligros, físicos y emocionales, para los que, por supuesto, no estarán preparados.'  },
    // Agrega más películas aquí
  ];

  peliculasFiltradas: Pelicula[] = [];
  filtroGenero: string = '';
  filtroAnio: number = 0;

  constructor() { }

  ngOnInit() {
    // Inicializa las películas filtradas con la lista completa al cargar el componente
    this.peliculasFiltradas = this.peliculas;
  }


  aplicarFiltro() {
    // Aplica el filtro de género y año a la lista de películas
    this.peliculasFiltradas = this.peliculas.filter(pelicula =>
      (this.filtroGenero === '' || pelicula.genero.toLowerCase().includes(this.filtroGenero.toLowerCase())) &&
      (this.filtroAnio === 0 || pelicula.anio === this.filtroAnio)
    );
  }
quitarFiltro() {
  this.filtroGenero = ''; // Reinicia el filtro de género a un valor vacío
  this.filtroAnio = 0; // Reinicia el filtro de año a cero
  this.aplicarFiltro(); // Aplica el filtro para mostrar todas las películas sin restricciones
}
}