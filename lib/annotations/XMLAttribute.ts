import 'reflect-metadata';
import {XMLAttribute as XMLAttributeModel} from "../models/XMLAttribute";
import {IXMLAttributeOptions} from "../interfaces/IXMLAttributeOptions";

type AnnotationFunction = (target: any, key: string, descriptor?: TypedPropertyDescriptor<any>) => void;

export function XMLAttribute(target: any, key: string, descriptor?: TypedPropertyDescriptor<any>): void;
export function XMLAttribute(options: IXMLAttributeOptions): AnnotationFunction;
export function XMLAttribute(...args: any[]): void | AnnotationFunction {

  if (args.length === 1) {

    return (target: any, key: string, descriptor?: TypedPropertyDescriptor<any>) => {

      return XMLAttributeModel.annotate(target, key, args[0], descriptor);
    };
  }
  return XMLAttributeModel.annotate(args[0], args[1], void 0, args[2]);
}
