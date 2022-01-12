//syntax of defining interface
interface Dimension {
    width: string;
    height: string;
}
//implementing the interface
let _imagedim: Dimension = {
    width: "200px",
    height: "300px"
};
/*
class NameofClass implements InterfaceName {
}
*/

interface Size {
    width : string,
    height: string
    getWidth(): string; 
    depth?: string;   //optional property 
    //readonly dateCreated: Date; //this is used to only read data
}


class Shapes implements Size {
    width: string;
    height: string;
    constructor (width:string, height:string) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
}