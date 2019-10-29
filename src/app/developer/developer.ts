
enum DeveloperType {
  Leader,Developer
}

export class Developer {
  /**
    * The developer's id
    */
    id: number;

    /**
    * The developer's login
    */
    login: string; 

    /**
    * The developer's email
    */
    email: string; 

    /**
    * The developer's phone
    */
    phone: string; 

    /**
     * The developer's type
     */
    developerType: DeveloperType;
}
