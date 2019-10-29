import { Project } from "./project";
import { Iteration } from "../iteration/iteration";
import { Developer } from "../developer/developer";
import { InternalSystems } from "../internalsystems/internalsystems"; 
import { Request } from "../request/request";

export class ProjectDetail extends Project {
  
  iterations: Iteration[];

  developers: Developer[];

  internalSystems: InternalSystems[];

  requests: Request[];

}