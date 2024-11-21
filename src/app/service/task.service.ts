import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId:number = 1;
  constructor() {
  }

  // método para obtener todas las tareas

  // método para crear las tareas


  // metodo de eliminar una tarea


  // metodo de completar una tarea

}
