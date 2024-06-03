export interface IData {
	companySigDate:string | undefined,
	companySignatureName:string,
	documentName:string,
	documentStatus:string,
	documentType:string,
	employeeNumber:string,
	employeeSigDate:string | undefined,
	employeeSignatureName:string,
	id?:string,
}
export interface IAddData {
  token: string,
  data: IData
}

export interface IinfotooltipSlice {
  isOpen: boolean;
  title: string;
  name: string;
}

export interface InputsFormType extends IData  {
}

export interface IEditData extends IAddData  {
	id:string | undefined,
}