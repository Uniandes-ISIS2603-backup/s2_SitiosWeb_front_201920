
// Class

/** Class that represents a request for a website. */
export class Request 
{
  // Attributes

  /** The request's identification number. */
  id : number;

  /** Name of the request. */
  name : string;

  /** Purpose of the request. */
  purpose : string;

  /** Description of the request. */
  description : string;

  /** Unit of the request. */
  unit : string;

  /** Budget of the request. */
  budget : number;

  /** Beginning date of the request. */
  beginDate : Date;

  /** Due date of the request. */
  dueDate : Date;

  /** End date of the request. */
  endDate : Date;

  /**
  * The status of the request 
  */
  status : String;

  /**
   * the category of the web page 
   */
  webCategory: String;

  /**
   * the type of the request
   */
  requestType: String;
}