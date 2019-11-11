import {Project} from '../project/project';

export class Iteration {
  
  /**
   * el id de la iteración
   */
  id: number;

  /**
   * objetivo de la iteración
   */
  objetive: string;

  /**
   * fecha de validación de la iteración
   */
  validationDate:Date;

  /**
   * cambios que se dieron en la iteración
   */
  changes:string;

  /**
   * fecha de inicio de la iteración
   */
  beginDate: Date;

  /**
   * fecha de finalización de la iteración
   */
  endDate: Date;

  /**
   * proyecto al cual pertence la iteración
   */
  projecto: Project;

}