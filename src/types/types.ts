export interface IData {
	companySigDate:string,
	companySignatureName:string,
	documentName:string,
	documentStatus:string,
	documentType:string,
	employeeNumber:string,
	employeeSigDate:string,
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

export interface InputsFormType extends Omit<IData, "id">  {
}

export interface IEditData extends IAddData  {
	id:string | undefined,
}