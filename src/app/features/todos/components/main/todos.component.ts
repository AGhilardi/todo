import { Component, OnInit } from '@angular/core';
import { TodosFacadeService } from '../../services/todos-facade.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  get todosList(): Observable<Todo[]> {
    return this.todosFacadeService.tods$;
  }

  constructor(private todosFacadeService: TodosFacadeService) { }

  ngOnInit(): void {
    this.todosFacadeService.getAllTodos();
  }

  showDetail(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
  }

}
