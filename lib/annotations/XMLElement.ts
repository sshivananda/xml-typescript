import 'reflect-metadata';
import {XMLElement as XMLElementModel} from "../models/XMLElement";
import {IXMLElementOptions} from "../interfaces/IXMLElementOptions";

type AnnotationFunction = (target: any) => void;

export function XMLElement(options: IXMLElementOptions): AnnotationFunction {

  return (target: any) => {

    return XMLElementModel.annotate(target.prototype, options);
  };
}
