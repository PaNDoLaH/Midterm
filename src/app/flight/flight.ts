export class flight {

  constructor(
    public fullname: string,
    public form: string,
    public to: string,
    public type: string,
    public departure: Date,
    public arrival: Date,
    public adults: number,
    public children: number,
    public infants: number,


  ) { }
}
