import { Hardware } from '../hardware/hardware';
import { Developer } from '../developer/developer';
import { Provider } from '../provider/provider';

export class Project {
   /**
    * Says if the Project is internal or not
    */
  internalProject: boolean;

   /**
    * The project's company in charge
    */
  company: string;

   /**
    * The project's id
    */
  id:number;

   /**
    * The project's id
    */
   hw:Hardware;

    /**
    * The project's id
    */
  leader:Developer;

   /**
    * The project's id
    */
   provider:Provider;


}